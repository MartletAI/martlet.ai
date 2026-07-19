import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const STATS = [
  { value: "40–50", caption: "charts per day for a manual HCC coder — the industry benchmark" },
  { value: "$2–3", caption: "per chart for outsourced review, before rework and QA" },
  { value: "95%", caption: "accuracy floor most coding QA programs target — 1 in 20 wrong" },
  { value: "~9.5%", caption: "CMS's estimated Part C improper payment rate" },
];

/**
 * Problem - the manual math, in the industry's own benchmarks.
 */
export function Problem() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="problem-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#d97706]/10 text-[#b45309]">
              The manual math
            </span>
          </p>
          <h2 id="problem-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            Forty charts a day doesn&rsquo;t scale to a million.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            A skilled coder reviews{" "}
            <SourceLink href="https://www.aapc.com/blog/93137-accuracy-vs-production-in-risk-adjustment-coding/">
              40–50 charts a day
            </SourceLink>{" "}
            at a 95% accuracy target. Outsourcing buys volume at $2–3 a chart —
            but the vendor&rsquo;s incentive is throughput, and the audit risk
            stays yours for ten years. Either way, the math breaks at scale.
          </p>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 list-none p-0 m-0 max-w-[1100px] mx-auto border-t border-[#d2d2d7] pt-10">
          {STATS.map((stat) => (
            <li key={stat.caption} className="text-center lg:text-left">
              <div className="apple-stat whitespace-nowrap text-[34px] md:text-[38px] mb-2.5 text-[#d97706]">
                {stat.value}
              </div>
              <p className="text-[15px] font-medium apple-caption leading-snug m-0 text-balance">
                {stat.caption}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
