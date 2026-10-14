# Cost per qualified lead: the join, the coverage gate, the maturity split

True CAC = spend over qualified leads. Spend over signups is the vanity number the platform reports. You cannot compute the true number until an ad-side row (spend, signups) joins to a product-side row (did this lead qualify, activate or pay). Three steps, in order.

## 1. Decide how the two sides join

Pick one of three patterns. Platform field names change; verify the current ones.

| pattern | how it joins | join key | note |
|---|---|---|---|
| tag only | the form captures the campaign tags (or the platform's click id) onto the lead record; downstream events join by user id inside your own database | the ad-level tag, or the click id | the common case; cheapest to set up |
| tag plus send-back | as above, plus your system fires conversion events back to the platform when a downstream stage lands, so the platform optimises toward qualified, not toward signups | an event id or external id | fixes the optimisation at the source, not only the reporting |
| platform-hosted form plus sync | the lead form lives on the platform; its lead id syncs into your records and joins there | the lead id | watch for sync gaps and duplicates |

The crm pack's intake records the submission before any lookup; this join reads the id it kept.

## 2. Gate on coverage before you analyse

Pull a sample of recent signups and check what share carry a resolvable key back to a specific ad. The owner sets two cut-offs in the brief, each written "assume ~X (validate)": the share above which the join is trusted, and the share below which it is not worth analysing. Three modes follow:

- Above the upper cut-off: analyse normally.
- Between the two: analyse, and caveat every finding with the coverage figure.
- Below the lower cut-off: stop analysing. Switch to tracking-gap mode. Output three things. What is broken: "signups carry no ad tag; the form's hidden fields are empty". The specific fix: preserve URL parameters on submit, add tag columns to the leads table, wire the send-back. A quick verification: open a tagged URL, complete a signup, query the database, confirm the fields populated. Re-run once real volume accrues.

If the brief sets no cut-offs, report the coverage figure on every row and make no kill or scale call from the join. A true-CAC figure computed on thin coverage is fabrication with extra steps.

## 3. Split cohorts by maturity before any call

A signup cannot have qualified if it is younger than your qualification window. Set the window to your own measured lag: first purchase, activation, trial to paid, first paid task. Until it is measured, write it "assume ~X (validate)"; never borrow one.

Report two views and never blur them:

- The mature cohort (older than the window) is the only basis for a kill or scale decision.
- The recent cohort (inside the window) is a leading indicator only. Exclude it from any "cut this creative" call.

If recent true CAC diverges sharply from mature, that is a creative-fatigue or audience-shift flag to diagnose against delivery mechanics (`run-paid-social`), not a reason to act yet.

## What to show

For every creative or channel in the report: spend, signups, qualified leads, spend per signup, spend per qualified lead, coverage, and the cohort each row rests on. One table, both numbers side by side, the coverage figure on every row.
