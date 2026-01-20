import { Button, Icon } from "@/components";
import { LANDING_PAGE } from "@/constants/static";

/**
 * ShowCase - Landing page hero section with headline, tagline, and CTA.
 * Server Component for optimal performance (no client-side JS needed).
 */
export function ShowCase() {
  return (
    <section
      className="pt-[150px] relative z-10 text-center"
      aria-labelledby="hero-heading"
    >
      {/* Headline */}
      <h1
        id="hero-heading"
        className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-tight animate-fade-in mb-lg"
      >
        {LANDING_PAGE.HERO_TITLE}
        <br />
        <span className="gradient-text-primary">
          {LANDING_PAGE.HERO_TITLE_HIGHLIGHT}
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-lg text-muted italic animate-fade-in animation-delay-100 mb-lg">
        {LANDING_PAGE.HERO_TAGLINE}
      </p>

      {/* CTA */}
      <div className="animate-fade-in animation-delay-200">
        <Button as="a" href="/demo" size="lg">
          {LANDING_PAGE.HERO_CTA}
          <Icon name="arrow-right" aria-hidden />
        </Button>
      </div>

    </section>
  );
}
