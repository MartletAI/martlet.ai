
import { LANDING_PAGE } from "@/constants/landing-page";
import { WhyMartletAI as WhyMartletAIBase } from "@/components/why-martlet-ai";
import { FeatureCardProps } from "@/components/why-martlet-ai/types";

const { FEATURES } = LANDING_PAGE.WHY_MARTLET_AI;

export function WhyMartletAI() {
  return (
    <WhyMartletAIBase features={FEATURES as unknown as FeatureCardProps[]} sectionGAP={46} />
  );
}
