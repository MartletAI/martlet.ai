# HCC Risk Adjustment Coding in Healthcare | Martlet AI

**Date:** 07.07.2026  
**Thumbnail:** /assets/blog/hcc-risk-adjustment-coding/cover.jpg  
**Description:** Learn how HCC risk adjustment coding works, how diagnoses influence RAF scores, and why accurate coding is critical for healthcare reimbursement.  
**MetaTitle:** HCC Risk Adjustment Coding in Healthcare
**Tag:** Insights
**DefinedTermName:** HCC Risk Adjustment Coding
**DefinedTermDescription:** The process of assigning ICD-10-CM diagnosis codes to patient encounters and mapping them to Hierarchical Condition Categories that contribute to a member's RAF score, which in Medicare Advantage determines the monthly per-member payment CMS makes to health plans.

# HCC risk adjustment coding: the documentation mistakes that trigger RADV audits

![HCC Risk Adjustment Coding infographic](/assets/blog/hcc-risk-adjustment-coding/hcc-risk-adjustment-coding-infographic.jpg)

Billing in Medicare Advantage does not work the way it does in fee-for-service. Providers do not get paid per procedure. Health plans receive a monthly per-member payment from CMS, and the size of that payment depends on how sick each member is expected to be. HCC risk adjustment coding is what feeds that calculation. Diagnosis codes from patient encounters get mapped to condition categories, those categories produce a risk score, and that score determines what CMS pays.

HCC coding converts ICD-10-CM diagnosis codes into Hierarchical Condition Category flags that contribute to a patient's RAF score. RAF scores drive per-member monthly payments in Medicare Advantage. If chronic conditions are not documented and coded every year, they do not count — and the plan does not get paid for them.

## What is HCC coding

Hierarchical Condition Categories are groupings of related diagnoses that represent similar levels of clinical severity and expected healthcare cost. CMS designed the HCC system to translate individual diagnosis codes into something the payment model can use: a numeric signal for how much a given patient is likely to cost relative to the average Medicare beneficiary.

HCC coding meaning in practice is about chronic disease documentation. Most HCC-eligible conditions are serious, ongoing illnesses — congestive heart failure, diabetes with complications, chronic kidney disease, COPD, HIV/AIDS, major psychiatric disorders, certain cancers. These are not incidental findings. They are conditions that drive sustained healthcare utilization, and the HCC model is built to capture that cost burden accurately.

The hierarchical structure matters as well. When a patient has multiple related conditions at different severity levels, only the most severe HCC in that hierarchy applies. A patient with both diabetes without complications and diabetes with diabetic nephropathy does not get credited for both — the more severe condition counts, and the less severe one gets suppressed. This prevents the model from inflating risk scores by double-counting the same disease at multiple severity stages.

## How risk adjustment coding works

The process starts with a physician encounter. A patient comes in, the physician documents findings and diagnoses in the clinical note, and a coder assigns ICD-10-CM codes that reflect what was documented. Those codes get submitted to CMS, which runs them through the HCC crosswalk to identify which conditions map to payment-relevant categories.

HCC risk adjustment coding adds one requirement that standard outpatient coding does not have: annual recapture. A chronic condition must appear in a qualifying face-to-face encounter during the current model year to generate an HCC flag for that year. It does not carry forward automatically from the year before. A patient who has been managing type 2 diabetes with CKD for a decade still needs that diagnosis documented in a current-year encounter for it to count in this year's payment calculation.

This is where [Prospective Risk Adjustment](https://www.martlet.ai/solutions/prospective-risk-adjustment) programs come in. Pre-visit chart reviews surface the chronic conditions a patient is known to have so the physician can address them during the encounter — documenting, evaluating, treating, or managing each one before it ends. Conditions captured this way go into the risk adjustment submission with strong documentation backing.

[Retrospective Risk Adjustment](https://www.martlet.ai/solutions/retrospective-risk-adjustment) handles what prospective programs miss. After encounters are complete, coders review medical records to find documented diagnoses that did not make it into the original submission. Those get submitted as supplemental data before the annual deadline. Both programs exist because neither one catches everything on its own.

## The role of RAF scores in risk adjustment

Every Medicare Advantage member gets a RAF score. It starts with a demographic base calculated from age and sex coefficients derived from historical Medicare spending. HCC weights then get added for each condition category flagged in the member's encounters. Some conditions also trigger interaction terms that add extra weight for specific high-cost condition combinations — diabetes plus congestive heart failure being one of the most common examples.

Risk adjustment software at health plans runs this calculation across the entire member population, tracking which HCCs have been captured, which are suspected but not yet documented, and what the RAF score looks like relative to prior years and comparable populations.

A RAF score of 1.0 represents the average Medicare beneficiary. A score of 1.5 means CMS pays the plan 50% above the county benchmark rate for that member. A score of 0.7 means 30% below. Across a plan with 50,000 members, a 0.1 difference in average RAF score can represent millions of dollars in annual revenue. The accuracy of HCC coding is what determines whether those scores reflect reality.

## Why HCC risk adjustment coding matters

HCC analytics consistently show that coding gaps are common and expensive. When a patient's chronic conditions are not captured, the RAF score understates their complexity, the plan receives less than it costs to care for that person, and the financial shortfall comes out of margins or care programs.

The compliance risk runs in the opposite direction as well. [RADV audits](https://www.martlet.ai/solutions/radv) — CMS's Risk Adjustment Data Validation program — check whether submitted HCC diagnoses are backed by medical record documentation. A code submitted without adequate documentation support does not just fail the audit. Under the post-2023 RADV methodology, error rates get extrapolated across the full plan population, which can turn a documentation problem in a sample of records into a plan-wide recoupment demand.

Getting HCC coding right means two things simultaneously: capturing every legitimate diagnosis that is documented, and making sure every submitted code can be defended if CMS asks for the record. Those goals reinforce each other when documentation is thorough and coding is accurate.

## HCC coding in Medicare Advantage programs

Medicare Advantage plans use the CMS-HCC model — currently V28, phased in through the 2026 payment year — to calculate risk-adjusted payments. The model maps ICD-10-CM codes to approximately 115 HCC categories. Each category has a coefficient reflecting its expected incremental cost, recalibrated in V28 using contemporary spending data. Plans that have not updated their coding programs to V28 mappings are working with outdated logic.

The payment stakes are significant. A Medicare Advantage plan in a market with a county benchmark rate of $900 per member per month and 100,000 members sees a direct revenue impact of $90 million for every 0.1 change in average RAF score.

| RAF score | Monthly payment (at $900 benchmark) | Annual revenue per member |
| --- | --- | --- |
| 0.80 | $720 | $8,640 |
| 1.00 | $900 | $10,800 |
| 1.20 | $1,080 | $12,960 |
| 1.50 | $1,350 | $16,200 |

## Common challenges in HCC risk adjustment coding

A few failure patterns show up in most plans that audit their coding programs seriously.

Annual recapture gaps are the most common. Stable chronic conditions get managed adequately in clinical care but never explicitly addressed during a qualifying encounter. The patient has the condition; the payment system does not know it.

Documentation that will not support the code is the second pattern. Physicians document "diabetes" when the clinical picture warrants "type 2 diabetes with diabetic chronic kidney disease, stage 3." The more specific code maps to a higher HCC weight. The less specific code may not map to any HCC at all. Coders cannot assign what the note does not support.

Specialty records that never reach the coder create a third gap. Cardiologists, nephrologists, oncologists, and rheumatologists manage the highest-weight HCC conditions, and their notes frequently contain the documentation that justifies those conditions. If specialty encounter data is not part of the coding workflow, those diagnoses go uncaptured.

MEAT criteria failures round out the common issues. CMS requires that a diagnosis be documented, evaluated, treated, or managed in the encounter — not just listed on a problem list. A code submitted based on a problem list entry without encounter-level support is creating audit exposure, not capturing legitimate revenue.

## Improving accuracy in HCC coding

Most of the improvement opportunity sits in three areas.

Provider education focused on documentation specificity produces durable results when it connects specificity to better patient records rather than billing compliance. Physicians who understand why "diabetes with nephropathy" matters clinically and financially tend to document it more consistently than those who received a compliance memo.

Pre-visit chart preparation puts suspected chronic conditions in front of the physician before the encounter starts. The physician addresses each one, documents appropriately, and the coding team has clean notes to work from. This is cheaper and more accurate than recovering the same diagnoses through retrospective review months later.

Coding audits across a sample of records identify where specificity is falling short, which diagnosis categories are being under-coded systematically, and which physicians or specialties need targeted outreach. Audit findings drive the education, which closes the loop.

## The role of technology in risk adjustment coding

Manual processes do not scale to the volume that Medicare Advantage risk adjustment requires. A plan with 100,000 members and a serious prospective program needs to review a substantial portion of those members' records annually — a workload that no team of coders handles without technology support.

Clinical NLP platforms trained on physician notes, discharge summaries, and specialist records extract HCC-eligible diagnoses and supporting documentation automatically. They surface the records most likely to contain coding gaps and flag the specific clinical text that supports each suspected condition. Coders review and validate rather than reading every note from scratch.

Machine learning models built on claims history, pharmacy data, and prior HCC patterns predict which members have the highest probability of undocumented chronic conditions. That prediction drives prospective outreach: the members most worth scheduling for annual wellness visits or targeted chart review surface first.

The meaningful distinction among AI platforms is whether the underlying models are healthcare-specific from the ground up or general-purpose models applied to clinical text as a secondary use case. Those two architectures behave very differently on the core task of linking clinical text to HCC conditions and validating MEAT evidence. Independent, peer-reviewed benchmarking is the right standard to hold any platform to.

## HCC coding is where clinical documentation and healthcare finance meet

A physician note becomes a diagnosis code, a diagnosis code becomes an HCC flag, an HCC flag becomes a component of a RAF score, and a RAF score becomes a monthly payment. Each step in that chain depends on the one before it being accurate.

Plans that invest in documentation quality, systematic coding workflows, and technology-assisted gap identification capture more of the revenue they are owed and carry less audit risk doing it. Plans that treat HCC coding as a back-office function find out what they left behind when RADV results come back.

If you are evaluating how Martlet AI supports HCC coding accuracy across prospective and retrospective programs inside your environment, [see how the platform works](/solutions/retrospective-risk-adjustment) or [schedule a working session with the team](https://meetings.hubspot.com/ritwik-jain?uuid=0616cd42-5ffd-4a4f-8c09-a3ccfee6dab1).

## FAQ

### What is HCC risk adjustment coding?

HCC risk adjustment coding is the process of assigning ICD-10-CM diagnosis codes to patient encounters and mapping those codes to Hierarchical Condition Categories that contribute to a member's RAF score. In Medicare Advantage, RAF scores determine the monthly per-member payment CMS makes to health plans. Accurate coding ensures those payments reflect the actual health complexity of the plan's population.

### How do HCC codes affect RAF scores?

Each HCC category carries a numeric weight reflecting its expected incremental healthcare cost. When an ICD-10-CM code maps to an HCC category, that weight gets added to the member's demographic base score. Additional interaction terms apply for certain high-cost condition combinations. The total produces the RAF score CMS uses to calculate the plan's monthly capitated payment for that member.

### Why is accurate HCC coding important?

Under-coded conditions lower RAF scores below what the patient's health complexity actually warrants, reducing plan revenue without reducing care costs. Over-coded conditions — diagnoses submitted without adequate documentation — create RADV audit exposure and potential recoupment demands. Accurate coding hits the target between those two failure modes.

### How often must HCC diagnoses be documented?

Every year. HCC-eligible diagnoses must appear in a qualifying face-to-face encounter during the current model year to generate an HCC flag for that year's payment calculation. Chronic conditions documented in prior years do not carry forward automatically. Annual recapture is the most common HCC coding gap in Medicare Advantage plans.

### What tools help improve HCC coding accuracy?

Clinical NLP platforms that extract HCC-eligible diagnoses from unstructured notes, predictive models that identify members likely to have undocumented chronic conditions, and EHR-integrated coding alerts that surface gaps at the point of care are the main technology tools. On the process side, pre-visit chart preparation, structured physician query programs, and periodic coding audits close the gaps that technology surfaces but cannot resolve without clinical input.
