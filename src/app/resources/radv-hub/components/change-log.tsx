import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const EVENTS = [
  {
    date: "Feb 1, 2023",
    text: "RADV Final Rule (88 Fed. Reg. 6643): extrapolation codified from PY2018; FFS adjuster eliminated; $4.7B recoveries projected for 2023–2032.",
    href: "https://www.cms.gov/newsroom/fact-sheets/medicare-advantage-risk-adjustment-data-validation-final-rule-cms-4185-f2-fact-sheet",
    source: "CMS fact sheet",
  },
  {
    date: "Nov 14, 2024",
    text: "PY2018 audits initiated — ~60 contracts, 35-enrollee samples; record window through Apr 21, 2025.",
    href: "https://www.cms.gov/files/document/payment-year-2018-ma-radv-audit-methods-instructions.pdf",
    source: "PY2018 Methods & Instructions",
  },
  {
    date: "May 21, 2025",
    text: "Expansion announced: every eligible contract (~550) audited annually; coder workforce 40 → ~2,000; AI-assisted review; samples 35–200.",
    href: "https://www.cms.gov/newsroom/press-releases/cms-rolls-out-aggressive-strategy-enhance-accelerate-medicare-advantage-audits",
    source: "CMS press release",
  },
  {
    date: "Jun 12 & 25, 2025",
    text: "PY2019 audits initiated — the first all-contract cycle.",
    href: "https://www.cms.gov/files/document/payment-year-2019-radv-audits-methods-and-instructions-6-26-25.pdf",
    source: "PY2019 Methods & Instructions",
  },
  {
    date: "Sep 25, 2025",
    text: "Humana v. Becerra: the 2023 Final Rule vacated in its entirety and remanded to CMS — extrapolated recoveries paused; audits continue.",
    href: "https://litigationtracker.law.georgetown.edu/litigation/humana-inc-et-al-v-becerra-et-al/",
    source: "Georgetown litigation tracker",
  },
  {
    date: "Nov 21, 2025",
    text: "CMS/HHS appeal filed — Fifth Circuit, No. 25-11293.",
    href: "https://www.crowell.com/en/insights/client-alerts/cms-appeals-humana-v-becerra",
    source: "Crowell alert",
  },
  {
    date: "Jan 27, 2026",
    text: "HPMS memo: quarterly audit cadence confirmed; five-month record window restored; up to 2 records per audited HCC; AI-supported tools with human coders making all overpayment decisions.",
    href: "https://www.risehealth.org/insights-articles/article/cms-update-the-latest-on-fast-track-medicare-advantage-radv-audits/",
    source: "RISE summary",
  },
  {
    date: "Mar 4, 2026",
    text: "Audit schedule published (PY2020 → PY2025, non-sequential); PY2014–15 legacy results released; RADV Q&A updated.",
    href: "https://www.cms.gov/files/document/radv-audit-schedule.pdf",
    source: "CMS audit schedule",
  },
  {
    date: "Mar 20 / May 29, 2026",
    text: "PY2020 and PY2021 audits initiated; PY2020 records due Aug 28, 2026.",
    href: "https://www.cms.gov/files/document/payment-year-2020-ma-radv-audit-methods-instructions.pdf",
    source: "PY2020 Methods & Instructions",
  },
] as const;

/**
 * ChangeLog - the dated rule-change log plus the litigation card that
 * decides extrapolation.
 */
export function ChangeLog() {
  return (
    <section className="apple-section-gray py-16 md:py-20" aria-labelledby="change-log-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal as="header" className="mb-8">
          <h2 id="change-log-heading" className="apple-display text-[28px] md:text-[40px] mb-3">
            The rule-change log
          </h2>
          <p className="text-base md:text-lg apple-body leading-relaxed m-0">
            Every material change to the RADV program since extrapolation was
            codified — dated and sourced.
          </p>
        </Reveal>

        <Reveal as="ol" className="list-none p-0 m-0 mb-10 bg-white rounded-3xl border border-border divide-y divide-border-light">
          {EVENTS.map((event) => (
            <li key={event.date} className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-1 md:gap-6 px-6 md:px-7 py-4">
              <span className="evidence-mono text-sm font-semibold text-[#0a0a12] pt-0.5">
                {event.date}
              </span>
              <p className="text-[15px] apple-body leading-relaxed m-0">
                {event.text}{" "}
                <SourceLink href={event.href}>{event.source}</SourceLink>
              </p>
            </li>
          ))}
        </Reveal>

        {/* Litigation tracker */}
        <Reveal>
          <div className="rounded-3xl border border-[#7c3aed]/20 bg-white p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6d28d9] mb-3">
              Litigation tracker — the case that decides extrapolation
            </p>
            <h3 className="text-xl font-bold tracking-tight text-[#0a0a12] mb-3">
              Humana v. Becerra
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-2 text-[15px] apple-body leading-relaxed mb-4">
              <li>
                <strong>District court:</strong> N.D. Tex., No. 4:23-cv-00909-O —
                summary judgment for Humana, Sept 25, 2025; 2023 rule vacated as
                procedurally invalid (the FFS-adjuster rationale was not a
                &ldquo;logical outgrowth&rdquo; of the proposed rule).{" "}
                <SourceLink href="https://litigationtracker.law.georgetown.edu/wp-content/uploads/2023/09/Humana-Inc._2025.09.25_ORDER-ON-MOTION-FOR-SUMMARY-JUDGMENT.pdf">
                  Order
                </SourceLink>
              </li>
              <li>
                <strong>Appeal:</strong> Fifth Circuit, No. 25-11293 — filed Nov
                21, 2025; government&rsquo;s opening brief Mar 21, 2026; no
                argument date as of our last verification.{" "}
                <SourceLink href="https://litigationtracker.law.georgetown.edu/litigation/humana-inc-et-al-v-becerra-et-al/">
                  Docket tracker
                </SourceLink>
              </li>
              <li>
                <strong>What it means today:</strong> CMS collects
                sampled-enrollee overpayments only, designs audits to support
                extrapolation, and reserves the right to extrapolate later
                &ldquo;if legally permissible.&rdquo; Plans planning around a
                sample-only ceiling are betting on the appeal.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
