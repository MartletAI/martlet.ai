const HERO = {
  EYEBROW: "Trust & security",
  TITLE_1: "Your data never",
  TITLE_2: "meets our servers.",
  TAGLINE:
    "Martlet AI deploys inside your environment — on-premises, in your private cloud, or air-gapped. There is no vendor cloud in the data path, no external AI API call, and no PHI egress. Your existing security controls stay in effect, because nothing ever leaves them.",
  STATS: [
    { value: "Zero", caption: "PHI leaves your network — by architecture, not policy", accent: "text-[#067647]" },
    { value: "0", caption: "external AI API calls in the data path", accent: "text-[#0165dc]" },
    { value: "3", caption: "deployment models: on-premises, private cloud, air-gapped", accent: "text-[#7c3aed]" },
    { value: "100%", caption: "of AI decisions recorded in the audit trail", accent: "text-[#0d9488]" },
  ],
} as const;

export function Hero() {
  return (
    <div className="apple-hero">
      <section
        className="max-w-[1440px] m-auto pt-32 md:pt-[168px] pb-4 relative z-10 text-center"
        aria-labelledby="trust-hero-heading"
      >
        <p className="animate-fade-in mb-6">
          <span className="eyebrow-chip bg-[#0f1f3a]/8 text-[#0f1f3a]">
            {HERO.EYEBROW}
          </span>
        </p>

        <h1
          id="trust-hero-heading"
          className="container-main apple-display text-[38px] md:text-[64px] animate-fade-in mb-6 max-w-[1000px]"
        >
          <span className="text-gradient-steel">{HERO.TITLE_1}</span>
          <br />
          <span className="text-gradient-blue">{HERO.TITLE_2}</span>
        </h1>

        <p className="container-main text-lg md:text-[21px] apple-body font-normal leading-relaxed animate-fade-in animation-delay-100 mb-12 max-w-[780px]">
          {HERO.TAGLINE}
        </p>

        <div className="container-main pb-16 md:pb-20">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 list-none p-0 m-0 border-t border-[#d2d2d7] pt-10 animate-stagger">
            {HERO.STATS.map((stat) => (
              <li key={stat.caption} className="text-center lg:text-left">
                <div className={`apple-stat whitespace-nowrap text-[34px] md:text-[38px] mb-2.5 ${stat.accent}`}>
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
