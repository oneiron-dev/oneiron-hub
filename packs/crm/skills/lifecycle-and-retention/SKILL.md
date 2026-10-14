---
name: lifecycle-and-retention
description: Keep a product's users because they are better off, never because leaving hurts. Find the activation threshold, nudge on events, segment silence before any win-back, make cancel as easy as subscribe, and diagnose churn from behaviour before touching price or features.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.crm
  loads-when: users need activation, a nudge, a win-back, a cancel flow, or churn needs a diagnosis
  data: references/message-shapes.md, ../../knowledge/voice-floor.md, ../../knowledge/defaults.md
---

# Lifecycle and retention

Retention is the goal and you pursue it hard. The line is manipulation, not caring whether people stay. A user who needs the product less because it worked is a success.

## Two questions before any mechanic

1. Would you use this yourself?
2. Does it make the user's life better?

Yes and yes is the standard. Anything else is not shipped as a retention lever.

## Dark whatever the aim

These cannot be redeemed by good intent. Their only power is coercion or deception. Recommending one as the core of a plan zeroes the work.

- cancel friction
- fear of loss as the main driver
- fake urgency or scarcity
- fabricated social proof
- dependence built on a negative emotion

## Fix the bucket before buying acquisition

A tiny services base needs acquisition first. A consumer product gates acquisition on retention. The growth ceiling is roughly new customers per month divided by monthly churn; re-derive it from your own numbers and track the gap. More marketing cannot move a churn-set ceiling.

## Procedure: diagnose churn

1. Compare what cancellers did in the week and month before with what retained users did. Act before the decision; nothing saves after it.
2. Segment by cohort, plan and stage: never activated, value decayed, wrong fit. Each has a different fix.
3. Read the curve shape. A flat tail is a core to study. A curve that never flattens is a fit problem for `research-interviews`, not a tactic problem.
4. Most churn is early. The first weeks carry most of the leverage. Attack the steep part.
5. Stop the feature reflex. Fix churn by activation, expectations or removal.
6. Never cut price on a survey answer. "Too expensive" is usually something they wanted that was not there.
7. Cancel interviews are for learning, never saving. One question in the founder's voice; tagged reasons; patterns reviewed every twenty or so cancels. Interview happy users too.
8. Graduation churn is not disappointment churn. Find out which before reacting.

## Procedure: activation

1. Find the early action your retained users took that churned users did not. Find the level where the curve stops changing. That is the threshold, not raw week-one retention.
2. The activation event is one value-bearing action in a time box. A waitlist is not activation. A login is not activation.
3. Instrument before you optimise: activation rate, time to first value, same-day uninstalls, first-session actions.
4. Get new users across the threshold fast. One core action first. Do the work for the user: pre-filled starts, their own data pulled in. Remove friction that blocks value; keep only friction that filters fit.
5. Onboarding as a story. Name the problem and the fix early. Reflect their answers back. Let them use the core feature inside onboarding. Disclose a trial up front. Take the structure; skip the sunk-cost parts.
6. The first day or two after purchase: reconfirm the purchase, keep small promises, book the next touch before the current one ends.
7. A low rate on a core action usually means a broken path, not missing fit. Watch real users fail the step before concluding anything.

## Habits, honestly

Decide first whether the product needs a habit at all. Then: one clear next action per prompt; fix ability before motivation; reward the itch the user actually has; ask for a small investment only after a reward. Gamify with winnable local competition and competence feedback, not badges. Stop before stacking mechanics; past a point, each one makes it worse. Streaks only in the safe form: a user-chosen goal, pausable, losable without shame, weighted by depth, with any loss aimed at the user's own progress.

Stored value done honestly compounds for the user and is visible. Never make leaving heavy on purpose.

## Segment the base before any motion

Three groups, three treatments. A small group loves you: they want attention; testimonials and referrals come from here. Most bought to solve a problem: solve it completely; never try to turn them into fans; a survey here asks what else they bought for the job, not how satisfied they are. A small group is upset or projecting: leave them alone, unless a visible fix serves the rest.

## Procedure: nudges

- Fire on user events, not a daily-open quota. Stop the reminder once the action is done.
- Learn the user's routine. Send near when they usually open. Reduce when the pattern says the ping is unwelcome.
- One action per nudge, completable in the notification where you can.
- Ask for permission only after a value moment.
- Back off entirely after sustained non-response.
- Celebrate real-life progress, not app use. Tone it down on repeats.
- Send active subscribers a steady "what we shipped" note.
- Founder-led support is the early moat. Systematise it before it breaks; keep the "I" voice.
- Recover an angry user: validate, own it faster than they do, fix, repair beyond the refund.

## Procedure: win-back

1. Segment the silence first. Thriving and moved on: let go. Wrong fit: let go. Busy or forgot: one useful nudge. Disappointed: a genuine fix.
2. Win back on value, never guilt. "The thing you asked for exists now," not "we miss you."
3. No win-back before activation works. Returners churn again through the same hole.
4. Fire at expiry, not at the cancel tap. Space follow-ups by the billing plan. Defaults in `defaults.md`.
5. Size the reachable pool first.
6. Consumers taper to silence after sustained non-response. A paying business client's silence escalates; see `accounts-and-expansion`.
7. Never poke a dormant non-user, least of all before a price change. The reach-out surfaces the exit.
8. Returning users are high risk. Restore their place. No downgrade at the door.
9. Win-back is usually the worst return of the retention bets. Earn its slot with a quantified pool and a real offer.

## Procedure: cancel

- Cancel is as easy as subscribe. A visible self-serve link. No maze.
- Never build: a tiny vague label, ads on the cancel page, guilt copy, repeated confirmations, a discount wall, a fee, a game, hold-to-cancel, a processing delay.
- One "why" question, then route to the fix: a cheaper tier for price; setup help for "couldn't get it working"; a pause for "not now"; no offer at all for "bought by mistake." Pause beats discount. A trial extension beats a discount.
- A save offer only matches the stated reason. A reflex discount teaches people to churn for the next one.
- The exit survey feeds diagnosis, not a save ambush.
- Respect the leaving user, especially a thriving one. Leave a clean door.
- Easy-cancel and auto-renew disclosure are law in many places. The compliance pack's rows say which. Never invent a statute.

## Message shapes

In `references/message-shapes.md`: a consumer win-back, a nudge aimed at the user's own progress, a cancel flow, a "what we shipped" note.

## Checks

- Every nudge stops on completion and has one action.
- Every win-back went to a segmented list, at expiry, on value.
- The cancel path is one click and the offer matches the reason.
- No mechanic failed the two questions.

## You slip here

- A "you'll lose your streak" line.
- A discount wall on cancel.
- Treating a healthy taper as a leak.
- Counting opens as retention.
