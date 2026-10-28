# Shared date parser treats day-first tenant dates as month-first (379 reports)

## Scope and count

379 unique reports merged into desk ticket #4471 in the 2026-10-04 export belong to the shared-parser group. They span 11 tenants and 2026-04-01 through 2026-10-04. This is an export snapshot, not a live queue count.

The shared parser reads dates month first even when the tenant locale writes day first. For example, R-41200 (Harbour Dental, en-GB, app) reports 7 April becoming 4 July; R-41201 reports the reverse. Different subjects can describe this same failure.

## Reproduction and expected result

1. Use a day-first tenant, such as Harbour Dental (en-GB, booking-v2).
2. Enter an unambiguous intended date such as 7 April as `07/04/2026` through the app.
3. Observe the reported failure: the invite uses 4 July.

The booking and invite must preserve 7 April. This is a reproduction derived from exported reports and the kb classifier; the production product was not tested.

## Evidence and counting

Deduplicate the 427 exported rows by report ID (412 unique), filter `mergedInto === 4471`, then run `causeOf(report, tenantOf(report))` from `src/lib/kb/causes.ts` against the tenant directory. All 379 are assigned `parser`; the other 33 belong to the separate form-hint issue. Intake tags are guesses: 23 parser-group reports were tagged hint. Browser locale and subject text do not determine the tenant's date order.

Five reports in this group need further investigation: R-41202, R-41209, R-41236, R-41344, R-41620. Their bodies describe one-day shifts, timezone differences, or an invite arriving before booking. They are included in 379 because the supplied classifier files them there, not because a parser cause has been independently established for those symptoms. Do not silently discard them or count them twice. No third root cause is proven by the export.

## Acceptance checks

- Day-first tenant dates survive app/email ingestion without month/day swaps.
- Regression coverage includes dates where both numbers are at most 12 and multiple day-first locales.
- Investigate the five exceptional reports before declaring every symptom fixed.
- Keep the booking-v3 hint failure separate; a parser fix does not establish that the hint is correct.

Full ID membership and reproducible analysis accompany this repository. No product fix is included.
