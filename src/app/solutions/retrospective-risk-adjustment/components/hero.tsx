import { Hero as SharedHero } from "@/components/hero"

export function Hero() {
	return (
		<SharedHero 
			badgeText="Retrospective Engine"
			headerText1="Retrospective Risk Adjustment"
			headerText1Class="gradient-retrospective-text-primary"
			headerText2="with Audit-Grade Evidence at Scale"
			headerText2Class="gradient-retrospective-text-secondary"
			description="Our retrospective risk adjustment engine finds undercoded HCCs while validating existing ones to maximize revenue and minimize audit risk."
			buttonLabel="Book a Demo"
			className="gradient-retrospective-hero"
		/>
	)
}