# Platform facts, dated

Every row here is a perishable fact about a platform. Each carries the platform's own page and the date a person read it. Verify before you act on any of them. A row older than two quarters is a prompt to re-check, not a fact.

Rows hold the platform's words only. Operator advice lives in the skills. A number you cannot source to the platform or to backend data does not ship; write "assume ~X (validate)" instead.

## Google Ads

| fact | value | source | verified |
|---|---|---|---|
| Target CPA conversion history | Google: "Advertisers can start using Target CPA with no conversion history." For evaluation it recommends the last 30 days with at least 30 conversions | Google Ads Help, "About Target CPA bidding" (support.google.com/google-ads/answer/6268632) | 2026-10-15 |
| Target ROAS conversion minimum | Search and Shopping: at least 15 conversions in the past 30 days at the conversion-tracking level; other campaign types carry their own floors on the same page | Google Ads Help, "About Target ROAS bidding" (support.google.com/google-ads/answer/6268637) | 2026-10-15 |
| offline conversion import window | Google keeps the click id (GCLID) for 90 days; a conversion uploaded more than 90 days after the last click is not imported. Enhanced conversions for leads: 63 days. The click-through conversion window for a conversion action can be set from 1 to 90 days | Google Ads Help, "Guidelines for importing offline conversions" (answer/15081888); "Offline conversion imports FAQs" (answer/10029210); "Set up offline conversion imports using Google Click ID" (answer/7012522) | 2026-10-15 |
| offline import processing | Google: it can take 24 to 48 hours for uploaded conversions to fully process and show in reports; upload an extra day of data with each import | Google Ads Help, "Import conversions from ad clicks into Google Ads using files" (answer/7014069) | 2026-10-15 |
| search partners and the Display Network on a Search campaign | "When you create a campaign for the Search Network, search partners are included by default." New campaigns are set up to show across the entire Google Network; both are campaign-setting checkboxes | Google Ads Help, "About the Google Search Network" (answer/1722047); "Google Network" (answer/1752334); "Create a Search campaign" (answer/9510373) | 2026-10-15 |
| auto-apply recommendations and automatically created assets | Two separate settings: auto-apply is set per recommendation type under Recommendations; automatically created assets is a campaign-level setting. Check both at setup; defaults vary by account and campaign type | Google Ads Help, "About auto-apply recommendations"; "About automatically created assets" | 2026-10, verify |
| incrementality testing minimums | Conversion Lift based on users: a minimum campaign budget of USD 5,000 and at least 1,000 observed conversions; Google's 2025 note says the minimum spend was lowered to USD 5,000 and that directional (below 90% confidence) results need the same floors | Google Ads Help, "Set up Conversion Lift based on users" (answer/12005564); "About Bayesian methodology in Conversion Lift" (answer/16627074); "Strengthen media measurement and ROI clarity with incrementality testing improvements" (answer/16719772) | 2026-10-15 |
| attribution against incrementality | Google documents them as different tools: attribution models assign credit among ad interactions; Conversion Lift measures causal lift against a control group. An attribution report is not a lift measurement | Google Ads Help, "About attribution models"; "About Conversion Lift" | 2026-10, verify |
| Google Ads clicks against Analytics sessions | Google: "these are different metrics, and some level of discrepancy is expected"; one click can be several sessions, several clicks one session, invalid clicks are filtered from Ads but not Analytics | Google Ads Help, "Clicks and Sessions Discrepancy for Google Ads and Google Analytics: Troubleshoot" (answer/14452452) | 2026-10-15 |
| AI Max for Search | released 2025-05 as a Search-campaign setting; a later out-of-beta date and a migration of Dynamic Search Ads into it were announced in 2026. Run it in its own campaign with your own terms as negatives | Google Ads Help, "About AI Max for Search campaigns"; Google Ads announcements 2025-05 and 2026 | 2026-05, verify dates |
| Performance Max search themes | the per-asset-group limit was raised to 50 search themes, from 25 | Google Ads Help, "About search themes for Performance Max" | 2026-02, verify |
| Performance Max beside Search | Google states Performance Max complements Search campaigns and describes how the two interact on identical queries (keyword and ad-rank priority rules) | Google Ads Help, "About Performance Max campaigns"; "How Performance Max works with Search campaigns" | 2026-03, verify |

## Meta

| fact | value | source | verified |
|---|---|---|---|
| learning phase exit | an ad set becomes "learning limited" when it is unlikely to get around 50 optimisation events in the week after the last significant edit; causes Meta lists include small audience, low budget, low bid or cost control, high auction overlap, an infrequent event, and "running too many ads at the same time" | Meta Business Help, "About the learning phase" (facebook.com/business/help/112167992830700); "About learning limited" (facebook.com/business/help/269269737396981) | 2026-10-15 |
| edits that reset learning | Meta lists significant edits that restart learning: targeting, placement, optimisation event, creative, bid strategy, bid or cost control, pausing for a week or more, and budget changes it calls significant. Meta publishes no percentage for a significant budget change | Meta Business Help, "About the learning phase" (facebook.com/business/help/112167992830700) | 2026-07, verify |
| campaign-level budget naming | "Meta Advantage+ campaign budget (formerly campaign budget optimization)"; ad-set budgets remain available; all ad sets need the same budget type, bid strategy and delivery type to use it | Meta for Business, "Meta Advantage+ campaign budget" (facebook.com/business/ads/meta-advantage-plus/budget); Meta Business Help, "About Advantage campaign budget" | 2026-10-15 |
| audience controls against suggestions | with Advantage+ audience, the hard limits are location, minimum age, language and custom-audience exclusions; age, gender, detailed targeting and custom or lookalike audiences are suggestions the system may go beyond | Meta for Business, "Meta Advantage+ audience" (facebook.com/business/ads/meta-advantage-plus/audience); Meta Business Help, "About Advantage+ audience" (facebook.com/business/help/273363992030035) | 2026-10-15 |
| custom-audience retention windows | website custom audiences: default 30 days, up to 180 days; engagement custom audiences: up to 365 days, on a rolling window; offline-event audiences: up to 180 days | Meta Business Help, "About website Custom Audience size" (facebook.com/business/help/237515166435276); "Create an Events Engagement Custom Audience" (facebook.com/business/help/477441476081450); "Use offline events to create Custom and Lookalike Audiences" (facebook.com/business/help/1817351008517210) | 2026-10-15 |
| attribution setting | the default for new ad sets is "7-day click or 1-day view"; 1-day click, 7-day click and 1-day click or 1-day view are selectable; the setting is chosen per ad set and is the window the system optimises on | Meta Business Help, "About attribution setting" (facebook.com/business/help/460276478298895) | 2026-10-15 |
| aggregated event measurement | web events process through aggregated event measurement with no event-priority setup; for apps, aggregated reporting moved to mobile measurement partners from 2024-10-09; modeled conversions fill gaps | Meta Business Help, "About Aggregated Event Measurement" and "About Aggregated Event Measurement for apps" | 2026-06-13, verify |
| auction overlap | "When two or more ads from your Page enter the same ad auction, we choose the ad with the highest total value to compete"; the others are not considered; overlap can stop an ad set spending or exiting learning; the inspect tool and Account overview show it; Meta's remedy is to combine or turn off overlapping ad sets | Meta Business Help, "Understanding auction overlap" (facebook.com/business/help/537699989762051) | 2026-10-15 |
| generative AI output in ads | Meta's terms: output may be digitally created or altered by generative AI; you must not misrepresent it as human-generated, and must not remove any watermark or content-authenticating metadata | Meta, "Ad Creative Generative AI Terms" (facebook.com/legal/terms/ad_creative_generative_ai_terms) | 2026-10-15 |
| ad retrieval rework | Meta's 2024-12 engineering post describes "Andromeda", a new retrieval engine for personalised ads; it is a retrieval stage, not a reason to restructure an account | Meta Engineering blog, "Meta Andromeda: Supercharging Advantage+ automation with the next-gen personalized ads retrieval engine" (engineering.fb.com, 2024-12) | 2025-07, verify |

## TikTok

| fact | value | source | verified |
|---|---|---|---|
| boosted organic posts ("Spark Ads") | boost your own or an authorised creator's post; engagement accrues to the original post; most objectives are supported; video length and per-account limits are on the help page | TikTok Ads Manager Help Center, "About Spark Ads" | 2026-06, verify |
| creatives per ad group | TikTok: "no less than 3-5 creatives per group"; one creative limits delivery, about ten limits exploration; refresh by adding creatives to the group | TikTok for Business, "TikTok Creative Jumpstart: A Beginner's Handbook" (ads.tiktok.com/business/creativecenter); "Getting Started With Lead Gen" playbook | 2026-10-15 |
| creative guidance | vertical 9:16, at least 720p, keep the UI-safe zone clear, hook then body then close, build with sound on, a native look with real people | TikTok for Business, "Creative Codes"; TikTok Ads Manager Help Center, "Video ad specifications" | 2026-06, verify |
| business messaging | a Business Messaging API exists through partners; organic comment-to-message is not at Instagram parity in the US, UK and EU; gate by region | TikTok for Business, "Business Messaging" | 2026-06, verify |

## Stores and apps

| fact | value | source | verified |
|---|---|---|---|
| web-to-app funnels | web onboarding and web payment before install are a common pattern; the store's rules on steering and external payment decide whether it is allowed in your market | Apple, "App Store Review Guidelines" §3.1; Google, "Play Payments policy" | 2026-06, verify |
| app conversion values | SKAdNetwork's fine conversion value is 6 bits, 0 to 63 | Apple Developer Documentation, "SKAdNetwork", updateConversionValue | 2026-06, verify |

## Launch surfaces

| fact | value | source | verified |
|---|---|---|---|
| maker-feed prefix | a post whose title begins with "Show HN" lands in the Show HN feed; the site guidelines ask not to make titles stand out with uppercase or exclamation marks | Hacker News, "Show HN Guidelines" (news.ycombinator.com/showhn.html); "Hacker News Guidelines" (news.ycombinator.com/newsguidelines.html) | 2026-10-15 |
| community promotion rules | Reddit's content policy and help pages treat spam and undisclosed promotion as violations; each subreddit sets its own rules on links and self-promotion, read them before posting | Reddit, "Content Policy"; Reddit Help Center, self-promotion and spam pages; each subreddit's rules | 2026-06, verify |
| X automation | X's automation rules require automated activity to use the official API and restrict unsolicited automated replies; enforcement can reach linked accounts. Native scheduling and the official API are the sanctioned routes | X Help Center, "Automation rules" (help.x.com/en/rules-and-policies/x-automation); X Developer Agreement and Policy | 2026-07, verify |

## How to add a row

One fact per row. The value in the platform's words, not an operator's. The source is the platform's page title, with its URL or answer id where it has one, or a dated announcement. The date is when a person read it. If you cannot name the page, the row does not go in.
