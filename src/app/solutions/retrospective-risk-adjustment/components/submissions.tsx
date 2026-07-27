import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const SWEEPS = [
  { sweep: "Initial", timing: "~First Friday of September, before the payment year" },
  { sweep: "Mid-year", timing: "~First Friday of March, during the payment year" },
  { sweep: "Final", timing: "~January 31 of the year after the payment year" },
];

/**
 * Submissions - two-way coding and the CMS submission calendar.
 */
export function Submissions() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="submissions-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-12">
          <h2 id="submissions-heading" className="apple-display text-[30px] md:text-[40px] mb-5">
            Coding runs both ways: adds capture revenue, deletes remove risk.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Most retrospective programs look only for what is missing. The codes
            that went out without support behind them matter just as much, and
            the same validation pass finds both.
          </p>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-1 lg:grid-cols-2 gap-5 list-none p-0 m-0 max-w-[1100px] mx-auto mb-14">
          <li className="rounded-[28px] border border-[#067647]/15 bg-gradient-to-b from-white to-[#f2fbf7] p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#067647] mb-3">
              Adds — capture
            </p>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-4">
              Undercoded HCCs, recaptured with proof
            </h3>
            <p className="text-base apple-body leading-relaxed m-0">
              Every recaptured code carries its chart sentence, the encounter,
              the provider and their credentials, the signature status and the
              clinical support behind it — so the revenue you capture this year
              still holds up when the record is read years later.
            </p>
          </li>
          <li className="rounded-[28px] border border-[#b42318]/15 bg-gradient-to-b from-white to-[#fef6f5] p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#b42318] mb-3">
              Deletes — compliance
            </p>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-4">
              Unsupported codes, removed before submission
            </h3>
            <p className="text-base apple-body leading-relaxed m-0">
              Codes that fail validation flow out as submission deletes, each
              with the reason it failed attached. What can still be corrected
              once a submission window has closed is set by CMS and changes
              over time —{" "}
              <SourceLink href="https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-G/section-422.310">
                42 CFR 422.310
              </SourceLink>{" "}
              — so validating before you submit leaves less of your position
              depending on which window is still open.
            </p>
          </li>
        </Reveal>

        {/* Submission calendar */}
        <Reveal className="max-w-[780px] mx-auto">
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="bg-[#f5f5f7] px-6 py-4 flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] m-0">
                The submission calendar
              </h3>
              <span className="evidence-mono text-xs text-muted">
                <SourceLink href="https://www.cms.gov/files/document/deadlineforsubmittingriskadjustmentdataforuseinriskscorecalculationrunsforpaymentyears20252026and202.pdf">
                  CMS submission deadlines
                </SourceLink>
              </span>
            </div>
            <table className="w-full text-left text-[15px] border-collapse">
              <tbody>
                {SWEEPS.map((row) => (
                  <tr key={row.sweep} className="border-b border-border-light last:border-0">
                    <td className="px-6 py-3 evidence-mono font-semibold text-[#0a0a12] w-[130px]">{row.sweep}</td>
                    <td className="px-6 py-3 apple-body">{row.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm apple-caption mt-4 mb-0 text-center">
            CMS sets these dates and reissues them each payment year, so they
            move. Martlet AI works to the schedule in force, with adds and
            deletes ready ahead of each deadline.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
