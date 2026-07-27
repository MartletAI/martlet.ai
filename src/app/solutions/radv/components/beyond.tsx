import { Reveal } from "@/components/reveal";

const POINTS = [
  {
    title: "Readiness stops being a project",
    body: "Your exposure is current and known at all times, rather than reconstructed from scratch each time a letter arrives.",
    accent: "border-[#0165dc]",
  },
  {
    title: "Documentation improves every cycle",
    body: "Failure patterns surface by provider group, vendor and condition. Fix them at the source and next year's sample can be cleaner than this year's, so the gains compound.",
    accent: "border-[#7c3aed]",
  },
  {
    title: "The capability stays in-house",
    body: "Workflow, evidence and audit trail live inside your organization, tuned to your contracts, your coders and your thresholds. The setup carries from one payment year to the next.",
    accent: "border-[#0d9488]",
  },
  {
    title: "No annual scramble for capacity",
    body: "You stop buying emergency coder and vendor capacity every cycle, and stop paying rush rates for it.",
    accent: "border-[#d97706]",
  },
] as const;

/**
 * Beyond - why RADV readiness is a standing capability rather than an annual
 * project, now that CMS audits every contract every year.
 */
export function Beyond() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="beyond-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-12">
          <h2 id="beyond-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            Beyond this year&rsquo;s audit.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            CMS moved to auditing every eligible contract, every year. The work
            you do for this audit does not have to be repeated from scratch next
            year.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-9 list-none p-0 m-0 max-w-[1000px] mx-auto"
        >
          {POINTS.map((point) => (
            <li key={point.title} className={`border-t-2 pt-5 ${point.accent}`}>
              <h3 className="text-[17px] font-bold tracking-tight text-[#0a0a12] leading-snug mb-2">
                {point.title}
              </h3>
              <p className="text-[15px] apple-body leading-relaxed m-0">
                {point.body}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
