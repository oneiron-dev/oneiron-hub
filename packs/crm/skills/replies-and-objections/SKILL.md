---
name: replies-and-objections
description: A reply landed. Code it, answer it in a human register, book the next step with concrete times, or suppress. Sort cold prospects on fit; work warm leads through what they fear. The code earns the stage; the answer earns the call.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.crm
  loads-when: a reply lands on a campaign member, or an inbound lead needs its first answer
  data: references/objection-moves.md, ../../knowledge/voice-floor.md, ../../knowledge/defaults.md
---

# Replies and objections

The reply is the promotion moment. A coded human-meaningful reply is the evidence that moves a member to `replied`. Your first job is the code. Your second is the answer. Your third is the next step, with a date.

## The reply codes

| code | what it means | what happens |
|---|---|---|
| `positive-now` | they want to talk | promote to `replied`; book the call on this thread with two concrete slots |
| `positive-later` | real interest, wrong time | snooze with a wake: a date they named, or the default window, or a fresh trigger |
| `referral` | "talk to X" | thank them; a new member with the referral as its trigger and the referrer as provenance |
| `objection` | a reason not to, stated | answer it (below); the thread stays open |
| `not-interested` | a clean no | exit the program; a warm decline; no bump |
| `complaint` | "how did you get this," anger, a legal word | suppress at once; stop every cold send from that sender today; the stop-loss in `deliverability-and-opt-out` |
| `out-of-office` or `bounce` | no human read it | not a reply; the clock pauses or the bounce path runs |

Code before you answer. The code is a claim with the reply as evidence. A score never moves a stage; a reply does.

## Speed

For a proven offer and warm inbound, the first reply goes out within minutes, in a human register. Never add a fake delay to look human; disclose a model where it is material. For an unproven offer, learn first: the conversation is the product. Qualify before you demo. Set follow-up counts from your own data by segment; the engine ships none.

## Fit versus fear

Sort, don't overcome, for fit. Overcome, for fear.

- A cold prospect without the problem: leave cleanly. "Looks like this is sorted at your end. Thanks for the time; I won't chase."
- A warm lead with cold feet: work the fear with acknowledgement, a reply, a question that surfaces the next layer. Repeat to the real blocker.
- Telling a bad fit not to buy is leverage. It earns the referral and the next deal.

## Non-fit triage

A clean non-fit never gets silence.

| case | move |
|---|---|
| right company, wrong person | a referral ask: who owns this |
| near miss, growing | a soft nurture touch with a re-check trigger written on the member |
| clean non-fit | a warm decline with no over-explaining |

## Procedure: answer an objection

1. Pause. Echo the words that carried the weight, as a question. Then wait; let them fill the gap.
2. Name it: "so the real worry is X." A wrong guess is fine; the correction tells you the truth.
3. Empty the stack. Ask what else is on the list before you answer any of it.
4. Answer trust with assets, not words: references, an audit, a guided session.
5. Answer price with scope and value, never with a reflex discount. Price defence is in `references/objection-moves.md`.
6. Close with a question that moves: "if we fixed X, what's between us and starting?"

Specific moves, in your own words, are in `references/objection-moves.md`.

## Procedure: book the next step

- Every conversation ends with a booked next step. Propose two concrete times. Never "when works for you?"
- "Send me an email" after relevance landed: offer the short call instead; the mail will get lost.
- "Let's reconnect sometime": propose a slot now. A refusal is data.
- "Tomorrow": try for now; failing that, get a verbal commitment. Tomorrow-promises no-show often.
- A booked call is an EVENT with a calendar reference. A no-show runs the recovery branch: same-day reschedule, a bump at day three, then snooze.

## Procedure: stalled deals

- Lost to "do nothing": record the real reason, what must change in their business, who you would need to win. Nurture against that, not generically.
- Two broken commitments in a row: name them without heat and ask what changed. "Y was next after we agreed X mattered. It has slipped twice now. What changed on your side?"
- Gone fully dark: offer the honest answers and make "no" easy. "Is this parked, dead, or still live? Any of the three is a fine answer."
- A silent champion: multi-thread. Find the real decision-maker by a legitimate path and equip the champion, never bypass them.
- No next step and no date means it is not pipeline. Re-establish or close it.
- A deal that resurfaces on a new trigger re-opens with the trigger named.

## Feature requests

Dig for the motive in the meeting: what would it let you do, how do you cope now. Track repeated asks across meetings as product signal. Never obey a request at face value.

## No-shows and "not now"

Pipeline weather, not verdicts. Run the recovery branch and move on. Prepare tomorrow's list tonight so a no-show costs nothing.

## Checks

- The code is written before the answer goes out.
- The answer is under the cap for its kind and carries one ask.
- A `complaint` suppressed the person and stopped the sender's cold sends today.
- A `referral` created a member with provenance, not a loose note.
- Every open thread has a next step and a date, or is closed.

## You slip here

- Answering before coding.
- Filling a price objection with a discount.
- Re-pitching when a dark lead finally replies. Summarise their side instead.
- Marking a silent champion lost instead of multi-threading.
- A fake delay on an inbound reply.
