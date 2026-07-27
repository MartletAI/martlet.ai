import { Reveal } from "@/components/reveal";

/** Numerals carry the colour and the weight — they are the anchor for the
 *  item, not a caption beside it. */
const METRIC_COLORS = [
  "text-[#0165dc]",
  "text-[#7c3aed]",
  "text-[#0d9488]",
  "text-[#d97706]",
] as const;

const METRICS = [
  {
    metric: "Suggestion acceptance rate",
    why: "The single best proxy for trust. If clinicians accept few suggestions, the tool is noise — whatever the RAF dashboard says.",
  },
  {
    metric: "Alerts per encounter",
    why: "Alert fatigue kills adoption. A hard cap on suggestions per visit is a feature, not a limitation.",
  },
  {
    metric: "Chart-prep minutes, before vs. after",
    why: "The AAFP measured 14.1 minutes baseline. Demand the same before/after measurement on your own panel.",
  },
  {
    metric: "Evidence attached per suggestion",
    why: "Every suggestion should carry its provenance — the note, lab, or claim it came from. If clinicians have to hunt for the why, they'll stop looking.",
  },
] as const;

/**
 * Metrics - buyer education: the adoption metrics to demand from any
 * point-of-care vendor, including us.
 */
export function Metrics() {
  return (
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="metrics-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[800px] mx-auto mb-12">
          <h2 id="metrics-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            The four numbers that decide whether clinicians use it.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Ask for these in every point-of-care evaluation — ours included.
            RAF lift follows adoption; adoption follows trust; trust follows
            evidence.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-2 gap-5 list-none p-0 m-0 max-w-[1000px] mx-auto mb-10"
        >
          {METRICS.map((item, index) => (
            <li key={item.metric} className="rounded-3xl bg-white border border-border p-6 md:p-7">
              <div
                className={`evidence-mono text-[22px] font-bold leading-none mb-3 ${METRIC_COLORS[index]}`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[18px] font-bold tracking-tight text-[#0a0a12] leading-snug mb-2">
                {item.metric}
              </h3>
              <p className="text-base apple-body leading-relaxed m-0">{item.why}</p>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[800px] mx-auto">
          <div className="rounded-3xl border border-[#067647]/20 bg-[#f2fbf7] p-6 md:p-8 text-center">
            <p className="text-base md:text-lg apple-body leading-relaxed m-0">
              <strong className="text-[#067647]">The guardrail behind all of it:</strong>{" "}
              Martlet AI is MEAT-aware by design — it never prompts a condition
              the documentation can&rsquo;t support, suggestions carry
              documentation cues rather than bare codes, and the clinician makes
              every clinical decision.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
