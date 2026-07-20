"use client";

import { cn } from "@/lib/utils";

import { NavLogo } from "./nav-logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { useScrolled } from "./use-scrolled";

/**
 * Navbar - a floating pill at rest; pins flush to the viewport top, thins
 * out, and turns into a translucent blurred bar once the page scrolls.
 */
export function Navbar() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ease-out",
        scrolled
          ? "top-0 h-14 md:h-16 px-4 md:px-8 bg-white/75 backdrop-blur-xl border-b border-black/5 shadow-[0_1px_16px_rgba(10,10,18,0.05)] rounded-none"
          : "container-main mx-auto top-4 md:top-6 h-16 md:h-[86px] px-4 md:px-xl bg-navbar rounded-2xl shadow-none"
      )}
    >
      <NavLogo compact={scrolled} />
      <DesktopNav compact={scrolled} />
      <MobileNav />
    </header>
  );
}
