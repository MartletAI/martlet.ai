import { Reveal } from "@/components/reveal";

const PRINCIPLES = [
  {
    title: "Evidence over adjectives",
    detail:
      "Every claim on this site carries a number, a citation, or a named check. If we can't back it, we don't say it — and we hold vendors, including ourselves, to the same standard.",
    accent: "border-[#0165dc]",
  },
  {
    title: "Publish what others hide",
    detail:
      "The CMS rules, the audit timelines, the failure patterns, our suspecting logic — it's all on this site, sourced. Risk adjustment is a high-trust industry; we earn trust by showing our work.",
    accent: "border-[#7c3aed]",
  },
  {
    title: "In your environment, always",
    detail:
      "PHI never leaves your network. Not as a premium tier — as the only way we deploy. The strongest security control is the absence of a data path.",
    accent: "border-[#0d9488]",
  },
  {
    title: "Automation, honestly",
    detail:
      "95% of cases close end-to-end at 99% precision; the rest go to your reviewers with evidence attached. Clinicians and coders keep the judgment calls — the engine does the reading.",
    accent: "border-[#d97706]",
  },
] as const;

/**
 * Principles - how we operate, matching what the rest of the site does.
 */
export function Principles() {
  return (
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="principles-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12">
          <h2 id="principles-heading" className="apple-display text-[32px] md:text-[48px]">
            Four rules we don&rsquo;t break.
          </h2>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-9 list-none p-0 m-0 max-w-[1000px] mx-auto">
          {PRINCIPLES.map((principle) => (
            <li key={principle.title} className={`border-t-2 pt-5 ${principle.accent}`}>
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] leading-snug mb-2">
                {principle.title}
              </h3>
              <p className="text-[15px] apple-body leading-relaxed m-0">{principle.detail}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
