import { Icon } from "@/components";
import { SectionLabel } from "@/components/section-label";

const approaches = [
  {
    title: "Reactive",
    grayTitle: "After Selection",
    description: "Optimize under deadline pressure: triage, validate, and build a defensible submission package fast.",
    points: [
      "Prioritize weakest-risk areas and highest-exposure codes",
      "Auto-assemble evidence packets with provenance",
      "Standardize QA across teams and vendors"
    ]
  },
  {
    title: "Proactive",
    grayTitle: "Before Selection",
    description: "Run mock audits continuously to find patterns and fix documentation gaps before they become liabilities.",
    points: [
      "Mock-test cohorts at scale (by vendor, region, provider, condition)",
      "Find recurring documentation failures and training targets",
      "Measure improvement over time with repeatable tests"
    ]
  }
]

export function Approaches() {
  return (
    <section
      aria-labelledby="approaches-heading"
      className="gradient-approaches py-10"
    >
      <div className="container-main flex flex-col gap-6">
        {/* Header Section */}
        <header className="flex flex-col items-center">
					<SectionLabel className="text-indicator-prospective mb-3">Approaches</SectionLabel>
					<h2
						id="designed-for-trust-heading"
						className="section-heading text-center mb-5"
					>
						Proactive & Reactive RADV
					</h2>
          <p className="text-xl leading-[30px] text-center text-text-tertiary-600 font-normal">
            Same tooling. Different posture.
          </p>
        </header>

        <div className="flex flex-col justify-center items-center gap-6 lg:flex-row lg:items-stretch lg:justify-between">
          {approaches.map((approach => (
            <article
              key={approach.title}
              className="step-card w-full max-w-[604px] bg-white py-3 px-4 rounded-[24px] md:rounded-[44px] shadow-card border border-border-light flex"
            >
              <div className="flex bg-white flex-col items-center gap-[17px] p-4 md:p-6 rounded-[20px] md:rounded-[40px] border-[6px] md:border-10 border-border-light h-full w-full">
                <div className="bg-[#E9EFFF] w-full rounded-[1000px] py-1.5 px-4 min-h-[45px] h-auto flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0"></div>
                  <span className="text-black text-sm md:text-base font-semibold leading-normal">
                    {approach.title} <span className="text-[#818181]">{approach.grayTitle}</span>
                  </span>
                </div>

                <span className="font-normal text-sm md:text-base text-[#252B37] leading-6">
                  {approach.description}
                </span>

                <div className="flex flex-col gap-6 mr-auto">
                  {approach.points.map((point) => (
                    <div className="flex gap-3" key={point}>
                      <div className="w-6 h-6 bg-[#f48220] rounded-full flex items-center justify-center shrink-0">
                        <Icon name="checked" className="text-white size-3" />
                      </div>
                      <span className="font-normal text-sm md:text-base text-[#252b37]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )))}
        </div>
      </div>
    </section>
  )
}