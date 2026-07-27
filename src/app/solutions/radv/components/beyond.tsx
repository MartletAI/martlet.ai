import { Reveal } from "@/components/reveal";

const POINTS = [
  {
    title: "Your exposure stays current",
    body: "Every contract and payment year carries a live confirmation and deletion rate, so you know where you stand at any point rather than at the end of a cycle.",
    accent: "bg-[#0165dc]",
  },
  {
    title: "Failure patterns surface by source",
    body: "Rates are broken out by coder, vendor, provider group and condition, so documentation problems can be fixed where they originate.",
    accent: "bg-[#7c3aed]",
  },
  {
    title: "The capability stays in-house",
    body: "Workflow, evidence and audit trail live inside your organization, tuned to your contracts, your coders and your thresholds. The setup carries from one payment year to the next.",
    accent: "bg-[#d97706]",
  },
  {
    title: "Capacity scales with the software",
    body: "Volume is handled by the engine, so adding contracts or payment years does not mean adding reviewers.",
    accent: "bg-[#067647]",
  },
] as const;

/**
 * Beyond - what running RADV continuously gives you, framed as capabilities
 * rather than as an argument against the alternative.
 */
export function Beyond() {
  return (
    <section className="apple-section-blue py-20 md:py-24" aria-labelledby="beyond-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-12">
          <h2 id="beyond-heading" className="apple-display text-[30px] md:text-[40px] mb-5">
            Beyond this year&rsquo;s audit.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            The setup carries from one payment year to the next, and each cycle
            makes the next one cheaper to run.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 list-none p-0 m-0 max-w-[1000px] mx-auto"
        >
          {POINTS.map((point) => (
            <li key={point.title}>
              <h3 className="text-[18px] font-bold tracking-tight text-[#0a0a12] leading-snug mb-2.5">
                {point.title}
              </h3>
              <span
                className={`block w-9 h-[3px] rounded-full mb-3.5 ${point.accent}`}
                aria-hidden
              />
              <p className="text-base apple-body leading-relaxed m-0">
                {point.body}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
