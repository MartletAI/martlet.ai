import { Icon, SmartLink } from "@/components";

/** Shown when a brochure download link is missing, invalid, or past its 72-hour expiry. */
export function Expired() {
  return (
    <div className="apple-hero">
      <section
        className="max-w-[1440px] m-auto pt-32 md:pt-[160px] pb-16 md:pb-20 relative z-10 text-center"
        aria-labelledby="expired-heading"
      >
        <h1
          id="expired-heading"
          className="container-main apple-display text-[32px] md:text-[52px] mb-6 max-w-[640px]"
        >
          <span className="text-gradient-steel">This download link has expired.</span>
        </h1>

        <p className="container-main text-lg md:text-[21px] apple-body font-medium leading-relaxed mb-10 md:mb-12 max-w-[600px]">
          Download links are valid for 72 hours. Head back to the brochures page to request a new one.
        </p>

        <div className="container-main">
          <div className="w-full max-w-[560px] mx-auto bg-white rounded-3xl border border-border p-6 md:p-10 flex flex-col items-center text-center gap-6">
            <div className="flex items-center justify-center size-16 md:size-20 rounded-full bg-[#0165dc]/10">
              <Icon name="badge-check" className="size-8 md:size-10 text-[#0165dc]" />
            </div>

            <SmartLink
              href="/resources/brochures"
              className="btn-gradient inline-flex items-center justify-center gap-2 h-[48px] px-[18px] rounded-lg font-semibold text-base"
            >
              Browse brochures
            </SmartLink>
          </div>
        </div>
      </section>
    </div>
  );
}
