# Martlet AI — Website Content & Build Plan (FINAL)

> The working blueprint for the site rebuild. Source facts live in `audit/dossiers/`
> (radv-dossier.md, retro-dossier.md, market-dossier.md) — every fact there carries a
> primary-source URL. This file is the what-goes-where; the dossiers are the what.

---

## 1. Operating principle: publish what competitors hide

Risk adjustment is a high-trust industry and Martlet AI is the young vendor. The playbook
is radical specificity: put the actual regulatory machinery on the site — real CMS rules,
real dates, real sample sizes, real failure modes, real methodology — so a compliance
officer leaves knowing more than they arrived with, and associates that knowledge with us.

The teardown confirmed the opening: **no competitor publishes** evaluation methodology
behind accuracy claims, a dated/maintained regulatory reference, suspect-logic
documentation, pricing models, a real trust center, or public EHR integration docs.
Transparency grades: RAAPID B-, Navina B-, ForeSee B-, Reveleer C+, Datavant C
(regulatory content stale, 2021–23), Vatica C-, DoctusTech C-, Cotiviti D+,
Episource/Optum D.

Rules for every page:

1. **Every section carries at least one objective, verifiable fact** — a regulation, a
   date, a number, a named check, a citation. No section ships on adjectives alone.
2. **The "AND MORE" test** — each page teaches the buyer something pertinent they didn't
   know to ask.
3. **Cite primary sources inline** — CMS, Federal Register, OIG, court dockets. Trust
   signal AND GEO signal.
4. **Show, don't claim** — animated/interactive demonstrations of the actual mechanics
   (the homepage verification demo is the pattern).
5. **Buyer's language** — heads of risk adjustment, compliance, population health.
6. **Date-stamp regulatory content** ("Last verified: <date>") — the maintained-tracker
   pattern (IAPP/multistate.ai) that makes a page the canonical cited URL.

Exemplar patterns to copy (from market-dossier §2): Vanta/Drata one-hub-per-regulation
with checklists; IAPP-style maintained tracker tables; Stripe program-by-program guides
(MA vs. MSSP vs. ACO REACH vs. Medicaid) and honest "how the NLP works" primers; Plaid
"readiness check" format per rule change; LaunchDarkly named-author bylines.

## 2. Site architecture (target state)

| Route | Status | Role |
|---|---|---|
| `/` | v2 live; v3 punch list §3.6 | Position + proof; routes to workflows |
| `/solutions/radv` | REBUILD — priority 1 | **Land.** The deadline buyer |
| `/solutions/retrospective-risk-adjustment` | REBUILD — priority 2 | **Expand.** The economics buyer |
| `/solutions/prospective-risk-adjustment` | REBUILD — priority 3 | Provider-side buyer |
| `/resources/radv-hub` | NEW — priority 4 | Living CMS RADV tracker (the trust artillery) |
| `/trust` | NEW — priority 5 | Security, deployment, AI governance |
| `/about` | NEW — priority 6 | JSL story, leadership |
| `/case-studies/[slug]` | NEW — blocked on approvals | WVU, JSL, Arkos with real numbers |
| `/resources/glossary` | NEW — priority 7 | GEO: HCC/RAF/MEAT/RADV/EDPS definitions |

Land-and-expand loop: RADV runs on *submitted* codes (any vendor's coding, any year) →
wedge for plans whose retro coding happened elsewhere. Retrospective positions RADV
readiness as the year-round byproduct. Each page pitches the other, explicitly.

## 3. Page blueprints

### 3.1 `/solutions/radv` — priority 1

Buyer moment: scared or selected. All facts below are in radv-dossier.md with citations.

1. **Hero** — "RADV audit readiness, year-round." Subhead: works on your historical
   submissions regardless of who coded them. Stats: ~550 contracts audited annually (up
   from ~60) · quarterly cadence · 35–200 enrollee samples · PY2020 underway now.
   CTAs: "Run a mock RADV on one contract" + "Talk to us".
2. **What changed — the 2023→2026 timeline** (objective explainer):
   Feb 2023 Final Rule (88 Fed. Reg. 6643: FFS adjuster removed, extrapolation from
   PY2018, projected $4.7B recoveries 2023–32) → May 21, 2025 expansion (all ~550
   contracts, 40 → ~2,000 CMS coders, AI-assisted review) → Sept 25, 2025 *Humana v.
   Becerra* (N.D. Tex.) vacates the 2023 rule — extrapolation paused, audits continue →
   Nov 21, 2025 CMS appeals (5th Cir. No. 25-11293; opening brief Mar 21, 2026) →
   Jan 27, 2026 HPMS memo + Mar 4, 2026 published audit schedule.
   **The published audit schedule table** (PY2020 Mar 2026 · PY2021 May 2026 · PY2024
   Aug 2026 · PY2023 Nov 2026 · PY2022 Jan 2027 · PY2025 Apr 2027) — nobody else puts
   this on a product page.
3. **The audit, step by step** — annotated timeline with real dates and rules, each step
   paired with "what Martlet AI does here":
   HPMS notice → Enrollee Data List in CDAT (PY2020: Apr 3, 2026) → five-month record
   window (PY2020: Apr 13–Aug 28, 2026; hardship deadline Sep 11) → intake feedback →
   up-to-three-round CMS coder review → Audit Report Package (Confirmed / Discrepant /
   Administrative Exception) → appeals (60-day reconsideration → Hearing Officer → CMS
   Administrator, 42 CFR 422.311(c)).
   Operational rules to surface: **max 2× records per audited HCC**, **one best medical
   record validates**, single face-to-face encounter per record, **no amending records at
   audit time**, RAOR/corrections freeze for sampled enrollees (42 CFR 422.326(d)).
4. **What CMS coders check** — the five checks with rule citations from the Medical
   Record Reviewer Guidance: acceptable provider specialty + credentials on the record;
   DOS within data-collection year; valid signature (stamps banned; e-sign needs
   authentication language; >180-day signatures case-by-case; audit-time signatures
   invalid); CMS attestation form as the only signature cure (outpatient only, single
   DOS, can't validate diagnoses); unacceptable sources list (superbills, problem lists
   alone, claim forms, lab results alone...). Reuse the animated verification demo,
   RADV-framed (ends in packet assembly).
5. **Why codes fail — the OIG record** — table of published OIG audits: Humana H2649
   84% unsupported / $6.8M refund; UCare 86% / $4.7M; Blue Care Network 91% / $3.4M;
   Triple-S 73%; the May 2026 acute-stroke audit (100% of 97 sampled unsupported,
   ~$462M industry-wide). Top failure patterns: acute stroke/MI coded from office claims
   with no inpatient claim (>90% unsupported), history-of cancers coded active, sepsis
   without inpatient claim, MDD without severity/treatment, problem-list-only support.
   OIG overall: ~70% of audited high-risk codes unsupported.
6. **The exposure math** — CMS's actual formula (ΔR̄ × sum of county rates across the
   whole sampling frame, gated by the 90% CI lower bound; strata samples 200/100/50/35;
   no extrapolation under 30 enrollees) + the worked example: 50,000-enrollee frame,
   0.03 average risk-score error → **~$15M extrapolated vs ~$60K sample-only — a ~250×
   multiplier**. Current legal posture stated honestly: sampled-enrollee collections
   now, extrapolation reserved "if legally permissible."
7. **Two postures** — Proactive (mock audits per CMS methodology, quarterly, cohorts by
   vendor/provider/condition) vs Reactive (selected: triage → validate → packet inside
   the five-month window). Wedge copy: codes submitted three years ago, coded by anyone,
   on any platform.
8. **Output anatomy** — the evidence packet, annotated field by field (chart sentence,
   encounter ID, DOS, provider + credentials, signature status, MEAT flags, coversheet-
   ready ordering).
9. **Bridge** — "Audit-readiness isn't a project — it's how your coding should run all
   year." → retrospective page.
10. **FAQ + FAQPage schema** — what is RADV; my contract was selected, what happens now;
    is extrapolation happening (honest litigation answer); what records CMS accepts;
    how fast can a mock audit run; $84B/$76B MedPAC context; $7.5B HRA finding.
11. **CTA** — mock RADV on one contract.

### 3.2 `/solutions/retrospective-risk-adjustment` — priority 2

Buyer moment: bleeding money or drowning in charts. Facts in retro-dossier.md.

1. **Hero** — "Retrospective HCC coding with audit-grade evidence on every code."
   95/95. CTA "See it on your charts."
2. **The problem in numbers** — manual benchmarks: 40–50 charts/day per coder; $2–3 per
   chart outsourced; 95% accuracy floor industry-standard; CMS's ~9.5% improper-payment
   estimate as the stakes.
3. **The pipeline (spine)** — chase list prioritization (RAF-impact ranked) → ingest
   (FHIR R4/HL7/claims/OCR) → verification pass (demo variants: close + delete) →
   exception queues → 837/EDPS submission deltas. Named artifact at each stage.
4. **Two-way coding** — adds AND deletes; after the final sweep only payment-reducing
   deletes are accepted (42 CFR 422.310(g)) — deletes are the post-RADV differentiator.
   Submission calendar: three sweeps per PY (initial ~first Friday of Sept, mid-year
   ~first Friday of Mar, final ~Jan 31 of PY+1); RAPS retired since PY2022 — it's all
   837 encounter data now.
5. **v28 explainer (GEO magnet)** — PY2024 67/33 → PY2025 33/67 → **PY2026 100% v28**;
   86 → 115 HCCs but mapped ICD-10 codes fell 9,797 → 7,770; diabetes coefficients
   constrained (~0.166 flat); I73.9 PVD (~0.288 RAF) and unspecified depression dropped;
   CMS estimate −3.12% average risk score, plan-level spread −20% to +10% (Wakely).
   How dual v24/v28 mapping + payment-year discipline works in the engine.
6. **The documentation rules we enforce** — MEAT stated precisely (industry mnemonic
   operationalizing CMS's 2008 Participant Guide + ICD-10 Official Guidelines + RADV
   Reviewer Guidance — one element suffices; problem-list carry-forwards fail);
   face-to-face/telehealth rule (real-time audio+video qualifies per CMS Apr 10, 2020
   memo; audio-only never); acceptable specialty list; signature rules (PIM Ch. 3
   §3.3.2.4); RAF resets every Jan 1 — chronic conditions re-documented annually.
7. **Economics / TCO** — in-house vs outsource table; software license vs per-chart fees
   and success commissions; the structural conflict-of-interest argument (category-level,
   cited).
8. **RADV byproduct bridge** — every closed chart is already audit-defensible → RADV page.
9. **Case studies strip** — Arkos + JSL. **FAQ + schema; CTA.**

### 3.3 `/solutions/prospective-risk-adjustment` — priority 3

Buyer moment: provider-side (medical directors, population health, ACOs). Facts in
market-dossier §3 + retro-dossier.

1. **Hero** — clinician-trust framing; WVU anchor.
2. **The problem** — chart-prep burden and gap capture; AAFP-studied benchmarks (chart
   review burden −30%, burnout −23% in Navina's study — cite as category evidence that
   point-of-care AI works, then differentiate on evidence/verification).
3. **How suspecting works (publish the methodology)** — suspect taxonomy by data source:
   prior-year dropped HCCs (RAF resets Jan 1), pharmacy signals, lab signals, HIE/ADT
   events, unstructured-note NLP — each with confidence tiers and provenance. The
   transparency play nobody else makes (only open-source Tuva publishes suspect logic).
4. **Workflow** — pre-visit prep → in-visit (Epic BPA / FHIR CDS Hooks patterns named) →
   post-visit close-loop into retrospective validation.
5. **Anti-noise design** — the adoption metrics buyers should demand from any vendor:
   suggestion acceptance rate, alerts per encounter, chart-prep minutes. Guardrails:
   MEAT-aware = no unsupported prompts (compliance story, ACO-friendly).
6. **Segment split** — MA plans buy RAF-accurate capture; ACOs (MSSP/REACH) buy
   *defensible completeness* under the +3% risk-score cap — different copy blocks.
7. **WVU Medicine case study + video. FAQ + schema; CTA.**

### 3.4 `/resources/radv-hub` — priority 4 (the trust artillery)

The maintained tracker that becomes the canonical cited URL. "Last verified" stamp.
Contents (all from radv-dossier): the audit schedule table by payment year with status;
current-cycle windows and deadlines (PY2020/PY2021 live now); rule-change log
2023-rule → present; *Humana v. Becerra* litigation tracker (5th Cir. No. 25-11293,
status, what it means for extrapolation); the CMS coder checklist; record submission
rules (2× cap, one-best-record, attestation rules, unacceptable sources); OIG audit
roundup; the exposure-math explainer; primary-source link library. Quarterly update
cadence, changelog visible. Every solution page and relevant blog post links here.

### 3.5 `/trust` — priority 5

Deployment architecture diagram (on-prem / VPC / air-gapped), PHI data-flow ("nothing
leaves"), controls mapping (HIPAA; HITRUST/NIST/SOC 2/ISO precisely worded as
"mapped-to"), AI governance in buyer language (versioned models, tested releases,
complete audit trail), BAA + engagement model, no subprocessors in the data path.

### 3.6 Homepage v3 punch list (after inner pages)

Case-study outcome numbers (pending approvals); CTA panel + case-study carousel restyle
to new design language; RADV-hub teaser card; final sitewide consistency pass. No
product screenshots — mock animations carry the product story (one variant per page:
homepage = verification pass; RADV = packet assembly + audit timeline; retrospective =
chase→close→delete→837 pipeline; prospective = suspect card with provenance).

## 4. GEO/SEO plan

FAQPage schema on every solution page + hub (homepage done). Definition-first openings
per section. Glossary pages for core terms. Internal-link mesh blog ↔ solutions ↔ hub.
Keyword-first titles/meta per page. Named-author bylines on hub/blog content
(LaunchDarkly pattern) — Hasham/Ritwik per brand-voice doc.

## 5. Approved claims + remaining inputs

**Approved claims (Hasham, July 2026) — use sitewide:**
- 95% total automation (cases closed end-to-end)
- 99% precision on model-automated codes
- 95% reduction in chart review time
- 100,000+ lives served by the platform
- 10 health systems and payers in production (WVU = health system; Arkos acts on
  behalf of payers)
- No product screenshots needed — use mock animations (homepage verification demo is
  the pattern; each solution page gets its own variant).

**Still open:**
1. Arkos + WVU named-outcome numbers for the case-study pages (site proceeds without).
2. Demo paths for the claims most likely to be exercised in a first call: 837/EDPS
   delta export, mock RADV sampling (sales readiness, not a website blocker).
3. Any existing security collateral for /trust.
4. Owner + cadence for the RADV hub's quarterly "last verified" updates.

## 6. Implementation order

1. `/solutions/radv` (land page).
2. `/solutions/retrospective-risk-adjustment` (expand page).
3. `/solutions/prospective-risk-adjustment`.
4. `/resources/radv-hub`.
5. `/trust` + `/about`.
6. Homepage v3 + consistency pass; case-study pages as approvals arrive.

## 7. Fact-integrity rules (carried from research)

- Extrapolation status must be stated honestly (paused pending 5th Cir. appeal; audits
  continue; CMS reserves the right) — accuracy here IS the trust play.
- Do not publish a "% of plans that outsource coding" stat — none credible exists.
- MEAT described as industry standard operationalizing CMS guidance — not "a CMS rule."
- Never name a competitor negatively on the site; category-level arguments only.
- Every regulatory fact links its primary source; hub pages show a verification date.
