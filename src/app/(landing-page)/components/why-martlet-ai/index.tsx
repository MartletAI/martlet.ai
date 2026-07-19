import { Icon } from "@/components";
import { Reveal } from "@/components/reveal";
import { SmartLink } from "@/components/cta/smart-link";

interface Differentiator {
  eyebrow: string;
  title: string;
  body: string;
  linkText: string;
  href: string;
  /** Tinted card wash + eyebrow/link color */
  card: string;
  accent: string;
}

const DIFFERENTIATORS: Differentiator[] = [
  {
    card: "bg-gradient-to-b from-[#f4f8ff] to-[#e9f1fe]",
    accent: "text-[#0165dc]",
    eyebrow: "Regulatory-grade accuracy",
    title: "Healthcare-specific AI, not a wrapper",
    body: "Martlet AI runs on John Snow Labs' production medical language models — ranked #1 on 12 of 13 medical benchmarks against frontier general-purpose LLMs. Every HCC links to MEAT evidence at the chart-sentence level, so every output is reproducible and defensible under RADV.",
    linkText: "See how accuracy compares",
    href: "/solutions/retrospective-risk-adjustment",
  },
  {
    card: "bg-gradient-to-b from-[#f8f5ff] to-[#f0eafe]",
    accent: "text-[#7c3aed]",
    eyebrow: "Run in-house",
    title: "Your environment. Your data. Your audit trail.",
    body: "Deploy on-premises, in your private cloud, or air-gapped. No external API in the data path, no PHI egress, and no services contract paid on success commission — you keep the coding, the knowledge, and the controls.",
    linkText: "Ask about deployment",
    href: "/contact",
  },
  {
    card: "bg-gradient-to-b from-[#f2fbf7] to-[#e6f7ef]",
    accent: "text-[#067647]",
    eyebrow: "Automation, not assistance",
    title: "95% closed automatically. Reviewers see the exceptions.",
    body: "Most AI risk adjustment still routes every suggestion to a human, so total cost of ownership goes up. Martlet AI runs at 99% precision on the codes it automates — high enough to close 95% of cases end-to-end and cut review time by 95%. Coders see only the cases that need judgment.",
    linkText: "See the workflow",
    href: "/solutions/retrospective-risk-adjustment",
  },
];

const CONTENT = {
  LABEL: "Why Martlet AI",
  TITLE: "Built for in-house, end-to-end, audit-grade work.",
} as const;

export function WhyMartletAI() {
  return (
    <section
      className="bg-white py-20 md:py-24"
      aria-labelledby="why-martlet-heading"
    >
      <div className="container-main">
        <Reveal as="header" className="text-center mb-12 md:mb-14">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#d97706]/10 text-[#b45309]">
              {CONTENT.LABEL}
            </span>
          </p>
          <h2
            id="why-martlet-heading"
            className="apple-display text-[32px] md:text-[48px]"
          >
            {CONTENT.TITLE}
          </h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-3 gap-5 list-none p-0 m-0"
        >
          {DIFFERENTIATORS.map((item) => (
            <li
              key={item.eyebrow}
              className={`flex flex-col rounded-[28px] p-7 md:p-9 h-full ${item.card}`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.12em] ${item.accent} mb-3`}
              >
                {item.eyebrow}
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-4">
                {item.title}
              </h3>
              <p className="text-base apple-body leading-relaxed m-0 mb-6">
                {item.body}
              </p>
              <SmartLink
                href={item.href}
                className={`link-arrow mt-auto text-base! ${item.accent}`}
              >
                {item.linkText}
                <Icon name="arrow-right" className="w-4 h-4" aria-hidden />
              </SmartLink>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
