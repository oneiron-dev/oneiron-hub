# Amazon SES

Checked 2026-10-21. Three questions stay apart: does the law allow the send, does the AWS contract allow it, will the recipient's provider place it. SES answers the second only.

## The terms

The AWS acceptable use policy prohibits facilitating "unsolicited mass email … promotions, advertising, or solicitations". SES says it investigates unsolicited or low-quality email. A production-access request asks you to confirm that recipients explicitly requested your mail. The wording is narrower than Resend's express ban on all cold outreach; a cold campaign still sits squarely in review territory. SES is not a cold-email loophole because its API accepts a message.

## Quotas

| state | limit |
|---|---|
| sandbox | 200 messages per rolling 24 hours; 1 message a second; verified recipients or the simulator only |
| production | account- and region-specific; recipients count, not messages; a separate maximum send rate |

At the limit the API or SMTP throttles or rejects. The real quota is the account's Service Quotas value, not an internet number.

## Enforcement lines

| metric | best | review | possible pause |
|---|---|---|---|
| bounces | under 2% | 5% or more | 10% or more |
| complaints | under 0.1% | 0.1% or more | 0.5% or more |

SES computes these on its own representative volume, not on the loop's last 100 sends. It can pause for severe abuse without a review first.

## Loop default

Use SES for requested or permission-based traffic. Not for cold-list bulk. The loop's own lines are tighter than SES's: bounce pause at 2%, complaint review at 0.1%.

## If you override

A cold list on SES risks account review, a sending pause or disabled access. Paying, or leaving the sandbox, does not change the policy. The 5% and 10% lines are external triggers, not operating targets.

Sources: `../sources.md` (SES1, SES2, SES3, SES4).
