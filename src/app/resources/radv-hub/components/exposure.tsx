import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const STATS = [
  { value: "5–8%", caption: "payment error CMS found in its completed PY2011–13 audits" },
  { value: "$4.7B", caption: "CMS's projected RADV recoveries, 2023–2032" },
  { value: "$76–84B", caption: "MedPAC-estimated annual MA overpayments, 2025–26" },
];

/**
 * Exposure - how CMS's extrapolation methodology works, with a worked example
 * and the current legal status. Reference material for the hub.
 */
export function Exposure() {
  return (
    <section className="apple-section-dark py-16 md:py-20" aria-labelledby="exposure-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal>
          <h2 id="exposure-heading" className="apple-display text-[28px] md:text-[40px] text-white! mb-4">
            How extrapolation is calculated
          </h2>
          <p className="text-base md:text-lg leading-relaxed apple-body m-0 mb-8 max-w-[760px]">
            Under CMS&rsquo;s published method, the average validated risk-score
            error across the sample is multiplied by the payments for every
            enrollee in the sampling frame, and applied only when the lower
            bound of the 90% confidence interval stays above zero. The sample
            prices the whole contract, which is why the arithmetic matters more
            than the sample size suggests.
          </p>
        </Reveal>

        <Reveal className="mb-10">
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

        <Reveal as="ul" stagger className="grid grid-cols-1 sm:grid-cols-3 gap-8 list-none p-0 m-0 mb-8 border-t border-white/15 pt-8">
          {STATS.map((stat) => (
            <li key={stat.caption}>
              <div className="apple-stat text-[30px] md:text-[36px] text-[#fbbf24] mb-2.5">
                {stat.value}
              </div>
              <p className="text-[15px] font-medium apple-caption leading-snug m-0">{stat.caption}</p>
            </li>
          ))}
        </Reveal>

        <Reveal>
          <p className="text-sm leading-relaxed text-[#a1a1a6] m-0">
            Where this stands legally: the 2023 rule authorizing extrapolation
            was vacated in September 2025 and is on appeal at the Fifth Circuit.
            For now CMS collects sampled-enrollee overpayments and designs
            audits &ldquo;to support the collection of extrapolated
            recoveries,&rdquo; reserving the right to extrapolate later if it
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
