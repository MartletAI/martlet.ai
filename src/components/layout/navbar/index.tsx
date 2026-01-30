import { NavLogo } from "./nav-logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

/**
 * Navbar - Main navigation component with scroll-aware styling.
 * Starts transparent, transitions to glassmorphism on scroll.
 */
export function Navbar() {
  return (
    <header className="container-main bg-navbar absolute top-4 md:top-6 left-0 right-0 z-50 h-16 md:h-[86px] px-4 md:px-xl flex items-center justify-between rounded-2xl">
      <NavLogo />
      <DesktopNav />
      <MobileNav />      
    </header>
  );
}
