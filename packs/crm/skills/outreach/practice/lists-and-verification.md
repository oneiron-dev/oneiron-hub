# Lists, verification and catch-all

Checked 2026-10-21. Every value here is a default the owner can override; the override line records who and why. The records are `sending.defaults.list_verification_and_catch_all`, `bounce_rate_target` and `bounce_rate_pause_line` in `../defaults.json`. The legal side of a list, bought or scraped or enriched, is in each law file's "Lead lists" section.

## Before a cohort

1. Deduplicate by address and company.
2. Confirm role and company relevance.
3. Screen prior opt-outs, replies and invalids.
4. Check syntax, domain and MX through a verification service.
5. Keep the verification date apart from the source date. Reverify stale exports and changed employment before a new campaign.

"Verified" means a vendor's confidence that the address accepts mail. It is not consent, relevance, current employment or inbox placement. NeverBounce, ZeroBounce, BriteVerify and MillionVerifier are the names practitioners use; no comparative accuracy test was run.

## Loop default

| cohort | treatment |
|---|---|
| verified, valid, relevant | the main cohort |
| invalid | suppressed |
| unknown, risky, catch-all | a separate review cohort; an optional small pilot; never pooled into clean-list metrics |

## Catch-all

A catch-all server accepts any local part. SMTP acceptance proves nothing about the named person. Apollo claims richer verification and 91% accuracy under its own definition. Instantly sells catch-all recovery and defaults risky addresses off. Neither is a promised bounce rate. "Catch-all is less saturated" is a sales claim; no matched reply or bounce benchmark by catch-all status exists in the sources.

## The bounce lines

Aim under 1% final bounces. Pause the affected cohort at 2% and investigate. Record hard invalids, policy or authentication rejections and temporary deferrals apart; a 4xx is not a bounce until retries end. Fix an authentication failure instead of labelling every 5xx "no such person". The 2% line is a chosen early-warning value, supported by SES's under-2% advice, Instantly's recommendation and Belkins' observed 1.71% aggregate.

## If you override

A catch-all pilot may recover a high-value prospect that is otherwise unreachable. It may deliver to an unmonitored mailbox or bounce later; zero immediate bounces prove nothing. Sending an unverified batch accepts unknown bounce and complaint exposure and, on several sending services, a contract conflict.

Sources: `../sources.md` (AP2, I3, SES2, B3, B5, O1, P1, P2).
