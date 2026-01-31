
import Image from "next/image";
import { SectionLabel } from "../section-label";
import { SmartLink } from "./smart-link";

export interface CTAProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
}

export function CTA({ title, subtitle, description, ctaText, ctaLink, backgroundColor }: CTAProps) {
  return (
    <section className={`py-10 ${backgroundColor} px-4 md:px-0`} aria-labelledby="cta-heading">
      <div className="relative py-8 md:py-13.5 flex flex-col items-center justify-center container-main mx-auto">
        {/* Background Container */}
        <div className="absolute inset-0 w-full h-full bg-footer-bg z-0 rounded-[16px] overflow-hidden">
          <Image
            src="/assets/section-background/cta.svg"
            alt="CTA Background"
            fill
            className="object-cover opacity-40 mix-blend-soft-light rounded-[16px]"
            priority
          />
        </div>


        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-0">
          {/* Subtitle */}
          <SectionLabel className="mb-2 text-white">{subtitle}</SectionLabel>

          {/* Title */}
          <h2 id="cta-heading" className="mb-2 text-center text-2xl md:text-4xl font-semibold leading-tight md:leading-[44px] tracking-[-0.72px] text-white">
            {title}
          </h2>

          {/* Description */}
          <p className="mb-6 md:mb-10 text-center text-base md:text-xl font-normal leading-relaxed text-outputs-icon-border max-w-[90%] md:max-w-none">
            {description}
          </p>

          {/* Buttons */}
          <SmartLink
            href={ctaLink}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-light bg-white px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-semibold text-footer-bg shadow-sm transition-all hover:bg-blue-50"
          >
            {ctaText}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
