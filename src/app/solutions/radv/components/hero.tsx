import Image from "next/image";
import { Hero as SharedHero } from "@/components/hero";
import HERO_BG from "@/../public/assets/radv-hero.png";

export function Hero() {
  return (
    <SharedHero
      badgeText="Prospective Engine"
      headerText1="Run RADV at Scale"
      headerText2="Ensure full Compliance"
      description="Automate mock audits, find documentation gaps, and package audit-grade submissions with evidence and provenance. Built for high-volume operations and tight timelines."
      buttonLabel="Book a Demo"
      backgroundImage={
        <div className="max-w-[1440px] m-auto relative z-10">
          <Image 
            src={HERO_BG} 
            alt="" 
            className="absolute inset-0 -top-40 w-full h-auto pointer-events-none z-0"
            aria-hidden="true"
            priority
          />
        </div>
      }
    />
  )
}