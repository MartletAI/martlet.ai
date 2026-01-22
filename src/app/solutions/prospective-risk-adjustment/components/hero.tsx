import { Button } from "@/components";
import { Icon } from "@/components/icon";
import Image from "next/image";

export function Hero () {
  return (
    <section className="prospective-hero-section pt-[156px] pb-10 relative overflow-hidden">
      {/* Background Image */}
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

			<div className="container-main mx-auto flex flex-col justify-center relative z-10">
				<div className="mx-auto flex w-[188px] h-[37px] px-4 py-1.5 justify-center items-center gap-1.5 rounded-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] mb-11.5">
					<Icon name="ellipse" className="fill-[#33C020] size-2" />
					<p className="text-black font-medium text-[14px]">Prospective Engine</p>
				</div>
				<h1 className="text-center font-bold text-[56px] leading-[1.1] tracking-[-0.02em] mx-auto max-w-[900px]">
					<span className="prospective-hero-gradient-text block mb-6">Capture HCCs at Point of Care</span>
					<span className="text-[#0B2559] block">without Slowing Clinicians</span>
				</h1>
				<p className="my-8 text-center text-2xl italic font-medium leading-8 text-foreground mx-auto">Pre-visit and in-visit recommendations that are evidence linked and MEAT-aware, so providers can act quickly, coding stays defensible, and plans improve accuracy.</p>
				<Button className="w-[182px] mx-auto bg-footer-bg! text-white">Book a Demo <Icon name="play" className="ml-2 size-3 fill-[#CCE6FF]" /></Button>
			</div>
    </section>
  )
}