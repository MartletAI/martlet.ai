# AI Risk Adjustment in Healthcare | Martlet AI

**Date:** 06.23.2026  
**Thumbnail:** /assets/blog/ai-risk-adjustment-in-healthcare/cover.jpg  
**Description:** Learn how artificial intelligence is transforming risk adjustment in healthcare, including clinical documentation, coding accuracy, and prediction of patient risk scores.  
**MetaTitle:** AI Risk Adjustment in Healthcare | Martlet AI
**Tag:** Insights
**DefinedTermName:** AI Risk Adjustment
**DefinedTermDescription:** The use of natural language processing and machine learning to read clinical documentation at scale, surface HCC-eligible diagnoses, suggest accurate ICD-10-CM codes, and predict RAF score gaps before submission — operating under the same documentation and compliance requirements as manual risk adjustment.

# AI Risk Adjustment

![AI Risk Adjustment infographic](/assets/blog/ai-risk-adjustment-in-healthcare/ai-risk-adjustment-infographic.jpg)

Risk adjustment has always been a data problem. The model is only as accurate as the diagnoses feeding into it, and diagnoses are only as complete as the clinical documentation supporting them. For years, health plans addressed that gap with manual chart review: coders reading through records, identifying missed conditions, submitting supplemental data. It worked, within limits. The volume was always the constraint. AI changes the volume constraint without changing the underlying requirement — every submitted code still needs documentation that holds up.

AI risk adjustment uses NLP and machine learning to read clinical documentation at scale, surface HCC-eligible diagnoses, suggest accurate ICD-10-CM codes, and predict RAF score gaps before submission deadlines. It handles volume that manual review cannot. It does not replace the compliance obligations that come with every submitted code.

## What is risk adjustment in healthcare

Risk adjustment is the payment correction mechanism that keeps capitated healthcare models from rewarding plans that enroll healthier members. CMS-HCC maps ICD-10-CM diagnosis codes to condition categories; each category carries a weight; weights add up to a RAF score; RAF scores adjust the monthly per-member payment CMS makes to Medicare Advantage plans. The same logic, with different models, applies to ACA marketplace plans (HHS-HCC) and Medicare Part D (RxHCC).

Artificial intelligence risk adjustment operates on both sides of this process: finding the diagnoses that should be in the record and making sure the codes assigned to them are accurate and specific enough to generate the right HCC flags.

Prospective Risk Adjustment is where AI has the most direct clinical impact, surfacing suspected conditions before the patient visit so physicians can address them in the encounter rather than chasing documentation afterward. Retrospective Risk Adjustment is where AI handles volume, processing completed records at a scale no manual team can match within the submission window.

## How AI enhances clinical documentation

The documentation problem in risk adjustment AI in healthcare has two parts. First, physicians do not always document chronic conditions at the specificity level that maps to HCC categories. "Diabetes" does not code the same way as "type 2 diabetes mellitus with diabetic chronic kidney disease, stage 3." Second, conditions get documented in specialist notes, discharge summaries, and care coordination records that never make it into the coding workflow.

NLP models trained on clinical text address both. They read unstructured notes across encounter types — primary care, specialty, inpatient, telehealth — extracting diagnosis mentions and supporting clinical evidence, and surface them with the documentation context that lets a coder evaluate whether the MEAT criteria are met. The coder does not have to read every note from scratch. They review a prioritized list of suspected conditions with the relevant text already pulled.

CDI programs that used to rely on retrospective query workflows are increasingly using NLP outputs to identify documentation gaps earlier, while the encounter is recent enough that a physician query actually makes sense.

## AI-driven coding accuracy and HCC support

AI HCC coding tools take the NLP output and map it to ICD-10-CM code suggestions, ranked by confidence. A coder reviewing a suggestion sees both the proposed code and the documentation that supports it. They accept, reject, or modify. The human stays in the loop on every submission.

Where this matters most is coding specificity. Under CMS-HCC V28, the codes that qualify for HCC mapping require more specific documentation than many prior-year submissions needed. A diabetes code at insufficient specificity may map to a lower-weight HCC or miss the category entirely. AI tools that surface the most specific defensible code — with the documentation context to support it — catch those specificity gaps before the submission goes out.

Coding consistency across encounter types and specialties is the secondary benefit. A coding team that handles both orthopedic and oncology encounters will have uneven depth in both. An AI model trained across specialties applies consistent logic regardless of encounter type, reducing the variance that comes from differences in coder experience.

## Improving RAF score prediction with AI

The predictive layer sits on top of the documentation and coding work. Machine learning models trained on claims history, pharmacy data, prior HCC patterns, and lab results can estimate which members have the highest probability of having undocumented HCC-eligible conditions. That prediction drives prospective outreach: which members to schedule for annual wellness visits, which charts to prioritize in retrospective review, where CDI effort is most likely to find meaningful gaps.

This is where AI moves from reactive to proactive in risk adjustment. Instead of reviewing completed records to find what was missed, plans can identify likely gaps before the encounter and address them through clinical workflow rather than coding workflow.

RADV audit preparation also benefits from predictive modeling. A model that scores each record in a CMS audit sample by the strength of its documentation support helps compliance teams triage their response, focusing manual review time on the records most likely to have issues rather than treating all sampled records equally.

## Use cases of AI in risk adjustment

Healthcare AI models in risk adjustment programs show up across several distinct workflows.

Automated chart review runs NLP across large member populations to identify HCC-eligible diagnoses in completed records. In retrospective programs, this replaces or supplements manual abstraction. The output is a working list of suspected conditions with supporting text — not a finished submission. A coder still validates each one.

Prospective gap identification uses predictive models to prioritize outreach. A member with pharmacy claims for a specialty medication but no corresponding diagnosis coded in their record is a high-probability gap. Routing that member to an annual visit or CDI follow-up closes the gap earlier than retrospective review would.

Real-time coding assistance integrates AI suggestions directly into the coder's workflow, showing proposed ICD-10-CM codes alongside the clinical documentation that supports them as the coder works through a queue. The feedback is immediate, which allows coders to ask physician queries while records are still fresh.

Denial prevention tools cross-reference outgoing claims against payer-specific rules before submission. In risk adjustment, this catches codes that are likely to be flagged in a RADV audit before they become part of the submitted data.

## Benefits of AI in risk adjustment programs

The clearest benefit is throughput. A prospective program that manually reviews 20% of a plan's population can, with NLP support, realistically cover a much larger share within the same staff hours.

Documentation quality improves when AI surfaces specific language gaps early enough for CDI to act on them. Plans that close specificity gaps prospectively consistently produce more defensible submissions than those that rely on retrospective abstraction of underdocumented records.

RAF score accuracy — capturing what the patient's actual health complexity warrants, without over- or under-coding — is the financial outcome. Plans that code accurately receive payments that match their care costs. Plans with systematic gaps leave money behind. Plans with documentation that does not support submitted codes create audit risk that compounds year over year.

## Challenges and limitations

Data quality is the ceiling on what AI can accomplish. NLP models trained on well-formatted clinical notes from one system type underperform when applied to handwritten notes, scanned documents, or inconsistently structured records from a different EHR. A plan that pulls records from dozens of provider groups in different systems will see uneven model performance across those sources.

Clinician skepticism about AI tools is real and, in many cases, reasonable. Physicians who do not understand what an NLP model is doing with their notes sometimes change their documentation in ways that work against the program's goals. Transparency about what the tool does — and what it does not submit without human review — matters for getting clinical staff to engage rather than route around it.

Integration with existing systems takes longer and costs more than most implementation plans budget for. That is a consistent pattern across health plan technology projects, and AI tools are not an exception.

## Governance, validation, and trust

AI outputs in risk adjustment are not self-validating. Every code that comes out of an AI-assisted workflow needs to meet the same documentation standards as a manually coded submission. CMS does not distinguish between them in a RADV audit.

Governance frameworks for AI in risk adjustment should cover several things. Model validation requires regular testing of model outputs against known-correct coding on a sample of records, with performance tracking over time. Routing rules define which suggestions go directly to the submission queue and which require coder review. Audit trail documentation shows who reviewed and approved each AI-suggested code. Model update schedules set a policy for retraining or recalibrating models when coding guidelines change — which they do annually.

Plans that deploy AI tools and treat governance as a one-time setup exercise find out why that is a problem when audit results arrive. The model drifts, guidelines change, and the submission that looked defensible when it was generated no longer holds up a year later.

## AI risk adjustment scales what manual programs cannot — without changing what compliance requires

AI does not fix risk adjustment by automating it. It fixes risk adjustment by handling the parts that manual processes handle poorly: volume, consistency across specialties, and early identification of documentation gaps that retrospective review catches too late to act on.

The compliance requirements do not change. The documentation standards do not change. What changes is the ability to apply thorough coding and documentation improvement across a full member population rather than the fraction a manual team can reach. Plans that use AI to genuinely improve documentation and coding accuracy get paid for the health complexity they actually carry. Plans that use it to push RAF scores above what the documentation supports are building audit exposure, not revenue.

If you are evaluating how Martlet AI supports AI-driven risk adjustment programs inside your environment, [see how the platform works](/solutions/prospective-risk-adjustment) or [schedule a working session with the team](https://meetings.hubspot.com/ritwik-jain?uuid=0616cd42-5ffd-4a4f-8c09-a3ccfee6dab1).

## FAQ

### What is AI risk adjustment?

AI risk adjustment is the use of machine learning and NLP to support risk adjustment workflows in healthcare — reading clinical documentation to surface HCC-eligible diagnoses, suggesting accurate ICD-10-CM codes, predicting which members have undocumented chronic conditions, and helping compliance teams prepare for RADV audits. It operates on the same documentation and compliance requirements as manual risk adjustment. The difference is scale and speed.

### How does AI improve risk score prediction?

Predictive models trained on claims, pharmacy data, lab results, and prior HCC history can identify members most likely to have undocumented HCC-eligible conditions before the submission deadline. That prediction drives prospective outreach and chart review prioritization rather than relying on broad retrospective sweeps after the service year closes.

### Can AI replace human coders?

No. AI surfaces diagnosis candidates and suggests codes. A human coder evaluates whether the documentation supports each suggestion before it goes into the submission. The compliance accountability stays with the coder, not the model. The practical outcome in working implementations is that coders handle the same or larger population with fewer staff hours spent on routine review. The coder role does not disappear.

### What are common challenges in AI risk adjustment?

Inconsistent source data across provider systems is the most common performance issue. EHR integration complexity and timeline are the most common implementation issues. Clinician trust and model drift are the most common post-deployment issues. None of them are unique to AI in risk adjustment, but they are worth planning for explicitly rather than treating as edge cases.

### How can organizations govern AI use in risk adjustment?

Start with routing rules: define which AI outputs require coder review before submission and which can go directly to the queue. Build an audit trail that documents who reviewed and approved each code. Schedule regular model validation on a sample of AI-assisted submissions. Set a policy for retraining or recalibrating models when coding guidelines change. Revisit all of the above annually rather than treating them as one-time implementation decisions.
