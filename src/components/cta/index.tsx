import { SmartLink } from "./smart-link";

interface CTAProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
}

/**
 * CTA - shared closing panel. The outer section takes the page's own
 * background (via `backgroundColor`); the inner card reuses the
 * apple-section-dark glow treatment so every dark panel on the site
 * reads as one system.
 */
export function CTA({ title, subtitle, description, ctaText, ctaLink, backgroundColor }: CTAProps) {
  return (
    <section className={`py-16 md:py-20 ${backgroundColor} px-4 md:px-0`} aria-labelledby="cta-heading">
      <div className="container-main mx-auto">
        <div className="apple-section-dark relative overflow-hidden rounded-[32px] px-6 py-14 md:px-16 md:py-20 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p className="mb-6">
            <span className="eyebrow-chip bg-white/10 text-[#9dc2ff]">
              {subtitle}
            </span>
          </p>

          {/* Title */}
          <h2
            id="cta-heading"
            className="apple-display text-white! text-[28px] md:text-[44px] mb-5 max-w-[720px]"
          >
            {title}
          </h2>

          {/* Description */}
          <p className="apple-body text-base md:text-xl leading-relaxed max-w-[640px] mb-9">
            {description}
          </p>

          {/* CTA button */}
          <SmartLink
            href={ctaLink}
            className="btn btn-lg bg-white text-[#101014] hover:bg-[#e8e8ed] h-[52px]! py-3! px-7! text-lg! font-semibold!"
          >
            {ctaText}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
