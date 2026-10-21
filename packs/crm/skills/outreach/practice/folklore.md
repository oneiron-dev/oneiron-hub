# Folklore against evidence

Checked 2026-10-21. Reddit, Hacker News and X were read through an archive, not live. Posts were read in full where marked; threads were not. None of these reports is an audited result. Each row names the default the loop keeps and what an override means.

## Dated practitioner reports

| date and place | reported practice or result | what it can and cannot show |
|---|---|---|
| 2025-09-11, r/coldemail | 60,000 emails in a month, 1.7% replies; secondary domains, 1 to 3 inboxes each; start at 10 a day, +10% a day, cap 25; two weeks of warm-up; verification; custom tracking | a real dated playbook, unaudited; the close-rate denominator is unclear; its tracking advice conflicts with tracking-off practice |
| 2025-03-17, r/LeadGeneration | an agency recommends under 1% bounces, plain text, no pixels, links or attachments, a verify-and-send stack, two-step sequences, catch-all recovery and calling interested leads | vendor plugs and unmeasured claims; useful workflow ideas |
| 2025-03-22, r/LeadGeneration | two inboxes a domain, 30 a day, a 10-minute gap, three weeks of warm-up, 3 to 5 days between touches, 3 to 4 emails | a "907 leads" headline with no denominator |
| 2025-01-03, r/coldemail | warm-up pools helped new domains briefly, then hurt both new and old reputation | a negative anecdote; "providers detected fake engagement" is the author's reading |
| 2026-05-19, r/coldemail | placement 72% to 89% after dropping a $49-a-month pool, fixing SPF, DKIM and DMARC, and ramping 10 to 40 a day over three weeks | several changes at once; no single cause |
| 2025-04-02, r/sales | a Google audit led to unsubscribe links, minimal formatting, slow sends and real used domains; better delivery with an opt-out | unverified audit; a counter-example to "never include an unsubscribe" |
| 2025-08-25, r/sales | replies 0.7% to 2.0% after changing targeting, offer, follow-ups and late-morning timing | supports testing relevance; no timing rule |
| 2025-02-17, r/sales | short, relevant, personalised email plus phone and social follow-up still booked nothing | negative evidence; no denominator |
| 2026-03-05, r/coldemail | 154 contacts, 16 replies, 11 positive, 4 contracts; short ask; follow-ups on days 4 and 9 | a small winner selected for posting |
| 2026-07-24, Hacker News | ten years of self-hosted mail; workable with effort; residential IP space hopeless | technical experience; Microsoft also says dynamic-IP connections may be refused |
| 2026-07-29, X | buy pre-warmed inboxes, 15 to 20 sends a day, leave warm-up on, three mailboxes a domain, launch the same day | the shortcut people sell; no reputation record, no ownership assurance |
| 2026-05-25, X | track buyer behaviour after opens | no measured effect; Apple's background fetch argues against the pixel as an intent signal |

## The decision table

| claim | evidence | loop default; what an override means |
|---|---|---|
| "20, 30 or 50 a day is the provider's safe limit." | vendors disagree; providers publish quotas and gradual-volume guidance, not a cold-safe number | start at 20, measure; more can work, and a poor campaign damages reputation faster |
| "Below 5,000 a day is safe." | the bulk tier adds requirements; Yahoo publishes no number; Apple requires consent; filtering runs at every volume | the same defaults at every volume |
| "Secondary domains and rotation reset reputation." | separation reduces concentration and Microsoft recommends it; Gmail still counts subdomains with the parent; tenant, IP and content effects remain; SendGrid prohibits snowshoeing | separate business mail; diagnose before replacing a domain with the same list |
| "14 days of warm-up guarantees inbox." and "Warm-up pools are dead." | vendors still sell pools; GMass closed its own after a Google warning; no controlled trial either way | pool off, real ramp; an owner tests a pool with cost, access and policy exposure recorded |
| "An aged or pre-warmed domain is clean from day one." | a reseller label gives no verified history or control | pilot and inspect headers and outcomes |
| "Never use HTML, links or headers." | no HTML ban; RFC 8058 headers are required for bulk marketing; a vendor offers them as a feature | minimal message with the required opt-out; more media adds variables |
| "Opens under 30% prove a burned domain." | Google does not track opens; Apple prefetches images; an empty complaint dashboard can mean spam placement or missing data | real replies, provider telemetry, real placement checks |
| "Spintax, provider matching, spam-word lists and random delays beat the filter." | one vendor recommends wording variation; no isolated test; pacing is supported, randomness is not permission; fake Re: and hidden text conflict with Google's guidance | vary for relevance; never replace list quality with obfuscation |
| "Catch-all is a goldmine with no bounce risk." | accept-all hides mailbox existence; recovery tools sell inference; "less saturated" is unverified | separate pilot; it can accept to nowhere or bounce later |
| "An unsubscribe link looks impersonal, so omit it." | Google says one-click reduces complaint friction and requires it for bulk marketing; no evidence of harm from the header | a working opt-out on every message; RFC 8058 on bulk |
| "Premium, a high SSI or good acceptance makes automation approved." | the user agreement bans unauthorised automation; manual velocity and ignored invitations also trigger restrictions; SSI is not an entitlement | human-sent; an owner's tool is an account-restriction exposure |
| "More follow-ups always pay; recycle everyone quarterly." | later steps collect replies in observation; no optimum; suppression must stand; later replies skew negative | three emails; stop on reply and opt-out; longer runs add annoyance and complaints |
| "A registered SMS campaign or a bought phone list is consent." | Twilio requires sender-specific express consent, written for promotions, and bans transferred consent | cold SMS off; an override meets provider filtering and the country's law |

## What is well supported

Sound authentication and alignment. Gradual, non-bursty sending. Correct addresses. An easy way out. Handling bounces and negative feedback. Relevant targeting.

## What is not established

A guaranteed low-volume safe zone. A paid deliverability score as proof of placement. A causal multiplier for any vendor hack.

Sources: `../sources.md` (G1, G2, G5, Y1, O1, A1, A2, G4, M3, SG1, RFC1, I1, I2, I3, L2, AP1, AP2, AP3, C1, SH1, B1, B3, GM1, LI1, LI2, LI6, T1, P1 to P13).
