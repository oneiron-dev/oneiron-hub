---
name: discovery-to-close
description: A human runs the call. This skill preps it and reads it back: discovery that diagnoses before it pitches, a demo built on their wishlist, a proposal with three options after three alignments, a negotiation that trades every concession, and a close that books the next step and takes payment first.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.crm
  loads-when: a call is booked, a demo is due, a proposal is asked for, a price is on the table, or a verbal yes landed
  data: references/call-plans.md, ../../knowledge/voice-floor.md, ../../knowledge/presets/consultancy.md
---

# Discovery to close

The owner sells the first deals in person and records what the market says. The agent preps the call, listens to the transcript, writes the claims and drafts the artifacts. The stages past `replied` are earned by evidence:

- `call_booked`: an EVENT with a calendar reference
- `call_held`: a SESSION with a transcript
- `proposal_sent`: a document artifact plus a send receipt
- `deposit_paid`: a settled commitment

## Stance

- Diagnose before you pitch. Surface the problem, size it, then connect it to the fix.
- "No" is information. An early "yes" is often counterfeit; verify it with three framings.
- Honesty is leverage. Tell a bad fit not to buy.
- Stay in their world. Restate it in one line before the call and keep every example inside it. A bakery buyer hears about ovens and waste, not about "operational efficiency."
- Does this deal need a high-touch motion at all? Deal complexity against product readiness. High-touch effort on a self-serve deal burns your scarcest hour.

## Procedure: prep the discovery call

1. Read the member: the trigger, the thread, what they already tried, who else is involved.
2. Lead with public evidence and ask if it is true.
3. Write the plan as a timed script. Core versus optional. Minutes per part. Cut what does not fit. Plans in `references/call-plans.md`.
4. Pre-write your three or four problem buckets. A prospect who fits none is a positioning signal, not a lead.
5. Have proof assets ready: a case, a live pre-provisioned account to walk through, a document.
6. Get the success metric in writing on the first call. No economic buyer or senior champion means not yet a deal.

## On the call (the human's rubric)

- Inside the plan's minutes (`defaults.md`). The client talks most. A question script, not a pitch script. An agenda you do not sound like.
- Openers: show prep in one line, then ask about their landscape. On a booked call, ask what made them take the meeting. In every other conversation, ask what they are trying to solve and what they already tried.
- Peel to impact: problem, what it causes, what it blocks, the metric, the executive consequence. "More visibility" is never the final answer.
- Offer three areas you usually help with; let them pick; then three sub-problems under the pick.
- Ask when they realised it had to be fixed. The bill, the incident, the meeting.
- Must-solve this quarter, or nice-to-have? Back off a nice-to-have.
- Build the value chain with them: what a customer is worth, what a meeting is worth, what a lead is worth.
- Before any demo: what are they hoping to see?
- Ask to watch their current workflow end to end. The screenshots become the business case.
- Say plainly when you cannot solve it. Authority comes from repetitions; practise by role-play.

## After the call

1. The recording drops as a SESSION. Extraction writes their numbers, constraints and dates as claims.
2. Draft the post-meeting note: three takeaways in their words, three next steps with owners on both sides and dates.
3. Propose the follow-ups. The owner stamps.
4. Feature requests: the motive from the meeting goes on the record; repeated asks across meetings are product signal.

## Discovery if-thens

- A specific ask lands: answer it now; abandon your flow.
- They ask why you ask: give the buyer-centred reason first.
- They never tried to fix it: discount their urgency. A paid workaround is your best qualifier and your price anchor.
- They will not introduce other stakeholders: the lead is likely dead.
- A late urgent custom ask: tell seller urgency from customer urgency. Who will use it? Have they exhausted workarounds? Can they run a manual interim? Could they build it themselves? Seller urgency dies on the second question.
- Embedded with them and the fix is quicker to ship than to study: ship it before the next meeting. What they do with it is the evidence.

## Procedure: the demo

- Story before product: the problem, who has it, the cost, why current fixes fail, what changed, then the product, then proof, then price.
- Curate to their data, their postings, their geography, their workflow from the shadow.
- Before and after in their job, not a feature list.
- Call back to their wishlist.
- No fit mid-call: say so, give the time back, offer materials.
- Interested: book the next step on the call.

## Procedure: the proposal

1. No proposal before they say they want to buy. Trial-close first: "anything preventing us from getting started?"
2. Three alignments before any number. Then the price. Then silence.
   - Value: "these are the problems you named; here is how each is handled. Aligned, apart from price?"
   - Vendor of choice: "of the options, are we the pick, apart from price?"
   - Process: "if price works, walk me through go-live, approvals and legal."
3. Three options: a smaller scope, the target, a realistic reach. A single price negotiates itself down.
4. Write it in their internal language for readers you will never meet.
5. Equip the champion with a one-page case in their company's words: problem, approach, payoff, investment, return, payback. Make them look unmatched internally.
6. Frame price in their economics with a stated return ratio.
7. Risk reversal covers the hidden risks too: looking foolish, a painful rollout. Pilot slices are paid, never free work.
8. The document is an artifact from the template. The e-sign send is an outbound effect through the gate.

## Procedure: negotiation

- Be open about value before the negotiation. Keep constraints (walk-away, deadlines) private inside it.
- First number: in a bespoke deal, get their range first. With a rate card, anchor with confidence and go quiet. Publish price early in a high-volume inbound funnel; align on value first in a considered sale.
- Move price, scope and conflict to voice. Read a short email aloud in the harshest tone before sending.
- Before bad news, name the worst they might think of you. Then the news. Then ask what you missed.
- State the price and stop. After price shock, get a specific number: "there's a number between zero and X you had in mind."
- Get the full ask before conceding anything.
- Every concession trades: scope out for price down; price holds for term, prepay, a case study, an introduction. Cash up front beats a longer term beats more volume beats a discount.
- Match a rival price only after seeing their proposal, same day.
- Haggling unavoidable: set a target, make each move smaller than the last, finish on a specific non-round figure and one non-cash item. Know the walk-away before the call.
- Trade any move for a close date with a real expiry. If it slips, the version comes off the table.
- Map everyone behind the table: economic buyer, evaluator, finance, legal, users, whoever looks bad if it works. Find the constraint they cannot admit.
- Leverage comes from three places: what they want, what they stand to lose, and the standards they stated themselves. Name a loss as an observation, never as a threat.
- Read their style. A numbers person wants data and time to think. A relationship person wants rapport and practical questions. A blunt person wants to be heard before they listen.
- Calm and low for limits; warm by default.

## Procedure: the close

- Trial close, ask, isolate objections one by one. The commonest failure is never asking.
- A verbal yes becomes an e-sign straight after the call, not a scheduling email.
- Collect payment early. Never start work before payment.
- Big deals: a mutual close plan, built backward from go-live, with owners and dates. Time-box legal review with the incentive expiry attached.
- A commitment ladder: introductions, then a paid pilot, then a deposit. A meeting that ends in compliments and no commitment failed.
- Know the next steps before they ask.
- At close, every promise becomes a task with an owner and a date. Schedule kickoff, reviews and the renewal reminder now. Delivery hands to the productivity pack; `accounts-and-expansion` takes the account.

## Checks

- The call plan fits its minutes.
- The success metric is written.
- Three alignments preceded the price.
- The proposal has three options.
- Every concession has a trade on the record.
- The close booked a next step and a payment date.

## You slip here

- Demo before discovery.
- Accepting the stated problem at face value.
- A proposal to someone who has not said they want to buy.
- A round-number discount with nothing traded.
- Starting work on a verbal yes.
