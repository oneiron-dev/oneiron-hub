# Volumes, ramps and pacing

Checked 2026-10-21. Every value here is a default the owner can override; the override line records who and why. The records are `sending.defaults.per_inbox_daily_volume`, `ramp` and `per_inbox_minimum_send_gap_minutes` in `../defaults.json`.

## Loop default

| setting | value |
|---|---|
| steady state | 20 campaign messages per mailbox per rolling 24 hours |
| what counts | initial emails, every follow-up, every campaign that uses the mailbox |
| what does not count, but still uses the provider's quota | manual replies, warm-up, other outbound |
| ramp for a new or idle mailbox | 5 a day on sending days 1 to 5; 10 on days 6 to 10; 15 on days 11 to 15; 20 from day 16 |
| a sending day | an eligible weekday on which the mailbox sent; an idle day does not advance the ramp |
| gap between automated sends from one mailbox | 10 minutes |
| advance the ramp | after reading authentication, terminal failures, recipient feedback and provider signals; hold or lower if they worry you |

## Why these numbers

The staircase, the five-day stages, the two-mailbox start and the 10-minute floor are editorial choices. They are not a measured optimum and not a Gmail or Microsoft ceiling. Google supports gradual, consistent volume. Clay recommends about 20 a day. Instantly recommends 30. Smartlead describes 5 to 10, then 10 to 20, then 30 to 50 over 21 days. Their disagreement is a reason to start with a small measurable pilot.

## The arithmetic

At 20 sends a day with three emails to each non-responder, a mailbox works about 6 to 7 new prospects a day. Not 20 new prospects plus free follow-ups. Replies, bounces and opt-outs free capacity; handling real replies comes before filling the quota.

## Published quotas are not safe numbers

Workspace allows 2,000 messages a user a day. Exchange Online allows 10,000 recipients a user a day. Both run spam and velocity checks below those lines. No provider publishes a safe cold-mail ceiling under its bulk tier. The 5,000-a-day bulk tier at Gmail and Outlook is where extra requirements attach, not where filtering starts.

## If you override

More volume reaches more people and lowers overhead per lead. A bad list or message produces more bounces and complaints before anyone sees them. A sudden doubling can trigger rate limits and reputation loss. A faster ramp is reasonable on an established mailbox with real traffic; record the mailbox's history as the reason.

Sources: `../sources.md` (G1, C1, I1, SL1, L1, GW1, M1, M3, G4).
