import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const STATS = [
  { value: "115", caption: "HCC categories under v28, up from 86" },
  { value: "7,770", caption: "ICD-10 codes that still map — down from 9,797" },
  { value: "−3.12%", caption: "CMS-estimated average risk score impact" },
  { value: "−20% to +10%", caption: "plan-level spread — your mix decides your number" },
];

/**
 * V28 - what the model change did, in sourced numbers, and how mapping a
 * payment year at a time handles it. Deliberately carries no payment-year
 * schedule: the phase-in dates are the part that goes stale.
 */
export function V28() {
  return (
    <section className="apple-section-blue py-20 md:py-24" aria-labelledby="v28-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[800px] mx-auto mb-12">
          <h2 id="v28-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            The v28 model maps fewer codes, and the impact is not evenly spread.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            The v28 model added HCC categories but removed{" "}
            <strong>2,294 ICD-10 codes</strong> from risk adjustment, constrained
            diabetes coefficients to a flat ~0.166, and dropped codes like
            unspecified PVD (I73.9, formerly worth ~0.288 RAF) entirely.{" "}
            <SourceLink href="https://www.wakely.com/wp-content/uploads/2024/04/proposed-ma-risk-adjustment-model-good-news-some-detrimental-others.pdf">
              Wakely&rsquo;s analysis
            </SourceLink>{" "}
            shows plan-level impacts ranging from −20% to +10%.
          </p>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 list-none p-0 m-0 max-w-[1100px] mx-auto border-t border-[#d2d2d7] pt-10 mb-14">
          {STATS.map((stat) => (
            <li key={stat.caption} className="text-center lg:text-left">
              <div className="apple-stat whitespace-nowrap text-[26px] md:text-[32px] mb-2.5 text-[#7c3aed]">
                {stat.value}
              </div>
              <p className="text-[15px] font-medium apple-caption leading-snug m-0 text-balance">
                {stat.caption}
              </p>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[820px] mx-auto">
          <p className="text-base md:text-lg apple-body leading-relaxed m-0 text-center">
            Martlet AI maps every diagnosis under{" "}
            <strong>both v24 and v28</strong>, a payment year at a time: each
            code is validated against the model that applies to the year being
            coded, and codes that no longer map under the model in force are
            surfaced before you submit rather than at reconciliation. A run
            covering several years is never pushed through a single model.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
