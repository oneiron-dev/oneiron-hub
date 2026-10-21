# Defaults

Every number a skill in this pack uses, in one place. A default is a starting value. The vault's own receipts outrank it once they exist. Source classes: `engine` (a value the engine or its canon fixes; the source is the canon id), `provider` (a provider's published rule; the source is the page), `practice` (the pack authors' operating practice on the date shown; no external source; the brief overrides it).

Canon ids point at ARCH-0059, the campaign loop (rulings of 2026-07-16). Provider pages were read on 2026-10-15; `platform-facts.md` holds the fuller rows.

Email sending values (volume, ramp, gap, windows, the automated email cadence, complaint and bounce lines, verification, warm-up) live in the `outreach` skill's `defaults.json`, with sources, checked 2026-10-21. Where a row below overlaps one of those, the row says so and the outreach record is the one to read. Every value in both places is a default the owner can override; the override line records the reason.

## Triggers, snooze and recovery

| area | default | source class | source | dated |
|---|---|---|---|---|
| trigger decay, funding-class signal | 7 to 30 days, then bench for re-verification | engine | ARCH-0059 §4 | 2026-07-16 |
| trigger decay, job-change signal | 7 to 14 days | engine | ARCH-0059 §4 | 2026-07-16 |
| snooze with wake | 60 to 90 days, or a fresh trigger, whichever first | engine | ARCH-0059 §3 | 2026-07-16 |
| re-entry after snooze | restart at touch one with an honest new reason | engine | ARCH-0059 §3, §5 | 2026-07-16 |
| no-show recovery | same-day reschedule, then a bump at day 3, then snooze | engine | ARCH-0059 §4, §6 | 2026-07-16 |

## Sender health

| area | default | source class | source | dated |
|---|---|---|---|---|
| bounce rate that cuts a sender's volume | about 2% on a batch | engine | ARCH-0059 §7 | 2026-07-16 |
| complaint rate that benches a sender | 0.3% | engine | ARCH-0059 §7 | 2026-07-16 |
| spam-rate target in postmaster tools | under 0.10%; 0.30% is the never-reach ceiling | provider | https://support.google.com/a/answer/81126 | 2026-10-15 |
| daily send cap on a sender | about 3 times the hourly cap | practice | pack authors' practice; no external source | 2026-10-15 |

## Lists, sequences and reads

| area | default | source class | source | dated |
|---|---|---|---|---|
| hand-built first list | 50 to 100 targets before buying any list | practice | pack authors' practice, written 2026-08, re-read 2026-10-15 | 2026-10-15 |
| touches in a cold sequence, across channels | 5 to 8, with widening gaps and a defined end; the automated email part is 3 per non-responder on days 0, 4 and 10 (outreach `sending.defaults.follow_up_cadence`) | practice | pack authors' practice, written 2026-08, re-read 2026-10-15; outreach record 2026-10-21 | 2026-10-21 |
| sends per variant before a read, founder volume | at least 20 | practice | pack authors' practice, written 2026-08, re-read 2026-10-15 | 2026-10-15 |
| sends per variant before a read, volume mode | 500 to 1,000 | practice | pack authors' practice, written 2026-08, re-read 2026-10-15 | 2026-10-15 |
| no-change window per channel test | 90 days | practice | pack authors' practice, written 2026-08, re-read 2026-10-15 | 2026-10-15 |
| sends per mailbox per day | 20 campaign messages per rolling 24 hours at steady state, follow-ups included, after a 5-10-15-20 ramp (outreach `sending.defaults.per_inbox_daily_volume`); 30 was the earlier practice value and is one vendor's recommendation | practice, sourced | outreach record 2026-10-21 (Clay, Instantly, Google sender guidelines) | 2026-10-21 |
| automated email follow-ups | on calendar days 4 and 10 after touch one (outreach); +2 days was the earlier practice value | practice, sourced | outreach record 2026-10-21 | 2026-10-21 |
| funnel email spine | about 7 after opt-in, 4 before a call, 5 after a call | practice | pack authors' practice, written 2026-08, re-read 2026-10-15 | 2026-10-15 |
| first reply to warm inbound on a proven offer | within minutes, in a human register | practice | pack authors' practice, written 2026-08, re-read 2026-10-15 | 2026-10-15 |

## Research interviews and pre-sales

| area | default | source class | source | dated |
|---|---|---|---|---|
| research interviews before a decision | 5 is the floor; 10 to 15 for messy problems; scatter past 10 means the segment is fuzzy | practice | pack authors' practice, written 2026-08, re-read 2026-10-15 | 2026-10-15 |
| research interview cadence | 1 to 2 a day, at most 5 a week | practice | pack authors' practice, written 2026-08, re-read 2026-10-15 | 2026-10-15 |
| no-show rate to plan for in interviews | about 10%, so overbook | practice | pack authors' practice, written 2026-08, re-read 2026-10-15 | 2026-10-15 |
| pre-sell sprint list | about 10 reachable likely buyers | practice | pack authors' practice; no external source | 2026-10-15 |
| parallel offer test | 5 to 10 truly different offers, each to its own cold list | practice | pack authors' practice; no external source | 2026-10-15 |

## Calls

| area | default | source class | source | dated |
|---|---|---|---|---|
| discovery call | 25 minutes; the client talks most | practice | pack authors' practice; no external source | 2026-10-15 |
| demo | 30 minutes | practice | pack authors' practice; no external source | 2026-10-15 |
| proposal review | 20 minutes | practice | pack authors' practice; no external source | 2026-10-15 |
| quarterly account review | 30 minutes | practice | pack authors' practice; no external source | 2026-10-15 |
| research interview ask | 20 minutes | practice | pack authors' practice; no external source | 2026-10-15 |

## Retention and accounts

| area | default | source class | source | dated |
|---|---|---|---|---|
| win-back touch offsets, monthly plan | about 7, 21 and 45 days after lapse | practice | pack authors' practice; no external source | 2026-10-15 |
| win-back touch offsets, annual plan | about 30, 90 and 180 days after lapse | practice | pack authors' practice; no external source | 2026-10-15 |
| taper to silence, consumer | after about 60 days of no response | practice | pack authors' practice; no external source | 2026-10-15 |
| cancel-reason review | every 20 or so cancels, top one or two reasons | practice | pack authors' practice; no external source | 2026-10-15 |
| account checkpoints | 30, 60 and 90 days, then 12 months | practice | pack authors' practice; no external source | 2026-10-15 |
| renewal schedule | the final review 90 days out; fixes by 60; the renewal talk about 42 days out; paperwork at 30; signature at 14 | practice | pack authors' practice; no external source | 2026-10-15 |
| agency guard on an engagement price | about one fifth to one tenth of quantified first-year value | practice | pack authors' practice; no external source | 2026-10-15 |

## Creator programs

| area | default | source class | source | dated |
|---|---|---|---|---|
| creator trial | a fixed window, one view bar on one post, a flat reward | practice | pack authors' practice, written 2026-06, re-read 2026-10-15 | 2026-10-15 |
| creator posting floor | 5 to 7 posts a week, at most 14 | practice | pack authors' practice, written 2026-06, re-read 2026-10-15 | 2026-10-15 |

Word caps for messages live in `voice-floor.md`, dated the same way.

How to change a default: write the new value in the campaign brief with the receipt that justifies it. The brief outranks this table for that campaign.
