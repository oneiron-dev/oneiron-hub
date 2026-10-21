# Keeping the files current

Rules move. This file covers three things. How an agent checks that a country or platform file is still current. How it marks a fact stale. How a recheck job refreshes the files. A stale fact never blocks a send. It is a fact about the file, recorded next to the fact.

## What moved recently

| what | when | where it is recorded |
|---|---|---|
| Gmail and Yahoo sender requirements for bulk senders: authentication, one-click unsubscribe, the 0.3% spam line | February 2024; Gmail enforcement increased November 2025 | `platforms/gmail-yahoo.md` |
| Outlook.com high-volume authentication requirements and the 550 5.7.515 rejection | 5 May 2025 | `platforms/outlook.md` |
| Resend's acceptable use policy: cold outreach named in the prohibition, 0.08% complaints, 4% bounces | 13 October 2026 | `platforms/resend.md` |
| Google Cloud acceptable use policy wording | 12 October 2026 | `platforms/workspace.md` |
| Microsoft's planned 2,000 external recipients a day limit: cancelled | 6 January 2026 | `platforms/m365.md` |
| UK PECR fines: £17.5m or 4% of turnover, directors liable, undelivered emails count | 5 February 2026 | `law/uk.md` |
| US FCC "revoke-all" rule waived to 31 January 2027; one-to-one consent rule vacated | 2025 to 2026 | `law/us.md` |
| Texas SB 140: texts are telephone solicitations | 1 September 2025 | `law/us.md` |
| Washington: $100 per email or text in private suits | 11 June 2026 | `law/us.md` |
| France: consumer telephone prospecting reform, reported for 11 August 2026 | needs primary confirmation | `law/fr.md` |
| Japan: an APPI surcharge for profiting from illegal data handling, enacted, not yet in force | pending | `law/jp.md` |
| Reddit spam policy wording | 6 October 2026 | `channels/reddit.md` |
| X automation rules | April 2026 | `channels/x-dm.md` |

## Three dates, three meanings

Every file and every record carries dates. Keep them apart.

| date | means | moves when |
|---|---|---|
| checked | the source was read live and the fact matched it | a check passed for that fact; a partial pass moves only the facts it covered |
| source published or updated | the provider or legislator's own date on the page or the instrument | the source says so |
| content updated | this file's substance changed | a confirmed change was written in; never on a check-only run |

A check that finds no change moves the checked date and nothing else. A run that finds nothing moves nothing. Never derive a date from today at build time.

## Check one fact

1. Find the fact's source id in the file's "Sources" footer or in `defaults.json`. `sources.md` has the URL, the kind and the date it was read.
2. Fetch the source over plain HTTP. Save the response, its status, the final URL and the time.
3. A 200 is not a pass. The fact must be present and readable in what came back. A login wall, an error page, a missing section or a script-only page is a failed check, not "no change".
4. Compare the value and its conditions to the stored fact. Ignore navigation and footer churn.
5. Write the result: `unchanged`, `changed`, `failed` or `needs_review`. Ambiguous units, contradictory sources and unexplained jumps are `needs_review`.
6. On `changed`: write the new fact with its new quote and date, mark the old one superseded, and update every record that cites it. Bump the skill version.
7. On `failed`: keep the last successful checked date. Add "last checked <date>; source could not be reread on <date>" beside the fact.

## Check a country file

Read the country's own sources in this order. Statute text first, then the regulator's guidance, then court decisions, then enforcement news. The file's "Sources and primary quotations" section lists them with the quote each one supports.

| country | statute to reread | regulator | what to look for |
|---|---|---|---|
| UK | PECR 2003 regs 19 to 24 on legislation.gov.uk; UK GDPR Arts 6, 14, 21; DPA 2018 s.157 | ICO guide to PECR; ICO enforcement pages | DUAA commencement instruments; a reissued ICO electronic-mail guide (it carries an "under review" banner); new penalty notices |
| EU | ePrivacy Directive 2002/58 Art 13 on EUR-Lex; GDPR Arts 6, 14, 21 | EDPB guidelines; CJEU decisions | a replacement for the withdrawn ePrivacy Regulation; EDPB guidance on AI voices or platform DMs |
| Germany | UWG §7, §7a, §8, §13, §20 on gesetze-im-internet.de | BNetzA annual report and fine notices | BGH or OLG decisions on B2B calls or social DMs; new BNetzA fines |
| US | 15 U.S.C. §7704 to §7707; 47 U.S.C. §227; 47 CFR 64.1200; 16 CFR 310 and 316 | FTC and FCC pages; the Federal Register | the yearly inflation adjustment; FCC orders and court vacaturs; the named state statutes |
| Japan | 特定電子メール法 and 特定商取引法 on e-Gov; APPI | 総務省 and 消費者庁 guidance; 迷惑メール相談センター | the APPI surcharge's commencement; new 措置命令 |
| any draft country | the statute the file cites | the regulator the file cites | every claim marked `primary_quote_unverified` or `archival_or_version_check` |

A country file is current when every claim in it passed a check inside its cadence. Update the status line at the top with the new checked date. A draft file becomes confirmed when a second reader has checked every claim live.

## Check a platform file

Reread the provider's own page: the sender guidelines, the FAQ, the acceptable use policy, the quota page. Vendor help pages change without a date; the file records the date it was read. A vendor number that moved is `changed`; write the new number and the date. A provider rule that moved changes the sending defaults too; update `defaults.json` and the practice file that cites it.

## Cadence

Planning defaults. The owner's brief can shorten them.

| scope | recheck | hard rule |
|---|---|---|
| provider authentication and complaint rules | monthly | a provider notice triggers a check at once |
| vendor recommendations and quotas | quarterly | |
| law: penalties and enforcement record | quarterly | a regulator notice or a new instrument triggers a check |
| law: statute text and consent class | half-yearly | |
| a fact marked `needs_review` | next run | |

## Mark a fact stale

A fact past its cadence is stale. Mark it in place: "stale since <date>; last checked <date>". A stale fact stays in the file and stays in `defaults.json` with `stale: true` and the dates. The loop still reads it. The loop tells the owner the fact is stale when it relies on it. Nothing waits on the check.

## The recheck job

A small job selects what is due and runs the check above on each fact. It keeps an append-only log: run id, source and fact ids, the time, the status, the before and after values, the quote, the reviewer. Git alone misses a successful no-change check; the log does not.

On a confirmed change the job writes the superseding fact, updates every record that cites it, and bumps the skill version once for the whole batch. A no-change run writes its log line and moves the checked date. It changes nothing else and bumps nothing. A failed source keeps its last date and raises a note to the owner. A fact past due is marked stale and the owner is told.

Test the job on four runs before trusting it: one changed fact, one unchanged run, one partial run, one failed source. No checked date moves without evidence. A change updates every citing record. A no-change run bumps no version.

## Who may change what

An agent runs checks and writes `unchanged`, `failed` and `needs_review` on its own. An agent writes a `changed` fact with its quote and date, and tells the owner. A change that tightens a default applies at once with a notice. A change that loosens a default is an override: the owner, or his agent within its grant, sets it with the override line.
