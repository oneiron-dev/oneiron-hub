# Email

Checked 2026-10-21 for provider rules and sending defaults; the law per country was checked 2026-10-22. Every value is a default the owner can override; the override line records who and why.

## What decides an email send

| question | who answers it | where |
|---|---|---|
| May this person be emailed, on what basis? | the recipient's law file | `../law/<country>.md`, section "Email" |
| What must the mail carry? | the law file (required content) plus the loop's own additions | same section |
| Will the receiving provider place it? | the recipient's provider | `../platforms/gmail-yahoo.md`, `outlook.md`, `icloud.md` |
| Does the sending service's contract allow it? | the sending service | `../platforms/ses.md`, `resend.md`, `postmark.md`, `sendgrid.md`, `workspace.md`, `m365.md` |
| How much, how fast, in what shape? | the sending defaults | `../practice/` |

## Consent class by country, in one line each

The law file is the record. This table is the index.

| recipient in | B2B email | B2C email |
|---|---|---|
| UK | opt-out to corporate subscribers; consent for sole traders, partnerships, personal addresses and unknowns | consent or the soft opt-in |
| EU baseline | the member state decides | consent, or the same-seller customer exception |
| Germany | consent, with a narrow customer exception | consent |
| France | opt-out when the message fits the person's professional role (draft) | consent or the customer exception (draft) |
| Netherlands | consent, or an address the person expressly designated (draft) | consent (draft) |
| Ireland | opt-out to a professional address (draft) | consent or the customer exception (draft) |
| Spain | consent or the LSSI customer exception (draft) | same (draft) |
| Italy | consent, with an email-only customer branch (draft) | consent (draft) |
| Sweden | opt-out to legal persons; consent for natural persons (draft) | consent (draft) |
| Poland | consent, B2B included (draft) | consent (draft) |
| US | opt-out with CAN-SPAM content | opt-out with CAN-SPAM content |
| Canada | consent, with narrow published-address and relationship branches (draft) | consent (draft) |
| Australia | consent or real inferred consent, B2B included (draft) | consent (draft) |
| Japan | consent, or a self-published address with no refusal note, a business card, or a trading relationship | consent; consumer sales mail adds a criminal rule |
| Singapore | opt-out bulk-message model; organisation-purpose exclusion (draft) | opt-out model (draft) |
| India | email outside the telecom consent regime; DPDP dates open (draft) | same (draft) |
| Brazil | LGPD legitimate interest can support proportionate outreach (draft) | same (draft) |
| South Korea | express consent, B2B included (draft) | consent (draft) |

## Content every email carries

The law file lists what the recipient's country requires. The loop adds these defaults on every campaign email, in every country.

- The real sender and company. No disguised From, no fake Re: or Fwd:.
- A working way to stop: a reply, a link or a STOP word. One click, no login.
- A postal or company address in the footer. Several countries require it; the loop carries it everywhere.
- In the UK and the EU, on the first message to a named person: one clear, separate line that they can object to direct marketing, and a privacy-notice link.
- An opt-out that matches the send mode. A bulk send carries an RFC 8058 one-click header and a visible line. A one-to-one mail carries a plain opt-out line in the text.

## Sending defaults

| default | value | file |
|---|---|---|
| steady volume per mailbox | 20 campaign messages per rolling 24 hours, follow-ups included | `../practice/volumes-and-ramps.md` |
| ramp for a new or idle mailbox | 5, 10, 15, 20 a day over sending days 1 to 5, 6 to 10, 11 to 15, 16 on | same |
| gap between automated sends from one mailbox | 10 minutes | same |
| authentication | SPF, DKIM, aligned DMARC at least `p=none` with reports, TLS | `../platforms/gmail-yahoo.md` |
| complaint review line | 0.1% on the provider's own rate; one credible complaint at small volume | `../practice/measurement.md` |
| bounce pause line | 2%; aim under 1% | `../practice/lists-and-verification.md` |
| format | plain text or minimal HTML; no tracking; no attachment on touch one | `../practice/copy.md` |
| cadence | touch one, then day 4 and day 10; three emails per non-responder | `../practice/follow-ups.md` |
| send window | Monday to Friday, 09:00 to 17:00 in the recipient's zone | `../practice/send-windows.md` |
| pooled warm-up | off | `../practice/warm-up.md` |
| sending domain | a brand-related secondary domain for automated campaigns; two mailboxes per domain to start | `../practice/domains-and-rotation.md` |

The pack's sender-health claims add two lines the engine writes: a bounce rate near 2% cuts a sender's volume, and a 0.3% complaint rate benches it. The 0.1% line here is the earlier review point.

## Platform DMs are not email everywhere

A LinkedIn, X or Reddit message is electronic mail under UK PECR and the EU rule. Japan's email statute covers SMTP and SMS only. The US applies CAN-SPAM content rules through district-court decisions. Read `linkedin.md` and the law file's DM section before treating a DM like an email.

## If you override

More volume reaches more people and shows a bad list sooner through bounces and complaints. Skipping the header on a bulk send removes Gmail's mitigation and raises complaints. Skipping the objection line in the UK or the EU is a breach of a first-communication duty; the law file sizes it. Mailing an individual subscriber in the UK on an opt-out basis is a reg 22 breach; the ICO's penalties cluster at 100,000 messages and above.

Sources: `../sources.md` (G1, G2, Y1, O1, A1, RFC1, SES2; law sources per country).
