import { createServer, build } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';

const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
try {
  const { render } = await server.ssrLoadModule('svelte/server');
  const routes = [
    '/kb', '/kb/incidents/4471', '/kb/triage/dedupe',
    '/kb/decisions/0001-dedupe-by-subject', '/kb/decisions/0002-triage-by-cause',
  ];
  const out = path.resolve('rendered');
  await fs.mkdir(out, { recursive: true });
  for (const route of routes) {
    const mod = await server.ssrLoadModule(`/src/routes${route}/+page.svx`);
    const result = await render(mod.default);
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${result.head}</head><body>${result.body}<script type="module" src="/assets/kb.js"></script></body></html>`;
    const dest = path.join(out, route, 'index.html');
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.writeFile(dest, html);
    console.log(`Rendered ${route}`);
  }
} finally {
  await server.close();
}
await build({ build: {
  outDir: 'rendered/assets', emptyOutDir: true,
  lib: { entry: 'scripts/client.js', formats: ['es'], fileName: () => 'kb.js' },
} });
