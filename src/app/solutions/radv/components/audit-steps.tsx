import { Reveal } from "@/components/reveal";

import { SourceLink } from "./source-link";

interface AuditStep {
  step: string;
  cms: string;
  martlet: string;
}

const STEPS: AuditStep[] = [
  {
    step: "Selection notice",
    cms: "Notice arrives via HPMS to your designated points of contact, generally a few weeks before the record window opens.",
    martlet:
      "Nothing to scramble. If you've been running mock audits, your sampling frame is already scored and your weak spots are already known.",
  },
  {
    step: "Enrollee Data List",
    cms: "CMS posts the sampled enrollees, audited HCCs, and underlying diagnosis codes in CDAT, with coversheets and attestation forms. (PY2020: April 3, 2026.)",
    martlet:
      "Ingest the EDL. Every audited HCC is mapped to its best candidate evidence — chart, page, sentence — within hours, not weeks.",
  },
  {
    step: "The five-month record window",
    cms: "Retrieve and submit records. Up to 2 records per audited HCC; one valid record validates; a record is a single face-to-face encounter. You may not amend records at audit time. (PY2020: April 13 – August 28, 2026.)",
    martlet:
      "Rank candidate records per HCC by validation strength. Flag signature and credential gaps early — while the CMS attestation cure is still usable.",
  },
  {
    step: "Intake and feedback",
    cms: "CMS checks enrollee match, completeness, and PHI, and posts an Intake Feedback Report. Invalid submissions can be replaced while the window is open.",
    martlet:
      "Coversheet-ready packets, correct enrollee matching, and resubmission tracking — so nothing bounces at intake with two weeks left.",
  },
  {
    step: "Coder review",
    cms: "Certified coders abstract codes per ICD-10-CM Official Guidelines and AHA Coding Clinic — up to three rounds of review per record.",
    martlet:
      "No surprises: your codes were validated against the same guidelines before they were ever submitted.",
  },
  {
    step: "Findings and appeals",
    cms: "The Audit Report Package lands in CDAT: Confirmed, Discrepant, or Administrative Exception per HCC, plus payment error calculations. You have 60 days to request reconsideration (42 CFR 422.311(c)), then a hearing, then Administrator review.",
    martlet:
      "The per-HCC evidence trail is already assembled for any reconsideration you need to file — inside the 60-day clock.",
  },
];

/**
 * AuditSteps - the audit lifecycle from the plan's seat, per CMS's PY2020
 * Audit Methods & Instructions, with Martlet AI's role at each step.
 */
export function AuditSteps() {
  return (
    <section
      id="audit-steps"
      className="apple-section-gray py-20 md:py-24 scroll-mt-24"
      aria-labelledby="audit-steps-heading"
    >
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-14">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#0165dc]/10 text-[#0154b8]">
              The audit, step by step
            </span>
          </p>
          <h2
            id="audit-steps-heading"
            className="apple-display text-[32px] md:text-[48px] mb-5"
          >
            What happens when your contract is selected.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            The actual process and the actual windows, from CMS&rsquo;s{" "}
            <SourceLink href="https://www.cms.gov/files/document/payment-year-2020-ma-radv-audit-methods-instructions.pdf">
              PY2020 Audit Methods &amp; Instructions
            </SourceLink>{" "}
            — and where Martlet AI does its work at each step.
          </p>
        </Reveal>

        <Reveal as="ol" stagger className="list-none p-0 m-0 max-w-[980px] mx-auto flex flex-col gap-4">
          {STEPS.map((item, index) => (
            <li
              key={item.step}
              className="grid grid-cols-1 lg:grid-cols-[44px_1fr_1fr] gap-4 lg:gap-6 bg-white rounded-[24px] p-6 md:p-7 border border-black/5"
            >
              <div className="flex lg:block items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#0165dc] text-white font-bold text-sm">
                  {index + 1}
                </span>
                <h3 className="lg:hidden text-lg font-bold tracking-tight text-[#0a0a12] m-0">
                  {item.step}
                </h3>
              </div>
              <div>
                <h3 className="hidden lg:block text-lg font-bold tracking-tight text-[#0a0a12] mb-2">
                  {item.step}
                </h3>
                <p className="text-[15px] apple-body leading-relaxed m-0">{item.cms}</p>
              </div>
              <div className="rounded-2xl bg-[#f4f8ff] p-4 md:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0154b8] mb-1.5">
                  What Martlet AI does here
                </p>
                <p className="text-[15px] apple-body leading-relaxed m-0">
                  {item.martlet}
                </p>
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[980px] mx-auto mt-6">
          <p className="text-sm apple-caption leading-relaxed m-0 text-center">
            Also worth knowing: corrections for sampled enrollees freeze during
            the audit (42 CFR 422.326(d)), and records must be retained for 10
            years (42 CFR 422.504(d)) — an audit can reach back a decade.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
