import { NavLinks } from "./nav-links";
import { SmartLink } from "@/components";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  /** Shrinks paddings/text when the header is in its scrolled/thin state. */
  compact?: boolean;
}

/**
 * DesktopNav - Desktop navigation with links and CTA button.
 * Single responsibility: Render desktop-only navigation section.
 */
export function DesktopNav({ compact = false }: DesktopNavProps) {
  return (
    <>
      <nav className="hidden lg:flex items-center" aria-label="Main navigation">
        <NavLinks className="flex items-center gap-1" compact={compact} />
      </nav>

      <div className="hidden lg:block shrink-0">
        <SmartLink
          href="/contact"
          className={cn(
            "btn btn-gradient font-semibold! flex items-center justify-center p-0! transition-all duration-300",
            compact ? "w-[132px] h-9 text-sm!" : "w-[165px] h-11 text-base! -mt-0.25"
          )}
        >
          Contact us
        </SmartLink>
      </div>
    </>
  )
}
