import { Icon, SmartLink } from "@/components";
import type { Brochure } from "@/lib/brochures";
import { BrochureDownloadTrigger } from "./download-trigger";

interface HeroProps {
  brochure: Brochure;
}

export function Hero({ brochure }: HeroProps) {
  return (
    <div className="apple-hero">
      <section
        className="max-w-[1440px] m-auto pt-32 md:pt-[160px] pb-16 md:pb-20 relative z-10 text-center"
        aria-labelledby="download-heading"
      >
        <BrochureDownloadTrigger
          pdfPath={brochure.pdfPath}
          pdfFilename={brochure.pdfFilename}
        />

        <p className="animate-fade-in mb-6">
          <span className="eyebrow-chip bg-[#0d9488]/10 text-[#0f766e]">
            Download started
          </span>
        </p>

        <h1
          id="download-heading"
          className="container-main apple-display text-[32px] md:text-[52px] animate-fade-in mb-6 max-w-[640px]"
        >
          <span className="text-gradient-steel">Thank you for downloading.</span>
        </h1>

        <p className="container-main text-lg md:text-[21px] apple-body font-normal leading-relaxed animate-fade-in animation-delay-100 mb-10 md:mb-12 max-w-[600px]">
          Your brochure download should begin automatically.
        </p>

        <div className="container-main">
          <div className="w-full max-w-[560px] mx-auto bg-white rounded-3xl border border-border p-6 md:p-10 flex flex-col items-center text-center gap-6">
            <div className="flex items-center justify-center size-16 md:size-20 rounded-full bg-[#0165dc]/10">
              <Icon
                name="badge-check"
                className="size-8 md:size-10 text-[#0165dc]"
              />
            </div>

            <p className="text-base md:text-lg apple-body leading-relaxed">
              <span className="font-semibold text-[#0a0a12]">{brochure.title}</span>{" "}
              is downloading. If it doesn&apos;t start, use the button below.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={brochure.pdfPath}
                download={brochure.pdfFilename}
                className="btn-gradient inline-flex items-center justify-center gap-2 h-[48px] px-[18px] rounded-lg font-semibold text-base"
              >
                Download again
              </a>
              <SmartLink
                href="/resources/brochures"
                className="inline-flex items-center justify-center gap-2 h-[48px] px-[18px] bg-white text-[#0165dc] font-semibold text-base rounded-lg border border-border hover:bg-[#f5f5f7] transition-colors"
              >
                Browse brochures
              </SmartLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
