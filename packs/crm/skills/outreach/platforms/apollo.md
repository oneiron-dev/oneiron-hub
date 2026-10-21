# Apollo

Checked 2026-10-21. Apollo supplies list research and enrichment, and sends through connected mailboxes. A vendor page says what the vendor recommends; the provider's quotas still apply.

## What the docs say

- The sending-limit guide says start at 50 a day. The configuration list says 50 to 100 a day, 10 to 20 an hour, a 60-to-300-second gap. Raise after 5% or more replies and good reputation.
- Optional Warmbox integration: at least 2 weeks, progressive, 10 to 40 a day, 30% replies; a product maximum of 50 warm-up a day and a 45% reply setting.
- Verification: Apollo claims 91% accuracy, with its own definition that covers more than invalid-address bounces. Catch-all inference is a separate claim.
- The counter excludes mail sent outside Apollo and warm-up traffic.
- Apollo's FAQ says 5,000 Office 365 emails a day. Microsoft's primary limit is 10,000 recipients a day with separate constraints: `m365.md`.

## Reading it

The recommendations vary inside one page. A verification claim is not a promised bounce rate for a list. Vendor provider summaries misstate units.

## Loop default

20 a day per mailbox, a 10-minute gap, pooled warm-up off. Verified addresses in the main cohort; catch-all in a separate pilot: `../practice/lists-and-verification.md`.

Sources: `../sources.md` (AP1, AP2, AP3, M1).
