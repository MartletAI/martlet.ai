import { SmartLink, Icon } from "@/components";

const HERO = {
  TITLE_1: "Every visit, prepped.",
  TITLE_2: "Every suggestion, proven.",
  TAGLINE:
    "Martlet AI surfaces suspected conditions from structured and unstructured data — labs, meds, notes, claims — and delivers them as concise, evidence-linked suggestions inside your EHR workflow. Clinicians see the proof, act in seconds, and stay in charge of every clinical decision.",
  CTA_PRIMARY: "See it on your panel",
  CTA_SECONDARY: "How suspecting works",
  /** No precision figure here. Precision is measurable against a record that
   *  already exists; a suggestion raised before the visit has nothing to score
   *  against yet, so the number would not mean what it means on the
   *  retrospective and RADV pages. Adoption is what this page argues. */
  STATS: [
    { value: "100,000+", caption: "lives served by our platform", accent: "text-[#0d9488]" },
    { value: "10", caption: "health systems and payers in production", accent: "text-[#d97706]" },
    { value: "Zero", caption: "PHI leaves your network — on-prem, VPC, or air-gapped", accent: "text-[#067647]" },
  ],
} as const;

export function Hero() {
  return (
    <div className="apple-hero">
      <section
        className="max-w-[1440px] m-auto pt-32 md:pt-[168px] pb-4 relative z-10 text-center"
        aria-labelledby="pro-hero-heading"
      >
        <h1
          id="pro-hero-heading"
          className="container-main apple-display text-[38px] md:text-[64px] animate-fade-in mb-6 max-w-[1000px]"
        >
          <span className="text-gradient-steel">{HERO.TITLE_1}</span>
          <br />
          <span className="text-gradient-blue">{HERO.TITLE_2}</span>
        </h1>

        <p className="container-main text-lg md:text-[21px] apple-body font-medium leading-relaxed animate-fade-in animation-delay-100 mb-9 max-w-[780px]">
          {HERO.TAGLINE}
        </p>

        <div className="animate-fade-in animation-delay-200 flex flex-col sm:flex-row items-center justify-center gap-4 px-5 mb-14">
          <SmartLink
            href="/contact"
            className="btn btn-gradient btn-lg h-[52px]! py-3! px-7! text-lg! font-semibold! leading-6.5"
          >
            {HERO.CTA_PRIMARY}
            <Icon name="arrow-right" className="h-4 w-4" aria-hidden />
          </SmartLink>
          <a
            href="#suspecting"
            className="btn btn-outline btn-lg h-[52px]! py-3! px-7! text-lg! font-semibold! leading-6.5"
          >
            {HERO.CTA_SECONDARY}
          </a>
        </div>

        {/* Our numbers */}
        <div className="container-main pb-16 md:pb-20">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 list-none p-0 m-0 border-t border-[#d2d2d7] pt-10 animate-stagger max-w-[900px] mx-auto">
            {HERO.STATS.map((stat) => (
              <li key={stat.caption} className="text-center lg:text-left">
                <div className={`apple-stat whitespace-nowrap text-[30px] md:text-[36px] mb-2.5 ${stat.accent}`}>
                  {stat.value}
                </div>
                <p className="text-[15px] font-medium apple-caption leading-snug m-0 text-balance">
                  {stat.caption}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
