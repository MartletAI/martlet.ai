import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const STATS = [
  { value: "Jan 1", caption: "every RAF score resets — chronic conditions must be re-documented annually" },
  { value: "14.1 min", caption: "average chart-prep time per visit without AI, in AAFP's Innovation Lab study" },
  { value: "61%", caption: "chart-prep reduction the same study measured with point-of-care AI (to 5.5 min)" },
  { value: "−23%", caption: "physician burnout reduction measured in that study" },
];

/**
 * Burden - the clinician-burden problem, with the independent AAFP evidence
 * that point-of-care AI works — and the trust condition that decides adoption.
 */
export function Burden() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="burden-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[800px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#d97706]/10 text-[#b45309]">
              The pre-visit problem
            </span>
          </p>
          <h2 id="burden-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            The treadmill restarts every January 1.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Chronic conditions don&rsquo;t carry forward — every HCC must be
            re-documented from a qualifying encounter, every year. The{" "}
            <SourceLink href="https://www.aafp.org/practice-operations/administrative-simplification/chart-review/technologies-chart-review-burden">
              AAFP&rsquo;s Innovation Lab
            </SourceLink>{" "}
            has independently shown point-of-care AI can cut the prep burden —
            but adoption lives or dies on trust: one unsupported suggestion and
            clinicians stop reading them.
          </p>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 list-none p-0 m-0 max-w-[1100px] mx-auto border-t border-[#d2d2d7] pt-10">
          {STATS.map((stat) => (
            <li key={stat.caption} className="text-center lg:text-left">
              <div className="apple-stat whitespace-nowrap text-[30px] md:text-[36px] mb-2.5 text-[#d97706]">
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
