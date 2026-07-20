import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

import { LAST_VERIFIED } from "./hub-hero";

const GROUPS = [
  {
    title: "CMS program documents",
    links: [
      { label: "RADV audit schedule (Mar 4, 2026)", href: "https://www.cms.gov/files/document/radv-audit-schedule.pdf" },
      { label: "RADV Questions & Answers (updated May 29, 2026)", href: "https://www.cms.gov/files/document/radv-questions-answers.pdf" },
      { label: "PY2020 Audit Methods & Instructions", href: "https://www.cms.gov/files/document/payment-year-2020-ma-radv-audit-methods-instructions.pdf" },
      { label: "PY2019 Audit Methods & Instructions", href: "https://www.cms.gov/files/document/payment-year-2019-radv-audits-methods-and-instructions-6-26-25.pdf" },
      { label: "PY2018 Audit Methods & Instructions", href: "https://www.cms.gov/files/document/payment-year-2018-ma-radv-audit-methods-instructions.pdf" },
      { label: "Medical Record Reviewer Guidance", href: "https://www.cms.gov/files/document/medical-record-reviewer-guidance-january-2020.pdf" },
      { label: "RADV announcements page", href: "https://www.cms.gov/data-research/monitoring-programs/medicare-advantage-risk-adjustment-data-validation-radv-program/radv-announcements" },
      { label: "May 21, 2025 expansion press release", href: "https://www.cms.gov/newsroom/press-releases/cms-rolls-out-aggressive-strategy-enhance-accelerate-medicare-advantage-audits" },
    ],
  },
  {
    title: "Regulations & appeals",
    links: [
      { label: "42 CFR 422.310 — risk adjustment data validation", href: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-G/section-422.310" },
      { label: "42 CFR 422.311 — RADV dispute and appeal", href: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-G/section-422.311" },
      { label: "2023 RADV Final Rule (Federal Register)", href: "https://www.federalregister.gov/documents/2023/02/01/2023-01942/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare" },
      { label: "Reconsideration guidance (Jan 2025)", href: "https://www.cms.gov/files/document/ma-radv-reconsiderations-guidance-01-16-2025-pdf.pdf" },
      { label: "Hearing Officer appeal procedures", href: "https://www.cms.gov/files/document/office-hearings-medicare-advantage-risk-adjustment-data-validation-level-ii-appeal-procedures.pdf" },
    ],
  },
  {
    title: "Litigation & oversight",
    links: [
      { label: "Humana v. Becerra — Georgetown litigation tracker", href: "https://litigationtracker.law.georgetown.edu/litigation/humana-inc-et-al-v-becerra-et-al/" },
      { label: "District court order (Sept 25, 2025)", href: "https://litigationtracker.law.georgetown.edu/wp-content/uploads/2023/09/Humana-Inc._2025.09.25_ORDER-ON-MOTION-FOR-SUMMARY-JUDGMENT.pdf" },
      { label: "OIG high-risk diagnosis toolkit (2023)", href: "https://oig.hhs.gov/reports/all/2023/toolkit-to-help-decrease-improper-payments-in-medicare-advantage-through-the-identification-of-high-risk-diagnosis-codes/" },
      { label: "OIG: $7.5B from HRA-only diagnoses (2024)", href: "https://oig.hhs.gov/reports/all/2024/medicare-advantage-questionable-use-of-health-risk-assessments-continues-to-drive-up-payments-to-plans-by-billions/" },
      { label: "MedPAC March 2025 report (Ch. 11)", href: "https://www.medpac.gov/wp-content/uploads/2025/03/Mar25_Ch11_MedPAC_Report_To_Congress_SEC.pdf" },
    ],
  },
] as const;

/**
 * SourceLibrary - every primary source in one place, plus the hub's own
 * changelog and the informational disclaimer.
 */
export function SourceLibrary() {
  return (
    <section className="apple-section-gray py-16 md:py-20" aria-labelledby="sources-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal as="header" className="mb-8">
          <h2 id="sources-heading" className="apple-display text-[28px] md:text-[40px] mb-3">
            The primary-source library
          </h2>
          <p className="text-base md:text-lg apple-body leading-relaxed m-0">
            Don&rsquo;t take our word for any of it — here is everything we
            cite, in one place.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {GROUPS.map((group) => (
            <Reveal key={group.title}>
              <div className="rounded-3xl bg-white border border-border p-6 h-full">
                <h3 className="text-base font-bold tracking-tight text-[#0a0a12] mb-4">
                  {group.title}
                </h3>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href} className="text-sm leading-snug">
                      <SourceLink href={link.href}>{link.label}</SourceLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-3xl bg-white border border-border p-6 md:p-7 mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted mb-3">
              Hub changelog
            </p>
            <p className="evidence-mono text-sm text-[#0a0a12] leading-relaxed m-0">
              {LAST_VERIFIED} — Hub launched. Schedule current through
              CMS&rsquo;s Mar 4, 2026 publication; PY2020/PY2021 windows per
              their Audit Methods &amp; Instructions; litigation status through
              the government&rsquo;s Mar 21, 2026 opening brief.
            </p>
          </div>
          <p className="text-sm apple-caption leading-relaxed m-0 text-center">
            Maintained by Martlet AI as an informational reference for
            risk-adjustment and compliance teams. Not legal advice — verify
            against the linked primary sources before acting.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
