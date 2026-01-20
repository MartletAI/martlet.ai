import Image from "next/image";
import { Products } from "./products";
import { ShowCase } from "./show-case";


export function Hero() {
    return (
      <div className="gradient-hero">
        {/* Decorative background - purely visual, hidden from screen readers */}
        <div className="max-w-[1440px] m-auto relative	z-10">
					<Image
						src="/parrot.svg"
						alt=""
						width={741}
						height={640}
						className="absolute top-[5%] md:top-[8%] lg:top-[10%] right-0 md:-right-[5%] lg:right-0 w-full max-w-[741px] h-auto pointer-events-none z-0"
						aria-hidden="true"
						priority
					/>
					
					{/* Primary hero content - headline, tagline, and CTA */}
					<ShowCase />

					{/* Products overview section - Three Workflows */}
					<Products />
				</div>
      </div>
    )
}