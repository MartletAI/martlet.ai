import { Icon } from "@/components";
import type { IconProps } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SmartLink } from "@/components/cta/smart-link";

interface TrustPillar {
  title: string;
  description: string;
  icon: IconProps["name"];
  /** Tinted icon chip */
  chip: string;
}

const TRUST_CONTENT = {
  TITLE: "Built for the review that happens three years later.",
  SUBTITLE:
    "RADV auditors read every output long after submission. Martlet AI is engineered so each one holds up.",
  PILLARS: [
    {
      title: "HIPAA-aligned, in-environment deployment",
      description:
        "On-premises, private cloud, or air-gapped. PHI never leaves your network, and your existing security controls stay in effect.",
      icon: "badge-check",
      chip: "bg-[#e7f4ec] text-[#067647]",
    },
    {
      title: "Governed AI, not a black box",
      description:
        "Every model versioned, every release tested before it touches production charts, every decision explainable — AI your compliance team can sign off on.",
      icon: "shield-check",
      chip: "bg-[#e9f1fe] text-[#0165dc]",
    },
    {
      title: "An answer for every auditor",
      description:
        "Every code, every change, every reviewer action — recorded. When CMS asks why a diagnosis was submitted, the answer is one click away.",
      icon: "file-checked",
      chip: "bg-[#f0eafe] text-[#7c3aed]",
    },
    {
      title: "Peer-reviewed accuracy",
      description:
        "30+ published papers behind the underlying medical language models. Benchmarks you can read, not adjectives.",
      icon: "chart-bar",
      chip: "bg-[#fdf3e0] text-[#b45309]",
    },
  ] satisfies TrustPillar[],
} as const;

export function TrustAndAccuracy() {
  return (
    <section
      aria-labelledby="trust-and-accuracy-heading"
      className="apple-section-gray py-20 md:py-24"
    >
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12">
          <h2
            id="trust-and-accuracy-heading"
            className="apple-display text-[30px] md:text-[40px] mb-5"
          >
            {TRUST_CONTENT.TITLE}
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            {TRUST_CONTENT.SUBTITLE}
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0 m-0 mb-10"
        >
          {TRUST_CONTENT.PILLARS.map((pillar) => (
            <li
              key={pillar.title}
              className="rounded-3xl bg-white border border-border p-7 h-full"
            >
              <div
                className={`inline-flex items-center justify-center size-11 rounded-xl mb-5 ${pillar.chip}`}
              >
                <Icon name={pillar.icon} className="w-5.5 h-5.5" aria-hidden />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] leading-snug mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-[15px] apple-body leading-relaxed m-0">
                {pillar.description}
              </p>
            </li>
          ))}
        </Reveal>

        <Reveal className="text-center">
          <SmartLink href="/trust" className="link-arrow text-base!">
            The full security and deployment story
            <Icon name="arrow-right" className="w-4 h-4" aria-hidden />
          </SmartLink>
        </Reveal>
      </div>
    </section>
  );
}
