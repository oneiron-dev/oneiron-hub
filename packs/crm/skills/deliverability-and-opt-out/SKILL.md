---
name: deliverability-and-opt-out
description: Set up a sender that lands, read sender health, run the stop-loss, honour every opt-out by suppressing and never deleting, and read the recipient's local law through the outreach skill's law files before any send. Opt-out per mode: a list-unsubscribe header on bulk, a plain line on one-to-one mail. Every line is a default the owner can override, with the reason on the record.
version: 0.1.1
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.crm
  loads-when: you set up or ramp a sender, read health, handle a bounce or an opt-out, or read the law before a send
  data: ../outreach/SKILL.md, ../../knowledge/platform-facts.md, ../../knowledge/defaults.md
---

# Deliverability and opt-out

Sender reputation is slow to rebuild. Everything here protects it. The engine's intent ledger makes a send exactly once; this skill supplies the defaults a send starts from. Every one is a default the owner, or his agent within its grant, can override; the override line records who, why and the exposure. The `outreach` skill holds the detail: the law per country, the provider rules, the vendor numbers and the sending values, each with its source and checked date.

## Before the first send

1. **Authenticate.** SPF or DKIM at minimum; both for anything near bulk. A hosted workspace may not sign with your domain's key until you set it up; check, then turn it on. Valid forward and reverse DNS. TLS.
2. **DMARC.** Publish `p=none` with reports. `p=none` meets the bulk requirements. Tighten to quarantine and reject after inventorying legitimate senders and reading the reports; no fixed schedule is required. Monitoring is a start state.
3. **Postmaster tools.** Connect the provider's tools first. Read spam rate daily while sending. Targets in `defaults.md`, sources in `platform-facts.md` and `../outreach/platforms/gmail-yahoo.md`.
4. **Pick the domain by blast radius.** No provider publishes a safe ceiling below the bulk tier. The real question is what else lives on the domain: banking, invoices, client mail. A brand-related secondary domain with two mailboxes is the default for automated campaigns; founder mail from the main domain at a handful a day is a reasonable override. Workspace policy binds the account, not the domain string. `../outreach/practice/domains-and-rotation.md`.
5. **Pooled warm-up off.** The sources hold no controlled evidence either way; one vendor closed its pool after a Google warning, others still sell them. An aged, used mailbox needs no warm-up. A new one ramps with real traffic: 5, 10, 15, 20 a day over sending days 1 to 5, 6 to 10, 11 to 15 and 16 on. An owner who tests a pool records the cost, the access it needs and the comparison they will read. `../outreach/practice/warm-up.md`.
6. **Register the sender identity.** The vault's channel identity carries the health claims. Multi-venture isolation is per project: each venture's domains, suppression and reputation stay apart. Never the crown domain for cold.
7. **Pre-register the stop-loss** (below) and write it on the campaign.

## Opt-out per mode

| mode | what every send carries |
|---|---|
| bulk (many recipients, the same message, a bulk-tier sender) | a one-click list-unsubscribe header the adapter injects, plus a visible unsubscribe line |
| one-to-one (a researched, personal mail at founder volume) | a plain opt-out line in the text; no list-unsubscribe header, because receivers read that header as bulk |

Either way: honest, undisguised sender identity and a working way out. The recipient's law file (`../outreach/law/<country>.md`, the channel section) says what each country requires on top: in the UK and the EU, the first message to a named person carries a separate line that they can object, plus a privacy-notice link; in Japan, an opt-out address or URL with a statement beside it on every send. A send that lacks one of those is a default the owner can override, with the exposure on the override line. One engine gap, named: engine main's gate still blocks a send without an opt-out element, and it has no send-mode input and no override input. Until those ship, a one-to-one mail that the adapter signs with the header is still correct; the plain opt-out line is what this skill adds.

## Procedure: before any send, read the law

1. Read the recipient's jurisdiction claim. It is projector-written from evidence: domain, address, registry. An absent, low-confidence or unseeded jurisdiction is not a refusal: start from the strict pole's defaults (the engine seeds Germany's), and tell the owner if the campaign brief asks for that.
2. Read `../outreach/law/<country>.md`, the section for the channel: the B2B and B2C defaults, the channel basis, the data basis, the required content, the opt-out timing, and the exposure if overridden. For an EU member, read `../outreach/law/eu.md` first; the member file wins where they differ. The engine's seed rows (`crm.compliance.v1`) carry the same facts in the gate's shape for the UK, Japan, the EU floor, Germany, France and the US.
3. Check the recipient's legal form where the consent class turns on it. A domain cannot prove it. A registry number can. Unknown legal form takes the consent default; the owner can override it with the reason recorded.
4. Check list provenance. Where the law file makes a harvested list an aggravation (the US), an unknown-provenance list raises the exposure. Record it on the member claim; the owner weighs it.
5. Check the file's checked date. A fact past its recheck cadence is marked stale and the owner is told; the send proceeds on the recorded default. `../outreach/keeping-current.md` says how to recheck it.
6. Social DMs sit inside the email statute in some places and outside it in others. Channel scope is a fact in the law file, never an assumption.

A country the skill does not cover gets `../outreach/add-your-country.md`, never a refusal. Nothing in this skill invents a statute. An override does not create consent and does not clear an objection the recipient raised.

## Sender health

The engine writes health claims on each sender identity. Read them before proposing a batch.

| signal | default | action |
|---|---|---|
| bounce rate on a batch | about 2% | cut volume on that sender; re-check the list |
| complaint rate | 0.3% | bench the sender; rest, then re-ramp |
| spam rate in postmaster tools | over 0.10% rising; 0.30% is the ceiling | slow down; find the cause |
| a reputation dip from high | any | stop cold sends on that domain today |
| a hostile "how did you get this" reply | one | stop cold sends on that sender today |
| complaint rate on the provider's own dashboard | 0.1%; one credible complaint at small volume | review the cohort before the 0.3% line; `../outreach/practice/measurement.md` |

Tightening applies at once with a notice. Loosening is an override: the owner, or his agent within its grant, records it with the reason.

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

A human sends, from their own session, at a reading pace. Pacing defaults: 5 researched invitations a day, 25 a week, 10 new conversations a day (`../outreach/channels/linkedin.md`). LinkedIn publishes no number; restrictions follow bursts, pending or ignored invitations, spam reports and suspected automation, and a person typing by hand can still draw one. Nothing in this pack connects to the person's account: not a sequencer, not a signal tool, not an extension. An owner who runs a tool on their own account records it as an override; `../outreach/platforms/linkedin-tools.md` sizes the exposure.

## Never

- Open tracking. No pixels, no tracking links in cold mail.
- A fake delay, an inserted typo, a fake office. Disclose a model where it is material.
- A stale fact left unmarked. Mark it and tell the owner.
- Deleting a suppressed person.
- A scraper against a site's terms.

## Checks before a batch

- Authentication is green and the postmaster spam rate is under target.
- Every recipient's law file, their own country's or the strict pole's, was checked inside its cadence, or its stale facts are marked and the owner told.
- Every message carries the opt-out shape for its mode, or an override line says why not.
- The sender's health claims are under every threshold.
- The stop-loss is written on the campaign.

## You slip here

- Adding a list-unsubscribe header to a personal mail.
- Reading "never send from your main domain" as a law instead of a blast-radius call.
- Treating a stale fact as current without marking it.
- Clearing a suppression to re-run an import.
- Refusing a send instead of recording the default and the override.
