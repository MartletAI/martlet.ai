# CMS-HCC V28 at 100%: How 2026 Changes Risk Adjustment | Martlet AI

**Date:** 07.23.2026  
**Thumbnail:** /assets/blog/cms-hcc-v28-100-percent/cover.jpg  
**Description:** In 2026, CMS-HCC V28 runs at full weight, with 115 HCCs, 7,770 mapped codes, and 2,027 fewer payable diagnoses. See what changed and how to adapt your coding.  
**MetaTitle:** CMS-HCC V28 at 100%: How 2026 Changes Risk Adjustment | Martlet AI
**Tag:** Insights
**DefinedTermName:** CMS-HCC V28 (100% Phase-In)
**DefinedTermDescription:** The CMS Hierarchical Condition Categories risk adjustment model for Medicare Advantage that reached full implementation in payment year 2026, mapping 7,770 ICD-10-CM codes to 115 HCCs across 26 condition families — a net reduction of 2,027 payable diagnosis codes compared to the prior V24 model.

# CMS-HCC V28 at 100%: how 115 HCCs and 2,027 fewer diagnosis codes change risk adjustment in 2026

![CMS-HCC V28 at 100% (2026): more HCCs, fewer payable diagnosis codes, greater documentation specificity](/assets/blog/cms-hcc-v28-100-percent/cms-hcc-v28-100-percent-infographic.jpg)

Payment year 2026 is the first year every Medicare Advantage risk score is calculated entirely under CMS-HCC V28. The model maps 7,770 ICD-10-CM codes to 115 HCCs, down from 9,797 codes under V24, and it pays for documented severity rather than diagnosis counts. If your coding operation still runs on V24 habits, the gap now shows up at full size in your RAF. Here's what changed, with chart-level examples, and how to run coding under the new map.

## The blend is over: 100% of 2026 risk scores run on V28

CMS finalized V28 in the 2024 Rate Announcement and phased it in over three payment years: 33% in 2024, 67% in 2025, and 100% in 2026. MedPAC's February 2026 comment letter confirms the phase-in is complete, and its analysis of 2024 risk-score data found that V28 is already reducing coding-intensity variation across MA organizations.

The blend is what made 2024 and 2025 feel survivable. A plan running V24-era coding still collected two-thirds of its expected risk scores on the old model in 2024. In 2026 that cushion is gone: every gap between what your clinicians document and what V28 pays for lands at full weight. CMS estimated the model change would reduce overall risk scores by roughly 3.12% on average, and your contract's actual movement depends entirely on how your documented population maps to the new crosswalk.

This is also the operating model for the foreseeable future. In the CY2027 Rate Announcement, CMS decided to keep using the 2024 model (V28) for CY2027 rather than finalize a recalibration. The map you're working with now is the map you'll be audited against.

## What changed in the map: 115 HCCs, 26 condition families, and a net loss of 2,027 payable codes

V28 was rebuilt natively on ICD-10-CM rather than crosswalked from V24's ICD-9 foundation. The payment categories expanded from 86 HCCs to 115 HCCs organized into 26 condition families, while the number of ICD-10-CM codes that map to any payment HCC fell from 9,797 to 7,770, a net reduction of 2,027 codes.

Those two numbers pull in opposite directions on purpose. More categories means finer clinical distinctions get their own coefficients: CKD stage 3a and 3b now sit in separate HCCs, bipolar disorder separated from major depression, and psychosis got its own category. Fewer mapped codes means CMS took out the diagnoses where MA coding ran far above fee-for-service patterns. MedPAC's summary of the model is explicit: CMS reviewed the conditions with the largest MA-versus-FFS coding differentials with clinical experts and, as a result, removed the payment categories for protein-calorie malnutrition, angina pectoris, and atherosclerosis of the extremities with intermittent claudication, while excluding or constraining coefficients elsewhere. Behavioral health tightened the same way: as the AAFP's practice-management guidance put it for primary care, psychiatric diagnoses coded as mild, unspecified, in remission, subsequent encounter, or sequela all map to non-payment categories under V28.

The operational consequence: an unspecified diagnosis is no longer a slightly-less-valuable diagnosis. In the categories below, it's worth zero.

## Three charts that earned RAF under V24 and earn nothing under V28

The model change is abstract until you read it against real documentation. Here are three notes that pass through MA coding operations every day.

### Example 1: "Depression, stable on sertraline."

> Assessment/Plan: 4. Depression. Continues sertraline 50 mg daily, mood stable, no SI. Refill sent.

Under V24, this typically went out as F32.9 (major depressive disorder, single episode, unspecified) and mapped to HCC 59 at a community, non-dual, aged coefficient of roughly 0.309. Under V28, F32.9 and F32.A are non-payment codes. So are all mild and in-remission depression codes. An antidepressant prescription on its own doesn't establish severity, so the code contributes nothing to the 2026 risk score.

What recovers it: if the clinical picture genuinely supports moderate recurrent major depression, documented severity (a PHQ-9 score helps) and episode pattern support F33.1, which maps to HCC 155 (major depression, moderate or severe, without psychosis) at a coefficient of 0.299. The condition didn't change. The documentation standard did.

### Example 2: "PVD, on aspirin."

> Assessment/Plan: 6. Peripheral vascular disease. Pedal pulses diminished bilaterally. Continue ASA 81 mg. Podiatry follow-up.

I73.9 (peripheral vascular disease, unspecified) mapped to V24 HCC 108 at a coefficient of 0.288; under V28 it carries 0.000, because the code no longer maps to any payment category. And there is less recovery room here than coders expect: per MedPAC, CMS removed the categories for angina pectoris and for atherosclerosis of the extremities with intermittent claudication outright, so even a well-documented claudication workup doesn't restore the score. What still risk-adjusts is the severe end of vascular disease, such as atherosclerosis with ulceration or gangrene, where the documentation bar is correspondingly higher.

### Example 3: "Moderate malnutrition, supplement started."

> Dietitian consult: moderate protein-calorie malnutrition. Albumin 2.9. Oral nutritional supplement BID initiated, weekly weights.

E44.0 mapped to V24 HCC 21, protein-calorie malnutrition, a category CMS removed from V28 entirely after concluding the MA-versus-FFS coding differential reflected diagnostic discretion rather than cost. No malnutrition code risk-adjusts in 2026, at any documented severity: a dietitian-confirmed severe case scores the same as no diagnosis at all. This is the category where no documentation fix recovers the score. The correct response is to code the condition accurately for clinical purposes and take it out of your RAF forecast entirely.

*All patient data shown is synthetically generated for illustration.*

## Where specificity now pays: the recapture side of V28

The same crosswalk that removed 2,027 codes created new value in the specific ones, and most of it sits unclaimed in problem lists written under V24 rules.

CKD stage 3 is the clearest case. V24 didn't pay for stage 3 at all. V28 splits it into two payment categories: N18.30 and N18.31 (stage 3 unspecified and stage 3a) map to HCC 329 at 0.127, while N18.32 (stage 3b) maps to HCC 328 at a higher coefficient. The distinction is a single eGFR range (30–44 for 3b), and the qualifying lab value is usually already sitting in the chart from the most recent metabolic panel. A problem list that says "CKD 3" is leaving the substage, and the difference in coefficient, on the table.

The same pattern holds across behavioral health, where severity and episode documentation decide whether a real, treated condition maps at all, and in the substance-use categories, where V28 distinguishes dependence from abuse with meaningfully different coefficients. The V28 skill isn't finding more diagnoses. It's documenting the ones that exist to the specificity the model pays for, with the MEAT evidence that survives an audit three payment years later.

## Running HCC coding under 100% V28: map discipline, prospective capture, MEAT validation

Three operational controls separate teams that absorb V28 from teams that bleed under it.

The first is payment-year discipline enforced in software. Coders working from V24-era tip sheets keep producing codes the model retired. Martlet AI applies the current V28 mapping at submission time and blocks outdated codes before they enter the batch, so the crosswalk problem gets solved once, centrally, instead of in every coder's head.

The second is [prospective capture](/solutions/prospective-risk-adjustment). Every example above is cheaper to fix at the point of care than in retrospective review: point-of-care gap capture surfaces the specificity gap (depression severity undocumented, CKD substage supported by eGFR 38) as a concise, evidence-linked suggestion before the encounter closes, while the clinician can still document it.

The third is validation you can defend. Martlet AI's MEAT-aware [retrospective validation](/solutions/retrospective-risk-adjustment) runs on every candidate HCC and attaches page-level evidence: the chart sentence, encounter ID, date of service, provider name and credentials, and signature status. The healthcare-specific medical language models underneath come from the John Snow Labs stack, ranked #1 on 12 of 13 medical benchmarks against frontier general-purpose LLMs, and the platform runs in production at WVU Medicine, a 25-hospital academic health system, as presented in their NLP Summit session on AI-enhanced HCC code discovery. It deploys inside your environment, so PHI never leaves your network.

## The takeaway

V28 at 100% pays for specificity and severity, backed by documentation, under a map with 2,027 fewer payable codes. The plans holding their RAF in 2026 are the ones that stopped treating unspecified diagnoses as revenue, moved specificity capture to the point of care, and validate every submitted code against the current-year crosswalk with evidence attached. If you want to see what the V28 gap looks like on your own charts, [schedule a working session](https://meetings.hubspot.com/ritwik-jain?uuid=0616cd42-5ffd-4a4f-8c09-a3ccfee6dab1) and run Martlet AI on a sample.

## FAQ

### When did CMS-HCC V28 take full effect?

Payment year 2026. CMS phased V28 in over three years (33% in 2024, 67% in 2025, 100% in 2026), and V24 no longer contributes to any MA risk score. CMS will continue using the same model for CY2027.

### How many HCCs and diagnosis codes does V28 have?

V28 has 115 payment HCCs in 26 condition families, mapped from 7,770 ICD-10-CM codes. V24 had 86 HCCs mapped from 9,797 codes, so the net reduction is 2,027 payable codes.

### Which diagnosis categories lost risk adjustment under V28?

CMS removed the payment categories for protein-calorie malnutrition, angina pectoris, and atherosclerosis of the extremities with intermittent claudication, and it removed mapping for many unspecified vascular codes such as I73.9. Behavioral health codes documented as mild, unspecified, or in remission also map to non-payment categories.

### Does CKD stage 3 risk-adjust under V28?

Yes, and it didn't under V24. Stage 3 unspecified and 3a map to HCC 329, and stage 3b maps to HCC 328 at a higher coefficient, so documenting the substage from the eGFR value matters.

### What documentation makes depression risk-adjust under V28?

Documented severity (moderate or severe) and episode pattern, supporting codes such as F32.1, F32.2, F33.1, or F33.2, which map to HCC 155. Unspecified, mild, and in-remission depression codes carry no risk weight.

### Why did our average RAF drop in 2026 even though our population didn't change?

The measurement changed. With V28 at full weight, diagnoses that paid under V24 no longer count, and CMS estimated an average risk-score reduction of about 3.12% from the model change alone. Contract-level impact depends on how your documented conditions map to the V28 crosswalk.
