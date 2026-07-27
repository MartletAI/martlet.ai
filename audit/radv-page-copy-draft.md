# RADV page — full copy draft (for review before implementation)

**Voice rules applied throughout:** explanatory prose over fragment-stacking · no "X, not Y"
constructions · headers can be punchy, body must explain the mechanism · US spelling ·
every regulatory fact keeps its primary source.

**Structure at a glance**

| # | Section | Status |
|---|---|---|
| 1 | Hero | REWRITE — our numbers, not CMS's |
| 2 | What you actually get | NEW (brochure) |
| 3 | Why now: three years that changed RADV | KEEP + light smoothing |
| 4 | What gets checked on every chart | MERGE (page's CMS rules + brochure's 6 checks) |
| 5 | Four levels of review | NEW (brochure) |
| 6 | Before the letter. After the letter. | MERGE (postures + selection facts) |
| 7 | Beyond this year's audit | NEW (brochure) |
| 8 | In production | NEW — optional, one line + logos |
| 9 | How the engagement works | NEW (brochure) |
| 10 | The same checks, one step earlier | REWRITE (bridge to retrospective) |
| 11 | FAQ + CTA | KEEP + 2 new questions |

**Moving to the RADV Hub:** OIG failure table (one-line pointer stays) · extrapolation
methodology and the ×250 worked example · the six-step CMS audit-lifecycle narration.

---

## 1 · Hero — REWRITE

**H1**
> Audit-grade RADV validation.
> 99% precision.

**Subhead**
> CMS is now auditing every eligible Medicare Advantage contract, every year, with multiple
> payment years in flight at once. Martlet AI verifies your submitted codes against the record,
> links the evidence to the page, and builds the submission packets — for the audit you're in
> now, and every one after.

**Stat row** — replaces the four CMS tiles
| `99%` | `95%` | `100k+` | `Zero` |
|---|---|---|---|
| precision on automated codes | of codes closed automatically | lives on the platform | PHI leaving your network |

**CTAs:** `Run a mock RADV on one contract` · `See what gets checked` (anchor → §4)

> *Removed:* the "What you're up against — CMS's audit machine, in CMS's numbers" tile row
> (~550 / Quarterly / 35–200 / 2,000 coders). It sat in the exact slot every other page uses for
> Martlet AI's own proof numbers, and the CMS context it carried is already in the subhead and
> §3.

---

## 2 · What you actually get — NEW

**Header:** What you actually get.

**Lead:** Four things come out of a Martlet AI RADV run, whatever stage of the audit you're in.

**Card 1 — Every code checked against the record**
> Every code comes back supported with evidence, flagged for deletion, or routed to your team as
> an exception, with the page, the date and the signature behind the decision. This runs on codes
> submitted years ago, coded by anyone, on any platform you've since left.

**Card 2 — Your coders review the exceptions**
> 95% of codes arrive already decided. The rest reach your team as exceptions, with the evidence
> attached and ranked, so a coder confirms a finding instead of going to look for the chart first.

**Card 3 — Submission packets built as you go**
> Evidence sentence, source page, date of service, provider, signature, MEAT signals and
> coversheet, generated per HCC as the validation runs. The packet exists before the record
> request arrives, rather than being assembled by hand inside a five-month window.

**Card 4 — Runs on your own infrastructure**
> On-premises, in your private cloud, or air-gapped. No outsourced reviewers, no chart shipping,
> and no PHI leaving your network — with a full audit trail on every decision that can be
> replayed years later.

---

## 3 · Why now: three years that changed RADV — KEEP

**Header:** Three years that changed RADV.

**Lead:** Every date below is from a CMS publication or a federal court docket. This is the
environment your submissions now live in.

**Feb 2023 — The RADV Final Rule**
> CMS finalized extrapolation of audit findings beginning with payment year 2018 and eliminated
> the fee-for-service adjuster, projecting $4.7 billion in recoveries over 2023–2032.
> *[CMS fact sheet]*

**May 2025 — CMS audits everyone** *(smoothed from fragments)*
> CMS moved from auditing roughly 60 contracts a year to all ~550 eligible contracts, scaled its
> review workforce from 40 coders to about 2,000, and raised sample sizes to between 35 and 200
> enrollees per contract. Records are reviewed with AI assistance, with certified coders making
> every final determination. *[CMS press release]*

**Sept 2025 — Extrapolation vacated, audits continue**
> In *Humana v. Becerra*, the Northern District of Texas vacated the 2023 rule on procedural
> grounds. CMS appealed to the Fifth Circuit (No. 25-11293, pending). Meanwhile CMS collects
> sampled-enrollee overpayments and designs audits to support extrapolation later, "if legally
> permissible." *[Crowell analysis]*

**Jan–Mar 2026 — The machine starts**
> CMS confirmed a quarterly audit cadence with a five-month record window and published the
> schedule. PY2020 audits were initiated March 20, 2026 and PY2021 on May 29, 2026. Up to two
> records per audited HCC; one valid record validates. *[CMS RADV announcements]*

**Audit schedule table** — unchanged (PY2020 → PY2025, live rows flagged)

**New closing callout, replacing the full OIG section:**
> In published audits of named Medicare Advantage plans, OIG has found between 73% and 91% of
> sampled high-risk diagnosis codes unsupported by the medical record. The full table, by plan
> and payment year, is on the RADV Hub. → *[link]*

---

## 4 · What gets checked on every chart — MERGE

**Header:** What gets checked on every chart.

**Lead** *(this is the bridge that stops the two lists reading as duplicates)*
> When CMS validates a diagnosis, a certified coder reads the record looking for a specific set of
> things: that the encounter took place and was of an acceptable type, that the provider was
> credentialed to make the call, that the note was signed, that the date falls inside the
> collection year, and that the condition was addressed at that visit rather than carried forward
> from an earlier one. Martlet AI runs the same set of checks on every chart — before submission,
> and again when the packet is assembled.

**01 — Document and encounter type**
> Every encounter inside a bundled file is identified and classified on its own. Sources CMS does
> not accept as evidence — superbills, standalone problem lists, claim forms, lab results on their
> own — are identified as such rather than counted.

**02 — Signature validity**
> Each record is checked for a valid signature attributable to the clinician who wrote it. Stamped
> signatures and signatures obtained in response to a record request do not qualify, and electronic
> signatures are checked for the authentication language CMS requires.

**03 — Provider credentials**
> Signing clinicians are resolved against the current CMS acceptable-specialty list, and gaps are
> flagged.

**04 — Dates of service**
> A date of service is established per encounter and checked against the collection year that
> applies to the payment year under audit.

**05 — Labs, imaging and pathology**
> Diagnostic reports are assessed under the criteria that apply to each type.

**06 — Clinical support**
> Each diagnosis is checked for support in the encounter itself, rather than carried forward from
> a problem list or an earlier note.

**Closing line:** CMS guidance changes. We update the checks to match, so validation follows the
rules currently in force.

**Then:** the existing packet-assembly animation (unchanged).

> *Note:* the current page's fifth CMS check — the attestation cure — moves to §6, where it's
> actionable ("surface gaps while the attestation is still available").

---

## 5 · Four levels of review — NEW

**Header:** Four levels of review, in one workflow.

**Lead:** Findings arrive in the system your coders already work in. Four levels run by default,
configured to your existing process, and every decision is recorded at each one.

| Level 01 | Level 02 | Level 03 | Level 04 |
|---|---|---|---|
| **Automated validation** | **Certified coder** | **QA and audit lead** | **Compliance sign-off** |
| Every check runs and each code is scored. 95% close here, either supported or flagged. | Exceptions only, with the evidence already attached and ranked. | A sample is re-reviewed for consistency, and recurring patterns are reported. | Final approval, recorded against the evidence as it stood at the time. |

**Closing line**
> Once recorded, a decision cannot be altered or removed. Every one shows who made it, on what
> evidence, and which model version produced it.

---

## 6 · Before the letter. After the letter. — MERGE

**Header:** Before the letter. After the letter.

**Lead**
> Once an audit begins, the remedies available to you are narrow: records cannot be amended, and
> signatures obtained in response to the request do not count. That is why the work that matters
> happens before you are selected, and why the work after has to be fast.

**Proactive — before the letter · "Mock audits, at any scale."**
- Sample your contracts on CMS's own methodology, so your internal findings line up with how CMS
  will sample.
- Or verify every submitted HCC across the contract, since you cannot predict which enrollees CMS
  draws.
- Re-run quarterly and trend confirmation and deletion rates by coder, vendor and provider group.
- Fix documentation while it can still be fixed.

**Reactive — after the letter · "The window is five months."**
- Ingest the enrollee data list and map every audited HCC to its best evidence in hours.
- Rank candidate records by validation strength, so you submit the strongest one. Up to two
  records per audited HCC; one valid record validates.
- Surface signature and credential gaps while the CMS attestation form is still available as a cure.
- Generate coversheet-ready packets and track intake rejections inside the window.

**Facts footnote** *(carries the hard dates from the removed audit-steps section)*
> For the PY2020 cycle now underway, the enrollee data list posted April 3, 2026 and records are
> due August 28, 2026. Findings can be appealed within 60 days (42 CFR 422.311(c)). Corrections
> for sampled enrollees freeze during the audit (42 CFR 422.326(d)), and records must be retained
> for ten years (42 CFR 422.504(d)) — an audit can reach back a decade.

---

## 7 · Beyond this year's audit — NEW

**Header:** Beyond this year's audit.

**Lead:** CMS moved to auditing every eligible contract, every year. The work you do for this
audit does not have to be repeated from scratch next year.

**Readiness stops being a project**
> Your exposure is current and known at all times, rather than reconstructed from scratch each
> time a letter arrives.

**Documentation improves every cycle**
> Failure patterns surface by provider group, vendor and condition. Fix them at the source and
> next year's sample can be cleaner than this year's — the gains compound.

**The capability stays in-house**
> Workflow, evidence and audit trail live inside your organization, tuned to your contracts, your
> coders and your thresholds. The setup carries from one payment year to the next.

**No annual scramble for capacity**
> You stop buying emergency coder and vendor capacity every cycle, and stop paying rush rates
> for it.

---

## 8 · In production — NEW (optional)

One line plus the existing partner logos:
> In production at health systems, plans and platforms.

---

## 9 · How the engagement works — NEW

**Header:** How the engagement works.

**An annual license**
> You pay a license fee for the year. Not per chart, and not per code we validate.

**Priced to your size**
> The fee is based on how many contracts and lives you run, and stays fixed for the year. Add
> contracts or payment years without renegotiating.

**Configured to your process**
> We set the review levels, thresholds and exports to match how your team works, and connect to
> the systems they already use.

---

## 10 · Bridge to retrospective — REWRITE

**Header:** The same checks, one step earlier.

**Body**
> The validation that answers a RADV audit is the same validation that should run before a code is
> ever submitted. Teams that run it at coding time find the gaps while the documentation can still
> be fixed, and when a letter arrives the packets already exist. That is the retrospective engine,
> and it uses the same checks and the same evidence model you see here.

**CTA:** See retrospective coding →

> *Replaces:* "Audit-readiness isn't a project. It's how your coding should run all year… RADV
> becomes a report you print." Same idea, stated as a mechanism rather than an aphorism, and
> without the "isn't X, it's Y" construction.

---

## 11 · FAQ + CTA

**Keep all six existing questions** (they're already in the right voice), **add two:**

**Does this work on codes we didn't code?**
> Yes. RADV runs against what was submitted, so it does not matter who did the original coding or
> what platform they used. Martlet AI ingests your submitted codes and the underlying records and
> validates them independently — which is the common case for plans whose retrospective coding
> was outsourced, or who have changed vendors since the payment year under audit.

**How is it priced?**
> An annual license, based on how many contracts and lives you run. Not per chart, not per code
> validated, and not a percentage of anything recovered. The fee stays fixed for the year, so you
> can add contracts or payment years without renegotiating.

**CTA panel**
> **Bring one contract. We'll run a mock RADV on it.**
> Sampled on CMS's methodology, validated at 99% precision, findings returned by HCC with evidence
> packets and an exposure estimate — inside your environment, on codes submitted years ago, by
> anyone, on any platform.

---

## Open questions for review

1. **H1 wording.** Draft matches the brochure ("Audit-grade RADV validation. 99% precision.").
   Alternative if you'd rather the headline carry the problem instead of the metric:
   *"Validate every submitted code, before CMS does."*
2. **§8 "In production"** — worth a logo strip on this page, or leave logos to the homepage?
3. **Extrapolation.** Draft moves the methodology and the ×250 example to the hub entirely.
   Alternative: keep one sentence in §6 ("a 200-enrollee sample prices the whole contract") for
   the stake, with the mechanics on the hub.
