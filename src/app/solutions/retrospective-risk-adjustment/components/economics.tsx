import { Reveal } from "@/components/reveal";

/** Each model described on its own terms. The comparison is the point; the
 *  characterisations stay factual rather than pointed. */
const ROWS = [
  {
    dimension: "Where it fits best",
    services: "No internal coding team, and no plan to build one",
    assisted: "A coding team you want to make faster at its current size",
    martlet: "Population-scale volume, with the standard and the audit trail kept in-house",
  },
  {
    dimension: "Pricing",
    services: "Per chart, or a percentage of captured RAF",
    assisted: "Per-seat licensing, scaled to the number of reviewers",
    martlet: "Annual license. No per-chart fees, no success commission",
  },
  {
    dimension: "Who does the work",
    services: "The vendor's coding team, on the vendor's schedule",
    assisted: "Your coders, reviewing each suggestion the tool makes",
    martlet: "The engine closes 95%; your reviewers work the 5%",
  },
  {
    dimension: "What the cost tracks",
    services: "Charts worked, or RAF captured",
    assisted: "The number of reviewer seats you staff",
    martlet: "A flat annual fee, independent of volume or captured RAF",
  },
  {
    dimension: "Institutional knowledge",
    services: "Held in the vendor's tooling and process",
    assisted: "Split between tool and team",
    martlet: "Stays in-house — your data, your rules, your audit trail",
  },
  {
    dimension: "Audit posture",
    services: "You carry the audit risk for coding done elsewhere",
    assisted: "Depends on each reviewer's judgment",
    martlet: "Evidence packet exists the day the code is submitted",
  },
];

/**
 * Economics - the TCO argument at category level: services vs AI-assisted vs
 * end-to-end automation. No competitor named.
 */
export function Economics() {
  return (
    <section className="apple-section-gray pt-14 pb-20 md:pb-24" aria-labelledby="economics-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-12">
          <h2 id="economics-heading" className="apple-display text-[30px] md:text-[40px] mb-5">
            Three ways to run retrospective coding, and where the cost sits in
            each.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            The same work can be bought three different ways. What changes is
            who does it, what you are billed for, and who carries the audit risk
            once it is done.
          </p>
        </Reveal>

        <Reveal className="max-w-[1100px] mx-auto">
          <div className="rounded-3xl border border-border bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[15px] border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-border text-sm">
                    <th className="px-5 py-4 font-semibold text-muted w-[160px]"> </th>
                    <th className="px-5 py-4 font-bold text-[#0a0a12]">Outsourced services</th>
                    <th className="px-5 py-4 font-bold text-[#0a0a12]">AI-assisted tools</th>
                    <th className="px-5 py-4 font-bold text-[#0154b8] bg-[#f4f8ff]">Martlet AI</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr key={row.dimension} className="border-b border-border-light last:border-0 align-top">
                      <td className="px-5 py-4 font-semibold text-[#0a0a12]">{row.dimension}</td>
                      <td className="px-5 py-4 apple-body">{row.services}</td>
                      <td className="px-5 py-4 apple-body">{row.assisted}</td>
                      <td className="px-5 py-4 apple-body font-medium bg-[#f4f8ff]">{row.martlet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
