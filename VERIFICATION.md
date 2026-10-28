# Verification · 2026-10-28

- Executed the supplied `causes.ts` classifier using Node.js and joined tenant
  files by handle. Intl.DateTimeFormat reports all 11 tenant locales as day first.
- 427 raw rows reduce to 412 distinct IDs; repeated IDs have identical contents.
  All 412 are merged into #4471. Groups partition all IDs exactly once: 379 parser,
  33 hint, no unplaced reports. Membership is saved in drafts/report-membership.json.
- Of the parser group, 356 intake tags say parser and 23 say hint. Of the hint
  group, 18 say hint and 15 say parser. All five desk-note IDs remain in parser.
- Receipt dates span April through October. There are 183 reports before July 2
  and 229 on or after it; 184 were merged on July 2. Merge volume and new-report
  volume must not be conflated.
- Rendered all five kb routes with Svelte SSR and mdsvex, then built the browser
  bundle with Vite. Build succeeded. No original kb source was changed.
- Inspected the rendered new page in the browser. It shows 412 reports, two causes,
  379/33, the tags and tenant counts above, timeline, dedupe cases and desk ref
  DR-SNJY-07DS. Saved full-page screenshot as preview.png.
- Verified the explorer: Alder Physio/form versus Kettle Books/form shows different
  causes. Changing the first channel to app changes it to parser and the verdict
  to same cause; restored form for the saved screenshot.
- Self-review: issues distinguish parser from hint, label export-derived repros,
  retain exceptional reports, and do not claim product fixes. The accepted decision
  record is unchanged; the new signed record remains proposed.

Counts describe the supplied export. The product itself and any live support queue
were not accessible for reproduction. Course acceptance remains pending.

## After first course submission

The course accepted both tickets, then requested closure after the desk's work.
The challenge page exposed an engineering update: #4471 closed 05 oct; parser
FIXED (`fix(dates): parse dd/mm for eu locales`); hint WON'T FIX (booking-v3 form
retired). Recorded this in the signed page and closed #1 as completed and #2 as
not planned. These are engineering-reported outcomes, not harness product tests.
