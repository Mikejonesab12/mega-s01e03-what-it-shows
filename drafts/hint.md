# Booking-v3 date hint contradicts the tenant's date order (33 reports)

## Scope and count

33 unique reports merged into desk ticket #4471 in the 2026-10-04 export belong to the form-hint group. They span three tenants (Alder Physio, Copper Studio, Pale Harbour) and 2026-04-17 through 2026-09-22. This is an export snapshot, not a live queue count.

Booking-v3 prints `MM/DD/YYYY` under the date field. People follow that hint, but the form reads their entry in the tenant's day-first order. This is a separate failure from the shared month-first parser.

## Reproduction and expected result

1. Use Copper Studio (es-ES, booking-v3) and its form channel.
2. Follow the `MM/DD/YYYY` hint to enter 6 January as `01/06/2026`.
3. Observe the reported failure: the date is read day first, as 1 June (R-41230).

The hint and form interpretation must agree with the tenant's locale, and the intended date must survive submission. This reproduction is derived from exported reports and the kb classifier; the production product was not tested.

## Evidence and counting

Deduplicate exported rows by report ID, filter `mergedInto === 4471`, and run `causeOf(report, tenantOf(report))` from `src/lib/kb/causes.ts`. A day-first tenant plus form channel plus booking-v3 yields `hint`. There are 33 reports; 15 were incorrectly tagged parser at intake and 18 were tagged hint. The shared-parser group has the other 379, for 412 total.

Tenant locale and deployed form version decide this classification. Browser locale, subject matching, and intake tags do not. R-41241 (Alder Physio, form) is another example. The same tenant's app reports belong to the parser group instead.

## Acceptance checks

- Booking-v3 displays the date order its form actually accepts for each supported tenant locale.
- Following the hint preserves the intended day and month.
- Cover ambiguous dates and all three affected tenants in regression checks.
- Keep parser and hint fixes separately verifiable.

Full ID membership and reproducible analysis accompany this repository. No product fix is included.
