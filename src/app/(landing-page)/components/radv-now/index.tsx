import { SmartLink, Icon } from "@/components";
import { Reveal } from "@/components/reveal";

const RADV_CONTENT = {
  EYEBROW: "Why now",
  TITLE: "CMS now audits every eligible Medicare Advantage contract.",
  BODY: "CMS moved from auditing roughly 60 contracts a year to all eligible contracts — on a quarterly selection cadence, with payment year 2020 audits already underway and about 2,000 certified coders reviewing submissions. Every HCC you submit needs evidence that survives a reader three years from now.",
  CTA: "Get RADV-ready",
  CTA_HREF: "/solutions/radv",
  STATS: [
    { value: "~550", caption: "MA contracts audited annually, up from ~60" },
    { value: "Quarterly", caption: "audit selection cadence — when, not whether" },
    { value: "35–200", caption: "enrollee samples per contract, per audit" },
  ],
} as const;

/**
 * RadvNow - dark "why now" band. The regulatory environment is the pitch;
 * the numbers come from CMS's published RADV expansion.
 */
export function RadvNow() {
  return (
    <section
      className="apple-section-dark py-20 md:py-28"
      aria-labelledby="radv-now-heading"
    >
      <div className="container-main">
        <Reveal className="max-w-[820px]">
          <p className="mb-6">
            <span className="eyebrow-chip bg-white/10 text-[#9dc2ff]">
              {RADV_CONTENT.EYEBROW}
            </span>
          </p>
          <h2
            id="radv-now-heading"
            className="apple-display text-[32px] md:text-[48px] text-white! mb-6"
          >
            {RADV_CONTENT.TITLE}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed apple-body m-0 mb-10">
            {RADV_CONTENT.BODY}
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 list-none p-0 m-0 mb-12 border-t border-white/15 pt-10"
        >
          {RADV_CONTENT.STATS.map((stat) => (
            <li key={stat.caption}>
              <div className="apple-stat text-[36px] md:text-[44px] text-[#fbbf24] mb-2.5">
                {stat.value}
              </div>
              <p className="text-[15px] md:text-base font-medium apple-caption leading-snug m-0">
                {stat.caption}
              </p>
            </li>
          ))}
        </Reveal>

        <Reveal className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <SmartLink
            href={RADV_CONTENT.CTA_HREF}
            className="btn btn-lg bg-white text-[#101014] hover:bg-[#e8e8ed] h-[52px]! py-3! px-7! text-lg! font-semibold!"
          >
            {RADV_CONTENT.CTA}
            <Icon name="arrow-right" className="h-4 w-4" aria-hidden />
          </SmartLink>
          <SmartLink
            href="/resources/radv-hub"
            className="inline-flex items-center gap-2 text-[#9dc2ff] font-semibold text-base no-underline hover:text-white transition-colors"
          >
            Track the audit schedule on the RADV Hub
            <Icon name="arrow-right" className="w-4 h-4" aria-hidden />
          </SmartLink>
        </Reveal>
      </div>
    </section>
  );
}
