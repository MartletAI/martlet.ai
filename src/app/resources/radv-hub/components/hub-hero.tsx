export const LAST_VERIFIED = "July 19, 2026";

/**
 * HubHero - the tracker's masthead. The "last verified" stamp is the
 * product: a dated, maintained reference nobody else publishes.
 */
export function HubHero() {
  return (
    <div className="apple-hero">
      <section
        className="max-w-[1440px] m-auto pt-32 md:pt-[160px] pb-14 relative z-10 text-center"
        aria-labelledby="hub-heading"
      >
        <p className="animate-fade-in mb-6">
          <span className="eyebrow-chip bg-[#d97706]/10 text-[#b45309]">
            Maintained reference
          </span>
        </p>

        <h1
          id="hub-heading"
          className="container-main apple-display text-[38px] md:text-[60px] animate-fade-in mb-6 max-w-[900px]"
        >
          <span className="text-gradient-steel">The CMS RADV Tracker.</span>
        </h1>

        <p className="container-main text-lg md:text-[21px] apple-body font-medium leading-relaxed animate-fade-in animation-delay-100 mb-7 max-w-[760px]">
          Audit status by payment year, live submission windows, the
          rule-change log, and the litigation that decides extrapolation —
          every entry linked to its primary source. Bookmark it; we keep it
          current.
        </p>

        <p className="animate-fade-in animation-delay-200 evidence-mono text-sm text-muted m-0">
          Last verified: <strong className="text-[#0a0a12]">{LAST_VERIFIED}</strong> · updated on CMS&rsquo;s quarterly audit cadence
        </p>
      </section>
    </div>
  );
}
