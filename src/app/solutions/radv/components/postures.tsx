import { Reveal } from "@/components/reveal";

const POSTURES = [
  {
    label: "Proactive — before the letter",
    title: "Mock audits, at any scale.",
    accent: "text-[#7c3aed]",
    dot: "bg-[#7c3aed]",
    card: "bg-gradient-to-b from-white to-[#f7f4ff] border-[#7c3aed]/15",
    points: [
      "Sample your contracts on CMS's own methodology, so your internal findings line up with how CMS will sample.",
      "Or verify every submitted HCC across the contract, since you cannot predict which enrollees CMS draws.",
      "Re-run quarterly and trend confirmation and deletion rates by coder, vendor and provider group.",
      "Fix documentation while it can still be fixed.",
    ],
  },
  {
    label: "Reactive — after the letter",
    title: "The window is five months.",
    accent: "text-[#0165dc]",
    dot: "bg-[#0165dc]",
    card: "bg-gradient-to-b from-white to-[#eff6ff] border-[#0165dc]/15",
    points: [
      "Ingest the enrollee data list and map every audited HCC to its best evidence in hours.",
      "Rank candidate records by validation strength, so you submit the strongest one. Up to two records per audited HCC, and one valid record validates it.",
      "Surface signature and credential gaps while the CMS attestation form is still available as a cure.",
      "Generate coversheet-ready packets and track intake rejections inside the window.",
    ],
  },
] as const;

/**
 * Postures - proactive vs reactive, with the operational facts from the audit
 * lifecycle folded in where they are actionable.
 */
export function Postures() {
  return (
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="postures-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[800px] mx-auto mb-12">
          <h2 id="postures-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            Before the letter. After the letter.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Once an audit begins, the remedies available to you are narrow:
            records cannot be amended, and signatures obtained in response to
            the request do not count. That is why the work that matters happens
            before you are selected, and why the work after has to be fast.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 list-none p-0 m-0 max-w-[1100px] mx-auto mb-10"
        >
          {POSTURES.map((posture) => (
            <li key={posture.label} className={`rounded-[28px] border p-7 md:p-9 ${posture.card}`}>
              <p className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] ${posture.accent} mb-3`}>
                <span className={`w-1.5 h-1.5 rounded-full ${posture.dot}`} aria-hidden />
                {posture.label}
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-5">
                {posture.title}
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {posture.points.map((point) => (
                  <li key={point} className="flex gap-3 items-start text-[15px] apple-body leading-relaxed">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${posture.dot}`} aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[900px] mx-auto">
          <p className="text-sm apple-caption leading-relaxed m-0 text-center">
            For the PY2020 cycle now underway, the enrollee data list posted
            April 3, 2026 and records are due August 28, 2026. Findings can be
            appealed within 60 days (42 CFR 422.311(c)). Corrections for sampled
            enrollees freeze during the audit (42 CFR 422.326(d)), and records
            must be retained for ten years (42 CFR 422.504(d)), so an audit can
            reach back a decade.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
