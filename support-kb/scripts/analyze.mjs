import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { causeOf, groupByCause, uniqueById, dayFirst } from '../src/lib/kb/causes.ts';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const rows = read('src/lib/data/reports-4471.json');
const tenants = fs.readdirSync(path.join(root, 'src/lib/data/tenants'))
  .filter((f) => f.endsWith('.json')).map((f) => read(`src/lib/data/tenants/${f}`));
const directory = new Map(tenants.map((t) => [t.handle, t]));
const merged = uniqueById(rows).filter((r) => r.mergedInto === 4471);
const notes = read('src/lib/data/desk-notes.json');
const groups = groupByCause(merged, (r) => directory.get(r.tenant));
const summary = {
  source: 'kb export 2026-10-04',
  rows: rows.length,
  uniqueReports: uniqueById(rows).length,
  mergedReports: merged.length,
  groups: groups.map((g) => ({
    cause: g.cause, count: g.reports.length, tenants: g.tenants,
    firstSeen: g.firstSeen, lastSeen: g.lastSeen, taggedAs: g.taggedAs,
    investigate: g.reports.filter((r) => notes.oneDayMove.includes(r.id)).map((r) => r.id),
    reportIds: g.reports.map((r) => r.id).sort(),
  })),
};
if (new Set(groups.flatMap((g) => g.reports.map((r) => r.id))).size !== merged.length)
  throw new Error('Groups must cover each merged report exactly once');
if (merged.some((r) => causeOf(r, directory.get(r.tenant)) === null))
  throw new Error('Unclassified reports require investigation');
console.log(JSON.stringify(summary, null, 2));
console.error(`Checked ${tenants.length} tenant locales with Intl.DateTimeFormat: ${tenants.filter((t) => dayFirst(t.locale)).length} day first.`);
