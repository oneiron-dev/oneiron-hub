# Warm-up, pools and ramps

Checked 2026-10-21. Every value here is a default the owner can override; the override line records who and why.

## Two things called warm-up

1. Gradual sending with real, wanted conversations. Provider guidance supports it: Google asks for gradual, consistent volume and recipient engagement.
2. Automated pools that manufacture opens, replies and spam rescues between pooled mailboxes.

The first is a ramp. The second is a product. The loop uses the first and keeps the second off.

## Loop default

Authenticate. Test the real message and header path. Start low. Ramp with real traffic. Pooled warm-up off. No mandatory mailbox age of 14, 30 or 90 days exists in any receiver rule read. That does not prove a brand-new domain performs like an established one.

The staircase is in `volumes-and-ramps.md`: 5, 10, 15, 20 a day over sending days 1 to 5, 6 to 10, 11 to 15, and 16 on. A sending day is a weekday the mailbox was used; an idle day does not advance it.

## Why neither "pools always work" nor "pools are dead"

- GMass stopped its 80,000-account pool on 2023-01-31 after a Google Gmail API warning. First-hand vendor testimony, not a Google statement of a universal detector.
- Instantly, Apollo's Warmbox, lemlist's lemwarm, Clay and Smartlead still sell or recommend pools. Their existence disproves "no pool survives". It proves nothing about placement.
- The sources hold no randomised trial that isolates a pool from authentication, domain age, ramp, targeting and list quality. Practitioner reports go both ways: one dropped a $49-a-month pool, fixed SPF, DKIM and DMARC, ramped 10 to 40 a day over three weeks, and reports placement from 72% to 89%; several changes at once, so no single cause. Another reports pools helped new domains briefly, then hurt.
- lemlist says in its own docs that a warm-up score does not predict campaign inbox placement.

## Vendor ramps, side by side

| vendor | its ramp |
|---|---|
| Smartlead | 5 to 10, then 10 to 20, then 30 to 50 a day over 21 days |
| Clay | about 3 weeks, kept on |
| Apollo Warmbox | at least 2 weeks, 10 to 40 a day |
| lemlist | about 40 days plus 14 of stabilisation, then 10 a day residual |
| Woodpecker | new domains 2 to 3 months; a new mailbox on an established domain 3 to 4 weeks; off before a large campaign |

They disagree. That is a reason to start small and measure, not to present an average as a rule.

## If the owner enables a pool

Record five things on the override line. The cost. The mailbox permissions the pool needs. The provider-policy exposure. The extra traffic against the real provider quota. The same-provider comparison the owner will read, on real campaign outcomes. Count pool traffic in the mailbox total. Never count artificial replies as business replies. Never let them advance the ramp. Never diagnose a real campaign from the pool's score alone. An established mailbox with real use needs no reset to satisfy a vendor countdown.

## Pre-warmed and aged mailboxes

Sellers promote pre-warmed inboxes at 15 to 20 sends a day from day one. A reseller label gives no verified history, no proof of control and no placement guarantee. An owner who buys them runs a measured pilot and inspects real headers and outcomes.

Sources: `../sources.md` (G1, G2, GM1, I2, AP1, L1, L2, C1, SL1, SL2, W2, P4, P5, P10).
