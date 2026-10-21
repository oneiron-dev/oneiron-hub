---
name: outreach
description: "The outreach router for a campaign. Read it before a lead list is prepared, a channel is chosen, a sender is set up, a volume changes, a provider acts, a recipient sits in a new country, or an override is set. It routes to the law file for the recipient's country, the channel file, the sender's platform file and the practice files. Every default carries its source, its checked date and its override note."
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.crm
  loads-when: a campaign prepares a list, picks a channel, sets up or ramps a sender, changes volume, sees a provider incident, meets a recipient in a new country, or records an override
  data: defaults.json, law/, channels/, platforms/, practice/, sources.md, keeping-current.md, add-your-country.md
  checked: law 2026-10-22 (UK, EU, DE, US, JP confirmed against primary sources; 13 other countries drafted); sending, channels and platforms 2026-10-21
---

# Outreach

This skill holds the defaults the campaign loop starts from. The owner wrote the rule: every limit here is a default, not a guardrail. The owner, or his agent within its grant, can override any of them. The override is a line in the record. Nothing in this skill blocks, gates or refuses a send.

Three kinds of file sit under this router.

- `law/<country>.md`: what the law says, as facts with sources and checked dates. The owner weighs the exposure.
- `channels/`, `platforms/`, `practice/`: what providers publish, what vendors recommend, and what the loop starts with.
- `defaults.json`: the same defaults as records a program can read.

## The override line

An override changes what the loop does. It records eight fields: who, when, the default key, the old value, the new value, the reason, the stated exposure, and the scope. The scope names a campaign, a sender, a recipient class or the vault.

An override never changes a statute, a provider's terms or a recipient's choice. The exposure field says what the override means in those terms. An override does not create consent and does not clear an objection the recipient raised.

## Precedence

1. The vault's own override for this scope.
2. The campaign brief.
3. The default in this skill.

A tighter value from a lower rung never wins over a higher rung. The brief can go wider or tighter than the skill. An override can go wider or tighter than the brief.

## Route 1: the recipient's country

Read the law file for the recipient's country before the list is prepared and before the channel is chosen. For a country in the EU, read `law/eu.md` first and the country file second. The country file wins where the two differ.

| recipient in | read | status |
|---|---|---|
| United Kingdom | `law/uk.md` | confirmed against primary sources, 2026-10-22 |
| European Union, any member | `law/eu.md`, then the member file | confirmed, 2026-10-22 |
| Germany | `law/de.md` | confirmed, 2026-10-22 |
| United States | `law/us.md` | confirmed, 2026-10-22 |
| Japan | `law/jp.md` | confirmed, 2026-10-22 |
| France | `law/fr.md` | draft, 2026-10-22 |
| Netherlands | `law/nl.md` | draft |
| Ireland | `law/ie.md` | draft |
| Spain | `law/es.md` | draft |
| Italy | `law/it.md` | draft |
| Sweden | `law/se.md` | draft |
| Poland | `law/pl.md` | draft |
| Canada | `law/ca.md` | draft |
| Australia | `law/au.md` | draft |
| Singapore | `law/sg.md` | draft |
| India | `law/in.md` | draft |
| Brazil | `law/br.md` | draft |
| South Korea | `law/kr.md` | draft |
| any other country | `add-your-country.md` | the route to write the file |

"Confirmed" means a second reader checked every claim against the statute, regulator page or court decision, live. "Draft" means one reader wrote it from primary sources where they were reachable. A draft is a lead list with sources. `law/index.md` carries the coverage table, the three unconfirmed claims and the list a lawyer should read first.

Each law file has the same shape. A bottom line first. Then one section per channel. Each channel section gives the B2B default, the B2C default and the legal basis. It lists the content the law requires and the content the loop adds. It gives the opt-out timing and the exposure if the owner overrides the default. After the channels come lead lists, penalties and the real enforcement record, open questions, and the sources with their quotations.

Two things the law files keep apart. Channel permission is one question: may this channel carry marketing to this person. Data processing is another: may this person's data be collected and held. GDPR legitimate interest answers the second, never the first.

## Route 2: the channel

| channel | read |
|---|---|
| email | `channels/email.md` |
| LinkedIn, and other private social DMs | `channels/linkedin.md` |
| X direct messages | `channels/x-dm.md` |
| SMS and business messaging | `channels/sms.md` |
| live calls, recorded calls, AI-voice calls | `channels/calls.md` |
| Reddit | `channels/reddit.md` |

A channel file says what the channel's own rules are, what the loop starts with, and which section of the law file applies. In this pack, LinkedIn sends are drafted by the agent and clicked by a human in their own session. The LinkedIn numbers are pacing defaults for that human.

## Route 3: the sender's platform

| the sender uses | read |
|---|---|
| a Gmail or Yahoo recipient base | `platforms/gmail-yahoo.md` |
| consumer Outlook recipients | `platforms/outlook.md` |
| iCloud recipients | `platforms/icloud.md` |
| Google Workspace mailboxes | `platforms/workspace.md` |
| Microsoft 365 mailboxes | `platforms/m365.md` |
| Amazon SES | `platforms/ses.md` |
| Resend | `platforms/resend.md` |
| Postmark | `platforms/postmark.md` |
| SendGrid | `platforms/sendgrid.md` |
| Instantly | `platforms/instantly.md` |
| Smartlead | `platforms/smartlead.md` |
| lemlist | `platforms/lemlist.md` |
| Apollo | `platforms/apollo.md` |
| Clay | `platforms/clay.md` |
| Woodpecker | `platforms/woodpecker.md` |
| Saleshandy | `platforms/saleshandy.md` |
| GMass | `platforms/gmass.md` |
| Twilio SMS | `platforms/twilio.md` |
| a LinkedIn automation tool | `platforms/linkedin-tools.md` |

Three questions stay separate on every platform page. Does the law allow the send. Does the service's contract allow it. Will the receiving provider place it. An API that accepts a message answers none of them.

## Route 4: the practice

| topic | read |
|---|---|
| warm-up, pools and ramps | `practice/warm-up.md` |
| domains, mailboxes, rotation and blast radius | `practice/domains-and-rotation.md` |
| daily volume, the ramp staircase and pacing | `practice/volumes-and-ramps.md` |
| format, tracking, links and attachments | `practice/copy.md` |
| cadence, reply handling, out-of-office and suppression | `practice/follow-ups.md` |
| list cleaning, verification and catch-all | `practice/lists-and-verification.md` |
| send windows and time zones | `practice/send-windows.md` |
| published benchmarks and what they measure | `practice/benchmarks.md` |
| the counters the loop keeps | `practice/measurement.md` |
| folklore against evidence | `practice/folklore.md` |

The words of a message belong to the pack's voice floor and the campaign's voice guide. `practice/copy.md` covers format only.

## defaults.json

One file, four sections. `law.jurisdictions.<CC>.channels.<channel>` holds the law records: 18 countries, five channels each. `sending.defaults.<key>` holds the email sending values. `channels.<channel>` and `platforms.<name>` hold the channel and platform records. Every record carries its sources, its checked date and its override note. The `frame`, `precedence` and `override_record` fields at the top say how to read and override a record.

To look up a default: find the record, read its `default`, read its `override_note`, and check its `checked` date. A date older than the recheck cadence in `keeping-current.md` means read the source again before relying on the value.

## Keeping it current

Rules move. Gmail and Yahoo changed their sender rules in 2024. Outlook changed in May 2025. The UK's new fine ceiling started on 5 February 2026. `keeping-current.md` says how to check a file is current, how to mark a fact stale without blocking anything, and how a recheck job refreshes the files.

## What this skill is not

It is not legal advice. It is not a send block. It does not replace the sender-health claims the engine writes. The pack's `deliverability-and-opt-out` skill reads those claims; this skill supplies the defaults it starts from.

## You slip here

- Reading a draft law file as confirmed. The status line at the top says which it is.
- Treating GDPR legitimate interest as channel permission. It is not.
- Reading a vendor's daily number as a provider's rule. Vendors disagree with each other; providers publish quotas and authentication rules.
- Calling a 5,000-a-day bulk tier a safe zone. Ordinary spam filtering runs at every volume.
- Writing an override without the exposure field.
- Refusing a country this skill does not cover. Use `add-your-country.md`.
