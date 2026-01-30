import { NavLinks } from "./nav-links";
import { SmartLink } from "@/components";

/**
 * DesktopNav - Desktop navigation with links and CTA button.
 * Single responsibility: Render desktop-only navigation section.
 */
export function DesktopNav() {
  return (
    <>
      <nav className="hidden lg:flex items-center" aria-label="Main navigation">
        <NavLinks
          className="flex items-center gap-6.5"
        />
      </nav>

      <div className="hidden lg:block">
        <SmartLink href="/contact" className="btn btn-outline w-[165px] h-11 text-base! font-semibold! flex items-center justify-center p-0! -mt-0.25">
          Contact us
        </SmartLink>
      </div>
    </>
  )
}
