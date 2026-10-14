# Platform facts

Provider rules and platform postures. Each row carries the date it was checked. A stale row is a reason to re-verify, not a reason to guess. Bias tags: `primary` (the provider's own page), `street` (operator consensus, unverified by a primary source).

## Mail providers

| fact | value | bias | verified |
|---|---|---|---|
| The only published volume tier | Bulk-sender rules attach at about 5,000 messages a day to a consumer mailbox provider. No primary source publishes a safe ceiling below that. | primary | 2026-08 |
| Bulk-sender requirements | SPF and DKIM together, a DMARC record, one-click unsubscribe (RFC 8058), spam rate under 0.3%. | primary | 2026-08 |
| Baseline at any volume | SPF or DKIM, valid forward and reverse DNS, TLS, spam rate under 0.3%. | primary | 2026-08 |
| DKIM on a hosted workspace | Not on by default. Turn it on before the first send. | primary | 2026-08 |
| Postmaster tools | Connect them before the first send. Aim under 0.10% spam rate. | primary | 2026-08 |
| Workspace policy on unsolicited mail | Program policies forbid unsolicited mail to significant numbers of addresses with no prior relationship, at any volume. The policy binds the account, not the domain. | primary | 2026-08 |
| Warm-up pools | The largest pool product was shut down. Simulated engagement reads as a spam signal. | street | 2026-08 |
| DMARC ramp | Publish `p=none` with reports, then move to quarantine and reject over about 4 to 6 weeks. `p=none` is never the end state. | street | 2026-08 |
| "Never send from your main domain" | Vendor folklore. No primary source says it. The real question is blast radius: what else lives on the domain. | street | 2026-08 |

## LinkedIn

| fact | value | bias | verified |
|---|---|---|---|
| Connection requests | About 100 a week on a normal account. Requests, DMs and InMail are separate buckets. | street | 2026-08 |
| What gets accounts restricted | Automation fingerprints: extensions, third-party senders, scrape sprees, inhuman click speed. Not volume. | street | 2026-08 |
| The user agreement | Bans bots, scrapers and automated sending. Not humans typing. | primary | 2026-08 |
| Vendor company pages | Several automation vendors had their company pages removed in mid-2026. | street | 2026-08 |
| The pin | Agent-drafted, human-sent, capture only, in the member's own session. A marketing DM to a UK individual sits under the email rules. | engine | 2026-07-16 |

## Per-platform engagement postures

These are the engine's seed postures. The compliance pack carries them as rule rows; re-verify there.

| platform | posture | automation |
|---|---|---|
| Instagram and Facebook | Sanctioned. Comment-to-DM through the platform's approved messaging APIs is the production lane. A comment on a call to action is affirmative in-platform engagement. | allowed through the official API, inside messaging windows |
| X | Adversarial. DM economics and terms are hostile to bulk. Capture engagement; DMs are low-rate and high-relevance. | human-gated, low rate |
| Reddit | Reply first. Unsolicited commercial DMs are the classic ban vector. Self-serve API access ended in late 2025. Draft public replies for human send. | public replies human-sent; DMs almost never |
| TikTok | Regional. A business messaging API exists; comment-to-DM is not at Instagram parity in the US, UK or EU as of mid-2026. | per-region row |
| LinkedIn | Human send. See above. | never; drafts only |

Verified 2026-07-16 against the engine's seed rows.

## Forums and public APIs

| fact | value | bias | verified |
|---|---|---|---|
| Public community search APIs | Keyless search APIs exist for some forums. Pace requests; never hammer. Cap results to what you need. | primary | 2026-06 |
| Quiet forums | In a low-traffic group, "hot" returns nothing. Sort by top of the week. | practice | 2026-06 |
| Job boards | Pull only for occasional research at a human cadence. Never a standing pipeline. A partner API is the route for that. | practice | 2026-06 |

## Unpaid interns (creator programs)

| fact | value | bias | verified |
|---|---|---|---|
| US primary-beneficiary test | A for-profit company may use unpaid interns only when the intern is the primary beneficiary. Seven factors; no single one decides. Academic credit is one factor, not a safe harbour. Source: US Department of Labor, Fact Sheet #71, https://www.dol.gov/agencies/whd/fact-sheets/71-flsa-internships | primary | 2026-06 |
