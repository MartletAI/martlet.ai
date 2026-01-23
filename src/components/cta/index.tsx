
import Image from "next/image";
import Link from "next/link";

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
    <section className={`py-10 ${backgroundColor}`} aria-labelledby="cta-heading">
      <div className="relative py-13.5 flex flex-col items-center justify-center container-main mx-auto">
        {/* Background Container */}
        <div className="absolute bg-footer-bg z-0 rounded-[16px]">
          <Image
            src="/assets/cta-bg.svg"
            alt="CTA Background"
            width={1240}
            height={310}
            className="object-cover opacity-40 mix-blend-soft-light mx-auto rounded-[16px]"
            priority
          />
        </div>


        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Subtitle */}
          <p className="mb-2 text-center text-base font-semibold leading-6 text-white">
            {subtitle}
          </p>

          {/* Title */}
          <h2 id="cta-heading" className="mb-2 text-center text-4xl font-semibold leading-[44px] tracking-[-0.72px] text-white">
            {title}
          </h2>

          {/* Description */}
          <p className="mb-10 text-center text-xl font-normal leading-relaxed text-outputs-icon-border">
            {description}
          </p>

          {/* Buttons */}
          <Link
            href={ctaLink}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-light bg-white px-6 py-3 text-base font-semibold text-footer-bg shadow-sm transition-all hover:bg-blue-50"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
