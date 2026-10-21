# Kinds and claims the pack uses

The campaign loop's kinds and claim families, as canon names them (ARCH-0059, rulings of 2026-07-16; read 2026-10-22). The engine assigns the pack its byte and its claim families at registration. This file says what each one holds so a skill can read and write it; it mints nothing.

## Kinds

| kind | what it is | what it owns |
|---|---|---|
| CAMPAIGN | a standing, agent-tended program over people; a crm pack kind | its brief (ICP, offer, voice, GO and KILL gates), its program (steps, channels, arms, recovery branches), its lifecycle (draft, active, paused, archived) and an edge to its target SAVED_QUERY. Nothing else. No member list inside. |
| SAVED_QUERY | a durable staged query: hard filters, then a per-entity judgment, with memoised verdicts | its owner actor, its scope, its versioned intension, its evaluation mode and budgets, its verdict cache, its derived membership, its entered and exited events |

A campaign never owns its cohort. Membership is claims on people. Draft to active is a human launch with a receipt.

## Claim families

| claim | on | value | class |
|---|---|---|---|
| `campaign.member` | PERSON | campaign ref, state (enrolled, paused with its wake, exited, suppressed), the channel set with per-channel basis evidence and a sticky sender ref | restrictive; one claim per person per campaign |
| `crm.fit` | PERSON, per ICP scope | a human verdict with provenance; tunes the ICP | verdict |
| `crm.stage` | PERSON | the earned stage, written by the projector when its evidence class lands: replied, call_booked, call_held, proposal_sent, deposit_paid, delivering | projector-only, superseding |
| `comm.reply` | the message projection | a coded reply: positive-now, positive-later, referral, objection, not-interested, complaint | projector-written |
| `comm.bounce` | PERSON | a hard bounce; writes a suppression claim; feeds sender health | projector-only |
| `comm.do_not_contact` | PERSON | channel and scope; campaign-independent; the gate reads it as truth | enforcement-class |
| `comm.send_override` | a send ref or a scope | the owner's standing or one-shot override over an opt-out or do-not-contact, with its reason; never lifts the owner's own revocation | owner-written |
| `comm.jurisdiction` | PERSON | the recipient's country, projector-written from evidence (domain, address, registry), with confidence | projector-written |
| sender health | the channel identity | bounce and complaint rates; near 2% bounces cuts volume, 0.3% complaints benches the sender | projector-written |

The channel set on `campaign.member` is the crossing rule: a person is worked on the channel they engaged on, and adding a channel is an evidence-carrying claim write.

## The compliance rows

Canon's rule-row shape (ARCH-0059 §8): jurisdiction, channel, rule kind (consent class, sender identity, physical address, opt-out mechanism, opt-out deadline, content marking, records, source hygiene), the requirement with its B2B exemption, the source with its verified date and version, and a penalty note. The engine's seed rows carry that shape for six jurisdictions.

The `outreach` skill's `defaults.json` carries the same facts for 18 countries in a richer record: the B2B and B2C defaults, the channel and data bases, the required and recommended content, the opt-out timing and handling, the exposure if overridden, the sources, the verification marker and the checked date. A row in either shape is a default the owner can override; the override line records the reason.

## Namespaces

The pack's name, predicates and kinds stay outside every namespace the engine owns. Install refuses a pack that takes one. `channel_identity` is an engine namespace; sender health lives there, written by the engine, read by this pack.
