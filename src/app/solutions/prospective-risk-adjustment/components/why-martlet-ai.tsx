import { WhyMartletAI as WhyMartletAIBase } from "@/components/why-martlet-ai"
import { FeatureCardProps } from "@/components/why-martlet-ai/types"


const features: FeatureCardProps[] = [
	{
		title: "Workflow-first suggestions",
		description: "Built for clinic reality: concise, actionable, and fast to validate.",
		icon: "checked"
	},
	{
		title: "Evidence-linked + MEAT-aware",
		description: "Clear “why” and documentation signals to reduce noise and risk.",
		icon: "document"
	},
	{
		title: "Deployed inside your environment",
		description: "Cloud/VPC/on-prem options so PHI stays under your control.",
		icon: "shield-check"
	},
]

export function WhyMartletAI() {
	return (
		<WhyMartletAIBase features={features} />
	)
}