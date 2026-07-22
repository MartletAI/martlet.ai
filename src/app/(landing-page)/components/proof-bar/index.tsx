import { Reveal } from "@/components/reveal";

interface ProofStat {
  value: string;
  caption: string;
  accent: string;
}

const PROOF_STATS: ProofStat[] = [
  {
    value: "95%",
    caption: "of cases closed automatically, end-to-end",
    accent: "text-[#0165dc]",
  },
  {
    value: "99%",
    caption: "precision on every code the model automates",
    accent: "text-[#0090e8]",
  },
  {
    value: "95%",
    caption: "reduction in chart review time",
    accent: "text-[#7c3aed]",
  },
  {
    value: "100,000+",
    caption: "lives served by our platform",
    accent: "text-[#0d9488]",
  },
  {
    value: "10",
    caption: "health systems and payers in production",
    accent: "text-[#d97706]",
  },
  {
    value: "Zero",
    caption: "PHI leaves your network — on-prem, VPC, or air-gapped",
    accent: "text-[#067647]",
  },
];

/**
 * ProofBar - six evidence tiles under the hero. Numbers first, adjectives never.
 */
export function ProofBar() {
  return (
    <section
      className="container-main pt-10 pb-16 md:pb-20"
      aria-label="Proof points"
    >
      <Reveal
        as="ul"
        stagger
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 list-none p-0 m-0"
      >
        {PROOF_STATS.map((stat, index) => (
          <li key={`${stat.value}-${index}`} className="text-center lg:text-left">
            <div
              className={`apple-stat whitespace-nowrap text-[34px] md:text-[38px] mb-2.5 ${stat.accent}`}
            >
              {stat.value}
            </div>
            <p className="text-[15px] font-medium apple-caption leading-snug m-0 text-balance">
              {stat.caption}
            </p>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
