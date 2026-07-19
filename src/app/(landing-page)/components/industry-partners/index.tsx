import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";

/** Partner strip: paths and intrinsic sizes from `public/assets/industry-partners/*.svg`. */
const PARTNERS = [
  {
    id: "johnSnowLabs",
    href: "https://www.johnsnowlabs.com/",
    logo: "/assets/industry-partners/jsl.svg",
    alt: "John Snow Labs",
    width: 232,
    height: 64,
  },
  {
    id: "wvuMedicine",
    href: "https://wvumedicine.org/",
    logo: "/assets/industry-partners/wvu-medicine.svg",
    alt: "WVU Medicine",
    width: 239,
    height: 64,
  },
  {
    id: "arkosHealth",
    href: "https://arkoshealth.com/",
    logo: "/assets/industry-partners/arkos-health.svg",
    alt: "Arkos Health",
    width: 132,
    height: 64,
  },
  {
    id: "lunarAnalytics",
    href: "https://www.lunaranalytics.ai/",
    logo: "/assets/industry-partners/lunar-analytics.svg",
    alt: "Lunar Analytics",
    width: 128,
    height: 64,
  },
  {
    id: "pacificAi",
    href: "https://pacific.ai/",
    logo: "/assets/industry-partners/pacific-ai.svg",
    alt: "Pacific AI",
    width: 203,
    height: 64,
  },
  {
    id: "d4h",
    href: "https://data4healthcare.com/",
    logo: "/assets/industry-partners/d4h.svg",
    alt: "D4H",
    width: 152,
    height: 64,
  },
  {
    id: "saince",
    href: "https://saince.com/",
    logo: "/assets/industry-partners/saince.svg",
    alt: "Saince",
    width: 107,
    height: 64,
  },
] as const;

const TITLE = "Partners";

/**
 * IndustryPartners - one static, greyscale logo row. No marquee: logos are
 * proof, not decoration.
 */
export function IndustryPartners() {
  return (
    <section
      aria-labelledby="industry-partners-heading"
      className="bg-white py-16 md:py-20"
    >
      <div className="container-main">
        <Reveal>
          <h2
            id="industry-partners-heading"
            className="text-sm md:text-base font-semibold uppercase tracking-[0.14em] text-muted text-center mb-10"
          >
            {TITLE}
          </h2>

          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14 list-none p-0 m-0">
            {PARTNERS.map((partner) => (
              <li key={partner.id}>
                <Link
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-sm opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label={`Visit ${partner.alt} website (opens in new tab)`}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    sizes={`${partner.width}px`}
                    className="h-[44px] md:h-[52px] w-auto object-contain"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
