import { SmartLink, Icon } from "@/components";

const HERO_CONTENT = {
  TITLE: "Smarter Risk Adjustment with",
  TITLE_HIGHLIGHT: "Martlet AI",
  TAGLINE: "On-premise, Secure, Real-time HCC Coding & Risk Profiling",
  CTA: "Book a Demo",
} as const;

/**
 * ShowCase - Landing page hero section with headline, tagline, and CTA.
 * Server Component for optimal performance (no client-side JS needed).
 */
export function ShowCase() {
  return (
    <section
      className="pt-[156px] relative z-10 text-center"
      aria-labelledby="hero-heading"
    >
      {/* Headline */}
      <h1
        id="hero-heading"
        className="container-main gradient-landing-page-text-primary text-[56px] md:text-[64px] font-extrabold leading-tight animate-fade-in mb-lg -ml-4"
      >
        {HERO_CONTENT.TITLE}
        <br />
        <span className="gradient-landing-page-text-secondary ml-4">
          {HERO_CONTENT.TITLE_HIGHLIGHT}
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-2xl text-foreground font-medium italic animate-fade-in animation-delay-100 mb-lg">
        {HERO_CONTENT.TAGLINE}
      </p>

      {/* CTA */}
      <div className="animate-fade-in animation-delay-200">
        <SmartLink href="/contact" className="btn btn-primary btn-lg w-[231px] h-[50px]! py-3! px-4.5! text-lg! font-semibold! leading-6.5 gap-3!">
          {HERO_CONTENT.CTA}
          <Icon name="play" className="h-3 w-2.5 text-[#CCE6FF]" aria-hidden />
        </SmartLink>
      </div>
    </section>
  );
}
