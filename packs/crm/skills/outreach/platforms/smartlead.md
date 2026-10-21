# Smartlead

Checked 2026-10-21. A vendor page says what the vendor recommends. It does not say what a receiving provider permits.

## What the docs say

- The disconnection guide: 10 to 15 minutes between sends; 40 to 50 a day total, warm-up and outbound included, in the early stages.
- The ramp: 5 to 10, then 10 to 20, then 30 to 50 a day over 21 days.
- One sending platform per mailbox. A consistent From. Suppress bounces.
- A separate daily ramp-up setting governs incremental warm-up. It is not an exemption from the mailbox total.

## Reading it

These are operating suggestions. A reseller mailbox product can recommend much less. Do not import one product's number into every SMTP account. The 10-minute gap in the loop's defaults matches the bottom of Smartlead's range.

## Loop default

20 a day per mailbox at steady state, a 10-minute gap, pooled warm-up off. An owner on Smartlead who prefers the vendor's ramp records the override.

Sources: `../sources.md` (SL1, SL2).
