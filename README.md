# MEGA S01E03 · what it shows

This repository separates the date problems merged into support ticket #4471.
It contains the course's 2026-10-04 kb export, a new signed decision page,
the rendered kb, two issue drafts, and reproducible report membership.
The reports and tenants are part of the course exercise.

## Findings

- Shared month-first parser: **379 unique reports**, across 11 tenants.
- Booking-v3 date hint conflicts with the tenant's day-first interpretation:
  **33 unique reports**, across 3 tenants.
- Total: **412 unique reports**, from 427 exported rows. Counts use report IDs,
  tenant locale, form version and channel, not subjects or browser intake tags.
- Five exceptional report bodies need investigation; they remain included in the
  supplied classifier's parser group. No additional cause is claimed as proven.
- Reports received and reports merged are different series. The July merge batch
  does not date the start of the failures, and new reports continued afterward.

## Deliverables

- [Parser issue #1](https://github.com/Mikejonesab12/mega-s01e03-what-it-shows/issues/1): completed, per engineering's 5 October fix report.
- [Hint issue #2](https://github.com/Mikejonesab12/mega-s01e03-what-it-shows/issues/2): not planned, because booking-v3 was retired.

- [Signed .svx page](support-kb/src/routes/kb/decisions/0002-triage-by-cause/+page.svx)
- [Rendered page HTML](support-kb/rendered/kb/decisions/0002-triage-by-cause/index.html)
- [Rendered page screenshot](preview.png)
- [Parser issue draft](drafts/parser.md)
- [Hint issue draft](drafts/hint.md)
- [Complete report membership](drafts/report-membership.json)
- [Verification record](VERIFICATION.md)

The page carries the exact course-issued signature in its frontmatter.
The supplied RenderStamp component derives desk ref **DR-SNJY-07DS** from it.
Decision 0001 is preserved; decision 0002 proposes replacing its subject-only rule.
Source components, tenant data and original pages are preserved.

## Reproduce

Use Node.js 24 or newer. From `support-kb`:

```sh
npm ci --ignore-scripts
npm run analyze > ../drafts/report-membership.json
npm run render
python3 -m http.server 8317 --bind 127.0.0.1 --directory rendered
```

Open `http://127.0.0.1:8317/kb/decisions/0002-triage-by-cause/`.
Serve the rendered directory as the root: the pages use absolute `/kb` and
`/assets` URLs. HTML includes server-rendered text, styles, charts and signature;
the local client bundle makes the explorer interactive. It needs no remote CDN.
Rebuild after source or export changes; saved HTML is a dated snapshot.

No application fix or production validation is included in this exercise.
The course's engineering update reports #4471 closed on 5 October, with parser
fixed (`fix(dates): parse dd/mm for eu locales`) and hint won't fix because the
booking-v3 form was retired. This post-export update governs the issue dispositions;
it does not rewrite the historical counts or constitute our own production test.
