import { SmartLink, Icon } from "@/components";

const HERO = {
  EYEBROW: "Retrospective — high volume",
  TITLE_1: "Millions of charts in.",
  TITLE_2: "Audit-grade codes out.",
  TAGLINE:
    "Martlet AI runs retrospective review end-to-end: chase lists ranked by RAF impact, every HCC validated against the checks CMS applies at audit, 95% of cases closed automatically at 99% precision — and add/delete deltas formatted for your 837/EDPS pipeline.",
  CTA_PRIMARY: "See it on your charts",
  CTA_SECONDARY: "How the pipeline works",
  STATS: [
    { value: "95%", caption: "of cases closed automatically, end-to-end", accent: "text-[#0165dc]", compact: false },
    { value: "99%", caption: "precision on every code the model automates", accent: "text-[#0090e8]", compact: false },
    { value: "95%", caption: "reduction in chart review time", accent: "text-[#7c3aed]", compact: false },
    { value: "Verify · Add · Delete", caption: "confirm, capture, and clean up — in one pass", accent: "text-[#0d9488]", compact: true },
  ],
} as const;

export function Hero() {
  return (
    <div className="apple-hero">
      <section
        className="max-w-[1440px] m-auto pt-32 md:pt-[168px] pb-4 relative z-10 text-center"
        aria-labelledby="retro-hero-heading"
      >
        <p className="animate-fade-in mb-6">
          <span className="eyebrow-chip bg-[#0165dc]/10 text-[#0154b8]">
            {HERO.EYEBROW}
          </span>
        </p>

        <h1
          id="retro-hero-heading"
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
            href="#pipeline"
            className="btn btn-outline btn-lg h-[52px]! py-3! px-7! text-lg! font-semibold! leading-6.5"
          >
            {HERO.CTA_SECONDARY}
          </a>
        </div>

        {/* Our numbers */}
        <div className="container-main pb-16 md:pb-20">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 list-none p-0 m-0 border-t border-[#d2d2d7] pt-10 animate-stagger">
            {HERO.STATS.map((stat) => (
              <li key={stat.caption} className="text-center lg:text-left">
                <div
                  className={`apple-stat leading-tight mb-2.5 ${stat.accent} ${
                    stat.compact
                      ? "text-[19px] md:text-[24px]"
                      : "whitespace-nowrap text-[30px] md:text-[36px]"
                  }`}
                >
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
