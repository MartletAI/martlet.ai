import Image from "next/image";
import { SectionLabel } from "@/components/section-label";

/**
 * Feature items for the Designed for Trust section.
 * Each item explains a trust-building capability of the system.
 */
const TRUST_FEATURES = [
  {
    title: "MEAT-aware recommendations",
    description:
      "Not just \"problem list only\"—our system ensures every recommendation is supported by documented Monitoring, Evaluation, Assessment, or Treatment evidence.",
  },
  {
    title: "Evidence provenance",
    description:
      "Complete note/date/source traceability for every recommendation, enabling clinicians to validate quickly and confidently.",
  },
  {
    title: "Prioritization + thresholds",
    description:
      "Fit your standards and risk tolerance with customizable prioritization and confidence thresholds.",
  },
  {
    title: "Deployment control",
    description:
      "Deploy on cloud, VPC, or on-premises—PHI stays under your control with flexible deployment options.",
  },
] as const;

/**
 * DesignedForTrust Section
 *
 * Showcases the trust-building features of the prospective risk adjustment system.
 * Features a two-column layout with feature list and illustration.
 */
export function DesignedForTrust() {
  return (
    <section
      aria-labelledby="designed-for-trust-heading"
      className="bg-white py-10"
    >
      <div className="container-main flex flex-col gap-[46px]">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-11.5">
					<SectionLabel className="text-indicator-prospective mb-3">Designed for trust</SectionLabel>
					<h2
						id="designed-for-trust-heading"
						className="font-semibold text-[36px] leading-[44px] tracking-[-0.72px] text-center text-foreground mb-5"
					>
						High signal, low noise, so clinicians don&apos;t tune it out
					</h2>
          <p className="text-xl leading-[30px] text-center text-text-tertiary-600 font-normal">
            Prospective success is adoption. Adoption requires precision,
            brevity, and defensibility.
          </p>
        </header>

        {/* Content Section - Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-[109px]">
          {/* Features List */}
          <dl className="flex flex-col max-w-[526px]" role="list">
            {TRUST_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className={`flex flex-col gap-1 py-4`}
              >
                <dt className="font-semibold text-lg leading-7 text-foreground">
                  {feature.title}
                </dt>
                <dd className="font-normal text-base leading-6 text-text-tertiary-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>

          {/* Illustration */}
          <figure className="flex-1">
            <Image
              src="/assets/design-for-trust-illustrator.png"
              alt=""
              width={603}
              height={472}
              className="w-full max-w-[603px] h-auto aspect-603/472 ml-auto"
              priority={false}
              aria-hidden="true"
            />
            <figcaption className="sr-only">
              Illustration showing secure data infrastructure with shield
              protection, AI processing, cloud connectivity, and document
              management
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}