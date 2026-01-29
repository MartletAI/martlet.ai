import { CTA as SharedCTA } from "@/components/cta"

export function CTA(){
  return (
    <SharedCTA
      title="Turn RADV into a repeatable, scalable process"
      subtitle="Get Started"
      description="Run proactive mock audits and execute reactive audits under deadline-without chaos."
      ctaText="Request a Demo"
      ctaLink="/contact"
      backgroundColor="gradient-why-martlet"
    />
  )
}