---
name: oneiron.crm
description: "Relationship pipeline for a vault: standing campaigns over people, from signal to reply to deal, with every send behind the gate and the law as rule rows."
version: 0.1.0
license: Apache-2.0
kind: capability
grants: ["claims.write: the campaign, membership, fit, stage, reply, bounce, suppression and jurisdiction claim families the engine assigns this pack, on PERSON and ORG entities in the campaign's project", "entities.read: PERSON, ORG, EVENT and SESSION entities, relationship claims and prior message threads in the campaign's project", "saved_query.run: standing queries over the project, with judge spend under the vault's eval budget", "enrichment.call: the vault's enrichment providers in cost order, free registries first, paid lookups only after a cost flag", "outbound.propose: email and platform-DM sends on the vault's connected channel identities, through the dispatch gate; never a LinkedIn send", "compliance.read: the compliance rule rows (the engine's seed rows now; the hub compliance pack's rows when it ships) and each recipient's jurisdiction claim", "proposals.write: campaign launch, per-lead review, stage dials and suppression tightening; any loosening waits for the owner's stamp"]
wakes: ["saved_query.entered and saved_query.exited with cause data_change", "comm.reply, coded, on the vault's message projection", "comm.bounce, comm.unsubscribe and comm.complaint", "event.outcome on booked calls: held, no_show, rescheduled", "timer: snooze ends, follow-up offsets, commitment due dates, renewal reminders", "surface_event.dispatch.v1"]
contact: "legal@oneiron.dev for removal requests, contact@oneiron.dev for everything else"
---

# crm

This pack runs relationships as standing programs over people. The vault is the record. A campaign never owns its people; it works them. Stage is earned by evidence, never by a score or an open. Every outbound send rides the dispatch gate. The law lives as rule rows: the engine ships seed rows, and the hub compliance pack will extend them. This pack reads them before any send.

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
| `deliverability-and-opt-out` | you set up a sender, read sender health, handle a bounce or an opt-out, or check the law before a send |
| `research-interviews` | the campaign recruits people to learn from, or pre-sells an offer that does not exist yet |
| `lifecycle-and-retention` | a product's users need activation, nudges, win-back or a cancel flow |
| `accounts-and-expansion` | a paying account needs onboarding, a health read, a review, a renewal, an expansion or a referral ask |
| `measurement-and-lead-scoring` | you judge a campaign, a variant, a cohort, a retention bet or a lead score |

## Knowledge

| file | what it holds |
|---|---|
| `knowledge/voice-floor.md` | the floor every outbound message keeps; the reviewer reads it beside the campaign's voice guide |
| `knowledge/defaults.md` | every numeric default the skills use, dated, with its source class |
| `knowledge/platform-facts.md` | provider thresholds and per-platform postures, each with a verified date |
| `knowledge/presets/consultancy.md` | the consultancy preset: a stage ladder, templates, a retainer rhythm, an interview campaign |
| `knowledge/presets/creator-program.md` | the creator-program preset: a trial ladder, payout rules, comms and the disclosure floor |

## Dials the owner sets

- **Launch.** Draft to active is a human launch, with a receipt. An agent never launches a campaign.
- **The reviewer.** Every outbound draft is reviewed against the campaign's voice guide and `knowledge/voice-floor.md`. A judge model reviews by default. The owner may pin human review per campaign. A draft that passes sends. A draft that fails goes back with the reason.
- **The ramp.** A new sender scope starts with every send proposed for a human stamp. It graduates to a standing grant when the ramp earns it.
- **Per-lead review.** Approve or reject at the cohort-to-campaign boundary is a dial on the propose lane, never the default. The consent point stays at the send.
- **A/B arms.** Campaigns test copy variants on their outcome metric: model against model, model against human. Arm tags ride the send; coded replies close the loop.
- **Stop-loss.** The sender-health defaults in `knowledge/defaults.md` cut volume or bench a sender. Tightening applies at once with a notice. Loosening waits for the owner.

## What it never does

- Never tracks opens. No pixels, no tracking footers.
- Never scrapes a site against its terms. Signal sensors read public APIs and public pages at a human pace.
- Never connects to a person's LinkedIn session or sends there. LinkedIn is agent-drafted, human-sent, capture only.
- Never fakes a human: no invented delays, no inserted typos, no fake office context. Disclose AI where it is material.
- Never deletes a suppressed person. The minimal row stays so they are never contacted again.
- Never moves a stage on a score, an open or a click.
- Never spends a paid credit silently. Free first, then a cost flag, then the paid call.
- Never sends on a stale rule row. A missing or unknown jurisdiction is not a refusal: the gate judges the send under the strict pole's rows. A row past its verified date blocks until it is re-verified.

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

The campaign loop, saved queries and the claim families the engine assigns this pack. The engine's seed compliance rows (`crm.compliance.v1`: UK, JP, EU, Germany, France, US), which the hub compliance pack will extend later. A host sender on the engine's outbound transport. Until the engine ships the pack install route, this folder is content and a manifest.

**Not built yet, named so nothing here fakes it.** The inbound-submission path that accepts a form before enrichment. The lead-score test harness. The EVENT-to-calendar mapping for booked calls. The judge reviewer bound to the dispatch gate as a posture. A send-mode input to the compliance gate: canon draws "missing List-Unsubscribe" as a block on every send, so the per-mode opt-out shape (a header on bulk, a plain line on one-to-one mail) waits on a canon re-rule and that input. Per-platform posture rows in the engine seed. Pack install from a hub at a pinned ref. Each is engine or canon work; the skills say what they do without it.
