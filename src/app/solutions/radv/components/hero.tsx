import { SmartLink, Icon } from "@/components";

const HERO = {
  TITLE_1: "Audit-grade RADV validation.",
  TITLE_2: "99% precision.",
  TAGLINE:
    "CMS is now auditing every eligible Medicare Advantage contract, every year, with multiple payment years in flight at once. Martlet AI verifies your submitted codes against the record, links the evidence to the page, and builds the submission packets — for the audit you're in now, and every one after.",
  CTA_PRIMARY: "Run a mock RADV on one contract",
  CTA_SECONDARY: "See what gets checked",
  STATS: [
    { value: "99%", caption: "precision on automated codes", accent: "text-[#0165dc]" },
    { value: "95%", caption: "of codes closed automatically", accent: "text-[#0090e8]" },
    { value: "100,000+", caption: "lives on the platform", accent: "text-[#0d9488]" },
    { value: "Zero", caption: "PHI leaving your network", accent: "text-[#067647]" },
  ],
} as const;

export function Hero() {
  return (
    <div className="apple-hero">
      <section
        className="max-w-[1440px] m-auto pt-32 md:pt-[168px] pb-4 relative z-10 text-center"
        aria-labelledby="radv-hero-heading"
      >
        <h1
          id="radv-hero-heading"
          className="container-main apple-display text-[38px] md:text-[64px] animate-fade-in mb-6 max-w-[1000px]"
        >
          <span className="text-gradient-steel">{HERO.TITLE_1}</span>
          <br />
          <span className="text-gradient-blue">{HERO.TITLE_2}</span>
        </h1>

        <p className="container-main text-lg md:text-[21px] apple-body font-medium leading-relaxed animate-fade-in animation-delay-100 mb-9 max-w-[800px]">
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
            href="#checks"
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
                  className={`apple-stat whitespace-nowrap text-[30px] md:text-[36px] mb-2.5 ${stat.accent}`}
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
