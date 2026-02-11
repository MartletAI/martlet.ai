import { Hero as SharedHero } from "@/components/hero";

export function Hero () {
  return (
    <SharedHero
      className="gradient-prospective-hero"
      badgeText="Prospective Engine"
      headerText1="Prospective Risk Adjustment"
      headerText1Class="gradient-prospective-text-primary"
      headerText2="without Slowing Clinicians"
      headerText2Class="gradient-prospective-text-secondary"
      description="Our prospective risk adjustment solution provides pre-visit and in-visit recommendations that are evidence linked and MEAT-aware, so providers can act quickly, coding stays defensible, and plans improve accuracy."
      buttonLabel="Book a Demo"
    />
  )
}