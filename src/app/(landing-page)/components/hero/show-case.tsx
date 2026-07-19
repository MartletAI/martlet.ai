import { SmartLink, Icon } from "@/components";

const HERO_CONTENT = {
  EYEBROW: "Regulatory-grade risk adjustment",
  TITLE_1: "HCC coding, automated end-to-end.",
  TITLE_2: "Run inside your environment.",
  TAGLINE:
    "From chase list to submission-ready 837s: Martlet AI closes 95% of cases automatically at 99% precision, links every HCC to page-level evidence, and packages CMS-ready RADV audit packets. PHI never leaves your network.",
  CTA_PRIMARY: "See it on your charts",
  CTA_SECONDARY: "Explore RADV readiness",
} as const;

/**
 * ShowCase - Landing page hero. Quiet background, large type, evidence-led copy.
 * Server Component for optimal performance (no client-side JS needed).
 */
export function ShowCase() {
  return (
    <section
      className="pt-32 md:pt-[168px] pb-4 relative z-10 text-center"
      aria-labelledby="hero-heading"
    >
      {/* Eyebrow */}
      <p className="animate-fade-in mb-6">
        <span className="eyebrow-chip bg-[#0165dc]/10 text-[#0154b8]">
          {HERO_CONTENT.EYEBROW}
        </span>
      </p>

      {/* Headline */}
      <h1
        id="hero-heading"
        className="container-main apple-display text-[38px] md:text-[64px] animate-fade-in mb-6 max-w-[1000px]"
      >
        <span className="text-gradient-steel">{HERO_CONTENT.TITLE_1}</span>
        <br />
        <span className="text-gradient-blue">{HERO_CONTENT.TITLE_2}</span>
      </h1>

      {/* Tagline */}
      <p className="container-main text-lg md:text-[21px] apple-body font-normal leading-relaxed animate-fade-in animation-delay-100 mb-9 max-w-[720px]">
        {HERO_CONTENT.TAGLINE}
      </p>

      {/* CTAs */}
      <div className="animate-fade-in animation-delay-200 flex flex-col sm:flex-row items-center justify-center gap-4 px-5">
        <SmartLink
          href="/contact"
          className="btn btn-gradient btn-lg h-[52px]! py-3! px-7! text-lg! font-semibold! leading-6.5"
        >
          {HERO_CONTENT.CTA_PRIMARY}
          <Icon name="arrow-right" className="h-4 w-4" aria-hidden />
        </SmartLink>
        <SmartLink
          href="/solutions/radv"
          className="btn btn-outline btn-lg h-[52px]! py-3! px-7! text-lg! font-semibold! leading-6.5"
        >
          {HERO_CONTENT.CTA_SECONDARY}
        </SmartLink>
      </div>
    </section>
  );
}
