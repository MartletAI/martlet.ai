# Medicare Advantage HCC Coding: Rules & Economics Dossier

Research compiled July 2026 for Martlet AI website content. Every factual claim carries a source URL. Primary sources (CMS, eCFR, OIG) preferred; secondary sources flagged as such.

---

## 1. MEAT Criteria (Monitor, Evaluate, Assess, Treat)

### Definition

MEAT is the documentation framework used across the risk-adjustment industry to decide whether a diagnosis reported for HCC payment is actually supported by the encounter note. A diagnosis should show at least ONE of the four elements in the note for the date of service:

| Element | What it means | Documentation examples |
|---|---|---|
| **M — Monitor** | Signs, symptoms, disease progression/regression tracked over time | "A1c 7.2 today, up from 6.8 in January"; BP log review; weight trend on CHF visit; INR range |
| **E — Evaluate** | Test results, medication effectiveness, response to treatment | "Controlled on current regimen"; "worsening despite dose increase"; review of echo results |
| **A — Assess/Address** | Ordered tests, discussion, records review, counseling; a severity/stability judgment | "HFrEF, NYHA class II, stable"; "T2DM, uncontrolled"; ordered CMP; counseled on diet |
| **T — Treat** | Medications, therapies, referrals, procedures | Rx refill, dose adjustment, referral to nephrology, PT ordered |

Only one element is required, but more is better for audit defensibility.
- Source (AAPC): https://www.aapc.com/blog/41212-include-meat-in-your-risk-adjustment-documentation/
- Source: https://hccbuddy.com/meat-criteria
- Source (ACDIS Q&A): https://acdis.org/articles/qa-acceptable-documentation-hccs

### Origin — the precise nuance

**MEAT is NOT a formal CMS regulation.** The acronym appears nowhere in the Code of Federal Regulations or the CMS-HCC payment rules. It is an **industry-created mnemonic** that operationalizes what CMS *does* require:

1. **CMS's 2008 Risk Adjustment Data Technical Assistance for MA Organizations Participant Guide** — the foundational CMS training document requiring that diagnoses be documented as a result of a face-to-face encounter and be supported by the medical record. https://www.hhs.gov/guidance/document/2008-risk-adjustment-data-technical-assistance-medicare-advantage-organizations
2. **ICD-10-CM Official Guidelines for Coding and Reporting**, Section IV.J — code all documented conditions that coexist at the time of the encounter and require or affect patient care/treatment/management.
3. **CMS Contract-Level RADV Medical Record Reviewer Guidance** — what CMS's own audit coders apply when validating HCCs. https://www.cms.gov/files/document/medical-record-reviewer-guidance-january-2020.pdf

AHIMA's practice brief "Documentation and Coding Practices for Risk Adjustment and Hierarchical Condition Categories" cites the 2008 CMS Participant Guide as the root of MEAT-style validation: https://journal.ahima.org/Portals/0/archives/AHIMA%20files/Documentation%20and%20Coding%20Practices%20for%20Risk%20Adjustment%20and%20Hierarchical%20Condition%20Categories.pdf

A related proprietary variant is **TAMPER™** (Treatment, Assessment, Monitor/Medicate, Plan, Evaluate, Referral). Source: https://www.fortherecordmag.com/archives/Fall22p26.shtml

**Correct website phrasing:** "MEAT is the industry-standard documentation test derived from CMS guidance and the ICD-10-CM Official Guidelines — not a codified regulation — but it is functionally what RADV auditors apply when they decide whether an HCC survives audit."

### Passes vs. fails

**Passes:**
- "Diabetes, stable on metformin, A1c 6.9, continue metformin 1000 mg BID" (Assess + Monitor + Treat)
- "COPD — increased dyspnea on exertion; increase Symbicort to 2 puffs BID; PFTs ordered" (Monitor + Treat + Assess)
- "CKD stage 3b, eGFR 38 stable from 40; continue ACE inhibitor; recheck BMP 3 months" (Monitor + Evaluate + Treat)

**Fails:**
- A bare problem-list carry-forward with no narrative linking the condition to the visit ("exactly the pattern RADV auditors remove")
- Diagnosis appearing only on a superbill or in billing software but not in the provider's note — "coding must be based on provider documentation, not what is entered on a superbill" (see §2)
- Coding active cancer when the note shows the patient is NED and off treatment — should be Z85.- personal history; the active code will lack MEAT evidence and be deleted at audit
- "History of MI" coded as acute MI; "history of CVA" coded as acute stroke (see OIG acute-stroke audits, §2)
- Sources: https://hccbuddy.com/meat-criteria ; https://www.raapidinc.com/blogs/simplify-hcc-coding-with-meat-criteria/ ; https://acdis.org/articles/qa-acceptable-documentation-hccs

---

## 2. CMS Documentation Requirements for Risk Adjustment

Regulatory anchor: **42 CFR 422.310** (risk adjustment data must be obtained from providers, be accurate, complete, and truthful; CMS may validate against medical records). https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-G/section-422.310
Operational rules: **Medicare Managed Care Manual, Chapter 7 – Risk Adjustment.** https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/mc86c07.pdf

### Acceptable provider types and specialties

- CMS accepts risk-adjustment diagnoses only from **approved physician specialty types**, published annually as the "Acceptable Physician Specialty Types" list (by CMS specialty code). https://www.cms.gov/medicare/payment/medicare-advantage-rates-statistics/risk-adjustment/acceptable-physician-specialty-type-lists ; PY2025 list: https://www.cms.gov/files/document/acceptable-physician-specialty-types-py-2025.pdf
- Included: MD/DO (most specialties), Nurse Practitioner (code 50), Physician Assistant (97), Podiatry (48), Psychologist (62)/Clinical Psychologist (68), Licensed Clinical Social Worker (80), plus therapists (65/67) among others.
- **Not acceptable:** independent diagnostic testing facilities, LPNs/LVNs, medical assistants, nursing assistants, ambulance providers, medical supply companies, anesthesiology assistants. Source (plan compliance guide summarizing CMS rules): https://provider.amerigroup.com/docs/gpp/ALL_CARE_RiskAdjustmentDocumentationCoding.pdf?v=202110111739

### Acceptable encounter types and settings

- Three allowable data sources: **hospital inpatient, hospital outpatient, and physician/professional** encounters. Diagnoses from labs, DME, radiology-only, or diagnostic-test-only encounters do not risk-adjust (encounter data diagnosis filtering logic). Sources: Managed Care Manual Ch. 7 (above); https://www.hhs.gov/guidance/sites/default/files/hhs-guidance-documents/FinalEncounterDataDiagnosisFilteringLogic.pdf
- **Face-to-face requirement:** the diagnosis must come from a face-to-face encounter. Since CMS's April 10, 2020 memo, **telehealth encounters satisfy the face-to-face requirement only when delivered via real-time interactive audio AND video** ("e.g., a smart phone"). **Audio-only does not qualify.** Primary source (CMS memo, April 10, 2020): https://www.cms.gov/files/document/applicability-diagnoses-telehealth-services-risk-adjustment-4102020.pdf ; analysis: https://www.sheppardhealthlaw.com/2020/04/articles/centers-for-medicare-and-medicaid-services-cms/cms-issues-guidance-on-risk-adjustment-and-telehealth-services/ ; https://natlawreview.com/article/cms-issues-guidance-risk-adjustment-and-telehealth-services

### Signature and authentication requirements

Anchor: **Medicare Program Integrity Manual (Pub. 100-08), Chapter 3, §3.3.2.4** and CMS MLN fact sheet "Complying with Medicare Signature Requirements" (MLN905364):
- Every service must be **authenticated by the author** via handwritten or electronic signature. **Stamped signatures are not acceptable** (narrow disability exception).
- Acceptable e-signature formats include "Electronically signed by," "Authenticated by," "Approved by," "Validated by," etc.
- **Illegible signatures** can be cured by a signature log or attestation statement; **missing signatures generally cannot be added late** — late authentication beyond the normal transcription delay is disallowed; use the attestation process instead.
- Provider **credentials/specialty must be identifiable** on the record (next to the signature or on letterhead).
- Sources: https://www.cms.gov/files/document/mln905364-complying-medicare-signature-requirements.pdf ; PIM Ch. 3: https://www.thehealthlawfirm.com/wp-content/uploads/2023/11/Chapter-3-Program-Integrity-Manual-pim83c03.pdf ; Noridian summary: https://med.noridianmedicare.com/web/jddme/topics/documentation/signature-requirements ; RADV coder guidance: https://www.cms.gov/research-statistics-data-and-systems/monitoring-programs/medicare-risk-adjustment-data-validation-program/other-content-types/radv-docs/coders-guidance.pdf

### Date-of-service rules

- The diagnosis must be documented at an encounter with a **date of service inside the data-collection year** (the calendar year before the payment year, under the prospective CMS-HCC model). Each payment year's risk score is built only from that collection year's encounters — chronic conditions must be **re-documented every year** ("the RAF resets to demographics every January 1"). Source: Managed Care Manual Ch. 7 (above); https://www.cms.gov/files/document/medical-record-reviewer-guidance-january-2020.pdf
- The record must clearly show the DOS, and for RADV the record submitted must cover that exact encounter.

### "Coding from the problem list" pitfalls

- CMS RADV Medical Record Reviewer Guidance: EMR-populated diagnosis **lists are considered case-by-case** and evaluated for "chronicity and support in the full medical record, such as history, medications, and final assessment" — a standalone, unassessed problem list does not validate an HCC. https://www.cms.gov/files/document/medical-record-reviewer-guidance-january-2020.pdf
- Superbills are explicitly **not** acceptable documentation sources. Source: RADV coder guidance (above); https://icd10monitor.medlearn.com/cms-issues-radv-blueprint-for-handling-flawed-documentation/
- The enforcement backdrop: CMS estimates roughly **9.5% of MA payments are improper, driven mainly by unsupported diagnoses**; OIG's targeted audits of "high-risk" diagnosis groups routinely find 50%+ unsupported rates — e.g., OIG estimated **$462 million** in PY2021 overpayments tied to unsupported **acute stroke** codes, with 100% of sampled acute-stroke HCCs unsupported. Sources: https://oig.hhs.gov/reports/work-plan/browse-work-plan-projects/w-00-24-35079/medicare-advantage-risk-adjustment-data-targeted-review-of-documentation-supporting-specific-diagnosis-codes-audit-11/ ; https://www.3genconsulting.com/blogs/oig-462-million-hcc-risk-adjustment-coding-medicare-advantage-2026/ ; example audit: https://oig.hhs.gov/oas/reports/region1/11900500.pdf ; https://oig.hhs.gov/reports/all/2024/medicare-advantage-compliance-audit-of-diagnosis-codes-that-emblemhealth-contract-h3330-submitted-to-cms/ ; OIG high-risk-group audit (61%+ of 250 sampled enrollee-years unsupported): https://www.oversight.gov/sites/default/files/documents/reports/2022-11/71701169.pdf
- RADV program page (extrapolated recovery under the 2023 RADV final rule; audits expanded to all eligible contracts, ~550/yr, announced May 2025): https://www.cms.gov/data-research/monitoring-programs/medicare-risk-adjustment-data-validation-program ; https://www.wilmerhale.com/en/insights/client-alerts/20251223-oig-audit-of-humana-medicare-advantage-contract-underscores-continued-scrutiny-of-high-risk-diagnoses-and-ongoing-disputes-over-audit-methodology

---

## 3. The CMS-HCC v24 → v28 Transition (with numbers)

### Phase-in timeline (verified)

| Payment year | % v24 | % v28 |
|---|---|---|
| PY2024 | 67% | 33% |
| PY2025 | 33% | 67% |
| PY2026 | 0% | **100%** |

Sources: https://codingintel.com/hcc-coding-changes/ ; https://www.rebellisgroup.com/post/is-your-organization-ready-for-the-full-implementation-of-v28-here-s-what-you-need-to-know ; CMS PY2025 risk adjustment paper: https://www.cms.gov/aco-reach-kcc-py2025-risk-adjust-paper ; MedPAC comment letter (v28 "fully operative" PY2026): https://www.medpac.gov/wp-content/uploads/2026/02/02252026_MedPAC_MA_Part-D-AN-CY-2027_comment-letter_v3_SEC.pdf

### Structural changes (verified numbers)

- **HCC count: 86 (v24) → 115 (v28)** — categories renumbered and re-grouped, recalibrated on FFS data with ICD-10 (v24 was calibrated on ICD-9-mapped data).
- **ICD-10 mappings: ~9,797 codes risk-adjusted under v24 → ~7,770 under v28.** Net: **2,294 codes lost** their HCC mapping; **268 codes gained** a mapping.
- Sources: https://codingintel.com/hcc-coding-changes/ ; https://www.vbcriskanalytics.com/blogs/cms-hcc-v28-changes ; https://www.aafp.org/pubs/fpm/issues/2023/1100/hcc-update.html ; https://www.agshealth.com/blog/understanding-the-changes-in-the-cms-hcc-model-v28/

### Major condition changes

- **Diabetes — constrained coefficients:** uncomplicated, with acute complications, and with chronic complications now carry the **same coefficient (~0.166)**, eliminating the v24 severity gradient (v24: uncomplicated ~0.105 vs. with complications ~0.302). Sources: https://codingintel.com/hcc-coding-changes/ ; https://www.vbcriskanalytics.com/blogs/cms-hcc-v28-changes
- **Vascular disease:** **I73.9 (peripheral vascular disease, unspecified)** — worth ~0.288 RAF in v24 — **no longer maps to any HCC** in v28; several unspecified atherosclerosis codes were also dropped. Sources: https://hccbuddy.com/blog/hcc-coding-cheat-sheet-2026 ; https://providers.bcidaho.com/resources/pdfs/providers/provider-risk-education/09-September-2025-email-blast.pdf
- **Depression:** unspecified major depressive disorder (e.g., F32.9) no longer risk-adjusts; MDD must be documented with episode/severity specificity to map in v28. Source: https://www.aafp.org/pubs/fpm/issues/2023/1100/hcc-update.html
- **Malnutrition:** moderate/unspecified malnutrition codes (e.g., E44.0) no longer map to a payment HCC. Source: https://hccbuddy.com/blog/hcc-coding-cheat-sheet-2026
- General restructuring of diabetes, vascular, and mental-health hierarchies changed how severity and comorbidity contribute to RAF. Source: https://www.agshealth.com/blog/understanding-the-changes-in-the-cms-hcc-model-v28/

### Published impact estimates

- **CMS (2024 Rate Announcement): −3.12%** average MA risk-score impact from full v28 implementation. Sources: https://www.vbcriskanalytics.com/blogs/cms-hcc-v28-changes ; https://www.raapidinc.com/blogs/cms-hcc-model-v28/
- **Wakely white paper** ("Proposed MA Risk Adjustment Model – Good News for Some, Detrimental for Others"): plan-level impacts range roughly **−20% to +10%** depending on coding intensity and population. https://www.wakely.com/wp-content/uploads/2024/04/proposed-ma-risk-adjustment-model-good-news-some-detrimental-others.pdf
- **Wakely FFS normalization analysis:** CY2025 normalization alone cuts risk scores 0.6% (v24) / 2.8% (v28) year-over-year; extending to CY2026 → **−3.05%** YoY. https://www.wakely.com/wp-content/uploads/2024/04/deeper-look-cy2025-part-c-ffs-normalization-factor.pdf
- **Milliman survey for the SNP Alliance** (16 MA orgs; 100+ D-SNP and 500+ non-SNP plans): median risk-score change under the 2024 (v28-blend) model of **−0.7% for D-SNPs** (25th–75th percentile: −2.5% to +0.4%) vs. **+2.0% median for non-SNPs** — i.e., v28 hits high-acuity/dual populations hardest. https://snpalliance.org/wp-content/uploads/2023/03/SNP-Alliance-2024-CMS-HCC-Model-Change-Survey-20230315.pdf ; https://snpalliance.org/snp-alliance-commissions-milliman-survey-impact-of-medicare-advantage-part-c-risk-score-model-change-on-2024-risk-scores/
- Secondary/industry observations: plan-level RAF declines of **5–30%** reported for identical populations where coding leaned on now-unmapped codes. https://www.vbcriskanalytics.com/blogs/cms-hcc-v28-changes

---

## 4. Submission Mechanics: RAPS → EDPS, 837s, Deletes, Deadlines

### RAPS vs. EDPS — the transition is complete

- RAPS (Risk Adjustment Processing System) took minimal "RAPS files" of diagnosis clusters; EDPS (Encounter Data Processing System) takes full **X12 837** claim-format encounters.
- Blend history: encounter data first used PY2015; blend shifted year-over-year; **PY2021 = 75% encounter / 25% RAPS; PY2022 = 100% encounter data** (plus FFS claims). RAPS is no longer used to calculate MA risk scores as of CY2022.
- Sources: https://www.risehealth.org/insights-articles/article/the-sunsetting-of-raps-for-medicare-advantage/ ; https://www.ssctech.com/blog/raps-is-retiring-are-you-prepared-for-the-change ; https://www.foreseemed.com/blog/cms-encounter-data ; https://www.centaurihs.com/riding-off-into-the-raps-sunset/

### How 837s carry risk adjustment data

- MAOs submit **837-P (professional) and 837-I (institutional)** encounter data records (EDRs) to the Encounter Data System; CMS applies filtering logic (acceptable provider/bill types, specialties) to select risk-adjustment-eligible diagnoses. Sources: CMS Encounter Data Submission and Processing Guide: https://www.csscoperations.com/internet/csscw3_files.nsf/F2/2022ED_Submission_Processing_Guide_20221130.pdf/$FILE/2022ED_Submission_Processing_Guide_20221130.pdf ; filtering logic: https://www.hhs.gov/guidance/sites/default/files/hhs-guidance-documents/FinalEncounterDataDiagnosisFilteringLogic.pdf
- **Chart review records (CRRs)** ride the same 837 format and let plans add or delete diagnoses found in retrospective chart review:
  - **Linked CRR** references the ICN of a previously accepted EDR/CRR; **unlinked CRR** stands alone.
  - **CRR-delete:** linked CRR with Loop 2300 REF01="EA"/REF02="8" removes diagnoses; a single linked CRR cannot both add and delete — separate records required.
  - **Replace/void:** CLM05-3 frequency code 7 (replace) or 8 (void); a replacement CRR simultaneously adds diagnoses new to the record and deletes ones omitted from it.
  - Source: Encounter Data Submission and Processing Guide (above); FAQ: https://www.csscoperations.com/internet/csscw3.nsf/DID/U3NFLZ5K9V

### Deadlines and sweeps

Each payment year has three risk-score runs. The pattern (per CMS HPMS memo "Deadlines for Submitting Risk Adjustment Data… PY2025, 2026, 2027," reaffirmed April 2025):

| Run | Dates of service | Deadline pattern | Verified example |
|---|---|---|---|
| **Initial** | July 1 (PY−2) – June 30 (PY−1) | ~First Friday of September before the payment year | PY2026: DOS 7/1/2024–6/30/2025, deadline **Sept 5, 2025**, paid starting Jan 2026; PY2027: **Sept 4, 2026** |
| **Mid-year** | Full calendar year PY−1 | ~First Friday of March of the payment year | PY2026: DOS CY2025, deadline **March 6, 2026**, paid mid-2026 |
| **Final (reconciliation)** | Full calendar year PY−1 | No earlier than **Jan 31 of the year after the payment year** | PY2025 final (DOS CY2024): **Feb 2, 2026, 8 p.m. ET** |

- Data submitted between runs rolls into the next run automatically.
- **At the final deadline:** no data submitted afterward is used in any risk-score run for that payment year. Per **42 CFR 422.310(g)(2)(ii)**, after the final deadline an MAO may only submit corrections that *reduce* payment (deletes) — it cannot add diagnoses for more payment. CMS "will only process deletes after that point."
- Sources: CMS HPMS memo PDF: https://www.cms.gov/files/document/deadlineforsubmittingriskadjustmentdataforuseinriskscorecalculationrunsforpaymentyears20252026and202.pdf ; https://beaconhcs.com/2025/04/28/cms-confirms-risk-adjustment-deadlines-appeals-protocols-cy-2026-bid-guidance-week-of-4-28-25-5-2-25/ ; https://frgsystems.com/healthcare-finance-news/upcoming-cms-deadline-final-notice-for-2026-risk-adjustment-data-submission ; https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-G/section-422.310 ; https://www.raapidinc.com/blogs/cms-risk-adjustment-submission-deadlines/ ; https://www.rebellisgroup.com/post/cms-releases-hpms-memo-on-risk-adjustment-data-submission-deadlines-for-py-2025-2027

---

## 5. Economics Benchmarks

*Note: unlike sections 1–4, most figures here are vendor/industry-reported rather than CMS-published; treat as directional ranges and attribute when publishing.*

### Cost per chart (outsourced retrospective HCC review)

- Per-chart coding rates commonly cited at **$2–$3 per chart** (offshore-inclusive freelance/vendor rates; complex charts and US-based coding run higher). Source: https://medicalcodingclasses.medium.com/medical-coders-how-to-set-your-rates-for-hcc-risk-adjustment-coding-per-hour-or-per-chart-ee24621512d9
- FTE-model outsourcing advertised from **~$1,280 per coder FTE/month** (offshore). Source: https://www.flatworldsolutions.com/healthcare/risk-adjustment-hcc-coding-services.php
- Labor-rate comparison (HFMA study): offshore coders ~$35/hr vs. domestic ~$60/hr, but offshore productivity was **34% lower per hour**, requiring ~51% more offshore coders for the same volume. Source: https://www.hfma.org/revenue-cycle/coding/60923/

### Coder productivity

- Experienced HCC coders: roughly **40–50 charts per 8-hour day** (≈5–6 charts/hour) for typical retrospective review; long/complex charts can take 40+ minutes each. Sources: https://medicalcodingclasses.medium.com/medical-coders-how-to-set-your-rates-for-hcc-risk-adjustment-coding-per-hour-or-per-chart-ee24621512d9 ; https://www.rapidclaims.ai/blogs/hcc-coding-medicare-risk-adjustment ; benchmark framing (volume/complexity/accuracy/rework): https://ambci.org/medical-billing-and-coding-certification-blog/coding-productivity-benchmarks-industry-wide-2025-report

### Accuracy benchmarks

- **95% accuracy** is the long-standing industry minimum for risk-adjustment coder QA; Avalere reports **96–97% is becoming the norm** as stakes rise. Plans audit coders monthly-to-annually. Sources: https://advisory.avalerehealth.com/insights/trends-in-risk-adjustment-coding-operations ; https://www.aapc.com/blog/93137-accuracy-vs-production-in-risk-adjustment-coding/ ; https://codingbillingsolutions.com/blogs/are-you-meeting-the-95-medical-coding-accuracy-benchmark/
- Note: even at the 95% standard, ~1 in 20 codes is wrong — a strong stat for AI-QA positioning.

### Market size (varying scopes — cite with care)

- Risk adjustment **software**: ~$2.5B (2024) → ~$5.2B by 2035 (Wise Guy Reports). https://www.wiseguyreports.com/reports/risk-adjustment-software-market
- Risk adjustment **analytics**: ~$3.2B (2024) → $8.7B by 2033, 11.6% CAGR (Market Intelo); alternative estimate $4.7B (2024) → $14.1B by 2033 (DataIntelo). https://marketintelo.com/report/risk-adjustment-analytics-market ; https://dataintelo.com/report/risk-adjustment-analytics-market
- Adjacent: clinical risk grouping solutions ~$703M (2023) → $1.6B by 2030, 13.13% CAGR (Grand View Research). https://www.grandviewresearch.com/industry-analysis/clinical-risk-grouping-solutions-market
- Context sizing: MA enrollment ~33–35M beneficiaries; total MA payments **>$460B/yr**; risk adjustment governs a large share of that flow. Sources: https://www.commonwealthfund.org/publications/explainer/2026/jan/how-risk-adjustment-affects-payment-medicare-advantage-plans ; https://www.vbcriskanalytics.com/blogs/risk-adjustment-explained

### Outsourcing prevalence

- **No rigorous public survey found** stating the exact percentage of MA plans outsourcing coding. Best available: Avalere's qualitative study of coding operations (7 plan interviews) describes hybrid in-house/vendor models as standard practice; vendor market maps (Elion, KLAS) show a large multi-vendor ecosystem implying widespread outsourcing. Recommend NOT publishing a specific percentage. Sources: https://advisory.avalerehealth.com/insights/trends-in-risk-adjustment-coding-operations ; https://elion.health/resources/risk-adjustment-hcc-capture-market-map ; https://klasresearch.com/compare/risk-adjustment-coding-retrieval-and-compliance-solutions/415

---

## 6. Adjacent Risk-Adjustment Models (one paragraph each)

### RxHCC (Medicare Part D)

The RxHCC model is CMS's separate prospective risk-adjustment model for Medicare Part D prescription drug plan payments: it uses base-year diagnoses (mapped into Rx-specific hierarchical condition categories, a different category set than CMS-HCC because drug spend drivers differ from medical spend drivers) plus demographics to predict the plan's drug benefit liability in the payment year; a member with an RxHCC score of 1.0 is expected to incur average standard-benefit drug liability. Plans receive both a Part C (CMS-HCC) and Part D (RxHCC) risk score for the same member, and the two models map many diagnoses differently — a condition can risk-adjust under RxHCC but not CMS-HCC and vice versa. Sources: https://provider.healthalliance.org/coding-counts-post/rxhcc-model/ ; https://www.milliman.com/en/insight/disease-prevalence-cms-hcc-rxhcc-risk

### CDPS+Rx (Medicaid managed care)

CDPS (Chronic Illness and Disability Payment System), developed and maintained at UC San Diego, is the dominant risk-adjustment family for state Medicaid managed-care capitation; CDPS+Rx combines diagnosis-based CDPS categories with the MRX pharmacy (NDC-based) model, which matters in Medicaid because encounter/diagnosis data quality is uneven and pharmacy data fills the gap. Unlike the single national CMS-HCC model, CDPS+Rx is implemented state-by-state — states choose concurrent vs. prospective application, custom weight calibrations, and eligibility-category-specific models (TANF adults/children, disabled, etc.), so vendors must handle per-state variation. Sources: https://www.soa.org/digital-publishing-platform/emerging-topics/2019/et-2023-09-liu/ ; https://scienceinsights.org/three-risk-adjustment-models-cms-hcc-hhs-hcc-and-cdps/ ; https://thetuvaproject.com/knowledge/analytics/risk-adjustment

### HHS-HCC (ACA commercial marketplace)

The HHS-HCC model powers the ACA individual/small-group risk-adjustment program: unlike prospective CMS-HCC, it is **concurrent** (same-year diagnoses explain same-year costs), it predicts combined medical + drug spend, it is calibrated by metal level (platinum through catastrophic) and age band (adult/child/infant), and since 2018 it incorporates prescription drug categories (RXCs) for adults as severity markers. Its HCC set differs from Medicare's because the under-65 commercial population's cost drivers differ (e.g., maternity, infant categories). Critically, it drives **budget-neutral transfers between insurers within a state market** — not payments from the government — so accuracy is a zero-sum competitive issue among carriers. Sources: https://www.agshealth.com/blog/understanding-the-hhs-hcc-risk-adjustment-model/ ; https://scienceinsights.org/three-risk-adjustment-models-cms-hcc-hhs-hcc-and-cdps/ ; CMS RA program report: https://www.cms.gov/files/document/ra-report-by2024.pdf

---

## Fact-check flags for the website team

1. **Phase-in percentages**: PY2024 = 67% v24 / 33% v28 (not the reverse). PY2025 = 33/67. PY2026 = 100% v28.
2. **MEAT**: always describe as "industry standard derived from CMS guidance," never "CMS's MEAT regulation."
3. **Telehealth**: audio-video only; audio-only diagnoses are NOT risk-adjustment eligible (April 10, 2020 CMS memo, still the operative guidance).
4. **"~2,000 codes removed"**: the precise citable numbers are 2,294 codes lost mapping, 268 gained, 9,797 → 7,770 total.
5. **Final deadline behavior**: after final reconciliation deadline, only payment-reducing deletes are accepted (42 CFR 422.310(g)).
6. **Economics figures** ($/chart, charts/day, market size) are vendor-reported ranges, not CMS data — attribute and hedge.
7. **Do not publish a specific "% of plans outsource coding"** — no credible public survey supports one.
