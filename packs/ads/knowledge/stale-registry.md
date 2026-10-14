# Stale registry: what changed

A platform mechanic that is gone, described as if it were live, is the most common way an ads agent is wrong. Each row here names what a mechanic was and what is current. Read it before stating any setup step. Mark every mechanic you name as current or historical.

| mechanic | what it was | what is current | source | verified |
|---|---|---|---|---|
| Meta eight-event priority flow | configure up to eight conversion events per domain, rank them 1 to 8, verify the domain, select a conversion domain per campaign, wait a processing period | removed. No events to prioritise, no aggregated-measurement tab in Events Manager, no domain verification step, no conversion-domain selection. Web events process automatically. Current mechanics: modeled conversions, aggregated measurement, SKAdNetwork's 63-event cap, 1-day and 7-day click | Meta AEM Help | 2026-06-13 |
| Meta funnel-segmented account builds | separate campaigns by funnel stage (top, middle, bottom), each with its own audience | historical. Current shape is consolidated: prospecting, retargeting and creative testing, with the creative doing the targeting. Treat an inherited funnel build as a migration target | Meta Business Help and the retrieval rework | 2025-07, verify |
| Meta lookalikes as the structure | build the account around lookalike audiences from seed lists | fading. Meta matches lookalike-style from custom-audience signals on its own; add a lookalike only as a suggestion and only when broad delivery misses | Meta Business Help | 2025-06-24, verify |
| Meta warm-up pools for mailboxes | buy simulated engagement to "warm" a sending domain | dead for cold email; Google forced the largest pool to close and simulated engagement reads as a spam signal. Not an ads mechanic, kept here because ads agents inherit it; the crm pack owns sender health | Google postmaster guidance | 2026-06, verify |
| Google Ads "Power Pair" | the paired automated campaign types | renamed "Power Pack": the automated all-channel campaign, demand-generation and AI-expanded search; naming churns | Google Ads announcements | 2026-02-27, verify |
| Google dynamic search ads | a standalone campaign type | being migrated into AI-expanded search matching by 2026-09; new dynamic campaigns already unavailable | Google Ads announcements | 2026-05, verify |
| Google Ads recommended target as the default | accept the suggested target CPA or ROAS at launch | set the target near your own stable 30- to 90-day results, or stay manual on a new account; the suggestion often sits above what the account has shown | Google Ads Help plus account history | 2026-03, verify |
| X links in replies | links in the post body cut reach, so put them in the first reply | X staff said in 2025-10 that the drop came from the in-app browser covering reactions and shipped a fix; in 2026-07 staff said links need not go in replies. These are staff statements, not a measured zero effect. Write the post to stand alone and test placement | X staff statements | 2026-07-29, verify |
| TikTok organic comment-to-message | parity with Instagram's comment-to-message lane | not at parity in the US, UK and EU as of mid-2026; a business messaging API exists, gated by region and partner | TikTok for Business | 2026-06, verify |

## How to add a row

Add a row the moment a platform removes, renames or reverses a mechanic the pack names. Keep the old description so an agent that meets it in an old guide recognises it. Date the current state.
