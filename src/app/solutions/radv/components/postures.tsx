import { Reveal } from "@/components/reveal";

const POSTURES = [
  {
    eyebrow: "Proactive — before the letter",
    title: "Mock audits, on CMS's own methodology",
    accent: "text-[#7c3aed]",
    card: "bg-gradient-to-b from-white to-[#f7f4ff] border-[#7c3aed]/15",
    points: [
      "Sample your own contracts the way CMS does — stratified, 35–200 enrollees",
      "Cohorts by vendor, provider group, or condition to find recurring failures",
      "Fix documentation while it can still be fixed — records can't be amended at audit time",
      "Repeat quarterly, matching CMS's audit cadence, and measure improvement",
    ],
  },
  {
    eyebrow: "Reactive — after the letter",
    title: "Selected? The window is five months.",
    accent: "text-[#0165dc]",
    card: "bg-gradient-to-b from-white to-[#eff6ff] border-[#0165dc]/15",
    points: [
      "Ingest the Enrollee Data List; map every audited HCC to its best evidence in hours",
      "Triage by exposure: weakest evidence and highest-value HCCs first",
      "Assemble coversheet-ready packets inside the submission window",
      "Works on codes submitted years ago, coded by anyone, on any platform",
    ],
  },
] as const;

/**
 * Postures - proactive vs reactive. The reactive card carries the wedge:
 * RADV runs on submitted codes regardless of who coded them.
 */
export function Postures() {
  return (
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="postures-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#7c3aed]/10 text-[#6d28d9]">
              Two postures
            </span>
          </p>
          <h2 id="postures-heading" className="apple-display text-[32px] md:text-[48px]">
            Before the letter. After the letter.
          </h2>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-1 lg:grid-cols-2 gap-5 list-none p-0 m-0 max-w-[1100px] mx-auto">
          {POSTURES.map((posture) => (
            <li key={posture.eyebrow} className={`rounded-[28px] border p-7 md:p-9 ${posture.card}`}>
              <p className={`text-xs font-bold uppercase tracking-[0.12em] ${posture.accent} mb-3`}>
                {posture.eyebrow}
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-5">
                {posture.title}
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {posture.points.map((point) => (
                  <li key={point} className="flex gap-3 items-start text-[15px] apple-body leading-relaxed">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${posture.accent === "text-[#7c3aed]" ? "bg-[#7c3aed]" : "bg-[#0165dc]"}`} aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
