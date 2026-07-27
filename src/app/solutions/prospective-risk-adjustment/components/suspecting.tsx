import { Reveal } from "@/components/reveal";

const SOURCES = [
  {
    tier: "High confidence",
    tierClass: "bg-[#e7f4ec] text-[#067647]",
    title: "Prior-year recapture",
    detail:
      "Chronic HCCs documented last year and missing this year — the January 1 reset makes this the largest, most defensible suspect class.",
    example: "H.O. CKD coded 2024, absent 2025 → confirm and re-document",
  },
  {
    tier: "High confidence",
    tierClass: "bg-[#e7f4ec] text-[#067647]",
    title: "Lab signals",
    detail:
      "Results that meet diagnostic thresholds under clinical guidelines, sustained across readings — not one-off values.",
    example: "eGFR 52 then 48, 90+ days apart → CKD staging suspect",
  },
  {
    tier: "Medium confidence",
    tierClass: "bg-[#fdf3e0] text-[#b45309]",
    title: "Pharmacy signals",
    detail:
      "Active medications that imply an undocumented condition — flagged as a question for the clinician, never auto-coded.",
    example: "Insulin active, no diabetes coded this year → confirm at visit",
  },
  {
    tier: "Medium confidence",
    tierClass: "bg-[#fdf3e0] text-[#b45309]",
    title: "Unstructured-note NLP",
    detail:
      "Conditions documented in narrative notes but never coded — surfaced with the exact sentence and page attached.",
    example: "\"...polyneuropathy, stable on gabapentin\" in a note, never coded",
  },
  {
    tier: "Supporting",
    tierClass: "bg-[#e9f1fe] text-[#0154b8]",
    title: "Claims + ADT history",
    detail:
      "Specialist claims, admissions, and HIE/ADT events that corroborate other signals and route suspects to the right visit.",
    example: "Nephrology claim + discharge summary → strengthen CKD suspect",
  },
] as const;

/**
 * Suspecting - the methodology, published. Every suspect class, its logic,
 * and its confidence tier — the transparency competitors don't offer.
 */
export function Suspecting() {
  return (
    <section
      id="suspecting"
      className="apple-section-gray py-20 md:py-24 scroll-mt-24"
      aria-labelledby="suspecting-heading"
    >
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[800px] mx-auto mb-12">
          <h2 id="suspecting-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            How suspecting works, and the signals behind every suggestion.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Every suspect Martlet AI raises comes from one of five signal
            classes, each with its own confidence tier and full provenance —
            the note, the lab, the claim it came from. Thresholds are yours to
            configure. No black box.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0 max-w-[1240px] mx-auto"
        >
          {SOURCES.map((source) => (
            <li key={source.title} className="rounded-3xl bg-white border border-border p-6 md:p-7 flex flex-col">
              <span className={`eyebrow-chip self-start text-[11px]! px-2.5! py-1! mb-4 ${source.tierClass}`}>
                {source.tier}
              </span>
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] leading-snug mb-2">
                {source.title}
              </h3>
              <p className="text-[15px] apple-body leading-relaxed m-0 mb-4">{source.detail}</p>
              <p className="evidence-mono text-xs text-muted leading-relaxed m-0 mt-auto border-t border-border-light pt-3">
                {source.example}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
