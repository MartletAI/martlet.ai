# Risk Adjustment Factor (RAF) Scores | Martlet AI

**Date:** 06.25.2026  
**Thumbnail:** /assets/blog/risk-adjustment-factor/cover.jpg  
**Description:** Learn what the Risk Adjustment Factor (RAF) is, how RAF scores are calculated using HCC coding, and why they matter for healthcare reimbursement.  
**MetaTitle:** Risk Adjustment Factor (RAF) Scores | Martlet AI
**Tag:** Insights
**DefinedTermName:** Risk Adjustment Factor (RAF)
**DefinedTermDescription:** A numeric score that estimates a patient's expected healthcare costs relative to the average beneficiary in a program, calculated from demographic factors (age and sex) and ICD-10-CM diagnoses mapped to Hierarchical Condition Categories, where a score of 1.0 represents the average Medicare beneficiary.

# What your RAF score actually reveals about your risk adjustment program

![Risk Adjustment Factor (RAF) infographic](/assets/blog/risk-adjustment-factor/risk-adjustment-factor-infographic.jpg)

The Risk Adjustment Factor (RAF) is a numeric score that healthcare payment systems use to estimate how much a given patient is likely to cost relative to the average person in the same program. It is built from two inputs: who the patient is demographically, and what chronic conditions are documented in their medical record. A higher RAF score means higher predicted costs and, in programs like Medicare Advantage, higher monthly payments to the health plan covering that member.

RAF scores are calculated from a patient's age, sex, and ICD-10-CM diagnosis codes mapped to Hierarchical Condition Categories (HCCs). In Medicare Advantage, a higher RAF score means CMS pays the health plan more to cover that member's expected care costs. Accurate clinical documentation and HCC coding directly determine whether a plan's RAF scores reflect the true health complexity of its population.

## What is a Risk Adjustment Factor

A RAF score is a measure of patient health complexity. The baseline score of 1.0 represents the average Medicare beneficiary. A patient with a RAF of 1.4 is expected to cost 40% more than average to care for. A patient with a RAF of 0.7 is expected to cost 30% less. Those ratios translate directly into payment adjustments.

In practical terms, RAF scoring is the mechanism that makes risk-based payment models financially viable. Without it, health plans that enrolled sicker patients would consistently lose money, while plans that enrolled healthier members would profit regardless of care quality. RAF scoring levels the field by adjusting payments to reflect the actual health burden each plan carries.

The RAF score meaning extends beyond Medicare Advantage. The same underlying logic appears in ACA marketplace risk adjustment, Medicaid managed care programs, and value-based contracts between payers and providers. Anywhere a fixed or capitated payment needs to account for variation in patient health complexity, some version of risk adjustment scoring is at work.

Two workflows drive how health plans manage RAF accuracy across a plan year. [Prospective Risk Adjustment](https://www.martlet.ai/solutions/prospective-risk-adjustment) works before or during the plan year to identify chronic conditions that are present in a patient's history but have not been documented in a current encounter — clinical outreach, care gap closure, and supplemental data programs all serve this purpose. [Retrospective Risk Adjustment](https://www.martlet.ai/solutions/retrospective-risk-adjustment) reviews completed encounters after the service year closes to ensure every supported diagnosis made it into the final risk adjustment data submission to CMS.

Both matter. Prospective programs improve care coordination and RAF accuracy at the same time. Retrospective reviews catch legitimate diagnoses that fell through the cracks of the coding process.

## How RAF scores are calculated

A patient's RAF score is the sum of several components added together. The underlying model has hundreds of parameters, but the structure is consistent.

Demographic factors come first. Age and sex each carry a coefficient derived from historical Medicare cost data. An 80-year-old woman has a different baseline than a 65-year-old man, and those demographic factors set the floor for the score before any diagnoses are considered.

Diagnosis-based factors layer on top. Each ICD-10-CM diagnosis code that appears in a qualifying encounter gets mapped to an HCC category, and each HCC carries a numeric weight reflecting the expected incremental cost of that condition. Those weights are added to the demographic base to produce the final RAF score.

Hierarchical adjustments prevent double-counting. When a patient has multiple related conditions at different severity levels, only the most severe HCC in that hierarchy counts. A patient with both diabetes without complications (HCC 19) and diabetes with chronic kidney disease (HCC 18) gets credit for HCC 18, not both.

Interaction factors add a fourth layer. CMS-HCC V28 includes interaction terms for specific combinations of conditions that tend to drive costs higher than either condition alone. Diabetes combined with congestive heart failure, for example, carries an interaction factor that adds to the score beyond what each HCC contributes individually.

| Component | Example value |
| --- | --- |
| Demographic base (age/sex) | 0.379 |
| HCC 18 — Diabetes with CKD | 0.318 |
| HCC 85 — Congestive heart failure | 0.331 |
| HCC 85 + HCC 18 interaction | 0.121 |
| **Total RAF score** | **1.149** |

That 1.149 tells CMS this member is expected to cost about 15% more than the average Medicare beneficiary, and the plan's monthly capitated payment adjusts accordingly.

## The role of HCC coding in RAF scores

ICD-10-CM codes are the raw input. HCCs are the payment-relevant output. The mapping between the two is what makes HCC coding the most consequential coding work in risk adjustment.

CMS maintains a crosswalk that assigns ICD-10-CM codes to HCC categories. Under the V28 model, there are approximately 115 payment-relevant HCC categories covering major chronic conditions — cardiovascular disease, diabetes, chronic kidney disease, COPD, cancer, major psychiatric disorders, and others. Thousands of ICD-10-CM codes map to these categories; many others map to nothing, meaning they carry no RAF impact regardless of how accurately they are coded.

The risk adjustment factor calculation depends entirely on which HCC-eligible diagnoses appear in the patient's record for the current model year. A diagnosis from two years ago does not count unless it is documented again in the current year. This is the annual recapture requirement: conditions must be documented, evaluated, treated, or managed — the MEAT criteria — in a face-to-face encounter during the model year to generate an HCC flag.

HCC RAF accuracy also has a compliance dimension. CMS runs [RADV](https://www.martlet.ai/solutions/radv) — Risk Adjustment Data Validation — audits to verify that submitted HCC diagnoses are supported by medical record documentation. Plans that submit codes without adequate documentation face recoupment of the associated payments. The audit methodology has tightened significantly since 2023, with extrapolated error rates now applying plan-wide rather than only to sampled records.

What this means operationally: every HCC-eligible diagnosis in a submission needs to be traceable back to a specific encounter note that documents the condition and the clinical management of it. Coders working in risk adjustment are not just applying codes accurately — they are building an audit-defensible record.

## Why RAF scores matter for healthcare payments

RAF healthcare payments work on a capitation model. CMS calculates a county-level benchmark rate representing what it would cost to care for an average beneficiary in that area under traditional Medicare, then multiplies that benchmark by each member's RAF score to determine how much the health plan receives for that member per month.

A plan with 10,000 members and an average RAF of 1.2 receives 20% more per member per month than it would if those same members had an average RAF of 1.0. At typical Medicare Advantage benchmarks, that gap runs to several hundred dollars per member per month. Across a plan of that size, the annual revenue difference is substantial.

This is why accurate RAF scoring matters to health plan finances — and why CMS cares about audit accuracy. Systematic over-coding inflates RAF scores above what the actual patient population warrants, shifting federal dollars toward plans in ways CMS did not intend. RADV exists specifically to detect and recover those overstatements.

From the provider side, RAF scores are increasingly relevant in value-based contracts where physician groups or accountable care organizations take on financial risk for a defined population. If the population's RAF scores do not reflect actual health complexity, the capitated or global budget payment will not cover costs, and the provider absorbs the shortfall.

## Examples of RAF score calculations

The examples below show how demographics and chronic conditions combine to produce different risk profiles. All patient data is synthetically generated for illustration.

### Example 1: Relatively healthy beneficiary

A 67-year-old male with hypertension and no other chronic conditions.

| Component | Value |
| --- | --- |
| Demographic base (age/sex) | 0.302 |
| HCC contribution | 0.105 |
| **Total RAF** | **0.407** |

CMS pays below the county average for this member because his expected costs are below average.

### Example 2: Complex chronic disease patient

A 74-year-old female with type 2 diabetes with peripheral circulatory complications, stage 3 chronic kidney disease, and moderate persistent asthma.

| Component | Value |
| --- | --- |
| Demographic base (age/sex) | 0.421 |
| HCC 18 — Diabetes with CKD | 0.318 |
| HCC 136 — Asthma | 0.155 |
| Interaction factor | 0.089 |
| **Total RAF** | **0.983** |

Close to the average benchmark — this patient's conditions are significant but do not push her into the highest cost tiers.

### Example 3: High-complexity patient

An 81-year-old male with congestive heart failure, atrial fibrillation, stage 4 CKD, and major depression.

| Component | Value |
| --- | --- |
| Demographic base (age/sex) | 0.524 |
| HCC 85 — CHF | 0.331 |
| HCC 96 — Atrial fibrillation | 0.201 |
| HCC 138 — Major depression | 0.212 |
| HCC 140 — CKD stage 4 | 0.289 |
| Interaction factors | 0.198 |
| **Total RAF** | **1.755** |

CMS pays the plan 75% more than the county average for this member. That is the model working as intended: a plan that takes on a patient this complex receives payment calibrated to what that complexity actually costs.

## Common challenges in accurate RAF scoring

Getting RAF scores right consistently is harder than the formula suggests. Several failure points show up repeatedly across health plans of all sizes.

Incomplete annual recapture is the most common. Chronic conditions require annual documentation to count in the current model year. A patient with well-managed diabetes who sees a specialist but not a primary care physician may have the condition documented somewhere, but not in a qualifying encounter that CMS accepts. The condition exists, the cost is real, but if it does not appear in a face-to-face encounter with appropriate documentation, the HCC does not count.

Coding specificity gaps are the second major source of RAF leakage. ICD-10-CM has hundreds of diabetes codes alone. Some map to high-weight HCCs; others map to lower-weight ones or nothing at all. Coders who default to the least specific code available — often because that is what the documentation supports — leave RAF value behind that the patient's true condition would justify if it were properly documented.

Physician documentation habits drive much of the specificity problem upstream. Coders can only code what is documented. If a physician lists "diabetes" without specifying type, complications, or current management, the coder does not have enough to assign the most accurate HCC. This is a documentation education problem as much as a coding one.

Retrospective submission errors create a fourth gap. Health plans sometimes identify legitimate diagnoses through retrospective chart review but fail to submit them correctly in the supplemental data process. Timing errors, encounter format issues, and data submission mistakes all create gaps between what the chart supports and what actually reaches CMS.

Over-coding risk sits at the other end of the spectrum. Codes submitted without adequate documentation support create audit exposure. Plans that push RAF scores higher than their documentation warrants are exactly what RADV is designed to catch.

## Technology and AI in risk adjustment analysis

Processing the volume of medical records that risk adjustment requires at health plan scale — hundreds of thousands to millions of member-years annually — is not feasible with manual review alone. Technology has become a standard part of how plans close the gap between what is documented and what gets coded.

Clinical NLP models trained on physician notes, discharge summaries, and specialist reports can surface HCC-eligible diagnoses and MEAT-criterion evidence across large record sets. The output gives coding teams a prioritized worklist — charts most likely to contain under-coded chronic conditions, with the supporting text already identified.

Automated HCC gap identification uses models trained on claims history and prior coding data to predict which members are likely to have conditions present but undocumented in the current year. Prospective outreach programs use this to direct care coordination resources toward members where the clinical and financial gap is largest.

Coding accuracy validation cross-checks submitted codes against documentation before final submission, flagging cases where code specificity does not match what the note actually supports. This catches both under-coding and over-coding before the submission window closes.

RADV preparation platforms track documentation status across sampled records and model expected payment error, giving compliance teams a significant head start on the audit response.

The meaningful distinction among AI platforms is whether the underlying models are healthcare-specific from the ground up — trained on the language of physician notes, problem lists, and care plans — or general-purpose models applied to clinical text as a secondary use case. Those two architectures behave very differently on the core task of linking clinical text to HCC conditions and validating MEAT evidence. Independent, peer-reviewed benchmarking is the right standard to hold any platform to.

## RAF accuracy is a financial and compliance foundation, not a reporting exercise

RAF scores are the financial mechanism that makes risk-based payment work. They translate patient health complexity into calibrated payments that account for what different populations actually cost to care for. When RAF scores are accurate, health plans can afford to enroll sicker patients without absorbing losses, and CMS pays in proportion to the care burden each plan carries.

Getting there requires accurate annual documentation of chronic conditions, HCC coding at the right level of specificity, and audit-defensible records for every submitted diagnosis. Plans that invest in the clinical documentation, coding infrastructure, and technology to do this consistently earn more accurate revenue and absorb audits with less disruption. Those that do not leave money behind and accumulate audit risk at the same time.

If you are evaluating how Martlet AI supports RAF accuracy through NLP-driven chart review and HCC coding automation, [see how the platform works](/solutions/retrospective-risk-adjustment) or [schedule a working session with the team](https://meetings.hubspot.com/ritwik-jain?uuid=0616cd42-5ffd-4a4f-8c09-a3ccfee6dab1).

## FAQ

### What is a Risk Adjustment Factor (RAF)?

A Risk Adjustment Factor is a numeric score that estimates a patient's expected healthcare costs relative to the average beneficiary in a given program. Scores above 1.0 indicate above-average expected costs; scores below 1.0 indicate below-average costs. In Medicare Advantage, CMS multiplies a member's RAF score by the county benchmark rate to determine the health plan's monthly capitated payment for that member.

### How is a RAF score calculated?

RAF scores combine demographic factors — age and sex coefficients derived from historical cost data — with diagnosis-based factors: HCC weights assigned to ICD-10-CM codes documented in qualifying encounters during the model year. Hierarchical adjustments prevent double-counting of related conditions at different severity levels, and interaction terms add additional weight for specific high-cost condition combinations.

### Why are RAF scores important in Medicare Advantage?

Medicare Advantage plans receive a fixed monthly payment per member from CMS. That payment is adjusted upward or downward based on each member's RAF score. A plan serving a sicker population with accurately documented RAF scores receives payments calibrated to that population's actual cost burden. Without risk adjustment, plans would have a financial incentive to avoid enrolling high-cost members.

### What role does HCC coding play in RAF scores?

HCC coding converts clinical diagnoses into RAF score components. ICD-10-CM codes from qualifying encounters are mapped to HCC categories, and each category carries a numeric weight that adds to the patient's base demographic score. Conditions that are not coded — or are coded at insufficient specificity — do not generate HCC flags and do not contribute to the RAF score, even if the patient actually has those conditions.

### How can healthcare organizations improve RAF score accuracy?

Four areas drive most of the improvement: annual recapture of chronic conditions in qualifying face-to-face encounters, physician documentation education to support code specificity, retrospective chart review to catch legitimate diagnoses that were not coded at the time of service, and technology-assisted coding workflows that flag HCC-eligible conditions before the submission window closes. RADV audit preparation is worth treating as a continuous process rather than a reactive one.
