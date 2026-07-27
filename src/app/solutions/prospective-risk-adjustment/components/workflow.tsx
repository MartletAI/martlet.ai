import { Reveal } from "@/components/reveal";

import { SuspectDemo } from "./suspect-demo";

const PHASES = [
  {
    phase: "Pre-visit",
    title: "A prep summary worth reading",
    detail:
      "A tight, prioritized set of suspects per member — each with its signals, provenance, and a documentation cue. Minutes to read, not an hour of chart digging.",
  },
  {
    phase: "In-visit",
    title: "Inside the EHR, not beside it",
    detail:
      "Suggestions surface in native workflow — Epic BPAs and FHIR CDS Hooks patterns — so confirming or dismissing takes seconds and nothing interrupts the exam.",
  },
  {
    phase: "Post-visit",
    title: "The loop actually closes",
    detail:
      "Confirmed conditions flow into validation and submission with evidence attached; dismissals feed back into thresholds, so the suggestions keep getting quieter and better.",
  },
] as const;

/**
 * Workflow - pre-visit, in-visit, post-visit — with the suspect card
 * building its case live.
 */
export function Workflow() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="workflow-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-14">
          <h2 id="workflow-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            The workflow, built around the visit rather than around our
            software.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-[1160px] mx-auto">
          <Reveal as="ol" stagger className="list-none p-0 m-0 flex flex-col gap-4">
            {PHASES.map((item, index) => (
              <li key={item.phase} className="rounded-[24px] bg-[#fbfbfd] border border-border p-6 md:p-7">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0d9488] text-white text-sm font-bold shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0f766e] m-0">
                    {item.phase}
                  </p>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] apple-body leading-relaxed m-0">{item.detail}</p>
              </li>
            ))}
          </Reveal>

          <Reveal>
            <SuspectDemo />
            <p className="text-xs text-muted-light text-center mt-4 mb-0">
              All patient data shown is synthetically generated for illustration.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
