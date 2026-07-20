import { Reveal } from "@/components/reveal";

const PILLARS = [
  {
    eyebrow: "Security & compliance",
    accent: "text-[#0165dc]",
    card: "bg-gradient-to-b from-[#f4f8ff] to-[#e9f1fe]",
    title: "The controls in effect are yours",
    points: [
      "HIPAA-aligned by deployment model — PHI stays under your existing safeguards, and we sign a BAA",
      "Our policies and controls map to the requirements of HITRUST CSF, NIST 800-53, SOC 2, and ISO 27001",
      "Your SIEM, IAM, network segmentation, and monitoring apply unchanged — we run inside them",
      "Records and audit trails retained to your policy — CMS can audit ten years back; the trail is built for it",
    ],
  },
  {
    eyebrow: "AI governance",
    accent: "text-[#7c3aed]",
    card: "bg-gradient-to-b from-[#f8f5ff] to-[#f0eafe]",
    title: "Governed AI, not a black box",
    points: [
      "Pacific AI certified for healthcare AI governance",
      "Every model versioned; every release tested before it touches production charts; every rollback one step",
      "Deterministic outputs — the same chart under the same configuration produces the same result, every time",
      "Every AI decision recorded: who acted, what changed, when, with which model version",
    ],
  },
  {
    eyebrow: "Your data",
    accent: "text-[#067647]",
    card: "bg-gradient-to-b from-[#f2fbf7] to-[#e6f7ef]",
    title: "Yours, and only yours",
    points: [
      "No PHI egress and no subprocessors in the data path — there is no one downstream to vet",
      "Your data trains nothing outside your environment",
      "Underlying models are built on public clinical text and proprietary annotated datasets developed by John Snow Labs",
      "Licensed as software: no per-token fees, no per-chart fees, no success commission",
    ],
  },
] as const;

/**
 * Controls - the precise compliance language: mapped-to, not certified-as;
 * the architectural argument stated as a positive.
 */
export function Controls() {
  return (
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="controls-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[820px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#0f1f3a]/8 text-[#0f1f3a]">
              What your reviewers will ask
            </span>
          </p>
          <h2 id="controls-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            SOC 2 attests to how a vendor handles your data.
            <br className="hidden md:block" />
            In our deployment, the vendor doesn&rsquo;t handle your data.
          </h2>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-1 lg:grid-cols-3 gap-5 list-none p-0 m-0 max-w-[1240px] mx-auto">
          {PILLARS.map((pillar) => (
            <li key={pillar.eyebrow} className={`rounded-[28px] p-7 md:p-8 ${pillar.card}`}>
              <p className={`text-xs font-bold uppercase tracking-[0.12em] ${pillar.accent} mb-3`}>
                {pillar.eyebrow}
              </p>
              <h3 className="text-xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-4">
                {pillar.title}
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-2.5 items-start text-[15px] apple-body leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current opacity-40 shrink-0" aria-hidden />
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
