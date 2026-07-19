import { Reveal } from "@/components/reveal";

const ROWS = [
  {
    dimension: "Pricing",
    services: "Per chart, or a percentage of captured RAF",
    assisted: "Seat licenses — plus the coders to sit in them",
    martlet: "Annual license. No per-chart fees, no success commission",
  },
  {
    dimension: "Who does the work",
    services: "The vendor's coders, at the vendor's pace",
    assisted: "Your coders, reviewing every AI suggestion",
    martlet: "The engine closes 95%; your reviewers work the 5%",
  },
  {
    dimension: "Incentive",
    services: "Paid on volume or captured RAF — envelope-pushing pays",
    assisted: "Neutral, but productivity-bound",
    martlet: "Flat license — no incentive to over-submit",
  },
  {
    dimension: "Institutional knowledge",
    services: "Lives in the vendor's tooling; leaves when they do",
    assisted: "Split between tool and team",
    martlet: "Stays in-house — your data, your rules, your audit trail",
  },
  {
    dimension: "Audit posture",
    services: "You carry the audit risk for their coding, for 10 years",
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
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="economics-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#d97706]/10 text-[#b45309]">
              The economics
            </span>
          </p>
          <h2 id="economics-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            License the engine. Keep the margin.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Three ways to run retrospective coding, and where the money and the
            risk actually sit.
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
