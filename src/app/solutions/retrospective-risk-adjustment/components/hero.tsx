import { Hero as SharedHero } from "@/components/hero"
import Image from "next/image"

export function Hero() {
	return (
		<SharedHero 
			badgeText="Retrospective Engine"
			headerText1="Find Missed HCCs with Audit grade"
			headerText2="Evidence at Scale"
			description="Find undercoded HCCs while validating existing ones to maximize revenue and minimize audit risk."
			buttonLabel="Book a Demo"
			backgroundImage={
				<div className="max-w-[1440px] m-auto relative z-10">
					<Image 
						src="/assets/reprospective-hero-bg.png" 
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