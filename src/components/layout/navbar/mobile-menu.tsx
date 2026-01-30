import { NavLinks } from "./nav-links";
import { SmartLink } from "@/components";

interface MobileMenuProps {
  id: string;
  isOpen: boolean;
}

/**
 * MobileMenu - Dropdown navigation menu for mobile devices.
 */
export function MobileMenu({ id, isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <nav
      id={id}
      className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-navbar rounded-xl p-lg border-t border-border shadow-lg"
      aria-label="Mobile navigation"
    >
      <NavLinks
        className="flex flex-col gap-md"
        linkClassName="block py-sm text-base font-medium no-underline transition-all duration-150"
        activeLinkClassName="text-primary"
        inactiveLinkClassName="text-foreground hover:text-primary"
      />
      <div className="mt-md">
        <SmartLink href="/contact" className="btn btn-primary w-full justify-center">
          Contact us
        </SmartLink>
      </div>
    </nav>
  );
}
