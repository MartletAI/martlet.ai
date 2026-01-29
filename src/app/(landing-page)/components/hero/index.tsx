import { Products } from "./products";
import { ShowCase } from "./show-case";

export function Hero() {
  return (
    <div className="gradient-landing-page-hero">
      {/* Decorative background - purely visual, hidden from screen readers */}
      <div className="max-w-[1440px] m-auto relative z-10">
        
        {/* Primary hero content - headline, tagline, and CTA */}
        <ShowCase />

        {/* Products overview section - Three Workflows */}
        <Products />
      </div>
    </div>
  )
}