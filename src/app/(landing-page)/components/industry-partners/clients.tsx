import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";

/** Partner strip: paths and intrinsic sizes from `public/assets/industry-partners/*.svg`. */
const MARQUEE_PARTNERS = [
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
] as const;

export function Clients() {
  return (
    <section
      className="container-main w-full"
      aria-labelledby="clients-heading"
    >
      <h3 id="clients-heading" className="sr-only">
        Our Industry Partners
      </h3>

      <div className="w-full max-w-full overflow-hidden">
        <Marquee
          pauseOnHover
          className="[--duration:50s] [--gap:8px] md:[--gap:32px] p-0"
        >
          {MARQUEE_PARTNERS.map((partner) => (
            <Link
              key={partner.id}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Visit ${partner.alt} website (opens in new tab)`}
            >
              <Image
                src={partner.logo}
                alt=""
                width={partner.width}
                height={partner.height}
                sizes={`${partner.width}px`}
                className="h-auto w-auto max-w-none object-contain"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
