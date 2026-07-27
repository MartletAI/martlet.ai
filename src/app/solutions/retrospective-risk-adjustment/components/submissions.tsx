import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const SWEEPS = [
  { sweep: "Initial", timing: "~First Friday of September, before the payment year" },
  { sweep: "Mid-year", timing: "~First Friday of March, during the payment year" },
  { sweep: "Final", timing: "~January 31 of the year after the payment year" },
];

/**
 * Submissions - the CMS submission calendar and how the work is paced to it.
 * The two-way add/delete argument now lives inside the pipeline panel, where
 * the brochure puts it: opened out of the Validate stage it belongs to.
 */
export function Submissions() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="submissions-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-12">
          <h2 id="submissions-heading" className="apple-display text-[30px] md:text-[40px] mb-5">
            The submission calendar, and how the work is paced to it.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Most retrospective programs look only for what is missing, and run
            against whichever deadline is closest. Running the full population
            continuously means the adds and deletes are ready before a window
            opens rather than assembled while it closes.
          </p>
        </Reveal>

        <Reveal className="max-w-[780px] mx-auto">
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="bg-[#f5f5f7] px-6 py-4 flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] m-0">
                Sweeps per payment year
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
