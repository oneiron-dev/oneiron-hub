# Add your country, your platform or your own setup

A country this skill does not cover is not a refusal. An agent writes the file, from the official sources, and saves it as a proposal. A setup the defaults do not fit gets an override, with the reason recorded. This file says how.

## Add a country

### 1. Find the official sources

Read these, in this order, and save each page with its URL and the date.

| source | what it decides |
|---|---|
| the statute on unsolicited electronic marketing | consent class per channel; who is protected (natural persons only, or legal persons too); the exceptions (existing customer, published address, business card) |
| the statute on telephone marketing and do-not-call registers | live calls; automated and recorded calls; register checks and their age limit |
| the data-protection statute | the basis for holding a person's data; the first-message information duty; the right to object |
| the regulator's guidance | how the regulator reads the statute; what it says about B2B, social DMs and bought lists |
| court decisions | how courts read the words that matter (electronic mail, consent, human intervention) |
| the enforcement record | real penalties: who, when, how much, for how many messages |
| company-disclosure rules | what a commercial message must show about the sender |

Quote the primary text for every load-bearing claim. A summary from a law firm is a lead, not a source. Mark a claim `primary_quote_unverified` when the primary text could not be read. Mark it `archival_or_version_check` when the quote is real but the current consolidation is unconfirmed.

### 2. Write `law/<cc>.md` in the standard shape

Use the ISO 3166 two-letter code in lower case. Copy the section order below; `law/uk.md` is the model.

```
# <Country>: outreach law

Researched <date> by <who> from primary sources where they were reachable.
Status: **draft, not yet confirmed by a second reader against the primary texts**.
Every default is a starting value. The owner, or his agent within its grant,
can override it; the override line records who and why. An override changes
the chosen action, not the law. Scope: ordinary commercial B2B and B2C outreach.

**Bottom line:** <two to four sentences: the consent class per channel, the
main exceptions, the penalty ceiling and the real enforcement pattern>

## Channel defaults, legal basis and override exposure
### Email
- **B2B default:** <opt-out or consent, and for whom>
- **B2C default:** <consent, and the customer exception if one exists>
- **Channel basis:** <the statute and section that governs the channel>
- **Data basis:** <the data-protection basis and the first-message duties>
- **Legal rule:** <what the text says, in one or two sentences>
- **Required content (law):** <bullets, each with its section>
- **Recommended content (loop default, not law):** <bullets>
- **Opt-out, legal timing:** <the statutory deadline, or "no day count">
- **Opt-out, loop handling:** Suppress on receipt; same-day target; keep a minimal suppression record.
- **If overridden:** <the exposure: ceiling, real cases, what pattern the cases show>
- **Status:** <verification marker> — claims <ids>. Sources: [<ids>].
### LinkedIn and other private social DMs
<same bullets; say whether the email statute covers in-app DMs>
### SMS
<same bullets>
### Live human telephone calls
<same bullets; name the register and its age limit>
### Automated / recorded / artificial-voice calls
<same bullets; say what the law calls an automated call>

## Lead lists: collection, scraping and enrichment
<the data basis for bought, scraped and enriched lists; what a published
address does and does not permit; processor terms>

## Penalties and the real enforcement record
<the ceiling with its section; a table of real cases: case, date, amount,
status, what it was for>

## Claim check (summary)
| ID | Claim | Status | Source |

## For a lawyer
<the questions the file leaves open>

## Open questions (recheck before relying on these)

## Sources and primary quotations
### <ID> — <title>
- URL: <url>
- Read: <date>. Kind: statute | regulator | court | register operator | mirror | secondary
- Quote: "<verbatim>"
```

Sentences short. Facts, not advice. Size the exposure from the statute ceiling and the cases read; give no probability.

### 3. Write the records in `defaults.json`

Add `law.jurisdictions.<CC>` with this shape. Copy a confirmed country's record and replace every value.

```json
"<CC>": {
  "code": "<CC>",
  "name": "<Country>",
  "reference": "law/<cc>.md",
  "summary": "<the bottom line>",
  "confirmation_status": "sol_draft_unconfirmed",
  "checked": "<date>",
  "channels": {
    "email": {
      "b2b_default": "...",
      "b2c_default": "...",
      "default_basis": { "channel_permission": "...", "data_processing": "..." },
      "legal_rule": "...",
      "required_content": ["..."],
      "recommended_content": ["..."],
      "opt_out": { "recommended_action": "...", "legal_deadline": "..." },
      "override_exposure": "...",
      "sources": ["<CC>-..."],
      "verification": "quoted_primary | primary_quote_unverified | mixed",
      "checked": "<date>",
      "notes": []
    },
    "sms": {}, "social_dm": {}, "phone_live": {}, "phone_automated": {}
  },
  "lead_lists": "...",
  "enforcement": [{ "case": "...", "date": "...", "amount": "...", "status": "...", "sources": ["..."], "comparison": "..." }],
  "penalties": "...",
  "open_questions": ["..."],
  "sources": ["<CC>-..."]
}
```

Add each source to `law.sources` with `id`, `title`, `url`, `accessed`, `kind`, `http_status`, `quote` and `verification`. Add a row to `sources.md` under a new country heading. Add the country to the table in `SKILL.md` and in `law/index.md` with status "draft".

### 4. Save it as a proposal

The pack's compliance rows are agent-amendable data. An agent may propose a row citing the law. Save the new file and its records as a proposal in the vault. The proposal holds the files, the sources, and one line on what was read and what could not be. A tightening row applies at once with a notice. The owner, or his agent within its grant, accepts the rest. Bump the skill version.

## Add a platform

Read the provider's own pages: sender guidelines, FAQ, acceptable use policy, quota page, enforcement page. Write `platforms/<name>.md` in the shape of `platforms/ses.md`. It covers six things. What the terms say about unsolicited mail. The quotas, with their units. The complaint and bounce lines, and what happens at each. The loop default. The override note. Add `platforms.<name>` to `defaults.json` and the sources to `sources.md`. Keep the three questions apart: law, contract, placement.

## Set an override for your own setup

The defaults assume one company sending ordinary commercial mail to business contacts. Your setup may differ. Common cases:

| your setup | what to record |
|---|---|
| a company in one country sending to recipients in another | read both law files; the recipient's file decides the consent class; the sender's file may add disclosure duties; record which file each default came from |
| an established mailbox with years of real use | a faster ramp than the staircase; record the mailbox's age and real traffic as the reason |
| a niche audience that reads on weekends | a wider send window; record the audience and the expected slower replies |
| a consented list, not a cold one | the provider pages that bar cold lists do not bar this; record the consent evidence on the member records |
| a warm-up pool the owner wants to test | `pooled_warmup: true` with the cost, the mailbox permissions, the policy exposure and the comparison the owner will read |
| cold SMS to a country whose law allows it for businesses | `sms_cold_list: true` with the country, the law section and the provider's own consent terms as the exposure |
| LinkedIn automation on the owner's own account | the tool, the daily numbers, and account restriction as the recorded exposure; the engine's LinkedIn send stays a human click |

Write the override line with its eight fields: who, when, default key, old value, new value, reason, stated exposure, scope. Put it on the campaign, the sender, the recipient class or the vault. An agent sets an override within its grant. Nothing waits on the override; the loop reads it and continues.

An override does not create consent, and it does not clear an objection a recipient raised. A recipient's own stop request stays a suppression claim. Clearing one records the recipient's own withdrawal, never an override.
