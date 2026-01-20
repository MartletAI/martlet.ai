import { Button } from "@/components/button";
import { NavLinks, type NavLink } from "./nav-links";

interface MobileMenuProps {
  id: string;
  isOpen: boolean;
  links: NavLink[];
}

/**
 * MobileMenu - Dropdown navigation menu for mobile devices.
 */
export function MobileMenu({ id, isOpen, links }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <nav
      id={id}
      className="md:hidden absolute top-full left-0 right-0 mt-sm bg-navbar rounded-xl p-lg border-t border-border"
      aria-label="Mobile navigation"
    >
      <NavLinks
        links={links}
        className="flex flex-col gap-md"
        linkClassName="block py-sm text-base font-medium no-underline transition-all duration-150"
        activeLinkClassName="text-primary"
        inactiveLinkClassName="text-foreground hover:text-primary"
      />
      <div className="mt-md">
        <Button as="a" href="/contact" variant="primary" className="w-full justify-center">
          Contact us
        </Button>
      </div>
    </nav>
  );
}
