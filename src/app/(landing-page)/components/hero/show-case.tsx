import { Button, Icon } from "@/components";
import { LANDING_PAGE } from "@/constants/landing-page";

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
        className="text-black text-[64px] font-extrabold leading-tight animate-fade-in mb-lg -ml-4"
      >
        {LANDING_PAGE.HERO.TITLE}
        <br />
        <span className="gradient-text-primary ml-4">
          {LANDING_PAGE.HERO.TITLE_HIGHLIGHT}
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-2xl text-foreground font-medium italic animate-fade-in animation-delay-100 mb-lg">
        {LANDING_PAGE.HERO.TAGLINE}
      </p>

      {/* CTA */}
      <div className="animate-fade-in animation-delay-200">
        <Button as="a" href="/demo" size="lg" className="w-[231px] h-[50px]! py-3! px-4.5! text-lg! font-semibold! leading-6.5 gap-3!">
          {LANDING_PAGE.HERO.CTA}
          <Icon name="play" className="h-3 w-2.5 text-[#CCE6FF]" aria-hidden />
        </Button>
      </div>
    </section>
  );
}
