---
name: oneiron.crm
description: "Relationship pipeline for a vault: standing campaigns over people, from signal to reply to deal. The law per country, the channel and platform rules and the sending values ride it as defaults with sources and checked dates; the owner can override any of them, with the reason on the record."
version: 0.2.0
license: Apache-2.0
kind: capability
grants: ["claims.write: the campaign, membership, fit, stage, reply, bounce, suppression and jurisdiction claim families the engine assigns this pack, on PERSON and ORG entities in the campaign's project", "entities.read: PERSON, ORG, EVENT and SESSION entities, relationship claims and prior message threads in the campaign's project", "saved_query.run: standing queries over the project, with judge spend under the vault's eval budget", "enrichment.call: the vault's enrichment providers in cost order, free registries first, paid lookups only after a cost flag", "outbound.propose: email and platform-DM sends on the vault's connected channel identities, through the dispatch gate; never a LinkedIn send", "compliance.read: the compliance rule rows (the engine's seed rows now; the hub compliance pack's rows when it ships) and each recipient's jurisdiction claim", "proposals.write: campaign launch, per-lead review, stage dials and suppression tightening; any loosening waits for the owner's stamp"]
wakes: ["saved_query.entered and saved_query.exited with cause data_change", "comm.reply, coded, on the vault's message projection", "comm.bounce, comm.unsubscribe and comm.complaint", "event.outcome on booked calls: held, no_show, rescheduled", "timer: snooze ends, follow-up offsets, commitment due dates, renewal reminders", "surface_event.dispatch.v1"]
contact: "legal@oneiron.dev for removal requests, contact@oneiron.dev for everything else"
---

# crm

This pack runs relationships as standing programs over people. The vault is the record. A campaign never owns its people; it works them. Stage is earned by evidence, never by a score or an open. Every outbound send rides the dispatch gate.

The law and the sending rules live here as defaults. The `outreach` skill carries 18 countries, five channels each, as facts with sources and checked dates; the receiving providers' rules; the sending services' terms; the vendors' numbers; and the loop's own starting values. Every one of them is a default the loop starts from. The owner, or his agent within its grant, can override any of them. The override is a line in the record: who, when, which default, the reason, the stated exposure. None of them is a guardrail, a block or a gate. The engine's seed compliance rows (`crm.compliance.v1`) carry the same facts in the gate's shape for six jurisdictions.

## The campaign grammar

A campaign has eight parts. Every skill here touches one or more of them.

| part | what it is | where it lives |
|---|---|---|
| brief | ICP, offer, voice guide, GO and KILL gates, A/B arms | the campaign entity's body |
| intake | a standing query over the vault: hard filters, then a per-person judgment, memoised | SAVED_QUERY |
| membership | one claim per person per campaign: state, channels with basis, sticky sender, the reason they are in | `campaign.member` |
| program | steps, channels, arms, and the recovery branches for no-shows and silence | the campaign's program |
| gates | human launch, the per-send gate, the per-lead review dial, the compliance rows | the dispatch gate and proposals |
| outcome claims | coded replies, bounces, bookings, call transcripts, deposits | `comm.*`, EVENT, SESSION, commitments |
| learning | fit verdicts, edit deltas on drafts, arm outcomes | `crm.fit`, the edit loop, outcome claims |
| lifecycle and budget | draft, active, paused, archived; a judge budget and a send budget | the campaign entity |

The campaign ends at the reply. Calls, transcripts, proposals, deposits and delivery are the vault's own machinery. The skills below say how to use them.

## What it does

- **Finds people from signals.** Research agents write dated trigger claims with provenance. A standing query matches them. Membership carries the reason.
- **Works them in their own channel.** The channel where a person engaged is the channel you work them on. Adding a channel needs evidence.
- **Earns stages.** A reply promotes a member. A booked event promotes a reply. A settled deposit promotes a proposal. No evidence, no stage.
- **Keeps the relationship.** Onboarding, health, renewal, expansion and referrals read the same record.

## Skills

Each skill loads at one moment of work. Read the one for the moment you are in.

| skill | loads when |
|---|---|
| `intake-and-enrichment` | you build or tend a cohort: triggers, lists, enrichment, inbound forms, signal sensors, vendor choice |
| `outbound-and-follow-up` | you draft a first touch, a bump or a sequence, or set the review posture for a campaign's sends |
| `replies-and-objections` | a reply lands: code it, answer it, book the next step, or suppress |
| `discovery-to-close` | a human runs the call, the demo, the proposal, the negotiation and the close |
| `deliverability-and-opt-out` | you set up a sender, read sender health, handle a bounce or an opt-out, or read the law before a send |
| `outreach` | you prepare a list, pick a channel, set up or ramp a sender, change volume, see a provider incident, meet a recipient in a new country, or record an override: the router to the law per country, the channel and platform rules, the sending defaults, `keeping-current.md` and `add-your-country.md` |
| `research-interviews` | the campaign recruits people to learn from, or pre-sells an offer that does not exist yet |
| `lifecycle-and-retention` | a product's users need activation, nudges, win-back or a cancel flow |
| `accounts-and-expansion` | a paying account needs onboarding, a health read, a review, a renewal, an expansion or a referral ask |
| `measurement-and-lead-scoring` | you judge a campaign, a variant, a cohort, a retention bet or a lead score |

## Knowledge

| file | what it holds |
|---|---|
| `knowledge/voice-floor.md` | the floor every outbound message keeps; the reviewer reads it beside the campaign's voice guide |
| `knowledge/defaults.md` | every numeric default the skills use, dated, with its source class |
| `knowledge/platform-facts.md` | provider thresholds and per-platform postures, each with a verified date; the `outreach` skill's `platforms/` files carry the fuller, newer rows |
| `knowledge/kinds-and-claims.md` | the kinds and claim families the pack uses: CAMPAIGN, SAVED_QUERY, membership, fit, stage, the comm claims, the jurisdiction claim |
| `knowledge/lenses.md` | the two lenses the pack expects, pipeline and campaign board: what each reads; a spec, since lenses are a vault family |
| `skills/outreach/defaults.json` | every outreach default as a record: 90 law records, 17 sending values, 6 channels, 20 platforms, each with sources, a checked date and an override note |
| `knowledge/presets/consultancy.md` | the consultancy preset: a stage ladder, templates, a retainer rhythm, an interview campaign |
| `knowledge/presets/creator-program.md` | the creator-program preset: a trial ladder, payout rules, comms and the disclosure floor |

## Dials the owner sets

- **Launch.** Draft to active is a human launch, with a receipt. An agent never launches a campaign.
- **The reviewer.** Every outbound draft is reviewed against the campaign's voice guide and `knowledge/voice-floor.md`. A judge model reviews by default. The owner may pin human review per campaign. A draft that passes sends. A draft that fails goes back with the reason.
- **The ramp.** A new sender scope starts with every send proposed for a human stamp. It graduates to a standing grant when the ramp earns it.
- **Per-lead review.** Approve or reject at the cohort-to-campaign boundary is a dial on the propose lane, never the default. The consent point stays at the send.
- **A/B arms.** Campaigns test copy variants on their outcome metric: model against model, model against human. Arm tags ride the send; coded replies close the loop.
- **Stop-loss.** The sender-health defaults in `knowledge/defaults.md` cut volume or bench a sender. Tightening applies at once with a notice. Loosening is an override: the owner, or his agent within its grant, records it with the reason.
- **Overrides.** Any default in this pack can be overridden for a campaign, a sender, a recipient class or the vault. The override line records who, when, the default key, the old and new values, the reason, the stated exposure and the scope. An override changes what the loop does. It does not change a statute, a provider's terms or a recipient's own stop request. `skills/outreach/add-your-country.md` lists the common cases.

## What it never does

- Never tracks opens. No pixels, no tracking footers.
- Never scrapes a site against its terms. Signal sensors read public APIs and public pages at a human pace.
- Never connects to a person's LinkedIn session or sends there. LinkedIn is agent-drafted, human-sent, capture only.
- Never fakes a human: no invented delays, no inserted typos, no fake office context. Disclose AI where it is material.
- Never deletes a suppressed person. The minimal row stays so they are never contacted again.
- Never moves a stage on a score, an open or a click.
- Never spends a paid credit silently. Free first, then a cost flag, then the paid call.
- Never hides a stale fact. A law or platform fact past its recheck cadence is marked stale and the owner is told; the send proceeds on the recorded default or the owner's override. A missing or unknown jurisdiction is not a refusal: the loop starts from the strict pole's defaults, and `skills/outreach/add-your-country.md` says how to write the country's file.

## The floor every skill keeps

- Never fabricate proof or a number. A figure is a fact from the brief, a cited row, or written as an assumption to validate.
- A cited number keeps its citation in the deliverable.
- Keep PREP apart from SEND. SEND survives copy-paste as is. Placeholders only for facts the owner supplies.
- Mark perishable facts with a date. Durable principles carry none.
- When two rules clash, name the variable that decides and pick one. A later dated rule wins.
- Use or answer every constraint in the brief. Never assume a paid plan exists.
- The brief names the business shape: type, budget tier, platforms, team size. Prefer plays that fit it.
- Every verdict is a call: kill, fix or scale. It names the metric, the next test and what would change it.
- Real deadlines and real capacity only. No fake urgency.
- Community ethics: dwell, do not sell. No fake accounts. Hardship groups are observe only.
- A stranger's public story may be reposted with a link and your own read. Never as your own or a customer's experience.

## Requires

The campaign loop, saved queries and the claim families the engine assigns this pack. The engine's seed compliance rows (`crm.compliance.v1`: UK, JP, EU, Germany, France, US); the `outreach` skill extends them as defaults for 18 countries. A host sender on the engine's outbound transport. The engine's owner install route (`POST /v1/owner/packs`) installs this folder; install from a hub at a pinned ref is not built.

**Not built yet, named so nothing here fakes it.** The inbound-submission path that accepts a form before enrichment. The lead-score test harness. The EVENT-to-calendar mapping for booked calls. The judge reviewer bound to the dispatch gate as a posture. Two inputs to the compliance gate: a send-mode input (a header on bulk, a plain line on one-to-one mail) and an override input that carries the owner's override line and its reason. Engine main's gate still blocks a send that lacks an opt-out element or sits on a stale row; the owner's ruling of 22 October 2026 makes every such row a default with an override, and canon (ARCH-0059 §8) is rewritten to it in the Docs lane. Per-platform posture rows in the engine seed. The two lenses in `knowledge/lenses.md` and any saved-query helper script: the lens family and the SDK verbs they would write against are engine work, so this folder carries their spec and no code. Each is engine or canon work; the skills say what they do without it.
