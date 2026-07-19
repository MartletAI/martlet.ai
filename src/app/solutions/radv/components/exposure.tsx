import { Reveal } from "@/components/reveal";

import { SourceLink } from "./source-link";

const STATS = [
  { value: "5–8%", caption: "payment error CMS found in its completed PY2011–13 audits" },
  { value: "$4.7B", caption: "CMS's projected RADV recoveries, 2023–2032" },
  { value: "$76–84B", caption: "MedPAC-estimated annual MA overpayments, 2025–26" },
];

/**
 * Exposure - the extrapolation math, worked honestly: CMS's formula, a
 * concrete example, and the current legal posture.
 */
export function Exposure() {
  return (
    <section className="apple-section-dark py-20 md:py-28" aria-labelledby="exposure-heading">
      <div className="container-main">
        <Reveal className="max-w-[820px]">
          <p className="mb-6">
            <span className="eyebrow-chip bg-white/10 text-[#9dc2ff]">
              The exposure math
            </span>
          </p>
          <h2 id="exposure-heading" className="apple-display text-[32px] md:text-[48px] text-white! mb-6">
            How a 200-chart sample becomes an eight-figure finding.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed apple-body m-0 mb-10">
            CMS&rsquo;s published method: the average validated risk-score error
            across your sample, multiplied by the payments for{" "}
            <em>every enrollee in the sampling frame</em> — applied when the 90%
            confidence interval&rsquo;s lower bound stays above zero. The sample
            prices the whole contract.
          </p>
        </Reveal>

        {/* Worked example */}
        <Reveal className="max-w-[820px] mb-12">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#9dc2ff] mb-4">
              Worked example — CMS methodology, illustrative numbers
            </p>
            <div className="evidence-mono text-sm md:text-base text-[#c7c7cc] leading-loose">
              <div>sampling frame: 50,000 enrollees · payment base: ~$10,000/enrollee</div>
              <div>audited sample: 200 · avg validated risk-score error: 0.03</div>
              <div className="border-t border-white/15 mt-3 pt-3 flex flex-wrap gap-x-8 gap-y-2">
                <span>sample-only recovery ≈ <strong className="text-white">$60K</strong></span>
                <span>extrapolated ≈ <strong className="text-[#fbbf24]">$15M</strong></span>
                <span className="text-[#fbbf24] font-bold">×250</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-1 sm:grid-cols-3 gap-8 list-none p-0 m-0 mb-10 border-t border-white/15 pt-10 max-w-[980px]">
          {STATS.map((stat) => (
            <li key={stat.caption}>
              <div className="apple-stat text-[34px] md:text-[40px] text-[#fbbf24] mb-2.5">
                {stat.value}
              </div>
              <p className="text-[15px] font-medium apple-caption leading-snug m-0">{stat.caption}</p>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[820px]">
          <p className="text-sm leading-relaxed text-[#a1a1a6] m-0">
            Where this stands legally, stated plainly: the 2023 rule authorizing
            extrapolation was vacated in September 2025 and is on appeal at the
            Fifth Circuit. For now CMS collects sampled-enrollee overpayments
            and designs audits &ldquo;to support the collection of extrapolated
            recoveries&rdquo; — reserving the right to extrapolate later if it
            prevails.{" "}
            <SourceLink href="https://www.cms.gov/files/document/payment-year-2020-ma-radv-audit-methods-instructions.pdf">
              CMS PY2020 Methods, §9.2
            </SourceLink>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
