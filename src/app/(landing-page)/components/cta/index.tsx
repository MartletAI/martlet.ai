
import Image from "next/image";
import Link from "next/link";
import { LANDING_PAGE } from "@/constants/landing-page";

export function CTA() {
  const { TITLE, SUBTITLE, DESCRIPTION, CTA, IMAGE } = LANDING_PAGE.CTA;

  return (
		<section className="py-10" aria-labelledby="cta-heading">
			<div className="relative py-13.5 flex flex-col items-center justify-center max-w-container mx-auto">

				{/* Background Container */}
				<div className="absolute bg-[#1a41b5] z-0 rounded-[16px]">
						<Image
							src={IMAGE}
							alt="CTA Background"
							width={1240}
							height={310}
							className="object-cover opacity-40 mix-blend-soft-light mx-auto rounded-[16px]"
							priority
						/>
				</div>

				{/* Content */}
				<div className="relative z-10 flex flex-col items-center justify-center">
					
					{/* Subtitle */}
					<p className="mb-2 text-center text-[16px] font-semibold leading-[24px] text-white">
						{SUBTITLE}
					</p>
					
					{/* Title */}
					<h2 className="mb-2 text-center text-[36px] font-semibold leading-[44px] tracking-[-0.72px] text-white">
						{TITLE}
					</h2>
					
					{/* Description */}
					<p className="mb-10 text-center text-[20px] font-normal leading-[30px] text-[#E9D7FE]">
						{DESCRIPTION}
					</p>
					
					{/* Buttons */}
					<Link 
						href="/demo" 
						className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#D5D7DA] bg-white px-6 py-3 text-base font-semibold text-[#1a41b5] shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-all hover:bg-blue-50"
					>
						{CTA}
					</Link>

				</div>
			</div>
		</section>
  );
}
