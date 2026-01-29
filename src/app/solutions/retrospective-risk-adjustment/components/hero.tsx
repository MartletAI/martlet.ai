import { Hero as SharedHero } from "@/components/hero"

export function Hero() {
	return (
		<SharedHero 
			badgeText="Retrospective Engine"
			headerText1="Find Missed HCCs with Audit grade"
			headerText1Class="gradient-retrospective-text-primary"
			headerText2="Evidence at Scale"
			headerText2Class="gradient-retrospective-text-secondary"
			description="Find undercoded HCCs while validating existing ones to maximize revenue and minimize audit risk."
			buttonLabel="Book a Demo"
			className="gradient-retrospective-hero"
		/>
	)
}