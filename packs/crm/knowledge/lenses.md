# The two lenses the pack expects

A lens is a vault family, not a hub kind, so this pack carries the spec and no lens code. The vault writes a lens with `vault.lenses.put`. Canon names the CRM lens family (OF-229: pipeline, today, org dossier; ARCH-0059 §6). This file says what the two lenses the campaign loop needs read, so whoever writes them reads the same claims the skills write. Status: a spec, not built in this pack.

## Pipeline

One row per person with an earned stage, grouped by stage.

| column | reads |
|---|---|
| person and org | the PERSON and ORG entities |
| stage | `crm.stage`, with the evidence that earned it (the reply, the EVENT, the SESSION, the document, the commitment) |
| campaign | the `campaign.member` claim's campaign ref and state |
| last touch and next touch | the send receipts and the program's next step |
| owner | the sender ref on the member claim |
| open items | a snooze wake, a no-show recovery branch, a commitment due date |

The lens never shows a member with no `crm.stage` as pipeline. Cold membership is a cohort, not a stage.

## Campaign board

One card per campaign, in its lifecycle state.

| card field | reads |
|---|---|
| brief | the campaign entity's body: ICP, offer, voice guide, GO and KILL gates |
| cohort | the SAVED_QUERY's membership count, the judge progress on a bulk import, the paused-with-error state if pack drift paused it |
| members by state | `campaign.member` counts: enrolled, paused, exited, suppressed |
| sends and outcomes | attempts, accepted, bounces, replies by code, opt-outs, complaints, held meetings, from the comm claims and receipts; each rate with its denominator |
| arms | the arm tags on sends and the coded replies per arm |
| sender health | the sender-health claims on each channel identity the campaign uses |
| overrides | every override line in force for this campaign: who, when, which default, the reason, the exposure |
| stale facts | any law or platform fact the campaign relies on that is past its recheck cadence |

The board shows an override and a stale fact as information beside the campaign. Neither one stops a send.
