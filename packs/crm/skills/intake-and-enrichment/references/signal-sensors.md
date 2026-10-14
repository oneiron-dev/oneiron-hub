# Signal sensors

Each sensor reads a public surface, writes dated claims with a source URL, and stops. A sensor never decides who to contact, what to say, or whether a signal is a fit. Pace every pull like a person reading. Cap results to what you need. No sensor here ships scraper code; each is a procedure a research agent follows with the vault's own tools.

Common contract for every sensor:

- **Consumes:** a query the brief decided (titles, repos, keywords, domains), a lookback window, a cap.
- **Provides:** rows as claims: subject, the signal, the date, the source URL, a confidence.
- **Empty:** zero hits returns an empty set, not an error. A non-zero exit is a retryable failure. A blocked surface is inconclusive.
- **Routes up:** fit to the brief's verdicts; copy to `outbound-and-follow-up`; spend to the owner.

## Funding events

Watch for recent funding announcements that match the brief's stages and industries.

1. Search a public, keyless news or community API for funding terms in the window. Add a paid social or forum search only after a cost flag.
2. Parse the stage and the amount from the text, best effort. Mark unparsed as unknown.
3. Score confidence by how many independent sources carry it, the stage match, and recency.
4. Write a trigger claim per company: stage, amount, date, investors if named, sources, confidence. Set the funding decay window from `defaults.md`.
5. Attach an angle label keyed to the stage. It is a label for the drafter, not copy.

## Hiring intent

Job postings say a company has budgeted for the problem you solve.

1. Take the title list the brief decided. A title is a proxy; the brief owns which titles count.
2. Pull postings for those titles from a board's partner API, or by occasional human-cadence reads. Never a standing pipeline.
3. Run an estimate-only pass first and show the cost before any paid search.
4. Group postings by company. Rate strength by count and seniority. Set the thresholds in the brief; the engine ships none.
5. Extract context from the description: stack named, growth language, pain words. Write it as claims with the posting URL.
6. Suggest a decision-maker title and an angle label. Both are for a human to judge.

## Repository interaction

For technical buyers, who interacts with a repository is a buyer-intent signal.

1. Take the repository list the brief decided.
2. Page every public interaction type through the platform's authenticated API: stars, forks, contributors, issues, pull requests, comments, watchers. Respect the rate limit; sleep when it runs low.
3. Dedupe users across repositories. Drop bots and organisation members.
4. Weight interaction depth. Choose your own weights in the brief; opening issues and pull requests usually outrank a star. Rank users who touch several repositories first.
5. Fetch profiles for the top N only. Write a claim per user with the interactions and the score. The score is arithmetic, not a verdict.

## Community forums

Community posts carry pain in the poster's own words.

1. Query a forum's public search API for the keyword set, inside the window, with the item type (story, comment, launch post).
2. Throttle between pages. Cap results.
3. Normalise rows: id, title, URL, author, points, comment count, created date, text. Sort by points.
4. In a quiet forum, sort by top of the week; "hot" returns nothing.
5. Always keep the source URL on the claim. Never a summary without links.
6. Which threads to act on is judgment. Reply drafts for human send; DMs almost never.

## Mail and sales stack

A company's public DNS and page source say what it runs. No login, no paid API.

1. Read the domain's MX, TXT, DMARC and known DKIM selector records.
2. Read the home page's source once and look for known script hosts and tracking tags.
3. Map each hit to the tool it names. Keep your own lookup table in the vault and re-verify it; vendors change hosts.
4. Read the DMARC policy as a maturity ladder: reject is strong, quarantine is enforcing, none is monitoring only, no record is open to spoofing.
5. Write a claim per finding with the evidence string and a confidence. A domain with no hits returns "no confirmed tools." That is a valid result, not a negative.
6. Whether a finding is an angle, and what to say about it, is the drafter's call.

## Landing page

A page's call to action is a sales-motion signal.

1. Fetch the page once.
2. Pull the button and link text. "Start free," "sign up," "get started" with no form reads self-serve. "Book a demo," "talk to sales," "get a quote" reads sales-led. Mixed across pages usually means self-serve with an enterprise lane.
3. Hidden blocks and left-in comments are mostly stale. Read the surrounding markup before calling a hit a signal. Never draft off a hidden-block guess without human confirmation.
4. No call to action is an empty read. Do not force a call from zero evidence.

## Registries

Government corporate registries are the cheapest rung of the waterfall. A resolved registration number is positive evidence of legal form and a stable join key. Its absence proves nothing. A registry never publishes the recipient's email, so it never grants a consent exemption on its own. The compliance rule rows say what each jurisdiction's registry can assert.
