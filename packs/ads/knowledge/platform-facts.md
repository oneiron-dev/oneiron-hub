# Platform facts, dated

Every row here is a perishable fact about a platform. Each carries the platform's own source and the date it was read. Verify before you act on any of them. A row older than two quarters is a prompt to re-check, not a fact.

Rows carry no practitioner figures. A number you cannot source to the platform or to backend data does not ship; write "assume ~X (validate)" instead.

## Google Ads

| fact | value | source | verified |
|---|---|---|---|
| smart bidding minimum | Google's published floor for a target-CPA or target-ROAS strategy to function is about 15 conversions a month; it bids well at far higher density | Google Ads Help, bidding guidance | 2025-05, verify |
| offline conversion import | the click id (GCLID) captured on the form matches for up to about 90 days; optimise to a funnel step that lands before expiry | Google Ads Help, offline conversion imports | 2025-05, verify |
| search partners and display | both are on by default on a new Search campaign; practitioners start with both off and add them on purpose later | Google Ads campaign settings | 2025-05, verify |
| auto-apply recommendations and auto-created assets | on by default; turn off, review by hand | Google Ads account settings | 2025-05, verify |
| incrementality test minimum | Google's own lift test opened with a USD 5,000 spend minimum; below that use a manual holdout or geo on/off | Google Ads, incrementality testing | 2026-01-28, verify |
| data-driven attribution and incrementality | Google states that data-driven attribution does not prove incrementality without an experiment | Google Ads Help | 2026-01-28, verify |
| analytics clicks vs sessions | Google states that Google Ads clicks and Analytics sessions measure different things and will not match; Analytics takes about 48 hours to finalise a day | Google Ads and Analytics help | 2026-01-28, verify |
| AI-expanded search matching ("AI Max") | released 2025-05, out of beta 2026-04-15, with a forced migration from dynamic search ads by 2026-09; run it in a separate campaign with your own terms as negatives | Google Ads announcements | 2026-05, verify |
| asset-group search themes | expanded to 50 per asset group, from 25 | Google Ads | 2026-02, verify |
| automated all-channel campaign | Google states it complements Search and respects keyword priority; practitioners pair it with brand exclusions and a holdout and quote no uplift figure | Google Ads Help | 2026-03, verify |

## Meta

| fact | value | source | verified |
|---|---|---|---|
| learning phase | an ad set needs about 50 optimisation events within 7 days of its last significant edit to exit learning; significant edits reset the clock | Meta Business Help, learning phase | 2026-07, verify |
| edits that reset learning | targeting, optimisation event, large creative changes, bid strategy or amount, budget changes above about 20% | Meta Business Help, learning phase | 2026-07, verify |
| ads per ad set | Meta's guidance recommends up to six ads per ad set for a readable test | Meta Business Help | 2026-02, verify |
| campaign budget naming | campaign-level budget is "Advantage+ campaign budget"; ad-set budgets remain available for spend control | Meta Ads Manager | 2025-09-24, verify |
| audience default | "Advantage+ audience" is the default audience input; age and gender limits are hard controls only where law or the product requires | Meta Ads Manager | 2025-09-24, verify |
| warm audience retention windows | website visitors up to about 180 days; video, Instagram and Page engagers up to about 365 days; video audiences count a view of at least 3 seconds | Meta Business Help, custom audiences | 2025-06-24, verify |
| hard targeting controls | only location, legal minimum age, required language and true exclusions are hard limits; other targeting inputs are suggestions | Meta Business Help | 2025-06-24, verify |
| attribution windows | 7-day click is the common default for conversion campaigns; 1-day click is available and looks worse in reporting | Meta Business Help, attribution settings | 2026-06, verify |
| post-privacy-change measurement | modeled conversions, aggregated event measurement with no setup steps for web events, SKAdNetwork's 63-event cap for apps, 1-day and 7-day click reporting; aggregated reporting went to mobile measurement partners on 2024-10-09 | Meta AEM Help | 2026-06-13, verify |
| auction overlap | Meta enters only your highest-value ad per auction when your own ad sets overlap; the loser is suppressed, not outbid; Account Overview flags overlap | Meta Business Help, auction overlap | 2026-07, verify |
| AI-content labels | Meta labels images made or materially edited with its generative features and restricts those features in some verticals (finance, health, employment, housing, credit, social issues) and countries | Meta policy pages | 2026-06-12, verify |
| retrieval rework | Meta's 2024-12 retrieval change ("Andromeda") rewards new concepts over variants of one; it is a retrieval stage, not a reason to restructure an account | Meta engineering announcement | 2025-07, verify |

## TikTok

| fact | value | source | verified |
|---|---|---|---|
| boosted organic posts ("Spark Ads") | boost your own or an authorised creator's post; engagement accrues to the original post; up to about a 10-minute video and about 10,000 such ads per account; most objectives supported | TikTok for Business | 2026-06, verify |
| hook window | TikTok states the hook lands in the first 6 seconds, with the proposition in the first 3 | TikTok for Business | 2025-06, verify |
| creative guidance | 9:16, at least 720p, keep the UI-safe zone clear, hook then body then close, build with sound, DIY look with real people | TikTok for Business creative codes | 2026-06, verify |
| refresh | add creatives to the existing ad group rather than opening a new one; 3 to 5 creatives per ad group, 3 to 5 distinct ad groups per campaign | TikTok for Business | 2026-06, verify |
| business messaging | a business messaging API exists; comment-to-message is not at Instagram parity in the US, UK and EU; gate by region | TikTok for Business | 2026-06, verify |

## Stores and apps

| fact | value | source | verified |
|---|---|---|---|
| web-to-app funnels | web onboarding and web payment before install are a common pattern; store policy on steering decides whether it is allowed in your market, so check the current policy before building | Apple and Google developer policy pages | 2026-06, verify |
| app events cap | SKAdNetwork caps an app at 63 configured events | Apple developer documentation | 2026-06, verify |

## Launch surfaces

| fact | value | source | verified |
|---|---|---|---|
| maker-feed prefix | the "Show HN:" title prefix lands a post in the makers' feed; titles short, no emoji | Hacker News guidelines | 2026-06, verify |
| link placement | Reddit communities punish promotion in the title; the link goes in the first comment with context, and only where the community's rules allow it | each subreddit's rules | 2026-06, verify |
| X scheduling | X staff state that posting outside the app or the official API risks suspension of the account and every linked account; native scheduling and the official API are fine; automated replies were restricted in 2026-02 | X staff statements | 2026-07, verify |

## How to add a row

One fact per row. The value in the platform's words, not an operator's. The source is the platform's page or announcement. The date is when a person read it. If you cannot name the source, the row does not go in.
