
import { WhyMartletAI as WhyMartletAIBase } from "@/components/why-martlet-ai";
import { FeatureCardProps } from "@/components/why-martlet-ai/types";

const features: FeatureCardProps[] = [
  {
    title: "Industry-leading performance",
    description: "Validated by peer reviewed publications",
    icon: "checked",
  },
  {
    title: "Proven ROI",
    description: "Measurable lift in throughput and captured value.",
    icon: "coins-stacked",
  },
  {
    title: "Scalable by design",
    description: "High-volume workloads across millions of records.",
    icon: "layers-three",
  },
];

const WHY_MARTLET_AI_CONTENT = {
  TITLE: "Why Martlet AI ?",
  SUBTITLE:
    "Proven technology that delivers measurable results at enterprise scale",
  FEATURES: features,
} as const;

export function WhyMartletAI() {
  return (
    <WhyMartletAIBase
      features={WHY_MARTLET_AI_CONTENT.FEATURES}
      title={WHY_MARTLET_AI_CONTENT.TITLE}
      subtitle={WHY_MARTLET_AI_CONTENT.SUBTITLE}
    />
  );
}
