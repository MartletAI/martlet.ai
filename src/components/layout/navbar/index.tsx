"use client";

import { cn } from "@/lib/utils";

import { NavLogo } from "./nav-logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { useScrolled } from "./use-scrolled";

/** Shared motion signature so the header and its children glide in sync. */
export const NAV_TRANSITION = "transition-all duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

/**
 * Navbar - a floating rounded pill, always the same width. On scroll it
 * glides toward the top, thins, and turns translucent/blurred — nothing
 * about its footprint changes, so the motion reads as a smooth glide rather
 * than a snap.
 */
export function Navbar() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "fixed container-main mx-auto left-0 right-0 z-50 flex items-center justify-between rounded-2xl border px-4 md:px-xl",
        NAV_TRANSITION,
        scrolled
          ? "top-2 h-14 md:h-16 bg-white/75 backdrop-blur-xl border-black/5 shadow-[0_8px_24px_rgba(10,10,18,0.06)]"
          : "top-4 md:top-6 h-16 md:h-[86px] bg-navbar border-transparent shadow-none"
      )}
    >
      <NavLogo compact={scrolled} />
      <DesktopNav compact={scrolled} />
      <MobileNav />
    </header>
  );
}
