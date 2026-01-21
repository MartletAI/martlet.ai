"use client";
import { NAV_LINKS } from "@/constants/nav-links";
import { MobileMenu } from "./mobile-menu";
import { MobileMenuToggle } from "./mobile-menu-toggle";
import { useMobileMenu } from "./use-mobile-menu";

const MOBILE_MENU_ID = "mobile-menu";

export function MobileNav() {
  const { isOpen, toggle } = useMobileMenu();

  return (
    <>
      <MobileMenuToggle
        isOpen={isOpen}
        onToggle={toggle}
        menuId={MOBILE_MENU_ID}
      />
      <MobileMenu
        id={MOBILE_MENU_ID}
        isOpen={isOpen}
      />
    </>
  );
}