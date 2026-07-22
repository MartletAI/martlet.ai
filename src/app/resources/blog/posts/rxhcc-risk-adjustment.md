# RxHCC Risk Adjustment | Martlet AI

**Date:** 07.16.2026  
**Thumbnail:** /assets/blog/rxhcc-risk-adjustment/cover.jpg  
**Description:** Learn what RxHCC is, how the RxHCC risk adjustment model works, and how it affects Medicare Part D payments and prescription drug cost predictions.  
**MetaTitle:** RxHCC Risk Adjustment | Martlet AI
**Tag:** Insights
**DefinedTermName:** RxHCC (Prescription Drug Hierarchical Condition Categories)
**DefinedTermDescription:** The risk adjustment model CMS uses for Medicare Part D that maps ICD-10-CM diagnosis codes to condition categories predicting prescription drug spending, combining them with demographic factors to produce a risk score used to adjust payments to prescription drug plans.

# RxHCC explained: how Medicare Part D risk adjustment affects your drug plan revenue

![Key aspects of RxHCC risk adjustment: purpose, how it works, data source, hierarchy system, and 2025-2026 updates](/assets/blog/rxhcc-risk-adjustment/rxhcc-risk-adjustment-infographic.jpg)

RxHCC stands for Prescription Drug Hierarchical Condition Categories. It is the risk adjustment model CMS uses specifically for Medicare Part D — the federal prescription drug benefit — to estimate how much each enrolled beneficiary is likely to spend on medications. Plans that cover members with more complex diagnoses receive higher payments from CMS to offset those expected drug costs.

The RxHCC model maps ICD-10-CM diagnosis codes to condition categories that predict prescription drug spending, then combines those categories with demographic factors to produce a risk score for each Part D enrollee. CMS uses those scores to adjust payments to drug plans, so plans covering sicker members are not systematically underfunded. Accurate diagnosis coding is what makes the model work — missed or uncoded conditions translate directly into payment gaps.

## What is the RxHCC model

The RxHCC model groups medical diagnoses into condition categories specifically chosen because they predict prescription drug utilization. Not every diagnosis that matters for general medical cost prediction — as in the CMS-HCC model — matters equally for drug costs. RxHCC categories reflect conditions with significant, predictable medication burdens: HIV/AIDS, multiple sclerosis, rheumatoid arthritis, diabetes, certain cancers, and end-stage renal disease, among others.

Each RxHCC category carries a relative weight reflecting the incremental expected drug cost for a beneficiary with that condition. The weights come from historical Part D spending data and are recalibrated periodically by CMS as drug costs and utilization patterns shift.

The model also uses a hierarchical structure similar to CMS-HCC. When related conditions exist at multiple severity levels, only the most severe category counts, preventing a patient's risk score from being inflated by counting the same underlying disease at multiple levels simultaneously.

Accurate coding matters here for the same reason it does in [RADV audits](/solutions/radv) for Medicare Advantage. Payments are tied to what is documented and coded, not what is clinically present but unrecorded.

## How RxHCC is used in Medicare Part D

CMS uses RxHCC scores to adjust the payments it makes to Prescription Drug Plans (PDPs) and Medicare Advantage Prescription Drug plans (MA-PDs). The logic mirrors Medicare Advantage capitation. A plan covering members with higher expected drug costs receives more per member per month than a plan covering healthier members.

Without this adjustment, drug plans would face a strong financial incentive to avoid enrolling members with chronic conditions that require expensive medications. Risk adjustment removes that incentive by calibrating payments to the actual drug cost burden each plan carries.

[Prospective Risk Adjustment](/solutions/prospective-risk-adjustment) programs support RxHCC accuracy by ensuring that chronic conditions are documented in current-year encounters before the data submission window closes. [Retrospective Risk Adjustment](/solutions/retrospective-risk-adjustment) reviews completed records to recover diagnoses that were present but not coded at the time of service. Both matter for Part D plans, though the mechanisms and deadlines differ somewhat from Medicare Advantage.

## How RxHCC risk scores are calculated

A beneficiary's RxHCC score starts with a demographic base derived from age, sex, and Part D low-income subsidy (LIS) status, then adds condition-based weights for each RxHCC category present in the record.

| Component | Example value |
| --- | --- |
| Demographic base (age/sex/LIS status) | 0.284 |
| RxHCC 40 — HIV/AIDS | 2.817 |
| RxHCC 130 — Diabetes with complications | 0.412 |
| Total RxHCC score | 3.513 |

A score of 3.513 tells CMS this member is expected to spend roughly 3.5 times the average Part D beneficiary on prescription drugs. The plan's payment adjusts accordingly.

## The relationship between RxHCC and HCC models

CMS-HCC and RxHCC share the same general architecture but serve different purposes and cover different condition sets. CMS-HCC predicts total medical costs for Medicare Advantage capitation. RxHCC predicts prescription drug costs for Part D payments. A diagnosis can map to both models, one model, or neither.

| Feature | CMS-HCC | RxHCC |
| --- | --- | --- |
| Program | Medicare Advantage | Medicare Part D |
| Predicts | Total medical costs | Prescription drug costs |
| Payment type | Monthly capitation to MA plan | Payment adjustment to drug plan |
| Condition focus | Broad medical complexity | Drug-cost-driving conditions |
| Key audit | RADV | Part D risk corridor |

Some high-cost drug conditions — HIV/AIDS being the clearest example — carry much higher relative weights in RxHCC than in CMS-HCC because drug costs dominate total care costs for those patients. Understanding which model a given diagnosis affects, and how much, is necessary for any organization managing both MA and Part D risk adjustment programs.

## Why accurate diagnosis coding matters in RxHCC

Every RxHCC category that is not coded is a payment gap. A Part D plan covering a member with multiple sclerosis who takes a disease-modifying therapy costing $60,000 annually will not receive risk-adjusted payment for that cost unless the MS diagnosis is coded in a qualifying encounter.

The annual recapture requirement applies here as it does in CMS-HCC. Diagnoses must appear in current-year encounter data to count in the current payment year. Conditions documented in prior years but not carried forward into current encounters drop out of the risk score, even if the patient is still actively treated for them.

Coding specificity matters as well. A diagnosis coded at a lower specificity than the documentation supports may map to a lower-weighted RxHCC category or miss the category entirely. The difference in payment weight between a well-specified and an underspecified code can be significant for high-cost drug conditions.

## Challenges in RxHCC risk adjustment

A few recurring problems affect RxHCC accuracy across Part D plans.

Documentation gaps for specialty conditions are the most common. High-cost RxHCC conditions are often managed by specialists who do not always submit encounter data in formats that feed into risk adjustment calculations. A neurologist managing MS or an oncologist managing a cancer diagnosis may document thoroughly in their own system while that data never reaches the plan's risk adjustment submission.

New drug costs outpacing model calibration is the second structural challenge. CMS recalibrates RxHCC weights periodically, but novel therapies — including gene therapies and specialty biologics — can create cost patterns that current model weights do not fully capture. Plans covering members on newer high-cost drugs may find that risk adjustment payments lag behind actual costs.

LIS status complexity creates a third gap. Low-income subsidy status interacts with the demographic component of RxHCC scoring in ways that require careful data management. Errors in LIS status data affect the demographic base before any condition-based weights are applied.

## Technology and data analytics in RxHCC programs

Identifying RxHCC coding gaps at plan scale requires systematic analysis that manual review cannot deliver efficiently.

Pharmacy data is a particularly useful signal. A member filling a specialty medication for a condition that does not appear anywhere in their encounter history is a high-probability coding gap. Analytics platforms that cross-reference pharmacy claims against diagnosis codes surface these mismatches quickly and direct coding teams to the right records.

Clinical NLP tools extend this to unstructured clinical notes, identifying documented conditions in specialist notes and discharge summaries that never made it into coded encounter data. The practical output is a prioritized worklist for coding teams — the highest-probability gaps, with the supporting documentation already surfaced.

The meaningful distinction among AI platforms is whether the underlying models are healthcare-specific from the ground up or general-purpose models applied to clinical text as a secondary use case. Those two architectures behave very differently on the core task of linking clinical text to condition categories and validating documentation adequacy. Independent, peer-reviewed benchmarking is the right standard to hold any platform to.

## Accurate RxHCC coding keeps Part D payments aligned with actual drug cost burden

The RxHCC model is the financial foundation of Medicare Part D payment accuracy. It ensures that drug plans covering members with complex, high-cost conditions receive payments calibrated to that complexity rather than averaging it away. When diagnosis coding is accurate and complete, the model works as designed. When chronic conditions go undocumented or uncoded, plans absorb drug costs that the payment system did not account for.

If you are evaluating how Martlet AI supports RxHCC coding accuracy through NLP-driven gap identification and documentation review, [see how the platform works](/solutions/retrospective-risk-adjustment) or [schedule a working session with the team](https://meetings.hubspot.com/ritwik-jain?uuid=0616cd42-5ffd-4a4f-8c09-a3ccfee6dab1).

## FAQ

### What does RxHCC stand for?

RxHCC stands for Prescription Drug Hierarchical Condition Categories. It is the name of the risk adjustment model CMS uses to predict prescription drug spending for Medicare Part D beneficiaries and adjust payments to drug plans accordingly.

### How does the RxHCC model work?

The model maps ICD-10-CM diagnosis codes to condition categories that predict drug costs, then combines those category weights with demographic factors — age, sex, and low-income subsidy status — to produce a risk score for each enrollee. CMS uses that score to adjust the monthly payment a Part D plan receives for that member.

### What is the difference between RxHCC and HCC?

CMS-HCC predicts total medical costs and drives Medicare Advantage capitation payments. RxHCC predicts prescription drug costs and drives Medicare Part D payment adjustments. Both use hierarchical condition categories and ICD-10-CM diagnosis codes, but the condition sets, weights, and payment programs are distinct.

### Why is RxHCC important for Medicare Part D plans?

Without risk adjustment, Part D plans would receive the same payment for a member taking a $60,000 specialty drug and a member taking a $200 generic. RxHCC corrects for that by adjusting payments to reflect each member's expected drug costs. Plans that code accurately receive payments that cover their actual drug cost burden; plans with coding gaps are underpaid.

### How can healthcare organizations improve RxHCC accuracy?

Cross-referencing pharmacy claims against coded diagnoses identifies the clearest gaps — members filling medications for conditions that do not appear in encounter data. Prospective outreach to ensure annual recapture of chronic conditions, combined with retrospective chart review for specialty care records, closes most of the remaining gap. Technology platforms that apply NLP to unstructured clinical notes can identify documented conditions that never reached coded encounter data.
