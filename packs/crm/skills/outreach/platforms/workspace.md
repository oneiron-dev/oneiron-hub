# Google Workspace mailboxes

Checked 2026-10-21. A sequencer that connects a Workspace mailbox does not replace Google's terms. Three questions stay apart: law, contract, placement. The placement rules for Gmail recipients are in `gmail-yahoo.md`.

## The terms

The Google Cloud acceptable use policy (modified 2026-10-12) forbids "unsolicited mass email, promotions, advertisements, or other solicitations ('spam')". It is not an express numerical ban on every first individual contact, and not an endorsement of low-volume campaigns. The policy binds the customer account, not a domain string. Google's help reserves immediate user suspension and, for domain-wide problems, suspension of the whole account including administrator access.

## Quotas

| limit | value |
|---|---|
| messages per user per day | 2,000 (paid); 1,500 for mail merge; 500 on trial |
| external recipient deliveries per day | 3,000 |
| unique external recipients per day | 2,000 |
| accounting | rolling 24 hours; To, Cc and Bcc count; aliases add no capacity |
| at the limit | sending blocked for up to 24 hours; receiving and access continue |

Abuse suspension is separate and can last beyond a quota reset. Spam detection and velocity checks act below the quota. No page says "20 a day is safe".

## Setup facts

DKIM is not on by default. An admin generates the key, publishes the DNS record and starts signing before the first send; Google quotes a day or two of lead time at each step. Connect Postmaster Tools before the first send.

## Loop default

Practitioners commonly run connected Workspace mailboxes for campaigns. The loop allows it as an owner-chosen risk at the sending defaults in `../practice/volumes-and-ramps.md`. Keep billing, support and client mail on a different domain: `../practice/domains-and-rotation.md`.

## If you override

Mass cold sending conflicts with the anti-spam policy. The exposure is user suspension, then account suspension. Published quota headroom is not permission.

Sources: `../sources.md` (G3, G4, GW1, G1).
