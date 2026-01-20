import { Button } from "@/components/button";
import { NavLinks, type NavLink } from "./nav-links";

interface DesktopNavProps {
  links: NavLink[];
}

/**
 * DesktopNav - Desktop navigation with links and CTA button.
 * Single responsibility: Render desktop-only navigation section.
 */
export function DesktopNav({ links }: DesktopNavProps) {
  return (
    <>
      <nav className="hidden md:flex items-center" aria-label="Main navigation">
        <NavLinks
          links={links}
          className="flex items-center gap-xl"
        />
      </nav>

      <div className="hidden md:block">
        <Button as="a" href="/contact" variant="outline">
          Contact us
        </Button>
      </div>
    </>
  );
}
