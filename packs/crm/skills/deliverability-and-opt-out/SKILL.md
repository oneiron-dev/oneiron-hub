---
name: deliverability-and-opt-out
description: Set up a sender that lands, read sender health, run the stop-loss, honour every opt-out by suppressing and never deleting, and check the recipient's local law through the compliance pack's rows before any send. Opt-out per mode: a list-unsubscribe header on bulk, a plain line on one-to-one mail.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.crm
  loads-when: you set up or ramp a sender, read health, handle a bounce or an opt-out, or check the law before a send
  data: ../../knowledge/platform-facts.md, ../../knowledge/defaults.md
---

# Deliverability and opt-out

Sender reputation does not come back. Everything here protects it. The engine's intent ledger makes a send exactly once; this skill decides whether it should go at all.

## Before the first send

1. **Authenticate.** SPF or DKIM at minimum; both for anything near bulk. DKIM is off by default on hosted workspaces; turn it on. Valid forward and reverse DNS. TLS.
2. **DMARC.** Publish monitoring with reports, then ramp to quarantine and reject over weeks. Monitoring is never the end state.
3. **Postmaster tools.** Connect the provider's tools first. Watch spam rate weekly. Targets in `defaults.md`.
4. **Pick the domain by blast radius.** No provider publishes a safe ceiling below the bulk tier. The real question is what else lives on the domain: banking, invoices, client mail. A cheap lookalike with its own seat is insurance, not a rule. Workspace policy binds the account, not the domain string.
5. **No warm-up pools.** Simulated engagement is a spam signal. An aged, used mailbox needs no warm-up. A new one ramps gradually to engaged recipients.
6. **Register the sender identity.** The vault's channel identity carries the health claims. Multi-venture isolation is per project: each venture's domains, suppression and reputation stay apart. Never the crown domain for cold.
7. **Pre-register the stop-loss** (below) and write it on the campaign.

## Opt-out per mode

| mode | what every send carries |
|---|---|
| bulk (many recipients, the same message, a bulk-tier sender) | a one-click list-unsubscribe header the adapter injects, plus a visible unsubscribe line |
| one-to-one (a researched, personal mail at founder volume) | a plain opt-out line in the text; no list-unsubscribe header, because receivers read that header as bulk |

Either way: honest, undisguised sender identity and a working way out. The compliance pack's `optout_mechanism` and `optout_deadline` rows say what each jurisdiction requires on top; the gate blocks a send that lacks what the rows demand.

## Procedure: before any send, check the law

1. Read the recipient's jurisdiction claim. It is projector-written from evidence: domain, address, registry. Unknown takes the strict path.
2. Read the compliance pack's rows for that jurisdiction and channel: consent class, sender identity, physical address, opt-out mechanism, opt-out deadline, content marking, records, source hygiene.
3. Check the recipient's legal form where the consent class turns on it. A domain cannot prove it. A registry number can. Unknown takes the strict path.
4. Check list provenance. An unknown-provenance list is refused where the rows make harvested lists an aggravation.
5. Check the row's verified date. A stale row blocks the send. Re-verify the row; never guess.
6. Social DMs sit inside the email statute in some places and outside it in others. Channel scope is a row, never an assumption.

The compliance pack is drafted later. Until its rows exist, the owner supplies the rows by hand for each target jurisdiction and dates them. Nothing in this skill invents a statute.

## Sender health

The engine writes health claims on each sender identity. Read them before proposing a batch.

| signal | default | action |
|---|---|---|
| bounce rate on a batch | about 2% | cut volume on that sender; re-check the list |
| complaint rate | 0.3% | bench the sender; rest, then re-ramp |
| spam rate in postmaster tools | over 0.10% rising; 0.30% is the ceiling | slow down; find the cause |
| a reputation dip from high | any | stop cold sends on that domain today |
| a hostile "how did you get this" reply | one | stop cold sends on that sender today |

Tightening applies at once with a notice. Loosening waits for the owner's stamp.

## The stop-loss

On any trigger above: cold sends from that sender stop the same day. The list is re-checked. Sends move to a fresh secondary when they resume. The primary never takes a second hit.

Rotation, where several senders exist, is health-weighted, never round-robin. Each sender has its own ramp curve.

## Send fences

- A per-recipient ceiling. A person never gets more than the program's touch count, across campaigns.
- A daily cap on each sender of about three times its hourly cap.
- Rate limits on every verb that costs money, tuned for a looping agent, not a human.
- An alert on a volume anomaly: a sender at many times its usual hourly rate.
- Prep apart from send. An irreversible effect has a checkpoint before commit.

## Bounces

A hard bounce writes a bounce claim. The bounce claim writes a suppression claim. The sender's health reads it. Ambiguous outcomes resolve before any membership state moves.

## Opt-outs and objections

- An unsubscribe event, a reply that says stop, a complaint: write the do-not-contact claim at once, with the channel and scope. The gate reads it as truth from then on.
- Suppress, never delete. Keep the minimal row so the person is never contacted again. Deleting the row is how they get re-imported.
- A do-not-contact claim is campaign-independent. It covers every campaign in the project.
- The right to object is absolute in several jurisdictions. There is no balancing test once raised.
- Clearing a suppression records the person's own withdrawal, never an override.

## LinkedIn

A human sends, from their own session, at a reading pace. Requests sit well under the street ceiling in `platform-facts.md`. Restriction stories trace to automation fingerprints, not volume. Nothing ever connects to the person's account: not a sequencer, not a signal tool, not an extension.

## Never

- Open tracking. No pixels, no tracking links in cold mail.
- A fake delay, an inserted typo, a fake office. Disclose a model where it is material.
- A send to a recipient with missing or stale rows.
- Deleting a suppressed person.
- A scraper against a site's terms.

## Checks before a batch

- Authentication is green and the postmaster spam rate is under target.
- Every recipient has a jurisdiction claim and fresh rows.
- Every message carries the opt-out shape for its mode.
- The sender's health claims are under every threshold.
- The stop-loss is written on the campaign.

## You slip here

- Adding a list-unsubscribe header to a personal mail.
- Reading "never send from your main domain" as a law instead of a blast-radius call.
- Treating a stale rule row as a footnote.
- Clearing a suppression to re-run an import.
