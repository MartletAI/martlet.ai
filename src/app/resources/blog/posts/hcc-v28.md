# HCC v28 Explained: Changes to the CMS Risk Adjustment Model | Martlet AI

**Date:** 07.02.2026  
**Thumbnail:** /assets/blog/hcc-v28/cover.jpg  
**Description:** Learn what HCC v28 is, how it differs from earlier HCC models, and how the new CMS risk adjustment model affects RAF scores and Medicare Advantage payments.  
**MetaTitle:** HCC v28 Explained: Changes to the CMS Risk Adjustment Model
**Tag:** Insights
**DefinedTermName:** HCC v28
**DefinedTermDescription:** The updated CMS Hierarchical Condition Categories risk adjustment model for Medicare Advantage, which expands payment categories from 86 to 115, is built on native ICD-10-CM data with a higher predictive threshold for qualifying codes, and recalibrates coefficient weights on contemporary spending — fully implemented from the 2026 payment year.

# HCC v28

![HCC v28 infographic](/assets/blog/hcc-v28/hcc-v28-infographic.jpg)

CMS does not update its Medicare Advantage risk adjustment model often. When it does, the changes ripple through every health plan's finances, coding programs, and actuarial assumptions simultaneously. HCC v28 is that kind of update — the most significant structural revision to the CMS-HCC model in over a decade. The transition started with the 2024 payment year and runs fully from 2026 onward.

Three things changed: how many HCC categories exist, which diagnosis codes qualify for them, and what each qualifying code is actually worth. Put those together and most plans end up with lower average RAF scores. Coding teams have to relearn which diagnoses matter now and at what level of specificity they need to be captured.

HCC category count went from 86 to 115. Qualifying ICD-10-CM codes went down. Weights were recalibrated on newer cost data. For most Medicare Advantage plans, average RAF scores drop under v28. Documentation specificity requirements went up, not down.

## What is the CMS-HCC risk adjustment model

Every Medicare Advantage plan receives a monthly per-member payment from CMS. That payment is not flat. It adjusts based on how sick each member is expected to be, measured by a RAF score that combines demographic factors with diagnosis-based HCC weights.

V28 risk adjustment runs on the same basic logic as prior versions. A qualifying encounter produces ICD-10-CM codes. Those codes get mapped to HCC categories. Every category has a numeric weight. The weights add up, combine with a demographic base, and the result is a RAF score. CMS then multiplies that score against the county benchmark rate to determine the plan's monthly payment for that member.

What changed in v28: which codes land in which categories, how the categories are structured, and what the weights are. The update touched all three.

## Why CMS introduced HCC v28

V24 had a structural problem from the start. It was originally calibrated on ICD-9-CM diagnosis data and then bridged to ICD-10-CM when the US switched coding systems in 2015. That bridge was imperfect. A number of ICD-10-CM codes ended up mapped to HCC categories despite weak relationships with actual healthcare spending. The model paid for health complexity that did not reliably drive costs.

On top of that, the coding patterns that developed under v24 had a predictable character: conditions got documented and coded more aggressively when they generated HCC flags, regardless of their clinical predictive value. CMS was not getting an accurate picture of patient health complexity — it was getting a picture of which conditions coders had learned to capture.

V28 mappings were built directly from ICD-10-CM data — no bridge from ICD-9, no inherited imprecision. CMS also raised the bar for inclusion: codes now need to clear a meaningful predictive threshold before they qualify for HCC mapping. And the category structure was expanded so that conditions with genuinely different cost profiles are no longer grouped together.

## Key changes in the HCC v28 model

Four changes in the v28 HCC model affect how coding teams and analytics platforms need to operate.

More categories, fewer qualifying codes. HCC categories went from 86 to 115, giving the model more granularity for distinguishing conditions with different cost profiles. At the same time, CMS removed diagnosis codes that did not meet the updated predictive threshold. A code that generated an HCC flag and RAF payment under v24 may now produce nothing.

Recalibrated weights. The coefficient assigned to each HCC category was recalibrated using more recent cost data. Some conditions are worth more under v28; others are worth less. Plans that project RAF scores using v24 coefficients applied to v28 categories will get the wrong answer.

Revised interaction terms. The bonus weights that apply when a member has specific high-cost condition combinations were also revised. Some interactions from v24 were removed; others were added or adjusted.

Documentation specificity requirements tightened. When fewer codes qualify, the codes that do qualify need better documentation support. A physician note sufficient to support an HCC submission under v24 may not support the equivalent code under v28 if that code now requires greater clinical specificity.

[Prospective Risk Adjustment](https://www.martlet.ai/solutions/prospective-risk-adjustment) gap lists built on v24 logic need to be rebuilt. Pre-visit alerts that flag v24-eligible conditions may now flag diagnoses that generate no HCC flag under v28, while missing conditions that do qualify. [Retrospective Risk Adjustment](https://www.martlet.ai/solutions/retrospective-risk-adjustment) chart review workflows face the same alignment problem for supplemental data submissions.

## Differences between HCC v24 and HCC v28

| Feature | HCC v24 | HCC v28 |
| --- | --- | --- |
| HCC payment categories | 86 | 115 |
| Diagnosis code foundation | ICD-9-CM bridged to ICD-10-CM | Native ICD-10-CM |
| Qualifying diagnosis codes | Broader inclusion | Higher predictive threshold, fewer codes |
| Coefficient data | Older cost data | Recalibrated on contemporary spending |
| Interaction terms | Smaller set | Revised and updated |
| Phase-in schedule | Fully active through 2025 | 33% in 2024, 67% in 2025, 100% from 2026 |

The phase-in numbers have real budget implications. 2024 payments were a blend: 33% v28, 67% v24. In 2025 that flipped. From the 2026 payment year onward, v24 does not factor in at all.

On the audit side, [RADV reviews](https://www.martlet.ai/solutions/radv) will run under v28 mappings as full implementation lands. A diagnosis that survived a v24 audit is not automatically safe under v28 if it no longer maps to an HCC category. It does not create retroactive liability for what has already been paid, but it drops out of future submissions entirely.

## How HCC v28 affects RAF scores

For most plans the direction is not ambiguous. Fewer codes qualify, so the same population generates fewer HCC flags. Different coefficients change what those flags pay. Put together, v28 typically produces a lower average RAF score than v24 would on an identical member population.

Where exactly it lands varies. A plan whose members are concentrated in conditions that v28 removed from HCC eligibility takes a harder hit than one whose population sits in categories that stayed or gained weight. Some plans with specific population mixes may see modest offsetting increases in certain segments.

What matters more than the average shift is what v28 does to the specificity-payment relationship. Under v24, a physician who documented "diabetes" without additional detail could still generate an HCC flag. Under v28, that same note may not be enough. Fewer codes in the model means each surviving code carries more individual weight — and that weight is contingent on the documentation actually supporting the specific code, not just referencing the condition.

## Impact of HCC v28 on Medicare Advantage plans

V28 Medicare Advantage finances break into two problems: what the plan gets paid and whether it can defend what it submitted.

On payment: the phase-in bought time, but plans that did not update their coding programs through 2024 and 2025 are hitting the full v28 impact in 2026 without the preparation they needed. Figuring out which v24 diagnoses still qualify, which new conditions picked up HCC eligibility, and how the coefficient shifts played out across specific member segments — that analysis should have been running since late 2023.

On compliance: RADV under v28 tests documentation against v28 standards. A submission that cleared a v24 audit on documentation that was just specific enough may not pass the same test under the updated model. Plans whose physicians documented at the minimum level acceptable under v24 carry real exposure going into full v28 implementation.

Plans with established prospective and retrospective programs have an easier transition because the operational infrastructure is already in place. V28 changes the target list, not whether systematic gap programs are worth running.

## Challenges healthcare organizations face with HCC v28

Analytics tools running v24 logic are the most immediate operational problem. A gap list generated from v24 mappings points coders at the wrong records — conditions that look like gaps may no longer qualify under v28, while conditions that do qualify may not appear on the list at all. The tool produces output that looks reasonable while systematically misdirecting effort.

Coder retraining scope is the second challenge. Knowing v24 well does not automatically translate to knowing where v28 differs. Which conditions dropped out of HCC eligibility, which picked up weight, which moved between categories — that is specific knowledge requiring targeted training, not a general announcement that the model changed.

Physician documentation is the hardest operational piece. Physicians do not interact with HCC mappings directly, but they absorb the consequences when their notes no longer support the codes coders need. A v24-level note may not hold up under v28 specificity requirements for the same condition. Changing physician documentation habits is harder than retraining coders because the motivation is less direct.

Actuarial models built on v24 RAF distributions are stale. Bids, reserves, and revenue forecasts that still reflect v24 assumptions going into 2026 are working with numbers that do not reflect how payments will actually calculate.

## Preparing for the transition to HCC v28

Plans that handled the v28 transition best treated it primarily as a documentation and coding problem, not a technology or actuarial one. Technology and actuarial adjustments matter, but they follow from getting the coding logic right first.

The analytics platform comes first. Any tool generating HCC gap lists, RAF projections, or coding audit outputs needs to run on v28 mappings before it is used to make program decisions. Running v24 logic against v28 submissions produces bad information at scale.

Pulling prior-year records and running v28 logic against them before the 2026 payment year closes is a useful stress test. It shows exactly where existing coding patterns would have produced different results under the new model, which tells you where to focus prospective documentation work.

Structured coder training on the specific v24-to-v28 differences should be targeted rather than general. Coders who work populations with high rates of diabetes, cardiovascular disease, or mental health conditions need to know exactly how those condition mappings changed — not a broad overview of model philosophy.

Provider education on documentation specificity is the most durable investment. Programs that connect documentation specificity to patient care quality rather than billing compliance tend to produce more lasting change in physician behavior.

## V28 raised the bar on what gets coded and what gets paid

V28 is what happens when CMS rebuilds a model on better data with tighter standards. More categories, fewer qualifying codes, recalibrated weights, and documentation requirements that reflect what ICD-10-CM specificity was always supposed to enable. For plans that were coding accurately and specifically under v24, the transition is an adjustment. For plans that relied on codes v28 has now removed, it is a revenue problem that requires operational change to address.

The underlying principle has not changed: what gets documented and coded is what gets paid for. V28 changed which documentation and coding meets that standard. The work is figuring out exactly where the new line is and building programs that hit it consistently.

If you are evaluating how Martlet AI supports v28-aligned HCC gap identification and risk adjustment workflows inside your environment, [see how the platform works](/solutions/retrospective-risk-adjustment) or [schedule a working session with the team](https://meetings.hubspot.com/ritwik-jain?uuid=0616cd42-5ffd-4a4f-8c09-a3ccfee6dab1).

## FAQ

### What is HCC v28?

HCC v28 is the updated CMS Hierarchical Condition Categories risk adjustment model for Medicare Advantage. It expands HCC payment categories from 86 to 115, removes ICD-10-CM codes that showed weak predictive relationships with healthcare costs, and recalibrates coefficient weights using contemporary spending data. Full implementation takes effect with the 2026 payment year.

### How does HCC v28 differ from HCC v24?

V28 was built on native ICD-10-CM data rather than the bridged ICD-9-to-ICD-10 mappings v24 used. It has more HCC categories but fewer qualifying diagnosis codes, because CMS raised the predictive threshold for inclusion. Coefficients were recalibrated on more recent cost data, which changes the RAF contribution of many conditions even when the HCC category itself carries over from v24.

### When will HCC v28 be fully implemented?

The phase-in ran across three payment years: 33% v28 weight in 2024, 67% in 2025, and 100% starting with the 2026 payment year. From 2026, all Medicare Advantage risk adjustment payments are calculated exclusively under v28.

### How will HCC v28 affect RAF scores?

Most plans see downward pressure on average RAF scores because fewer diagnosis codes qualify for HCC mapping and some previously high-value conditions carry lower coefficients under v28. The magnitude depends on which diagnoses were driving a plan's RAF scores under v24 and how many of those remain eligible under the updated model.

### Why is accurate coding important under the HCC v28 model?

Fewer qualifying codes means the codes that do qualify carry more individual weight in the RAF calculation. Documentation specificity requirements are effectively tighter under v28 because codes that map to high-weight HCCs now need clearer clinical support than a less specific alternative that might have served adequately under v24.
