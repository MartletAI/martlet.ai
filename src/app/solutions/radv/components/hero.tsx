import { Hero as SharedHero } from "@/components/hero";

export function Hero() {
  return (
    <SharedHero
      badgeText="Prospective Engine"
      headerTextClass="text-[64px]"
      headerText1="Run RADV at Scale"
      headerText1Class="gradient-radv-text-primary"
      headerText2="Ensure full Compliance"
      headerText2Class="gradient-radv-text-secondary"
      description="Automate mock audits, find documentation gaps, and package audit-grade submissions with evidence and provenance. Built for high-volume operations and tight timelines."
      buttonLabel="Book a Demo"
      className="gradient-radv-hero"
    />
  )
}