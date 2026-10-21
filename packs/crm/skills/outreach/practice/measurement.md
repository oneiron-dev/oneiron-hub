# The counters the loop keeps

Checked 2026-10-21. Every line here is a default the owner can override; the override line records who and why. The records are `sending.defaults.complaint_rate_pause_line`, `small_sample_complaint_review`, `bounce_rate_pause_line` and `bounce_rate_target` in `../defaults.json`.

## Keep these apart

attempts · accepted messages · final bounces · invalid-address bounces · authentication or policy rejections · 4xx deferrals · unique prospects · human replies · positive human replies · out-of-office · opt-outs · complaints · held meetings

Publish every rate with its numerator, its denominator, its window, the list source and date, the verification and catch-all status, the provider and the sending domain. Compare cohorts of equal age; follow-ups and late replies distort same-day rates. Never substitute pixel opens or a warm-up score for a real outcome.

## The lines

| signal | default | what it is |
|---|---|---|
| complaint review | 0.1% on the provider's own rate | an early-warning choice matching Google's target and SES's review level; Google's harm starts above 0.1% and is graduated; 0.3% is the Google and Yahoo upper line |
| a single complaint at small volume | review it | at low volume one event matters and Postmaster data may be absent; one report does not prove a domain is burned |
| bounce pause | 2% on a cohort | SES recommends under 2%; Belkins observed 1.71% |
| bounce target | under 1% | leaves room under the 2% line |
| the pack's sender-health claims | bounce near 2% cuts volume; complaint 0.3% benches the sender | engine-written; these lines sit after the review lines above |

## Denominators

One complaint per 1,000 inbox-delivered messages is 0.1%. One per 100 is 1%. At small volume these are noisy; a real complaint is still information. Google and Yahoo count against inbox-delivered mail; an ESP's complaints over all accepted mail is a different number. Postmaster data runs about a day behind and is absent at low volume. A 0% rate with no feedback loop is unobserved, not clean.

## If you override

Continuing above 0.1% accepts more junking; above 0.3% at Gmail, the loss of mitigation until seven clean days. Continuing a cohort above 2% bounces worsens reputation before any external trigger. Some markets and data sources run higher bounce rates; inspect the cause and the economics rather than declaring every such campaign unusable.

Sources: `../sources.md` (G1, G2, G5, Y1, A1, O1, SES2, B3, B5, C1).
