import { SmartLink, Icon } from "@/components";

/** Numeral carries the weight, unit sits subordinate — as the brochure sets them. */
const STATS = [
  { value: "99", unit: "%", caption: "precision on automated codes", accent: "text-[#0165dc]" },
  { value: "95", unit: "%", caption: "of codes closed automatically", accent: "text-[#7c3aed]" },
  { value: "100,000", unit: "+", caption: "lives on the platform", accent: "text-[#0d9488]" },
  { value: "Zero", unit: "", caption: "PHI leaving your network", accent: "text-[#067647]" },
] as const;

const HERO = {
  TITLE_1: "Audit-grade RADV validation.",
  TITLE_2: "99% precision.",
  CTA_PRIMARY: "Run a mock RADV on one contract",
  CTA_SECONDARY: "See what gets checked",
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
          <span className="text-gradient-brand">{HERO.TITLE_2}</span>
        </h1>

        <p className="container-main text-lg md:text-[21px] apple-body font-medium leading-relaxed animate-fade-in animation-delay-100 mb-9 max-w-[800px]">
          CMS is now auditing{" "}
          <strong className="font-semibold text-[#0a0a12]">
            every eligible Medicare Advantage contract, every year
          </strong>
          , with multiple payment years in flight at once. Martlet AI verifies
          your submitted codes against the record, links the evidence to the
          page, and builds the submission packets —{" "}
          <strong className="font-semibold text-[#0a0a12]">
            for the audit you&rsquo;re in now, and every one after.
          </strong>
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
            {STATS.map((stat) => (
              <li key={stat.caption} className="text-center lg:text-left">
                <div
                  className={`apple-stat whitespace-nowrap text-[30px] md:text-[36px] mb-2.5 ${stat.accent}`}
                >
                  {stat.value}
                  {stat.unit && (
                    <span className="text-[0.6em] align-baseline ml-0.5">
                      {stat.unit}
                    </span>
                  )}
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
