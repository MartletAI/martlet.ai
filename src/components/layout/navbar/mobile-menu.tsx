import { useEffect, useRef } from "react";
import { NavLinks } from "./nav-links";
import { SmartLink } from "@/components";

interface MobileMenuProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MobileMenu - Dropdown navigation menu for mobile devices.
 */
export function MobileMenu({ id, isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        // Check if the click is on the toggle button (to prevent double toggling)
        const toggleButton = document.querySelector(`[aria-controls="${id}"]`);
        if (toggleButton && toggleButton.contains(event.target as Node)) {
          return;
        }
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, id]);

  if (!isOpen) return null;

  return (
    <nav
      id={id}
      ref={menuRef}
      className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-navbar rounded-xl p-lg border-t border-border shadow-lg"
      aria-label="Mobile navigation"
    >
      <NavLinks
        className="flex flex-col gap-md"
        linkClassName="block py-sm text-base font-medium no-underline leading-normal transition-all duration-150"
        activeLinkClassName="text-primary"
        inactiveLinkClassName="text-foreground hover:text-primary"
        onLinkClick={onClose}
      />
      <div className="mt-md">
        <SmartLink
          href="/contact"
          className="btn btn-primary w-full justify-center"
          onClick={onClose}
        >
          Contact us
        </SmartLink>
      </div>
    </nav>
  );
}
