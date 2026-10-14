# Preset: consultancy

A one-click bundle for a small services firm that sells diagnosis, projects and retainers. It is pack data, not machinery. Stage names, day offsets and prices are defaults; the campaign brief overrides them.

## The stage ladder

| stage | evidence that earns it | notes |
|---|---|---|
| `member` | a membership claim: query match plus a dated trigger | cohort, not pipeline |
| `replied` | a human-meaningful reply, coded positive-now | positive-later snoozes with a wake |
| `call_booked` | an EVENT with a calendar reference | no-show runs the recovery branch |
| `call_held` | a SESSION with a transcript | extraction writes their numbers and lead times as claims |
| `proposal_sent` | a document artifact from the template plus a send receipt | e-sign send is an outbound effect through the gate |
| `deposit_paid` | a settled commitment | the only yes that counts |
| `diagnostic_delivered` | the paid first job's deliverable accepted | a fixed-scope first job before any retainer |
| `retained` | a recurring commitment with a term | renewal is the cash column |

The ladder is: a small paid diagnostic built for trust, then a named-process project, then a retainer. Tiers differ by outcome and risk carried, never by hours.

## Services ladder defaults

- **Entry diagnostic.** Paid, small, fast. Built for trust and diagnosis, not profit. Its output prices the next sale.
- **Named-process project.** A flat fee for a named set of steps and a deliverable the client can see and touch. Billed on signing.
- **Retainer.** The client buys an owned solved state, not hours. Minimum term, written notice, quarterly reviews. If it is really a block of hours, it is a disguised job.
- **From hourly to retainer.** An hourly client converts first to a prepaid block at a small discount. Then to a deliverable-based retainer. No visible return, no renewal.
- **The offer grammar.** "{{X}} in {{Y time}}, or {{Z}}." In cold outreach the guarantee travels; the price does not.

Price an engagement from quantified first-year value, checked against your floor. Show it as a tiered menu with exclusions. A buyer's sign-off limit is a design input: price the diagnostic under it, or above it with the executive conversation planned.

Revision caps with a named overage rate, in the contract, and enforced. The unenforced clause is the real failure.

## The one-pager template

```
{{firm_name}} · {{process_name}}

Who it is for
  {{one sentence: the buyer and the problem in their words}}

What you get
  {{deliverable 1, as the client sees it}}
  {{deliverable 2}}
  {{deliverable 3}}

How it runs
  {{step 1}} → {{step 2}} → {{step 3}} → {{step 4}}
  {{duration}}

What it costs
  {{flat fee}}, billed on signing.
  Not included: {{the two or three things that trigger a new paid project}}.

What happens next
  Reply with {{one word}} and I will send the agreement today.
```

No hourly rate appears anywhere a client can see.

Test the one-pager before converting the whole business: email it to past and dormant clients and count the meetings.

## The statement of work and the master agreement

The master agreement sets the frame. The statement of work scopes one job. A carve-out names what is out.

**Master agreement fields:** structure, definitions, exclusivity over named areas, confidentiality, term, IP and process ownership, payment terms, disputes.

**Statement of work fields:** deliverables, price, payment schedule, term, termination notice, expenses, contractors and tools, the coverage boundary.

**The coverage boundary.** Name what the retainer covers and what triggers a new paid project. Price the expansion hook in advance: a new region, category or system is a tier upgrade at a stated price.

Contract rigour scales with stakes. A first small job needs one page. A multi-year retainer needs the full frame.

## The retainer month

A default rhythm. Set yours in the brief.

| week | touch |
|---|---|
| 1 | priority plan for the month, in writing |
| 1 to 4 | a short weekly call; a daily response window |
| 2 | the first "here is what we did" note |
| 4 | the month's value recap in their numbers; the next month's plan |
| quarterly | a review: their goals, before and after, issues, then growth only if the account is healthy |

Fourteen small "here is what we did" touches beat one big reveal.

## Deposits and cash

- Never start work before payment. The deposit is the commitment test and the cash floor.
- Measure first contact to cash, not delivery time. If payment timing exceeds runway, fix deposits and terms before scaling delivery.
- A soft collection note, under 60 words:

```
Hi {{first_name}},

Checking that invoice {{number}} for {{amount}} reached you and is in the queue. A one-line confirmation is all I need.

{{sender_first_name}}
```

## Price increases on existing clients

Decide the fallback first: a reduced scope at the old price, or a clean goodbye that keeps the reference. For a high-touch client, say it in a conversation, then follow with the note. Anchor the new-client rate first, then move legacy clients to "the current rate," stepped over two invoices if you choose, with any loyalty gap stated as deliberate.

```
Hi {{first_name}},

Since we started, {{the value added, in their units}}. From {{date}} the rate moves to {{new rate}}. You are on {{option: the stepped path or the loyalty rate}} until {{date}}. Questions welcome; reply here or grab me on the next call.

{{sender_first_name}}
```

Justify by value added since they bought. Never by your costs or inflation.

## Specialising

When you narrow to one specialty, say no to exceptions or nobody believes it.

Refusal of an off-specialty request:

```
Hi {{first_name}},

Thanks for thinking of us. We have narrowed to {{specialty}} and we would not give {{their ask}} our best. {{Optional: a name of someone who does this well.}} If {{specialty}} comes up, I would like to be your first call.

{{sender_first_name}}
```

Transition for an existing client:

```
Hi {{first_name}},

{{Current deliverable}} lands {{date}} as agreed. It will be the last of its kind from us: we are focusing on {{specialty}} only. I am glad to hand over to {{name}} for the rest, and I am here for anything in {{specialty}}.

{{sender_first_name}}
```

## Enterprise delivery

Sell the changed process, not the tool. A paid audit, then a short fixed phase, never open-ended months. Frame return as revenue up, cost down or risk down, one per stakeholder. Productise custom work once a second customer asks for the same thing. Delivery means an end-to-end test, a client acceptance run and role-neutral documentation.

## The research-interview campaign

A campaign that recruits people to learn from, never to sell to. Load `research-interviews` for the procedure. In the brief:

- ICP: recent concrete behaviour, not your suspected pain.
- Offer: a short call, a stated purpose, an honest incentive.
- Voice guide: says it is research; one ask; specific time windows.
- GO gate: saturation within a tight segment.
- KILL gate: scatter past ten conversations means the segment is fuzzy.
- Cross-campaign exclusion: a person is never a prospect and an interviewee at once.
