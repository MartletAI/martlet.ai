# What Are HCC Coding Gaps | Martlet AI

**Date:** 07.14.2026  
**Thumbnail:** /assets/blog/what-are-hcc-coding-gaps/cover.jpg  
**Description:** Learn what HCC coding gaps are, why they occur in risk adjustment programs, and how they affect RAF scores and healthcare reimbursement.  
**MetaTitle:** What Are HCC Coding Gaps | Martlet AI
**Tag:** Insights
**DefinedTermName:** HCC Coding Gap
**DefinedTermDescription:** A chronic condition that is clinically present in a patient's health history but missing or incomplete in their risk adjustment data submission, causing RAF scores to underrepresent the patient's actual health complexity due to documentation habits, annual recapture failures, or coding specificity issues.

# HCC coding gaps: how to find them before CMS does

![What Are HCC Coding Gaps: causes, impact, and solutions](/assets/blog/what-are-hcc-coding-gaps/hcc-coding-gaps-infographic.jpg)

HCC coding gaps occur when a patient's chronic conditions are present in their clinical history but do not make it into the risk adjustment data submission. The gap can happen at several points: a physician documents a condition but the coder misses it, a diagnosis is coded at insufficient specificity to map to any HCC, or a condition is simply never addressed during the current-year encounter. Whatever the cause, the result is the same — the patient's risk score understates their actual health complexity, and reimbursement falls short.

HCC coding gaps are missing or incomplete diagnosis codes in risk adjustment submissions that cause RAF scores to underrepresent how sick a patient actually is. They happen because of documentation habits, annual recapture failures, and coding specificity issues. Health plans close them through chart review, provider education, and technology-assisted coding workflows.

## Understanding HCC coding in risk adjustment

Hierarchical Condition Categories (HCCs) are the mechanism that converts clinical diagnoses into payment-relevant risk scores. CMS maps ICD-10-CM diagnosis codes to HCC categories, each carrying a numeric weight that reflects the expected cost of patients with that condition. Those weights add to demographic factors to produce a member's RAF score, which determines how much CMS pays the health plan per member per month in Medicare Advantage.

An HCC gap is a condition that should be contributing to that score but is not. The condition exists clinically — the patient has it, takes medication for it, sees specialists because of it. But because it was not properly documented and coded in a qualifying encounter during the model year, it generates no HCC flag and no payment weight.

The stakes are real. A single missed HCC can mean hundreds of dollars per member per year in lost payment. Across a plan with tens of thousands of members, systematic HCC gaps translate into millions in underfunded reimbursement.

## What causes HCC coding gaps

Several failure points in the documentation and coding process produce HCC score gaps.

Annual recapture failures are the most common. CMS requires that HCC-eligible diagnoses appear in a current-year encounter to count in the current payment year. A patient with well-controlled type 2 diabetes may have had it documented every year for the past decade, but if no qualifying face-to-face encounter captures it this year, it drops out of the RAF calculation entirely.

Physician documentation habits create the second category of gaps. Coders can only work with what is in the note. When a physician writes "diabetes" without specifying type, complications, or current management status, the coder cannot assign the more specific code that maps to a higher-weight HCC. The condition is there; the documentation does not support the code.

Incomplete specialty care capture is a third source. Specialists often manage the chronic conditions that carry the highest HCC weights — a cardiologist managing heart failure, a nephrologist managing CKD, a rheumatologist managing lupus. If those specialist encounter records do not reach the plan's coding workflow, the diagnoses go uncaptured.

Coding specificity errors round out the common causes. ICD-10-CM has hundreds of codes for diabetes alone. Some map to high-weight HCCs; others map to lower-weight categories or nothing at all. A coder who selects a less specific code because the documentation is ambiguous may leave significant RAF value uncaptured.

## How HCC coding gaps affect RAF scores

The connection between HCC coding gaps and RAF scores is direct. Every HCC that does not get flagged is a weight that does not add to the score. A patient with congestive heart failure, atrial fibrillation, and type 2 diabetes with CKD should have RAF contributions from all three conditions plus any applicable interaction factors. If CKD goes uncoded because the nephrologist's notes were not reviewed, that weight disappears from the calculation.

[Prospective Risk Adjustment](/solutions/prospective-risk-adjustment) addresses this before the encounter by surfacing likely under-coded conditions to the physician through pre-visit summaries and care gap alerts. When a physician knows to address a patient's CKD during the visit, the documentation happens in real time and the HCC is captured cleanly.

[Retrospective Risk Adjustment](/solutions/retrospective-risk-adjustment) addresses it after the encounter by reviewing completed records for diagnoses that were documented but not coded. Coders abstract the supporting documentation and submit the diagnosis as supplemental data before the annual submission deadline.

Both approaches exist because neither closes every gap on its own.

## Common types of HCC coding gaps

Some gap patterns show up consistently across health plans and coding programs.

| Gap type | Root cause | HCC impact |
| --- | --- | --- |
| Annual recapture failure | Chronic condition not addressed in current-year visit | Full HCC weight lost for the year |
| Specificity gap | Documentation too vague to support the most accurate code | Partial or zero HCC weight |
| Specialty care not captured | Specialist notes excluded from coding workflow | HCC-eligible conditions missed entirely |
| MEAT criteria not met | Condition on problem list but not managed in the encounter | Code not auditable, submission risk |
| Submission error | Code entered correctly but lost in the data pipeline | HCC weight lost despite accurate documentation |

MEAT criteria failures warrant particular attention because they create RADV audit exposure. A diagnosis coded from a problem list entry alone — without evidence that the condition was documented, evaluated, treated, or managed in the encounter — will not hold up if CMS audits that record. The HCC may be in the submission, but it is not defensible.

## How healthcare organizations identify HCC coding gaps

Gap identification requires comparing what is in the record against what was submitted.

Predictive analytics on claims and pharmacy data can surface the highest-probability gaps across an entire population quickly. A member filling a beta-blocker and a loop diuretic with no heart failure code in their risk adjustment data is a probable gap. Algorithms that cross-reference pharmacy claims, prior HCC history, and lab results against current-year submissions identify these patterns at scale.

Chart review by certified risk adjustment coders remains the most reliable identification method. Coders working through specialist notes, discharge summaries, and primary care records find diagnoses that claims-based algorithms miss — particularly in conditions managed primarily in specialty settings.

Clinical documentation improvement programs catch gaps while the record is still active. CDI specialists review records before or shortly after the encounter to identify documentation that needs clarification, specificity improvement, or a physician query, when the physician can still respond.

EHR-integrated coding alerts extend this further by surfacing suspected conditions at the point of care documentation, embedding gap identification directly into the clinical workflow rather than treating it as a separate downstream process.

## Strategies for closing HCC coding gaps

Finding the gap is only half the work. Closing it requires a workflow that gets the documentation right.

Provider education on documentation specificity is the upstream fix. Physicians who understand why specificity matters in ICD-10-CM documentation tend to write notes that support more accurate coding. Training that connects documentation habits to patient care quality rather than billing tends to land better with clinical staff.

Pre-visit chart preparation delivers a summary of suspected HCC gaps to the physician before the appointment, with the clinical rationale for each condition. This makes it practical to address multiple chronic conditions in a single visit rather than discovering gaps after the fact.

Physician query processes give coders a structured way to seek clarification when documentation might support a more specific code but is not explicit enough to assign it. This is a standard CDI technique with established compliance guardrails.

Supplemental data submission is the mechanism for closing gaps after the service year ends. Diagnoses recovered through retrospective chart review get submitted to CMS as encounter-level supplemental data before the annual deadline.

## The role of technology in identifying coding gaps

Manual chart review does not scale to millions of member-years of records. Technology handles the volume problem and improves the prioritization of where human review time goes.

Clinical NLP models trained on physician notes, discharge summaries, and specialist reports extract HCC-eligible diagnoses and MEAT-criterion evidence automatically. They surface the records most likely to contain gaps and present the relevant clinical text to coders for validation — rather than requiring coders to read every note from scratch.

Machine learning gap prediction uses claims history, pharmacy data, and prior HCC patterns to score each member by the probability that they have undocumented HCC-eligible conditions. Prospective outreach teams use this to prioritize scheduling and pre-visit preparation toward members where the clinical and financial gap is largest.

Coding validation tools cross-check proposed ICD-10-CM codes against the underlying documentation before submission, flagging specificity issues and unsupported codes before they become audit findings.

The meaningful distinction among AI platforms is whether the underlying models are healthcare-specific from the ground up or general-purpose models applied to clinical text as a secondary use case. Those two architectures behave very differently on the core task of linking clinical text to HCC conditions and validating MEAT evidence. Independent, peer-reviewed benchmarking is the right standard to hold any platform to.

## HCC coding gaps are preventable with the right combination of workflows and technology

HCC coding gaps are the most common and most preventable source of RAF score inaccuracy. They do not usually reflect intentional miscoding — they reflect documentation habits, workflow gaps, and the structural difficulty of capturing complex patient conditions consistently across an entire population.

Closing them requires prospective documentation improvement, retrospective chart review, and technology that identifies where to focus both. Plans that build that combination systematically capture more of the revenue they are owed and carry less audit risk doing it.

If you are evaluating how Martlet AI supports HCC gap identification and closure across prospective and retrospective programs, [see how the platform works](/solutions/retrospective-risk-adjustment) or [schedule a working session with the team](https://meetings.hubspot.com/ritwik-jain?uuid=0616cd42-5ffd-4a4f-8c09-a3ccfee6dab1).

## FAQ

### What is an HCC coding gap?

An HCC coding gap is a chronic condition that is clinically present in a patient's health history but missing from their risk adjustment data submission. Because HCC-eligible diagnoses must be documented in a qualifying encounter and coded correctly each year to count in the RAF score, gaps in documentation or coding result in a risk score that understates the patient's actual health complexity.

### Why do HCC coding gaps occur?

Gaps happen for several reasons: chronic conditions not addressed in current-year encounters, physician documentation that is not specific enough to support the most accurate ICD-10-CM code, specialist records that never reach the coding workflow, and submission process errors that lose correctly coded diagnoses before they reach CMS. Annual recapture failure is the most common single cause.

### How do coding gaps affect RAF scores?

Each HCC that is not flagged in the risk adjustment submission removes its associated weight from the RAF score calculation. A missed HCC for congestive heart failure, for example, might lower a member's RAF score by 0.33 or more, which translates to several hundred dollars less per member per month in capitated payment from CMS.

### How can healthcare organizations identify HCC gaps?

The most effective approach combines predictive analytics on claims and pharmacy data, retrospective chart review by certified risk adjustment coders, and clinical documentation improvement programs that work with physicians to improve specificity before or shortly after the encounter. Technology platforms using NLP can scale gap identification across large member populations more efficiently than manual review alone.

### What tools help close HCC coding gaps?

Clinical NLP platforms that extract HCC-eligible diagnoses from unstructured notes, machine learning models that predict which members have the highest probability of undocumented conditions, and EHR-integrated coding alerts that surface gaps at the point of care are the primary technology tools. On the process side, provider education, pre-visit chart preparation, and structured physician query programs close gaps that technology identifies but cannot resolve without clinical input.
