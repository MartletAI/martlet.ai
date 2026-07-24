import { SmartLink, Icon } from "@/components";

const HERO = {
  EYEBROW: "RADV — Risk Adjustment Data Validation",
  TITLE_1: "RADV audit readiness,",
  TITLE_2: "year-round.",
  TAGLINE:
    "CMS now audits every eligible Medicare Advantage contract, every year. Martlet AI runs the same verification CMS coders run — on your submitted codes, whoever coded them, on whatever platform — and assembles CMS-ready evidence packets before the letter arrives.",
  CTA_PRIMARY: "Run a mock RADV on one contract",
  CTA_SECONDARY: "How the audit works",
  STATS_KICKER: "What you're up against — CMS's audit machine, in CMS's numbers",
  STATS: [
    { value: "~550", caption: "MA contracts CMS now audits annually, up from ~60" },
    { value: "Quarterly", caption: "CMS's audit initiation cadence — when, not whether" },
    { value: "35–200", caption: "enrollees CMS samples per contract, by plan size" },
    { value: "2,000", caption: "certified coders CMS hired to review submissions, up from 40" },
  ],
} as const;

export function Hero() {
  return (
    <div className="apple-hero">
      <section
        className="max-w-[1440px] m-auto pt-32 md:pt-[168px] pb-4 relative z-10 text-center"
        aria-labelledby="radv-hero-heading"
      >
        <p className="animate-fade-in mb-6">
          <span className="eyebrow-chip bg-[#7c3aed]/10 text-[#6d28d9]">
            {HERO.EYEBROW}
          </span>
        </p>

        <h1
          id="radv-hero-heading"
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
            href="#audit-steps"
            className="btn btn-outline btn-lg h-[52px]! py-3! px-7! text-lg! font-semibold! leading-6.5"
          >
            {HERO.CTA_SECONDARY}
          </a>
        </div>

        {/* CMS audit-environment stats — their machine, not our capability */}
        <div className="container-main pb-16 md:pb-20">
          <div className="border-t border-[#d2d2d7] pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#b45309] mb-8 text-center lg:text-left">
              {HERO.STATS_KICKER}
            </p>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 list-none p-0 m-0 animate-stagger">
              {HERO.STATS.map((stat) => (
                <li key={stat.caption} className="text-center lg:text-left">
                  <div className="apple-stat whitespace-nowrap text-[34px] md:text-[38px] mb-2.5 text-[#d97706]">
                    {stat.value}
                  </div>
                  <p className="text-[15px] font-medium apple-caption leading-snug m-0 text-balance">
                    {stat.caption}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
