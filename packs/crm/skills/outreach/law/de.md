# Germany: outreach law

Checked 2026-10-22 by Opus against primary sources (statute text, regulator guidance, court decisions), read live. Status: **confirmed with corrections**. Every default below is a recommendation the owner can override; an override changes the chosen action, not the law. Exposure is sized from the statute and the real enforcement record. Claim-by-claim results: the claim check below; the machine record is `../defaults.json` under `law.jurisdictions.DE`. Every default is a starting value. The owner, or his agent within its grant, can override it; the override line records who and why.

**Bottom line:** Germany is consent-first: cold email, SMS, LinkedIn/Xing DMs and automated calls need prior express consent, B2B included. B2B live calls are the only cold route, on a presumed-consent test (concrete facts suggesting the business wants the call). Email exposure is civil (warning letters, injunctions), not fines; consumer cold calls risk BNetzA fines up to €300,000.

Read the EU baseline too: `eu.md`. GDPR basis and channel consent are separate tests.

## What the Opus pass changed

- LinkedIn/Xing DMs: OLG Hamm held they are electronic mail; consent needed (DE-03).
- Required content made specific: §7(2) Nr. 3 UWG and DDG §6(2) (DE-05).
- B2B presumed-consent test quoted from the BGH (DE-07); §7a consent documentation and 5-year retention added (DE-08).
- The "Telefonica 2021 €225,000" case does not exist in BNetzA records; replaced with the BNetzA fines table and 2025 totals (DE-10, DE-11).
- Who can sue and the GDPR damages position for one email added (DE-12, DE-13).

## Channel defaults, legal basis and override exposure

### Email

- **B2B default:** Prior express consent, or the §7(3) own-customer exception with all four conditions.
- **B2C default:** Same.
- **Channel basis:** UWG §7(2) Nr. 2 (consent of the addressee) or §7(3).
- **Data basis:** GDPR consent (it doubles as the channel consent), or Art 6(1)(f) only where §7(3) applies.
- **Legal rule:** Every advertising email without prior express consent is an unacceptable nuisance, to businesses as well. The narrow customer exception needs a sale-acquired address, own similar products, no objection and an objection notice at collection and in every mail.
- **Required content (law):**
  - The sender on whose behalf the mail is sent must not be hidden (§7(2) Nr. 3 a).
  - Header and subject must not hide the sender or the commercial nature (DDG §6(2)); commercial communications clearly recognisable (DDG §6(1)).
  - A valid address for stop requests at basic transmission cost (§7(2) Nr. 3 c).
  - §7(3) mails: the objection notice in every mail.
  - First mail to a named person: GDPR Art 21(4) objection line; Art 14 information or a link.
- **Recommended content (loop default, not law):**
  - Impressum-style company details in the footer.
- **Opt-out, legal timing:** Stop at once when it is recognisable that the person does not want it (§7(1) sentence 2); no day count.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** No BNetzA fine for email. The exposure is civil: an Abmahnung from a competitor, trade association or consumer body (§8(3)) with their costs (§13(3)), usually a cease-and-desist undertaking with a contractual penalty, or an injunction by the recipient; one email can be enough (BGH 2009). Damages under GDPR Art 82 need proof of actual harm (BGH 2025). Amounts of typical warning-letter costs were not sourced in this pass.
- **Status:** `opus_corrected` — claims DE-01, DE-02, DE-04, DE-05, DE-06, DE-12, DE-13. Sources: [DE-UWG-7], [DE-DDG-6], [DE-BGH-EMAIL2], [DE-BGH-ART82], [DE-UWG-8], [DE-UWG-13].

### LinkedIn and other private social DMs

- **B2B default:** Prior express consent. A connection request or profile view is not consent.
- **B2C default:** Prior express consent.
- **Channel basis:** UWG §7(2) Nr. 2: social-network messages are electronic mail (OLG Hamm 2023).
- **Data basis:** GDPR consent, or Art 6(1)(f) for collecting profile data.
- **Legal rule:** An appellate court applied the email consent rule to Xing, Facebook, LinkedIn and WhatsApp messages.
- **Required content (law):**
  - Sender not hidden; a valid way to object (§7(2) Nr. 3).
  - First message: GDPR Art 21(4) objection line.
- **Recommended content (loop default, not law):**
  - A first message that only asks a question, with no pitch, may fall outside "Werbung"; untested.
- **Opt-out, legal timing:** Stop on recognisable objection (§7(1)).
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Same civil exposure as email (Abmahnung, injunction, costs). LinkedIn account action is the practical first risk.
- **Status:** `opus_corrected` — claims DE-01, DE-03, DE-05, DE-06, DE-12. Sources: [DE-OLG-HAMM], [DE-UWG-7].

### SMS

- **B2B default:** Prior express consent, or §7(3) for customers.
- **B2C default:** Same.
- **Channel basis:** UWG §7(2) Nr. 2 / §7(3).
- **Data basis:** GDPR consent or Art 6(1)(f) within §7(3).
- **Legal rule:** SMS is electronic mail.
- **Required content (law):**
  - Sender not hidden; a valid stop route at basic transmission cost (§7(2) Nr. 3).
- **Recommended content (loop default, not law):**
  - "STOP" reply in each message.
- **Opt-out, legal timing:** Stop on recognisable objection.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Civil exposure as for email; no BNetzA fine for SMS under §20.
- **Status:** `opus_confirmed` — claims DE-01, DE-02, DE-05, DE-06, DE-12. Sources: [DE-UWG-7].

### Live human telephone calls

- **B2B default:** Call only with concrete facts that the business wants such a call (an enquiry, an existing relationship, a published request for offers). A public number or a relevant offer alone is not enough.
- **B2C default:** Prior express consent, documented at the time and kept five years (§7a).
- **Channel basis:** UWG §7(2) Nr. 1: consumers express consent; other market participants at least presumed consent.
- **Data basis:** GDPR Art 6(1)(f) or consent.
- **Legal rule:** BGH: presumed consent exists when, on concrete facts, the called business’s objective interest in the call can be presumed; the type and content of the pitch count.
- **Required content (law):**
  - Name the company and the commercial purpose.
  - Caller-line ID: TKG rule not read in this pass.
- **Recommended content (loop default, not law):**
  - Record why presumed consent was assumed for each B2B call.
- **Opt-out, legal timing:** Stop on objection; keep the suppression record.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** B2B: civil injunctions and costs, no fine. Consumer calls without documented consent: BNetzA fines up to €300,000 (documentation breaches up to €50,000); real fines €1,000–€315,000 per decision in 2017–2024 (BNetzA table), mostly call centres and energy sellers; 2025 total over €1.099m.
- **Status:** `opus_corrected` — claims DE-06, DE-07, DE-08, DE-09, DE-10, DE-11. Sources: [DE-UWG-7], [DE-UWG-7A], [DE-UWG-20], [DE-BGH-B2BCALL], [DE-BNETZA-ARCHIVE], [DE-BNETZA-2025].
- **Note:** The TKG caller-ID rule was not read in this pass.

### Automated / recorded / artificial-voice calls

- **B2B default:** Prior express consent.
- **B2C default:** Prior express consent, documented.
- **Channel basis:** UWG §7(2) Nr. 2 (automatic calling machine).
- **Data basis:** GDPR consent.
- **Legal rule:** No presumed-consent route for automated calls, B2B included. The loop treats AI-voice agents that dial and speak alone as automatic calling machines.
- **Required content (law):**
  - Sender not hidden; a way to stop.
- **Recommended content (loop default, not law):**
  - Say at the start that the voice is automated.
- **Opt-out, legal timing:** Stop on withdrawal.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Consumers: BNetzA fine up to €300,000 (§20(1) Nr. 1 covers automatic calling machines). Businesses: civil claims.
- **Status:** `opus_confirmed` — claims DE-01, DE-09, DE-11. Sources: [DE-UWG-7], [DE-UWG-20].

## Lead lists: collection, scraping and enrichment

GDPR as in the EU file. A lawful basis to hold a contact does not permit emailing it: channel consent under §7 UWG is separate. Bought lists carry no consent for you as sender. Keep consent records (and for consumer calls the §7a record for five years).

## Penalties and the real enforcement record

UWG §20: up to €300,000 for consumer calls or consumer automated calls without prior express consent; up to €50,000 for §7a documentation breaches; BNetzA enforces. Email, SMS, DMs and B2B calls: no UWG fine; injunctions, warning-letter costs and contractual penalties. GDPR fines and Art 82 damages are separate routes.

| Case | Date | Amount | What it was | Status | Source |
|---|---|---|---|---|---|
| BNetzA, anonymised call centre (energy contracts) | 27 Dec 2024 | €225,000 | Unlawful consumer telephone advertising | Fine decision; may not be final (Einspruch to AG Bonn) | [DE-BNETZA-ARCHIVE] |
| BNetzA, anonymised call centre (energy supply) | 14 May 2024 | €315,000 | Unlawful consumer telephone advertising | Fine decision; may not be final | [DE-BNETZA-ARCHIVE] |
| BNetzA totals | 2025 | > €1.099m over 13 large proceedings (2024: €1.37m) | Consumer telemarketing; 39,842 complaints | BNetzA press release 26 Jan 2026 | [DE-BNETZA-2025] |
| BGH I ZR 218/07 "E-Mail-Werbung II" | 20 May 2009 | Injunction (no fine) | One unsolicited advertising email to a business | Final | [DE-BGH-EMAIL2] |
| BGH VI ZR 109/23 | 28 Jan 2025 | €0 (claim rejected) | GDPR Art 82 damages for one advertising email; no harm shown | Final | [DE-BGH-ART82] |
| OLG Hamm 18 U 154/22 | 3 May 2023 | Injunction route | Advertising via Xing/Facebook/LinkedIn/WhatsApp messages needs consent | Hinweisbeschluss (appellate) | [DE-OLG-HAMM] |

Calibration: BNetzA fines target consumer telemarketing by call centres. Email and DM exposure is private enforcement (competitors, associations, recipients), so it scales with who notices, not with volume. A missing case is not proof of no enforcement.

## Claim check (summary)

| ID | Claim | Status | Source |
|---|---|---|---|
| DE-01 | §7(2) Nr. 2 UWG: advertising by automatic calling machine, fax or electronic mail without the addressee’s prior express consent is always an unacceptable nuisance. "Adressat" covers businesses. | confirmed | DE-UWG-7 |
| DE-02 | Address from a sale, own similar goods/services, no objection, and a clear objection notice at collection and in every use. | confirmed | DE-UWG-7 |
| DE-03 | Adjudicated: OLG Hamm (18 U 154/22, 2023) held that messages via Xing, Facebook, LinkedIn or WhatsApp are electronic mail, so advertising through them needs prior express consent. | corrected | DE-OLG-HAMM |
| DE-04 | The BGH held that one unsolicited advertising email to a business can already be an unlawful interference with its business, giving the recipient an injunction claim (§§823, 1004 BGB). | confirmed | DE-BGH-EMAIL2 |
| DE-05 | German law is specific: the sender on whose behalf the message is sent must not be hidden; DDG §6 must be met (header and subject line may not hide the sender or the commercial nature); a valid address for stop requests at basic transmission cost. | corrected | DE-UWG-7, DE-DDG-6 |
| DE-06 | Advertising is unlawful once it is recognisable that the person does not want it (§7(1) sentence 2). | confirmed | DE-UWG-7 |
| DE-07 | BGH test: a B2B advertising call is lawful if, on concrete facts, an objective interest of the business in the call can be presumed. A free directory entry was not enough for a paid upsell call. | confirmed | DE-BGH-B2BCALL, DE-UWG-7 |
| DE-08 | Confirmed, and the draft missed §7a: the consent must be documented when given and the record kept five years after grant and after each use, shown to BNetzA on demand. | confirmed | DE-UWG-7A |
| DE-09 | €300,000 covers consumer calls and consumer automated calls without express consent; €50,000 covers §7a documentation; BNetzA enforces. Email, SMS and B2B calls carry no UWG fine (civil claims only). | confirmed | DE-UWG-20, DE-UWG-20 |
| DE-10 | No such record. BNetzA publishes anonymised decisions; its table (2017 – Feb 2025) has no Telefónica entry. The €225,000 figure matches a 27 Dec 2024 fine on a call centre selling energy contracts. 2021 fines ranged €15,000–€260,000. | corrected | DE-BNETZA-ARCHIVE |
| DE-11 | 2025: 13 large proceedings, fines over €1.099m in total (2024: €1.37m); 39,842 written complaints. All consumer telemarketing. | added | DE-BNETZA-2025 |
| DE-12 | Competitors, listed trade associations, consumer bodies and chambers can claim injunctions (§8(3)). A justified warning letter entitles them to their necessary costs (§13(3)). The recipient sues under general tort law (DE-04). | added | DE-UWG-8, DE-UWG-13 |
| DE-13 | BGH (VI ZR 109/23, 28 Jan 2025) upheld the rejection of an Art 82 damages claim over one advertising email: a breach alone is not damage; the person must show actual harm. | added | DE-BGH-ART82 |

## For a lawyer

- Typical Abmahnung cost and contractual-penalty levels for a single B2B cold email or LinkedIn message (not sourced here).
- Is a first LinkedIn message that asks a question without a pitch "Werbung"? The BGH reads Werbung broadly; untested for this pattern.
- Caller-ID duties under the TKG for B2B calls (not read).
- Whether a non-German sender (Japanese KK) faces UWG claims from German competitors when emailing German businesses (place of effect rule).

## Open questions (no block; recheck)

- BNetzA individual notices for 2025–2026 returned redirect stubs; recheck the live list for named cases.
- Recheck UWG after any 2026 amendment (the fetched pages carried no Stand line).

## Sources and primary quotations

Quotes are verbatim from the saved evidence file (whitespace collapsed). Mirror sources are labelled.

### DE-UWG-7 — UWG §7 (unzumutbare Belästigungen), official consolidated text

- URL: https://www.gesetze-im-internet.de/uwg_2004/__7.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): DE-UWG-7.txt

> bei Werbung unter Verwendung einer automatischen Anrufmaschine, eines Faxgerätes oder elektronischer Post, ohne dass eine vorherige ausdrückliche Einwilligung des Adressaten vorliegt, oder

> (3) Abweichend von Absatz 2 Nummer 2 ist eine unzumutbare Belästigung bei einer Werbung unter Verwendung elektronischer Post nicht anzunehmen, wenn 1. ein Unternehmer im Zusammenhang mit dem Verkauf einer Ware oder Dienstleistung von dem Kunden dessen elektronische Postadresse erhalten hat, 2. der Unternehmer die Adresse zur …

> 3. bei Werbung mit einer Nachricht, a) bei der die Identität des Absenders, in dessen Auftrag die Nachricht übermittelt wird, verschleiert oder verheimlicht wird oder b) bei der gegen § 6 Absatz 1 des Digitale-Dienste-Gesetzes verstoßen wird oder in der der Empfänger aufgefordert wird, eine Website aufzurufen, die gegen diese Vorschrift verstößt, oder c) bei der keine gültige Adresse vorhanden ist, an die der Empfänger eine Aufforderung zur Einstellung solcher Nachrichten richten kann, ohne dass hierfür andere als die Übermittlungskosten nach den Basistarifen entstehen.

> Dies gilt insbesondere für Werbung, obwohl erkennbar ist, dass der angesprochene Marktteilnehmer diese Werbung nicht wünscht.

> bei Werbung mit einem Telefonanruf gegenüber einem Verbraucher ohne dessen vorherige ausdrückliche Einwilligung oder gegenüber einem sonstigen Marktteilnehmer ohne dessen zumindest mutmaßliche Einwilligung,

### DE-OLG-HAMM — OLG Hamm, Hinweisbeschluss 3 May 2023, 18 U 154/22 (social-network messages are electronic mail), mirror with headnotes

- URL: https://medien-internet-und-recht.de/volltext.php?mir_dok_id=3302
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: mirror. Evidence copy (research record, outside this pack): DE-COURT-SOCIALDM-MIRROR.txt
- Note: Official NRWE database timed out; text from the MIR mirror. Full decision text also saved as DE-COURT-SOCIALDM.txt (nulegal mirror).

> 3. Unter den Begriff der elektronische Post im Sinne des § 7 Abs. 2 Nr. 3 UWG a.F. fallen neben E-Mails, SMS und MMS auch sämtliche Nachrichten über Social Media-Dienste wie Xing, Facebook, LinkedIn oder WhatsApp. Werbung über solche Dienste erfordert daher …

> 3. Unter den Begriff der elektronische Post im Sinne des § 7 Abs. 2 Nr. 3 UWG a.F. fallen neben E-Mails, SMS und MMS auch sämtliche Nachrichten über Social Media-Dienste wie Xing, Facebook, LinkedIn oder WhatsApp. Werbung über solche Dienste erfordert daher grundsätzlich die vorherige ausdrückliche …

### DE-BGH-EMAIL2 — BGH, Beschluss 20 May 2009, I ZR 218/07 "E-Mail-Werbung II"

- URL: https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Zivilsenate/I_ZS/2007/I_ZR_218-07.pdf?__blob=publicationFile&v=1
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: court. Evidence copy (research record, outside this pack): DE-BGH-EMAIL2.txt

> Wegen des unzumutbar belästigenden Charakters derartiger Wer- -7- bung gegenüber dem Empfänger ist die Übersendung einer Werbe-E-Mail ohne vorherige ausdrückliche Einwilligung grundsätzlich …

> Bereits die einmalige unverlangte Zusendung einer E-Mail mit Werbung kann einen rechtswidrigen Eingriff in das Recht am eingerichteten und ausgeübten Gewerbebetrieb darstellen.

### DE-DDG-6 — DDG §6 (kommerzielle Kommunikationen; header and subject line)

- URL: https://www.gesetze-im-internet.de/ddg/__6.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): DE-DDG-6.txt

> (2) Werden kommerzielle Kommunikationen per elektronischer Post versandt, darf in der Kopf- und in der Betreffzeile weder der Absender noch der kommerzielle Charakter der Nachricht verschleiert oder verheimlicht werden.

### DE-BGH-B2BCALL — BGH, Urteil 20 Sep 2007, I ZR 88/05 "Suchmaschineneintrag" (B2B call, presumed consent)

- URL: https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Zivilsenate/I_ZS/2005/I_ZR__88-05.pdf?__blob=publicationFile&v=1
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: court. Evidence copy (research record, outside this pack): DE-BGH-B2BCALL-20070920.txt

> auch dann wettbewerbsgemäß, wenn aufgrund konkreter tatsächlicher Um- stände ein sachliches Interesse des Anzurufenden daran vermutet …

### DE-UWG-7A — UWG §7a (Einwilligung in Telefonwerbung: documentation, 5 years)

- URL: https://www.gesetze-im-internet.de/uwg_2004/__7a.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): DE-UWG-7A.txt

> (1) Wer mit einem Telefonanruf gegenüber einem Verbraucher wirbt, hat dessen vorherige ausdrückliche Einwilligung in die Telefonwerbung zum Zeitpunkt der Erteilung in angemessener Form zu dokumentieren und gemäß Absatz 2 Satz 1 aufzubewahren. (2) Die werbenden Unternehmen müssen den Nachweis nach Absatz 1 ab Erteilung der Einwilligung sowie nach jeder Verwendung der Einwilligung fünf Jahre aufbewahren.

### DE-UWG-20 — UWG §20 (Bußgeldvorschriften)

- URL: https://www.gesetze-im-internet.de/uwg_2004/__20.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): DE-UWG-20.txt

> entgegen § 7 Absatz 1 Satz 1 in Verbindung mit Absatz 2 Nummer 1 oder 2 mit einem Telefonanruf oder unter Verwendung einer automatischen Anrufmaschine gegenüber einem Verbraucher ohne dessen vorherige ausdrückliche Einwilligung wirbt,

> (2) Die Ordnungswidrigkeit kann in den Fällen des Absatzes 1 Nummer 1 mit einer Geldbuße bis zu dreihunderttausend Euro, in den Fällen des Absatzes 1 Nummer 2 mit einer Geldbuße bis zu fünfzigtausend Euro

### DE-BNETZA-ARCHIVE — Bundesnetzagentur: Bußgelder unerlaubte Telefonwerbung, archive table 2017 – Feb 2025

- URL: https://www.bundesnetzagentur.de/DE/Vportal/TK/Aerger/Aktuelles/Ma%C3%9Fnahmen/Archiv_UT.pdf?__blob=publicationFile&v=2
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): DE-BNETZA-ARCHIVE.txt

> Bitte beachten Sie, dass die Entscheidungen teilweise noch nicht rechtskräftig sind. Die Betroffe­ nen können gegen die Bußgeldbescheide der Bundesnetzagentur Einspruch einlegen, über den das …

> 14.05.2024 Energieversorgungsverträge Call-Center 315.000 …

> 27.12.2024 Strom- und Gaslieferungsverträge Call-Center 225.000 …

### DE-BNETZA-2025 — Bundesnetzagentur press release 26 Jan 2026: complaints and fines 2025

- URL: https://bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2026/20260126_UEW.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): DE-BNETZA-ANNUAL.txt

> Im Jahr 2025 erreichten die Bundesnetzagentur insgesamt 39.842 schriftliche Beschwerden zu unerlaubter Telefonwerbung. Dies sind sechs Prozent mehr als im Jahr …

> Die Bundesnetzagentur hat im Jahr 2025 13 große Bußgeldverfahren bearbeitet. Insgesamt verhängte sie Bußgelder in einer Gesamthöhe von über 1,099 Millionen Euro. Im Vorjahr waren es 1,37 Millionen Euro.

### DE-UWG-8 — UWG §8 (Beseitigung und Unterlassung; who may sue)

- URL: https://www.gesetze-im-internet.de/uwg_2004/__8.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): DE-UWG-8.txt

> (3) Die Ansprüche aus Absatz 1 stehen zu: 1. jedem Mitbewerber, der Waren oder Dienstleistungen in nicht unerheblichem Maße und nicht nur gelegentlich vertreibt oder nachfragt,

### DE-UWG-13 — UWG §13 (Abmahnung; cost reimbursement)

- URL: https://www.gesetze-im-internet.de/uwg_2004/__13.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): DE-UWG-13.txt

> (3) Soweit die Abmahnung berechtigt ist und den Anforderungen des Absatzes 2 entspricht, kann der Abmahnende vom Abgemahnten Ersatz der erforderlichen Aufwendungen verlangen.

### DE-BGH-ART82 — BGH, Urteil 28 Jan 2025, VI ZR 109/23 (GDPR Art 82 damages for one advertising email)

- URL: https://www.rechtsprechung-im-internet.de/jportal/portal/t/19ke/page/bsjrsprod.psml?doc.hl=1&doc.id=jb-KORE705132025&doc.part=L&doc.price=0.0&documentnumber=1&fromdoctodoc=yes&js_peid=Trefferliste&numberofresults=10908&pid=Dokumentanzeige&showdoccase=1
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: court. Evidence copy (research record, outside this pack): DE-BGH-ART82.txt

> Der bloße Verstoß gegen die Bestimmungen der Datenschutz-Grundverordnung reicht nach der Rechtsprechung des Gerichtshofs nicht aus, um einen Schadensersatzanspruch zu begründen, vielmehr ist darüber hinaus - im Sinne einer …


[DE-UWG-7]: https://www.gesetze-im-internet.de/uwg_2004/__7.html "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-OLG-HAMM]: https://medien-internet-und-recht.de/volltext.php?mir_dok_id=3302 "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-BGH-EMAIL2]: https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Zivilsenate/I_ZS/2007/I_ZR_218-07.pdf?__blob=publicationFile&v=1 "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-DDG-6]: https://www.gesetze-im-internet.de/ddg/__6.html "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-BGH-B2BCALL]: https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Zivilsenate/I_ZS/2005/I_ZR__88-05.pdf?__blob=publicationFile&v=1 "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-UWG-7A]: https://www.gesetze-im-internet.de/uwg_2004/__7a.html "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-UWG-20]: https://www.gesetze-im-internet.de/uwg_2004/__20.html "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-BNETZA-ARCHIVE]: https://www.bundesnetzagentur.de/DE/Vportal/TK/Aerger/Aktuelles/Ma%C3%9Fnahmen/Archiv_UT.pdf?__blob=publicationFile&v=2 "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-BNETZA-2025]: https://bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2026/20260126_UEW.html "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-UWG-8]: https://www.gesetze-im-internet.de/uwg_2004/__8.html "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-UWG-13]: https://www.gesetze-im-internet.de/uwg_2004/__13.html "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-BGH-ART82]: https://www.rechtsprechung-im-internet.de/jportal/portal/t/19ke/page/bsjrsprod.psml?doc.hl=1&doc.id=jb-KORE705132025&doc.part=L&doc.price=0.0&documentnumber=1&fromdoctodoc=yes&js_peid=Trefferliste&numberofresults=10908&pid=Dokumentanzeige&showdoccase=1 "Read 2026-10-22 JST (2026-10-21 UTC)"
