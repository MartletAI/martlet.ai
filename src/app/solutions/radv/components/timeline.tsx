import { Reveal } from "@/components/reveal";

import { SourceLink } from "./source-link";

const EVENTS = [
  {
    date: "February 2023",
    title: "The RADV Final Rule",
    body: (
      <>
        CMS finalizes extrapolation of audit findings beginning with payment
        year 2018 and eliminates the fee-for-service adjuster, projecting{" "}
        <strong>$4.7&nbsp;billion in recoveries over 2023–2032</strong>.{" "}
        <SourceLink href="https://www.cms.gov/newsroom/fact-sheets/medicare-advantage-risk-adjustment-data-validation-final-rule-cms-4185-f2-fact-sheet">
          CMS fact sheet
        </SourceLink>
      </>
    ),
    accent: "bg-[#0165dc]",
  },
  {
    date: "May 2025",
    title: "CMS audits everyone",
    body: (
      <>
        From ~60 contracts a year to <strong>all ~550 eligible contracts,
        every year</strong>. Coder workforce scaled from 40 to ~2,000;
        AI-assisted record review with human coders making all final
        determinations; samples of 35–200 enrollees per contract.{" "}
        <SourceLink href="https://www.cms.gov/newsroom/press-releases/cms-rolls-out-aggressive-strategy-enhance-accelerate-medicare-advantage-audits">
          CMS press release
        </SourceLink>
      </>
    ),
    accent: "bg-[#7c3aed]",
  },
  {
    date: "September 2025",
    title: "Extrapolation vacated — audits continue",
    body: (
      <>
        In <em>Humana v. Becerra</em>, the Northern District of Texas vacates
        the 2023 rule on procedural grounds. CMS appeals to the Fifth Circuit
        (No. 25-11293, pending). Meanwhile CMS collects sampled-enrollee
        overpayments and designs audits to support extrapolation later,
        &ldquo;if legally permissible.&rdquo;{" "}
        <SourceLink href="https://www.crowell.com/en/insights/client-alerts/court-vacates-cmss-2023-final-rule-on-radv-audits">
          Crowell analysis
        </SourceLink>
      </>
    ),
    accent: "bg-[#d97706]",
  },
  {
    date: "January–March 2026",
    title: "The machine starts",
    body: (
      <>
        CMS confirms a quarterly audit cadence with a five-month record window
        and publishes the schedule. <strong>PY2020 audits initiated March 20,
        2026; PY2021 on May 29, 2026.</strong> Up to two records per audited
        HCC; one valid record validates.{" "}
        <SourceLink href="https://www.cms.gov/data-research/monitoring-programs/medicare-advantage-risk-adjustment-data-validation-radv-program/radv-announcements">
          CMS RADV announcements
        </SourceLink>
      </>
    ),
    accent: "bg-[#0d9488]",
  },
];

const SCHEDULE = [
  { py: "PY2020", start: "March 2026", status: "In progress — records due Aug 28, 2026", live: true },
  { py: "PY2021", start: "May 2026", status: "In progress", live: true },
  { py: "PY2024", start: "August 2026", status: "Next up", live: false },
  { py: "PY2023", start: "November 2026", status: "Scheduled", live: false },
  { py: "PY2022", start: "January 2027", status: "Scheduled", live: false },
  { py: "PY2025", start: "April 2027", status: "Scheduled", live: false },
];

/**
 * WhatChanged - the 2023→2026 regulatory timeline plus CMS's published audit
 * schedule. Objective facts, primary-sourced — the section no competitor has.
 */
export function WhatChanged() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="changed-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-14">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#d97706]/10 text-[#b45309]">
              Why now
            </span>
          </p>
          <h2 id="changed-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            Three years that changed RADV.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Every date below is from a CMS publication or a federal court
            docket. This is the environment your submissions now live in.
          </p>
        </Reveal>

        {/* Timeline */}
        <Reveal as="ol" stagger className="list-none p-0 m-0 max-w-[860px] mx-auto mb-16">
          {EVENTS.map((event) => (
            <li key={event.date} className="relative pl-8 pb-10 last:pb-0 border-l-2 border-[#e7e5e4] last:border-transparent ml-2">
              <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${event.accent}`} aria-hidden />
              <p className="evidence-mono text-sm text-muted m-0 mb-1">{event.date}</p>
              <h3 className="text-xl font-bold tracking-tight text-[#0a0a12] mb-2">
                {event.title}
              </h3>
              <p className="text-base apple-body leading-relaxed m-0 max-w-[680px]">
                {event.body}
              </p>
            </li>
          ))}
        </Reveal>

        {/* Published audit schedule */}
        <Reveal className="max-w-[860px] mx-auto">
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="bg-[#f5f5f7] px-6 py-4 flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] m-0">
                CMS&rsquo;s published audit schedule
              </h3>
              <span className="evidence-mono text-xs text-muted">
                Source:{" "}
                <SourceLink href="https://www.cms.gov/files/document/radv-audit-schedule.pdf">
                  CMS RADV Audit Schedule (Mar 4, 2026)
                </SourceLink>
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[15px] border-collapse">
                <thead>
                  <tr className="border-b border-border text-muted text-sm">
                    <th className="px-6 py-3 font-semibold">Payment year</th>
                    <th className="px-6 py-3 font-semibold">Audit initiation</th>
                    <th className="px-6 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map((row) => (
                    <tr key={row.py} className="border-b border-border-light last:border-0">
                      <td className="px-6 py-3 evidence-mono font-semibold text-[#0a0a12]">{row.py}</td>
                      <td className="px-6 py-3 apple-body">{row.start}</td>
                      <td className="px-6 py-3">
                        <span className={row.live
                          ? "inline-flex items-center gap-1.5 text-[#b45309] font-semibold"
                          : "apple-caption"}>
                          {row.live && <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" aria-hidden />}
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm apple-caption mt-4 mb-0 text-center">
            PY2018 findings are expected from mid-2026; PY2019 findings begin in
            2026. The order is deliberately non-sequential — CMS&rsquo;s
            data-processing schedule dictates it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
