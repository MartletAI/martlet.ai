import Image from "next/image";
import { Hero as SharedHero } from "@/components/hero";

export function Hero () {
  return (
    <SharedHero
      badgeText="Prospective Engine"
      headerText1="Capture HCCs at Point of Care"
      headerText2="without Slowing Clinicians"
      description="Pre-visit and in-visit recommendations that are evidence linked and MEAT-aware, so providers can act quickly, coding stays defensible, and plans improve accuracy."
      buttonLabel="Book a Demo"
      backgroundImage={
        <div className="max-w-[1440px] m-auto relative z-10">
          <Image 
            src="/assets/prospective-bird.png" 
            alt="" 
            width={1000} 
            height={1000}
            className="absolute right-0 top-0 w-full h-auto pointer-events-none z-0"
            aria-hidden="true"
            priority
          />
        </div>
      }
    />
  )
}