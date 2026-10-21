# Platform facts

Provider rules and platform postures. Each row carries its source and the date it was checked. A stale row is a reason to re-verify, not a reason to guess. Classes: `primary` (the provider's own page, linked), `engine` (the engine's canon, by id), `practice` (the pack authors' reading of operator reports on the date shown; no primary source).

The `outreach` skill's `platforms/` and `channels/` files carry the fuller provider rows, read 2026-10-21: Gmail, Yahoo, Outlook, iCloud, Workspace, Microsoft 365, SES, Resend, Postmark, SendGrid, the sequencers, Twilio, LinkedIn and its tools, X and Reddit. Where a row below differs from one of those, the outreach file is the newer reading. Every row is a default the owner can override.

## Mail providers

| fact | value | class | source | verified |
|---|---|---|---|---|
| The only published volume tier | Bulk-sender rules attach at close to 5,000 messages or more in 24 hours to personal Gmail accounts, counted across the primary domain and its subdomains; a sender that reaches it once stays bulk. Outlook.com attaches its rules at the same figure. No primary source publishes a safe ceiling below that. | primary | https://support.google.com/mail/answer/14229414 and https://postmaster.outlook.com/policies.aspx | 2026-10-21 |
| Bulk-sender requirements | SPF and DKIM together, a DMARC record, one-click unsubscribe on marketing and subscribed mail (RFC 2369 and RFC 8058), spam rate under 0.3%. | primary | https://support.google.com/a/answer/81126 and https://www.rfc-editor.org/rfc/rfc8058 | 2026-10-15 |
| Baseline at any volume | SPF or DKIM, a PTR record that resolves to a hostname, TLS, spam rate under 0.3%. | primary | https://support.google.com/a/answer/81126 | 2026-10-15 |
| Spam-rate target | Keep the rate reported in Postmaster Tools under 0.10%; never reach 0.30%. | primary | https://support.google.com/a/answer/81126 | 2026-10-15 |
| DKIM on a hosted workspace | Your domain may not sign with its own key until an admin generates one, publishes the DNS record and starts authentication. Check, then turn it on before the first send. The provider quotes a day or two of lead time at each step. | primary | https://knowledge.workspace.google.com/admin/security/set-up-dkim | 2026-10-15 |
| Postmaster tools | Connect them before the first send; the spam-rate dashboard is the one to watch. | primary | https://support.google.com/mail/answer/9981691 | 2026-10-15 |
| Workspace acceptable-use policy | Forbids generating, distributing or facilitating unsolicited mass email, promotions, advertisements or other solicitations. The policy binds the customer account, not a domain string. | primary | https://workspace.google.com/terms/use_policy/ | 2026-10-15 |
| DMARC ladder | Start at `p=none` with reports, then move to quarantine and reject as the reports come clean; the provider publishes the ladder, not a timetable. The pack's practice is a few weeks per step. `p=none` is never the end state. | primary (ladder); practice (weeks) | https://knowledge.workspace.google.com/admin/security/set-up-dmarc | 2026-10-15 |
| Warm-up pools | No controlled evidence either way. GMass closed its pool on 2023-01-31 after a Google Gmail API warning; Instantly, Apollo, lemlist, Clay and Smartlead still sell or recommend pools; lemlist says its score does not predict placement. Default off. An aged, used mailbox needs no pool; a new one ramps with real traffic. | practice, with the vendor pages linked in the outreach skill | `../skills/outreach/practice/warm-up.md` (GM1, I2, AP1, L2, C1, SL2) | 2026-10-21 |
| "Never send from your main domain" | Vendor folklore. No provider page says it. The real question is blast radius: what else lives on the domain. | practice | pack authors' reading; the sender guidelines above carry no such rule | 2026-10-15 |

## LinkedIn

| fact | value | class | source | verified |
|---|---|---|---|---|
| Invitation limits | The help centre says weekly invitation limits exist and publishes no number. Restrictions follow bursts, invites left pending or marked spam, and suspected automation; they lift after about a week. Operator reports put the weekly ceiling near 100; treat that as unverified. | primary (limits exist); practice (the number) | https://www.linkedin.com/help/linkedin/answer/a550555 and https://www.linkedin.com/help/linkedin/answer/a551012 | 2026-10-15 |
| What gets accounts restricted | Automation fingerprints: extensions, third-party senders, scrape sprees, inhuman click speed. Also manual velocity: the help centre names many invitations in a short period, invitations left pending or marked spam, and a suspected automation tool. A person typing by hand can still be restricted. Pacing defaults for the human sender: 5 invitations a day, 25 a week, 10 new conversations a day (`../skills/outreach/channels/linkedin.md`). | primary (triggers); practice (the pacing numbers) | https://www.linkedin.com/help/linkedin/answer/a551012 | 2026-10-21 |
| The user agreement | §8.2 bans scraping by any means (crawlers, browser plugins, add-ons) and bots or other unauthorised automated methods to access the service, add contacts, or send or redirect messages. Not humans typing. | primary | https://www.linkedin.com/legal/user-agreement | 2026-10-15 |
| The pin | Agent-drafted, human-sent, capture only, in the member's own session. A marketing DM to a UK individual sits under the email rules. | engine | ARCH-0059 §7, §9; engine seed rows `crm.compliance.v1` (UK linkedin consent class) | 2026-07-16 |

## Per-platform engagement postures

These are canon's seed postures. Canon designs them as compliance rule rows; the engine's seed rows do not carry them yet, so until they do these rows are the posture, dated.

| platform | posture | automation | class | source | verified |
|---|---|---|---|---|---|
| Instagram and Facebook | Sanctioned. Comment-to-DM through the platform's approved messaging APIs is the production lane. A comment on a call to action is affirmative in-platform engagement. | allowed through the official API, inside messaging windows | engine | ARCH-0059 §9 | 2026-07-16 |
| X | Adversarial. DM economics and terms are hostile to bulk. Capture engagement; DMs are low-rate and high-relevance. | human-gated, low rate | engine | ARCH-0059 §9 | 2026-07-16 |
| Reddit | Reply first. Unsolicited commercial DMs are the classic ban vector. The platform's 2025-11 builder policy ended self-serve API access. Draft public replies for human send. | public replies human-sent; DMs almost never | engine | ARCH-0059 §9 | 2026-07-16 |
| TikTok | Regional. A business messaging API exists; comment-to-DM is not at Instagram parity in the US, UK or EU as of mid-2026. | per-region row | engine | ARCH-0059 §9 | 2026-07-16 |
| LinkedIn | Human send. See above. | never; drafts only | engine | ARCH-0059 §7, §9 | 2026-07-16 |

## Forums and public APIs

| fact | value | class | source | verified |
|---|---|---|---|---|
| A keyless forum search API | Hacker News exposes a search API through Algolia with no key. Pace requests; cap results to what you need. Other forums differ; read each one's API terms. | primary | https://hn.algolia.com/api | 2026-10-15 |
| Quiet forums | In a low-traffic group, "hot" returns nothing. Sort by top of the week. | practice | pack authors' practice; no external source | 2026-10-15 |
| Job boards | Pull only for occasional research at a human cadence. Never a standing pipeline. A partner API is the route for that. | practice | pack authors' practice; no external source | 2026-10-15 |

## Unpaid interns (creator programs)

| fact | value | class | source | verified |
|---|---|---|---|---|
| US primary-beneficiary test | A for-profit company may use unpaid interns only when the intern is the primary beneficiary. Seven factors; no single one decides. Academic credit is one factor, not a safe harbour. | primary | US Department of Labor, Fact Sheet #71, https://www.dol.gov/agencies/whd/fact-sheets/71-flsa-internships | 2026-06 |
