import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

/** Partner strip: paths and intrinsic sizes from `public/assets/industry-partners/*.svg`. */
const MARQUEE_PARTNERS = [
  {
    id: "johnSnowLabs",
    logo: "/assets/industry-partners/jsl.svg",
    alt: "John Snow Labs",
    width: 232,
    height: 64,
  },
  {
    id: "wvuMedicine",
    logo: "/assets/industry-partners/wvu-medicine.svg",
    alt: "WVU Medicine",
    width: 239,
    height: 64,
  },
  {
    id: "arkosHealth",
    logo: "/assets/industry-partners/arkos-health.svg",
    alt: "Arkos Health",
    width: 132,
    height: 64,
  },
  {
    id: "lunarAnalytics",
    logo: "/assets/industry-partners/lunar-analytics.svg",
    alt: "Lunar Analytics",
    width: 128,
    height: 64,
  },
  {
    id: "pacificAi",
    logo: "/assets/industry-partners/pacific-ai.svg",
    alt: "Pacific AI",
    width: 203,
    height: 64,
  },
  {
    id: "d4h",
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

      <p className="sr-only">{MARQUEE_PARTNERS.map((p) => p.alt).join(", ")}</p>
      <div className="w-full max-w-full overflow-hidden" aria-hidden>
        <Marquee
          pauseOnHover
          className="[--duration:50s] [--gap:8px] md:[--gap:32px] p-0"
        >
          {MARQUEE_PARTNERS.map((partner) => (
            <Image
              key={partner.id}
              src={partner.logo}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
              sizes={`${partner.width}px`}
              className="h-auto w-auto max-w-none object-contain cursor-pointer"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
