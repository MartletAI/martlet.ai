import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const ROWS = [
  {
    py: "PY2018",
    initiated: "Nov 14, 2024 · ~60 contracts, 35-enrollee samples",
    status: "Findings expected from mid-2026",
    live: true,
  },
  {
    py: "PY2019",
    initiated: "Jun 12 & 25, 2025 · first all-contract cycle (~550)",
    status: "Findings begin in 2026",
    live: true,
  },
  {
    py: "PY2020",
    initiated: "Mar 20, 2026",
    status: "In progress — records due Aug 28, 2026",
    live: true,
  },
  {
    py: "PY2021",
    initiated: "May 29, 2026",
    status: "In progress",
    live: true,
  },
  { py: "PY2024", initiated: "August 2026 (scheduled)", status: "Next up", live: false },
  { py: "PY2023", initiated: "November 2026 (scheduled)", status: "Scheduled", live: false },
  { py: "PY2022", initiated: "January 2027 (scheduled)", status: "Scheduled", live: false },
  { py: "PY2025", initiated: "April 2027 (scheduled)", status: "Scheduled", live: false },
];

/**
 * PyStatus - audit status by payment year, plus the live PY2020/PY2021
 * windows every compliance team is currently working against.
 */
export function PyStatus() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="py-status-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal as="header" className="mb-8">
          <h2 id="py-status-heading" className="apple-display text-[28px] md:text-[40px] mb-3">
            Audit status by payment year
          </h2>
          <p className="text-base md:text-lg apple-body leading-relaxed m-0">
            Per CMS&rsquo;s published{" "}
            <SourceLink href="https://www.cms.gov/files/document/radv-audit-schedule.pdf">
              audit schedule
            </SourceLink>{" "}
            and{" "}
            <SourceLink href="https://www.cms.gov/files/document/radv-questions-answers.pdf">
              RADV Q&amp;A
            </SourceLink>
            . The order is deliberately non-sequential — CMS&rsquo;s
            data-processing schedule dictates it.
          </p>
        </Reveal>

        <Reveal className="mb-6">
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[15px] border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#f5f5f7] border-b border-border text-muted text-sm">
                    <th className="px-5 py-3 font-semibold">Payment year</th>
                    <th className="px-5 py-3 font-semibold">Audit initiation</th>
                    <th className="px-5 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr key={row.py} className="border-b border-border-light last:border-0">
                      <td className="px-5 py-3 evidence-mono font-semibold text-[#0a0a12]">{row.py}</td>
                      <td className="px-5 py-3 apple-body">{row.initiated}</td>
                      <td className="px-5 py-3">
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
        </Reveal>

        <Reveal>
          <div className="rounded-3xl border border-[#d97706]/25 bg-[#fffbf2] p-6 md:p-7 mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#b45309] mb-3">
              Live now — PY2020 key dates
            </p>
            <p className="evidence-mono text-sm text-[#0a0a12] leading-loose m-0">
              Enrollee Data List in CDAT: Apr 3, 2026 · Record window: Apr 13 –
              Aug 28, 2026 (11:59 pm EST) · Hardship exception deadline: Sep 11,
              2026 · Samples: 200 / 100 / 50 / 35 by contract-size stratum
            </p>
          </div>
          <p className="text-sm apple-caption leading-relaxed m-0">
            Legacy cleanup: PY2011 audit reports issued Jan 2025; PY2012–13
            payment-error results published May 13, 2025; PY2014–15 published
            Mar 4, 2026 —{" "}
            <SourceLink href="https://www.cms.gov/data-research/monitoring-programs/medicare-advantage-risk-adjustment-data-validation-radv-program/radv-announcements">
              CMS RADV announcements
            </SourceLink>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
