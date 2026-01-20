"use client";

import "./navbar.css";

import { NavLogo } from "./nav-logo";
import { DesktopNav } from "./desktop-nav";
import { MobileMenu } from "./mobile-menu";
import { MobileMenuToggle } from "./mobile-menu-toggle";
import { useMobileMenu } from "./use-mobile-menu";
import { useScrolled } from "./use-scrolled";
import type { NavLink } from "./nav-links";

/**
 * Navigation links configuration.
 * Extracted as a constant to avoid re-creating on each render.
 */
const NAV_LINKS: NavLink[] = [
  { label: "Prospective", href: "/solutions/prospective" },
  { label: "Retrospective", href: "/solutions/retrospective" },
  { label: "RADV", href: "/solutions/radv" },
  { label: "Resources", href: "/resources" },
] as const;

const MOBILE_MENU_ID = "mobile-menu";

/**
 * Navbar - Main navigation component with scroll-aware styling.
 * Starts transparent, transitions to glassmorphism on scroll.
 */
export function Navbar() {
  const { isOpen, toggle } = useMobileMenu();
  const isScrolled = useScrolled();

  return (
    <header
      className={`container-main fixed top-4 left-0 right-0 z-50 h-20 px-lg flex items-center justify-between rounded-2xl transition-all duration-300 ${
        isScrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <NavLogo />
      
      <DesktopNav links={NAV_LINKS} />
      
      <MobileMenuToggle
        isOpen={isOpen}
        onToggle={toggle}
        menuId={MOBILE_MENU_ID}
      />
      
      <MobileMenu
        id={MOBILE_MENU_ID}
        isOpen={isOpen}
        links={NAV_LINKS}
      />
    </header>
  );
}

// Re-export for barrel file usage
export type { NavLink } from "./nav-links";
