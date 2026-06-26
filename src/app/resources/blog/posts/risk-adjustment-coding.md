# Risk Adjustment Coding | Martlet AI

**Date:** 06.17.2026  
**Thumbnail:** /assets/blog/risk-adjustment-coding/cover.png  
**Description:** Learn how risk adjustment coding works, how RAF scores are calculated, and why accurate coding is critical for healthcare reimbursement.  
**MetaTitle:** Risk Adjustment Coding | Martlet AI
**Tag:** Insights
**DefinedTermName:** Risk Adjustment Coding
**DefinedTermDescription:** The process of translating documented ICD-10-CM diagnoses into risk scores that adjust the payments health plans and providers receive for covering a population, mapping qualifying diagnoses to Condition Categories that combine with demographic factors to produce a Risk Adjustment Factor (RAF) score.

# Risk Adjustment Coding

![Risk adjustment coding translates documented diagnoses into risk-adjusted payment](/assets/blog/risk-adjustment-coding/risk-adjustment-coding-infographic.jpg)

Healthcare has never paid everyone the same rate. A patient managing diabetes, heart failure, and chronic kidney disease costs far more to cover than a 35-year-old with no chronic conditions. Risk adjustment coding is what translates that clinical reality into payment. It converts documented diagnosis data into risk scores that determine how much a health plan, provider, or insurer actually receives for covering a given population.

Risk adjustment coding maps patient diagnoses to risk scores that adjust what payers receive for covering a given population. Sicker patients generate higher scores and higher payments. When coding is incomplete or inaccurate, payments drift away from actual costs — creating either financial shortfalls or compliance exposure.

## What is risk adjustment coding

At its core, risk adjustment is a method for making payment fair across populations with different health profiles. Risk adjustment coding is the process that makes it work in practice.

Providers document patient conditions during clinical encounters. Those conditions get coded using ICD-10-CM, the standard diagnosis classification system used across U.S. healthcare. Certain diagnosis codes then feed into risk adjustment models, where they are weighted based on expected treatment cost. The output is a risk score that reflects how sick a patient population actually is.

Without this mechanism, a Medicare Advantage plan covering mostly older patients with multiple chronic conditions would receive the same per-member payment as a plan with a much healthier membership. That kind of flat-rate payment creates obvious problems: plans would have every incentive to seek out healthy members and avoid complex ones. Risk adjustment coding exists to prevent that from happening.

It is used across a wide range of programs — Medicare Advantage, Medicaid managed care, the ACA individual and small group markets, and a growing number of value-based contracts between payers and provider groups.

## Why risk adjustment coding matters in healthcare

The financial stakes are significant, but risk adjustment coding matters for reasons that go beyond revenue.

A health plan covering a high-risk population genuinely costs more to run. If payment does not reflect that, plans either lose money serving complex patients or find ways to avoid them. Accurate coding keeps the economics aligned with the clinical reality.

When diagnoses are coded consistently and completely, the resulting risk data becomes a working picture of what a population actually looks like. That picture drives care management outreach, gap closure programs, and resource planning. A plan that does not code well does not really know its population — and the gaps in that picture tend to surface at the worst possible moments.

Actuaries and finance teams set cost targets and reserve calculations using risk-adjusted data. Gaps in coding produce gaps in that data, which means budgets built on incomplete RAF scores tend to be wrong in ways that only become visible at settlement.

Organizations serious about coding completeness run both [Prospective Risk Adjustment](/solutions/prospective-risk-adjustment) — catching gaps while the plan year is still open — and [Retrospective Risk Adjustment](/solutions/retrospective-risk-adjustment), which goes back through historical encounter data to find diagnoses that were clinically supported but never coded. Neither approach alone gets everything.

| Approach | Timing | Primary goal |
| --- | --- | --- |
| Prospective | During the plan year | Capture diagnoses in real time, before the coding year closes |
| Retrospective | After the plan year closes | Recapture missed or under-coded diagnoses from completed encounters |
| Concurrent | Ongoing throughout the year | Combine real-time and historical review in a continuous workflow |

## Risk Adjustment Factor

The Risk Adjustment Factor, or RAF score, is a number that represents how costly a patient is expected to be relative to the average Medicare beneficiary. A score of 1.0 is the baseline. Scores above 1.0 indicate a patient expected to cost more; scores below 1.0 indicate less.

Each ICD-10-CM diagnosis code either maps to an HCC or it does not. The codes that do carry a numeric weight tied to what that condition typically costs to manage. Those weights combine with demographic factors — age, sex, Medicaid dual eligibility status, disability status — to produce a member-level RAF score.

The concept is straightforward. The complexity is in making sure the right codes get assigned in the first place, and that the clinical documentation supports each one.

In Medicare Advantage, a higher average RAF score means higher monthly capitation per member. For providers in value-based arrangements the connection works differently: RAF accuracy sets the benchmark against which their costs are measured. A population that looks healthier on paper than it actually is produces a benchmark that is too low, and providers end up measured against a target that was never set correctly.

## Risk adjustment payment models

Risk adjustment appears differently depending on the payment model, but the underlying logic is consistent: payment is modified based on how sick the covered population is expected to be.

Capitation models pay health plans a fixed monthly amount per member, adjusted by RAF scores. The adjustment is meant to reflect realistic cost expectations. When RAF scores are accurate, the payment is reasonable. When they are not, someone absorbs the gap.

Shared savings and total cost of care models evaluate whether providers have reduced costs relative to a risk-adjusted benchmark. Getting the risk score right on the front end is what makes the performance comparison meaningful at the back end.

ACA premium stabilization works differently. Under the HHS-HCC model, CMS runs a transfer program between commercial plans. Plans with sicker enrollees receive payments from plans with healthier ones. The transfer amounts depend entirely on the accuracy of each plan's submitted diagnosis data.

In each of these models, what gets submitted through risk adjustment coding is the starting point for everything downstream.

## Commercial risk adjustment

The ACA created a permanent risk adjustment program for individual and small group markets, administered by CMS using the HHS-HCC risk adjustment model. It runs separately from Medicare's CMS-HCC model.

CMS calculates a risk score for each plan's enrolled population based on submitted diagnosis data. Plans with below-average risk scores transfer funds to plans with above-average scores. No money leaves the market; it redistributes within it.

A plan that consistently under-codes its sicker members ends up looking healthier than it is. That produces a lower risk score, which puts the plan on the contributing side of the transfer calculation rather than the receiving side. For large plans, the difference at annual settlement can run into the tens of millions.

Commercial health plans that build strong coding programs tend to have more accurate risk scores, fewer surprises at transfer settlement, and better data for managing their populations over the long term.

## Medicare risk adjustment

Medicare Advantage is where risk adjustment coding receives the most attention, and where the financial and compliance stakes are highest.

CMS pays MA plans a monthly capitation amount for each enrollee, adjusted using the CMS-HCC model. The model uses diagnoses from the prior calendar year to calculate each member's RAF score for the current payment year. That lag matters practically: conditions that go undocumented or uncoded in one year do not contribute to payment in the next.

HCC-eligible chronic conditions need to be re-documented and re-coded every year. Diabetes, heart failure, COPD, chronic kidney disease, and many other conditions do not automatically carry forward. A patient seen regularly for a condition that never appears in encounter data looks, from a payment perspective, like a healthier patient than they are.

The consequences run in both directions. Under-coding produces RAF scores that underrepresent a plan's clinical burden, leading to capitation payments that do not cover actual costs. Over-coding — submitting diagnoses that are not supported by clinical documentation — creates regulatory and financial liability. False Claims Act exposure is real for plans found to have systematically over-coded.

For MA plans, getting Medicare risk adjustment coding right is a core part of financial management.

## The role of risk adjustment coding in value-based care

Value-based care models are built on comparisons. An ACO's performance is evaluated against a cost benchmark. A provider's quality scores are compared to peers. A risk-bearing group's total cost of care is measured against actuarial expectations. Every one of those comparisons depends on the risk adjustment inputs being accurate.

When coding is incomplete, benchmarks do not reflect the actual complexity of the patients a provider serves. A primary care group managing a high proportion of patients with multiple chronic conditions will look expensive compared to a risk-adjusted benchmark that does not capture those conditions. They may be doing excellent, cost-efficient work. Incomplete coding obscures that.

Beyond benchmarks, risk adjustment coding in value-based care affects quality calibration — many quality measures are risk-adjusted, so coding gaps affect whether performance looks better or worse than it actually is — and patient attribution, where HCC-based risk data influences which patients get attributed to which provider in some models.

As more provider groups take on risk-bearing contracts across Medicare, Medicaid, and commercial markets, coding accuracy becomes a front-office issue, not a billing department concern.

## How risk adjustment coding affects payments and RAF scores

The path from clinical encounter to payment adjustment runs through several steps, and each one is a point where accuracy can be gained or lost.

A provider sees a patient and documents conditions, findings, and the visit itself. A coder turns that documentation into ICD-10-CM codes — and this is where specificity matters most. "Diabetes" without type, complications, or severity is a different code than "type 2 diabetes with diabetic chronic kidney disease, stage 3." One maps to an HCC with significant weight; the other may not, or maps to a lower-weighted category.

Qualifying codes map to one or more HCCs. HCC assignments then combine with demographic factors to produce a member-level RAF score, which aggregates across the population to adjust capitation payments, transfer amounts, or benchmarks.

A single missed diagnosis on a single member has a small effect. The same missed diagnosis pattern across 10,000 members has a large one. Plans and provider organizations that track coding completeness at the population level catch these patterns early. Those that do not tend to find out at settlement.

Over-coding carries the opposite risk. Coding diagnoses that are not documented and supported inflates RAF scores above what is warranted, creating repayment liability and, in more serious cases, legal exposure under federal fraud statutes.

## Risk adjustment coding audits and compliance risks

CMS audits Medicare Advantage plans specifically to verify that submitted diagnoses are backed by medical record documentation. The primary program is Risk Adjustment Data Validation — [RADV Audits](/solutions/radv).

RADV works by sampling a set of HCC-coded diagnoses and reviewing the underlying medical records. For each condition, reviewers look for a dated encounter note from a qualified provider showing that the diagnosis was evaluated and managed. If the documentation does not support the code, the diagnosis is removed and the payment is adjusted. Depending on how extrapolation methodology is applied, findings can extend beyond the sampled records to the broader population.

State Medicaid programs run similar validation processes, and commercial risk adjustment is subject to HHS audits as well.

| Compliance risk | Description |
| --- | --- |
| Under-coding | Failure to capture all clinically supported diagnoses; results in understated RAF scores and reduced payments |
| Over-coding | Submitting diagnoses without adequate clinical documentation; creates repayment liability and legal exposure |
| Documentation gaps | Diagnoses referenced but not evaluated or managed in the encounter; may not meet medical record validation standards |
| Specificity failures | Coding to an unspecified or less-specific code when documentation supports a more specific diagnosis |
| Annual recapture failures | Chronic conditions not re-documented and coded in the current measurement year |

Compliance is not only about avoiding over-coding. Plans that consistently under-code their sickest members eventually face questions about why their RAF scores do not match their utilization patterns or claims data. Both directions of error matter.

## The role of technology and AI in risk adjustment coding

Manual chart review does not scale. A mid-size Medicare Advantage plan may have hundreds of thousands of members and years of encounter data. Reviewing that volume by hand means missed diagnoses, inconsistent application of coding guidelines, and lag time that makes prospective interventions difficult.

Natural language processing reads clinical notes the way a trained coder would, identifying diagnoses mentioned in free text that never made it into a structured code. A physician who documents "poorly controlled type 2 diabetes with early diabetic nephropathy" in a progress note but codes only E11.9 has created a specificity gap. NLP finds it.

Predictive analytics compares each member's current RAF score against their utilization history, claims data, and prior-year diagnoses. Members whose scores look inconsistent with their clinical history get flagged for review — which is particularly useful for prospective programs trying to prioritize outreach before the measurement year ends.

Audit-readiness technology cross-references submitted diagnoses against supporting documentation before submission, giving compliance teams a chance to identify unsupported codes before they become audit findings.

The meaningful distinction among AI platforms is whether the underlying models are healthcare-specific from the ground up — trained on the language of physician notes, problem lists, lab interpretations, and care plans — or general-purpose models applied to clinical text as a secondary use case. Those two architectures behave very differently on the core task of linking clinical text to HCC conditions and validating documentation adequacy.

The consistency argument for purpose-built tools is often more compelling than the efficiency argument. A well-trained coder is good. The same logic applied the same way across every record in a population is better, particularly when audit risk is tied to patterns across that full population.

## Risk adjustment coding is where documentation meets payment

Risk adjustment coding is where clinical documentation meets payment reality. When it works, plans and providers get paid based on what their populations actually need. When it breaks down — through under-coding, missing documentation, or unsupported diagnoses — the consequences are financial and regulatory, and they compound across coding years.

Documentation quality, coding specificity, audit readiness, and data infrastructure all have to work together. Organizations that treat them as separate problems tend to patch one while the others drift.

If you are evaluating how Martlet AI automates prospective, retrospective, and RADV workflows inside your environment, [see how the platform works](/solutions/radv) or [schedule a working session with the team](/contact).

## FAQ

### What is risk adjustment coding used for?

It converts patient diagnosis data into risk scores that CMS and payers use to set capitation payments, calculate transfer amounts, and establish performance benchmarks. The purpose is to make sure that payment reflects how sick a covered population actually is, not just how many members a plan happens to cover.

### How does risk adjustment coding differ from standard diagnosis coding?

Standard diagnosis coding documents what happened during an encounter for billing and clinical record-keeping. Risk adjustment coding has a narrower focus: identifying which diagnoses qualify under the applicable risk model, ensuring those diagnoses are coded with sufficient specificity, and making sure chronic conditions are recaptured annually. A coder doing general billing work and a coder focused on risk adjustment are looking at the same records through different lenses.

### Why is accurate documentation critical for risk adjustment coding?

Because auditors do not take the code's word for it. Every HCC-eligible diagnosis has to be traceable back to a dated encounter note showing that a qualified provider evaluated and managed the condition. Without that documentation trail, the code does not hold up under audit review. Payments based on unsupported diagnoses are subject to recoupment.

### What are common compliance risks in risk adjustment coding?

Most compliance problems fall into one of two categories: submitting diagnoses the medical record cannot support, or missing diagnoses that are clearly there. The first creates repayment liability. The second leaves money on the table and, if the pattern is systematic enough, raises its own questions during audit review. Outside of those two, the issues that come up most often are coding to a vague ICD-10 code when documentation supports something more specific, and chronic conditions that are treated and managed all year but never appear in encounter data because no one coded them.

### What diagnoses are typically included in risk adjustment coding?

The focus is on chronic, complex, and high-cost conditions: diabetes with complications, heart failure, chronic kidney disease, COPD, major depressive disorder, HIV/AIDS, various cancers, and similar. Acute one-time conditions and routine preventive visits generally do not generate HCC credit. The specific conditions that qualify depend on which risk model applies — the CMS-HCC model used in Medicare Advantage differs from the HHS-HCC model used in commercial markets.
