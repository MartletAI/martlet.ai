# Medicare Advantage Rates and How Payments Are Calculated | Martlet AI

**Date:** 07.09.2026  
**Thumbnail:** /assets/blog/medicare-advantage-rates/cover.jpg  
**Description:** Learn what Medicare Advantage rates are, how CMS calculates payments to health plans, and how risk adjustment and benchmarks affect reimbursement.  
**MetaTitle:** Medicare Advantage Rates and How Payments Are Calculated
**Tag:** Insights
**DefinedTermName:** Medicare Advantage Rates
**DefinedTermDescription:** The monthly per-member payments CMS makes to private health plans administering Medicare Advantage coverage, calculated from county benchmarks, plan bids, and risk adjustment (RAF) scores derived from HCC coding.

# Medicare Advantage Rates

![Medicare Advantage Rates infographic](/assets/blog/medicare-advantage-rates/medicare-advantage-rates-infographic.jpg)

Every private insurer running a Medicare Advantage plan gets paid by the federal government to do it. Those payments — monthly, per member, calibrated to expected costs — are what make the MA market function. Set them too low and plans exit markets or cut benefits. Set them too high and federal spending balloons beyond what the program can sustain. CMS spends considerable effort each year trying to get that balance right.

Medicare Advantage rates are monthly per-member payments CMS makes to private health plans, calculated from county benchmarks, plan bids, and risk adjustment scores. RAF scores derived from HCC coding adjust each member's payment up or down based on expected health costs. CMS updates rates annually, and those updates ripple through plan benefits, premiums, and insurer strategy.

## What are Medicare Advantage rates

Medicare rates in the Advantage context are the monthly payments CMS sends to private insurers for each enrolled beneficiary. They are not reimbursements for specific services delivered. They are capitated payments: the plan receives a fixed amount per member per month and takes on financial responsibility for that member's covered healthcare costs.

The logic behind capitation is that it shifts incentives. A plan that keeps members healthy spends less than it receives and comes out ahead. A plan that manages chronic conditions poorly spends more. The payment structure is supposed to reward better care management rather than higher service volume.

What makes Medicare Advantage rates more complicated than flat capitation is the risk adjustment layer on top. Not every member costs the same to care for. A healthy 67-year-old and a 78-year-old managing heart failure, diabetes, and CKD simultaneously are not comparable care burdens. The payment system accounts for that difference through risk scores rather than assuming average costs apply to everyone.

## How CMS determines Medicare Advantage payment rates

The annual rate-setting process runs on a public timeline. CMS publishes an Advance Notice early in the year, invites comments from plans and stakeholders, then releases the final Rate Announcement — typically in early April — with the rates that take effect the following January.

The foundation of every payment is the county-level benchmark. CMS calculates benchmarks from traditional Medicare spending in each county, adjusted upward or downward based on plan quality star ratings. A plan with a four-star or higher rating receives a higher benchmark than a lower-rated plan in the same county.

Medicare rate calculations then factor in what each plan submitted as its bid — an estimate of what it costs to provide the standard Medicare benefit package to an average beneficiary in its service area. The relationship between the bid and the benchmark determines whether the plan receives a rebate.

Prospective Risk Adjustment programs affect this calculation by ensuring that members' documented health complexity is captured before the data submission deadline. Better documentation going into the risk adjustment calculation produces more accurate payments coming out of it. Retrospective Risk Adjustment programs catch what prospective workflows missed, recovering legitimate diagnoses from completed records to include in the final submission.

## The role of risk adjustment in Medicare Advantage payments

Medicare Advantage risk adjustment exists because capitation without adjustment creates a perverse incentive: plans do better financially by enrolling healthier members. If a plan receives the same payment for a diabetic with heart failure as it does for a healthy retiree, the simplest path to profit is patient selection rather than care quality.

Risk adjustment removes that incentive by calibrating payments to expected costs. CMS uses the CMS-HCC model — currently V28 — to calculate a Risk Adjustment Factor score for each member. That score reflects the member's demographic profile combined with their documented chronic conditions. Plans that enroll sicker members receive proportionally higher payments. Plans whose populations are healthier receive proportionally lower payments.

The practical result is that a plan cannot game its way to profitability by cherry-picking enrollment. It gets paid more for the members who cost more to care for, and it gets paid less for members who cost less. The payment follows the risk, not the other way around.

Medicare risk adjustment also creates an accountability structure. Plans that document and code chronic conditions accurately get payments that match their actual care costs. Plans with coding gaps get underpaid. The financial pressure to close those gaps is built into the payment model.

| Member profile | Approximate RAF | Monthly payment at $900 benchmark |
| --- | --- | --- |
| Healthy 67-year-old male | 0.40 | $360 |
| 72-year-old female, hypertension only | 0.65 | $585 |
| 75-year-old male, diabetes with CKD | 1.15 | $1,035 |
| 80-year-old female, CHF, atrial fibrillation, depression | 1.75 | $1,575 |

## How RAF scores affect Medicare Advantage rates

A member's RAF score is the multiplier that converts the county benchmark into the plan's actual monthly payment for that person. CMS calculates scores from two inputs: demographic factors like age and sex, and HCC weights from ICD-10-CM diagnoses documented in qualifying encounters during the model year.

Medicare Advantage reimbursement for a specific member works as follows: take the county benchmark, multiply it by the member's RAF score, and that is the monthly payment. A benchmark of $900 and a RAF of 1.3 means a $1,170 payment. The same benchmark with a RAF of 0.8 means $720.

Across a plan with tens of thousands of members, the aggregate RAF score drives total revenue. A plan with 50,000 members and an average RAF of 1.2 receives 20% more per month than the same plan with an average RAF of 1.0 at any given benchmark level. At a $900 benchmark, that gap is $180 per member per month — or $108 million annually.

RADV audits are how CMS verifies that RAF scores are legitimate. When CMS selects records for audit, it checks whether submitted HCC diagnoses are supported by medical record documentation. Plans with unsupported codes face recoupment of the associated payments. Since 2023, CMS has applied extrapolated error rates across plan populations rather than limiting recoupment to sampled records, which significantly raised the financial stakes of documentation accuracy.

## Benchmarks, bids, and rebates in Medicare Advantage

The benchmark-bid relationship is where plan strategy and CMS payment mechanics intersect.

Each year, plans submit bids estimating their cost to provide standard Medicare benefits to an average-risk beneficiary. If a plan's bid comes in below the benchmark, CMS returns a percentage of the difference to the plan as a rebate. That rebate must be spent on additional benefits for enrollees — dental, vision, hearing, or reduced premiums. It is the financial mechanism that has enabled many MA plans to offer richer benefit packages than traditional Medicare provides.

Medicare Advantage reimbursement rates vary considerably by county because benchmarks are county-specific. A plan operating in a high-benchmark county has more room between its bid and the benchmark than the same plan in a low-benchmark county. Plans in markets with expensive traditional Medicare spending tend to have higher benchmarks, which gives them more rebate to work with.

Star ratings complicate this further. CMS applies a quality bonus to benchmarks for highly rated plans. A plan with a five-star rating in the same county as a three-star plan operates from a higher benchmark, which affects both the rebate calculation and the risk-adjusted payment amounts.

## Annual updates to Medicare Advantage rates

The Advance Notice and Rate Announcement cycle runs every year without exception. CMS publishes the Advance Notice in February, opens a 30-day comment period, and finalizes rates in the Rate Announcement typically published in early April.

The annual update incorporates changes in traditional Medicare spending trends, updates to the risk adjustment model, adjustments to county benchmarks, changes to the star rating methodology, and any policy adjustments implemented since the prior year.

The cumulative effect of these updates can shift plan economics meaningfully. The V28 model transition put downward pressure on average RAF scores for most plans because it removed diagnosis codes that did not reliably predict costs. The 2024 and 2025 rate announcements absorbed some of that impact through the phase-in structure, but plans that did not adapt their coding programs during the transition period are facing the full effect from 2026 onward.

## How rate changes affect Medicare Advantage plans

Rate increases and decreases do not just affect revenue — they ripple through plan operations in predictable ways.

When rates increase, plans typically have more rebate to work with and can enhance supplemental benefits, reduce premiums, or expand service areas. When rates decrease or increase less than expected costs, plans face pressure to cut benefits, raise premiums, or exit unprofitable markets.

Insurers model rate scenarios well before CMS publishes the final Rate Announcement. The Advance Notice gives them a preview. Plans use that window to stress-test their bids, adjust benefit packages for the following year, and evaluate whether their coding and risk adjustment programs need to change to hold RAF scores in a tighter payment environment.

The market has been consolidating toward larger national and regional plans in part because scale provides more predictability in this environment. A plan with a million members can absorb a 1% rate reduction more easily than a plan with 20,000 members in a single market.

## The future of Medicare Advantage payment models

A few debates are worth watching.

Risk adjustment accuracy has been a persistent policy issue. Concerns that some plans systematically over-code to inflate RAF scores have prompted CMS to tighten the RADV audit methodology and apply extrapolated error rates. Further scrutiny is likely. Plans with aggressive supplemental data programs that are not backed by thorough documentation face more audit risk than they did five years ago.

Benchmark methodology is also under review. Some policy researchers argue that tying MA benchmarks to fee-for-service spending in the same county creates inequities, since traditional Medicare costs vary significantly across markets for reasons unrelated to clinical need. Alternative benchmark structures have been proposed but not adopted at scale.

Value-based care integration is pushing some payers and provider groups toward arrangements where risk adjustment accuracy matters not just for plan-to-CMS payments but for internal plan-to-provider payments as well. As more providers take on capitated or global budget contracts within MA, the quality of HCC coding at the provider level carries direct financial consequences for the provider, not just the plan.

## Medicare Advantage rates connect documentation quality to financial performance at plan scale

Medicare Advantage rates are the financial foundation of the entire MA market. They determine what plans can afford to offer, where they can operate profitably, and how much pressure they face to manage care costs effectively. The rate-setting process is technical, but the downstream effects are concrete: plan benefits, member premiums, provider contracts, and the financial viability of individual plan markets all flow from how CMS sets and adjusts these payments each year.

For health plans, the practical implication is consistent: RAF scores matter, documentation accuracy matters, and the gap between what a plan's population actually costs and what risk adjustment captures determines whether the plan is being paid fairly for the risk it carries.

If you are evaluating how Martlet AI supports Medicare Advantage plans with HCC coding accuracy and risk adjustment analytics inside your environment, [see how the platform works](/solutions/retrospective-risk-adjustment) or [schedule a working session with the team](https://meetings.hubspot.com/ritwik-jain?uuid=0616cd42-5ffd-4a4f-8c09-a3ccfee6dab1).

## FAQ

### What are Medicare Advantage rates?

Medicare Advantage rates are the monthly per-member payments CMS makes to private health plans that administer Medicare Advantage coverage. These payments replace the fee-for-service reimbursements that traditional Medicare uses, giving plans a fixed monthly amount per enrollee and the financial responsibility for covered care costs.

### How are Medicare Advantage payments calculated?

Payments start with a county-level benchmark based on traditional Medicare spending in that area, adjusted for plan star ratings. Each plan submits a bid estimating its cost to cover standard Medicare benefits for an average member. The relationship between the bid and the benchmark determines the plan's rebate. The benchmark is then multiplied by each member's RAF score to produce the actual monthly payment for that individual.

### What role does risk adjustment play in Medicare Advantage rates?

Risk adjustment prevents plans from being penalized financially for enrolling sicker members. CMS calculates a RAF score for each member using demographic factors and HCC-coded diagnoses from qualifying encounters. Higher scores mean higher monthly payments. The adjustment ensures plans that enroll complex, high-cost populations receive payments calibrated to those costs rather than being averaged down to a benchmark designed for healthier members.

### How often are Medicare Advantage rates updated?

CMS updates rates annually through the Advance Notice and Rate Announcement process. The Advance Notice publishes in February with preliminary rates. The final Rate Announcement follows in early April. Updated rates take effect January 1 of the following year.

### Why do RAF scores affect Medicare Advantage payments?

RAF scores are the mechanism that converts a county benchmark into the actual payment for a specific member. A member with a RAF of 1.5 generates a payment 50% above the benchmark; a member with a RAF of 0.7 generates a payment 30% below it. Across a plan's full membership, aggregate RAF scores determine total revenue. Accurate HCC coding is what ensures those scores reflect the real health complexity of the population.
