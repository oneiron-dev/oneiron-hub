# SMS and business messaging

Checked 2026-10-21 for the provider rules; the law per country was checked 2026-10-22. Every default here is one the owner can override; the override line records who and why.

SMS is not short email. Providers class it as application-to-person traffic, carriers filter it, and most countries put it on the consent side for individuals.

## The provider rule (Twilio, the one read)

- All Messaging Services traffic is application-to-person, whoever pressed Send.
- Any message needs prior express consent. A promotional message needs prior express written consent.
- Consent cannot be sold, rented or transferred. A bought list carries none.
- The first message identifies the sender and offers "Reply STOP to unsubscribe" or an equivalent keyword.
- A question the person sent allows a relevant reply. It does not open a marketing sequence.
- Campaign registration and a registered number are not consent.

Other messaging products have their own terms. Read them before transferring this one.

## Loop default

Cold-list SMS off. Move to SMS when the recipient asked for it or agreed to it, and keep the proof on the member record. The first message carries the sender's name and the STOP line.

## The law on SMS, in one line each

The law file's section "SMS" is the record.

| recipient in | the SMS default |
|---|---|
| UK | the same PECR rule as email: opt-out to corporate subscribers, consent for individual subscribers; reg 23 identity and stop address on every message |
| EU | consent for natural persons; the member state sets the legal-person rule |
| Germany | consent |
| US | prior express written consent for a marketing text sent with automated technology; state laws add their own: Texas treats texts as telephone solicitations from 1 September 2025, Florida gives a 15-day STOP cure, Washington bars commercial texts without clear consent |
| Japan | SMS is inside the email statute: consent or one of the B2B exceptions; an opt-out address with a statement beside it on every send |
| draft countries | the country file's SMS section; consent where the file is unsure |

## If you override

The loop can text a cold list on an override. The provider and the carriers still filter or reject the traffic, and the provider can act on the account. The country file sizes the legal exposure. In the US, the state statutes add per-message amounts in private suits.

Sources: `../sources.md` (T1; law sources per country).
