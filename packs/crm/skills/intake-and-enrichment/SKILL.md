---
name: intake-and-enrichment
description: Build and tend a campaign's cohort. Write dated trigger claims, hand-build the first list, enrich only what qualifies, accept inbound before enrichment, run signal sensors at a human pace, and rent a tool only against a written pass bar.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.crm
  loads-when: you build or tend a cohort
  data: references/signal-sensors.md, ../../knowledge/defaults.md, ../../knowledge/platform-facts.md
---

# Intake and enrichment

Detection never researches. Research never enrols. You are the research side. You pump facts into the vault as claims with provenance. The standing query does the matching. Membership carries the reason.

## The shape

```
signals ──▶ claims ──▶ standing query ──▶ membership ──▶ the program
  (you)    (dated,      (filter, then     (one claim      (outbound skill)
           sourced)      judge, cached)    per person)
```

A tool never decides which, whether or what to say. It hands judgment to the skill that owns it, runs the decided part, and stops.

| the judgment | who owns it | what a tool may still do |
|---|---|---|
| which accounts fit the ICP | the brief and `crm.fit` verdicts | surface the rows |
| whether the offer is wanted here | `research-interviews` | run the mining that feeds it |
| what the message says | `outbound-and-follow-up` | hand the rows over |
| whether to spend on a lookup | the owner, after a cost flag | show free versus paid |

## Procedure: a new cohort

1. **Read the brief.** ICP, the trigger classes that count, the do-nots, the budget for judge spend and lookups.
2. **Build the first list by hand.** Fifty to a hundred targets before buying any list. Each row: company, the demand signal, the decision-maker, the source URL, notes. Big enough to have the pain and the budget, small enough to close.
3. **Write triggers as claims.** Each trigger has a date, a source and a decay window. A stale trigger reads as scraped. Bench it for re-verification; never send on it.
4. **Fill the trigger card.** A member whose card cannot be filled is not ready: trigger, contact, angle, do-nots. No card, no enrolment.
5. **Check relationships first.** A contact the sender already knows exits the cold program. A personal note in their own words, or skip. Cross-campaign exclusion: one person is never a prospect and an interviewee at once.
6. **Size the list before any test.** A list too small to iterate on cannot be tested honestly.
7. **Prepare tomorrow's list tonight.** Profiles inspected, segmented by role, loaded before the block.

## Procedure: enrichment

1. Run the free search first to size the list. Free registries sort first in the waterfall by construction.
2. Pay for enrichment only on rows that passed the fit verdict, and only after the cost flag.
3. Before any paid call, show: free versus paid, the key it bills, the price model, a free fallback. If the key or budget is unconfirmed, stop and ask.
4. Dedupe against existing contacts before revealing anything.
5. An empty upstream returns an empty result, not a crash. A non-zero exit is a retryable failure, not missing data. A DNS miss is inconclusive.
6. Every field arrives as a claim naming its source. A registry claim that contradicts a scraped one coexists with it under a different prior. Nothing overwrites a cell.
7. Store the publication context, not just the address. Some jurisdictions' exemptions read it.

## Procedure: inbound

A valid form submission is recorded first. Enrichment runs second. A lookup that times out, returns nothing or finds no company never drops the lead, rejects a signup or blocks access.

- Each submission keeps a stable id. A replayed webhook never duplicates a contact, task, notice or booking.
- The wait budget at the form comes from measured latency, not a fixed number. Past it, the person sees a useful pending answer and research finishes in the background.
- A late result may fill empty fields and tell the current owner. It never silently reassigns the lead, changes a calendar already shown, or adds a task or booking. A deliberate reassignment carries a logged reason.
- Recording is not enrolling. The trigger card still decides enrolment.
- Fit, owner and the first reply are judgment. Route them to `replies-and-objections`.

Test the path on eight cases before trusting it. Check what the person saw and what was written. Shadow first, then a bounded pilot.

1. an existing customer
2. a new verified fit
3. an unknown company
4. a false company match
5. an exhausted quota
6. a timeout, then a late success
7. a duplicate submission
8. an unavailable owner

The engine's inbound path is not built yet. Until it ships, a host form writes the submission claim by hand and this procedure is the contract it must keep.

## Bulk arrival

A pile of people appearing at once, from an import, a scope change or an acquisition, is a batch event about you, not signals from them. One deliberate owner review of the batch. Never N silent sends, never zero clicks either.

- Enrolment keys on detected time. Act now; never backdate a send.
- Membership provenance carries prior history. The program routes WARM (a reconnect arm that names the real prior thread) versus COLD (touch one, trigger-led).
- A large import judges at wake with visible progress. Nothing silently turns off.

## Engagement-signal targeting

Watch the accounts your buyer already follows. Work the commenters: they carry the buyer's own words and a live signal. Two hard edges: never "email everyone who liked X," and never sweep raw commenter lists. The compliant shape is a named-account watchlist with capped, human-paced reads. Commenters enrol with the channel set equal to the platform they engaged on. Crossing to email needs evidence they shared one.

## Champions who move

Track past buyers and champions. When one lands at a fitting company, re-approach in their first month there. They already trust the work and want a quick win in the new seat.

## Signal sensors

Each sensor writes claims and stops. Procedures in `references/signal-sensors.md`: funding events, hiring intent, repository interaction, community forums, a company's mail and sales stack, a landing page's call to action. All read public APIs or public pages at a human pace. None ships scraper code. Job-board pulls are occasional research, never a standing pipeline.

## Renting a tool

1. Read the vendor's own pricing, terms and API docs first. Third-party reviews of young tools are an affiliate ecosystem.
2. Label every source vendor or practitioner before weighing it. Buyers posting their own numbers outrank both.
3. Read the tells: throwaway-inbox add-ons, terms that disclaim platform bans, "sessions" wording, shifting self-reported revenue, no published outcomes, a tail of billing disputes.
4. Write the pass bar before any trial: a number, a window, a spot-check. A miss means walk away with data.
5. Adopt only the layer the evidence supports. Two layers are never rented: nothing connects to a person's real LinkedIn, and nothing auto-sends outside the gate.
6. Rent a signal feed only after free radar (job alerts, registry watches, review sweeps) proves to be the bottleneck.
7. Price renting against your own all-manual baseline: measure the minutes it takes you to hand-find and verify one contact.
8. Before prospect data passes through any processor, get the signed data-processing agreement that the records rows in the compliance rule set call for.

## Checks before you hand off

- Every member has a dated trigger with a source and a full card.
- Every channel in the member's set has basis evidence.
- No first-degree contact is in a cold program.
- No paid credit was spent without a flag.
- The list is big enough to read a variant on.

## You slip here

- Widening the watch list on your own when hits are thin. That is a judgment; raise `needs_input`.
- Enriching the whole feed to "complete" it.
- Treating a profile line as a trigger.
- Letting a late lookup reassign a lead.
- Sending on a trigger past its decay window.
