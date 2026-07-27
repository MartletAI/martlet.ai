import { SmartLink, Icon } from "@/components";
import type { IconProps } from "@/components/icon";

/** Stat accents sampled from the brochure covers. */
const HERO = {
  TITLE_1: "Audit-grade RADV validation.",
  TITLE_2: "99% precision.",
  TAGLINE:
    "CMS is now auditing every eligible Medicare Advantage contract, every year, with multiple payment years in flight at once. Martlet AI verifies your submitted codes against the record, links the evidence to the page, and builds the submission packets — for the audit you're in now, and every one after.",
  CTA_PRIMARY: "Run a mock RADV on one contract",
  CTA_SECONDARY: "See what gets checked",
  STATS: [
    {
      value: "99%",
      caption: "precision on automated codes",
      accent: "text-[#0c51f6]",
      icon: "badge-check" as IconProps["name"],
    },
    {
      value: "95%",
      caption: "of codes closed automatically",
      accent: "text-[#7526e4]",
      icon: "file-checked" as IconProps["name"],
    },
    {
      value: "100,000+",
      caption: "lives on the platform",
      accent: "text-[#f0235b]",
      icon: "users" as IconProps["name"],
    },
    {
      value: "Zero",
      caption: "PHI leaving your network",
      accent: "text-[#067647]",
      icon: "shield-check" as IconProps["name"],
    },
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
          className="container-main apple-display text-gradient-brand text-[38px] md:text-[64px] animate-fade-in mb-6 max-w-[1000px]"
        >
          {HERO.TITLE_1}
          <br />
          {HERO.TITLE_2}
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

        {/* Our numbers — white cards on the wash, matching the brochure */}
        <div className="container-main pb-16 md:pb-20">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 list-none p-0 m-0 animate-stagger">
            {HERO.STATS.map((stat) => (
              <li
                key={stat.caption}
                className="rounded-2xl bg-white border border-white/70 shadow-[0_2px_14px_rgba(10,30,80,0.06)] p-5 md:p-6 text-left"
              >
                <Icon
                  name={stat.icon}
                  className={`w-6 h-6 mb-4 ${stat.accent}`}
                  aria-hidden
                />
                <div
                  className={`apple-stat whitespace-nowrap text-[26px] md:text-[32px] mb-1.5 ${stat.accent}`}
                >
                  {stat.value}
                </div>
                <p className="text-[14px] md:text-[15px] font-medium apple-caption leading-snug m-0">
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
