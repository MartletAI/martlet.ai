import { Reveal } from "@/components/reveal";

const SEGMENTS = [
  {
    eyebrow: "MA plans and risk-bearing providers",
    accent: "text-[#0165dc]",
    card: "bg-gradient-to-b from-white to-[#eff6ff] border-[#0165dc]/15",
    title: "Accurate capture, before the visit closes",
    detail:
      "The January 1 reset means every chronic condition is revenue at risk until it's re-documented. Prospective capture moves that work to the point of care — where the clinician can still document it — instead of a retrospective chase six months later. Every suggestion is MEAT-aware, so what gets captured survives the audit.",
  },
  {
    eyebrow: "ACOs — MSSP and ACO REACH",
    accent: "text-[#0d9488]",
    card: "bg-gradient-to-b from-white to-[#effcf9] border-[#0d9488]/15",
    title: "Defensible completeness under the cap",
    detail:
      "ACO economics are different: risk-score growth is capped, so the goal isn't maximum RAF — it's a complete, accurate, defensible picture of panel severity for benchmarking. That means two-way suspecting (what's missing and what's unsupported), documentation quality, and evidence trails your compliance committee can stand behind.",
  },
] as const;

/**
 * Segments - MA plans vs ACOs buy prospective coding for different reasons.
 * Say so explicitly.
 */
export function Segments() {
  return (
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="segments-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-12">
          <h2 id="segments-heading" className="apple-display text-[32px] md:text-[48px]">
            What plans, ACOs and health systems each get out of it.
          </h2>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-1 lg:grid-cols-2 gap-5 list-none p-0 m-0 max-w-[1100px] mx-auto">
          {SEGMENTS.map((segment) => (
            <li key={segment.eyebrow} className={`rounded-[28px] border p-7 md:p-9 ${segment.card}`}>
              <p className={`text-xs font-bold uppercase tracking-[0.12em] ${segment.accent} mb-3`}>
                {segment.eyebrow}
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-4">
                {segment.title}
              </h3>
              <p className="text-base apple-body leading-relaxed m-0">{segment.detail}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
