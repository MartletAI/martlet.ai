import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const STATS = [
  { value: "115", caption: "HCC categories under v28, up from 86" },
  { value: "7,770", caption: "ICD-10 codes that still map — down from 9,797" },
  { value: "−3.12%", caption: "CMS-estimated average risk score impact" },
  { value: "−20% to +10%", caption: "plan-level spread — your mix decides your number" },
];

const PHASE_IN = [
  { py: "PY2024", blend: "67% v24 / 33% v28" },
  { py: "PY2025", blend: "33% v24 / 67% v28" },
  { py: "PY2026", blend: "100% v28" },
];

/**
 * V28 - the model transition in real numbers, and how payment-year
 * discipline handles it.
 */
export function V28() {
  return (
    <section className="gradient-evidence py-20 md:py-24" aria-labelledby="v28-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[800px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#7c3aed]/10 text-[#6d28d9]">
              The v28 transition
            </span>
          </p>
          <h2 id="v28-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            PY2026 is 100% v28. Your mappings decide your revenue.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            The v28 model added HCC categories but removed{" "}
            <strong>2,294 ICD-10 codes</strong> from risk adjustment, constrained
            diabetes coefficients to a flat ~0.166, and dropped codes like
            unspecified PVD (I73.9, formerly worth ~0.288 RAF) entirely.{" "}
            <SourceLink href="https://www.wakely.com/wp-content/uploads/2024/04/proposed-ma-risk-adjustment-model-good-news-some-detrimental-others.pdf">
              Wakely&rsquo;s analysis
            </SourceLink>{" "}
            shows plan-level impacts ranging from −20% to +10%.
          </p>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 list-none p-0 m-0 max-w-[1100px] mx-auto border-t border-[#d2d2d7] pt-10 mb-14">
          {STATS.map((stat) => (
            <li key={stat.caption} className="text-center lg:text-left">
              <div className="apple-stat whitespace-nowrap text-[26px] md:text-[32px] mb-2.5 text-[#7c3aed]">
                {stat.value}
              </div>
              <p className="text-[15px] font-medium apple-caption leading-snug m-0 text-balance">
                {stat.caption}
              </p>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[780px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {PHASE_IN.map((row) => (
              <div key={row.py} className="rounded-2xl bg-white border border-border p-5 text-center">
                <div className="evidence-mono font-bold text-[#0a0a12] mb-1">{row.py}</div>
                <div className="text-sm apple-body">{row.blend}</div>
              </div>
            ))}
          </div>
          <p className="text-base apple-body leading-relaxed m-0 text-center">
            Martlet AI maps every diagnosis under <strong>both v24 and v28</strong>{" "}
            with payment-year discipline: each code is validated against the
            model that applies to the payment year in question, and codes that
            no longer map are blocked at submission — not discovered at
            reconciliation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
