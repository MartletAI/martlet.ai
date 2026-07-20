"use client";

import { useEffect, useState } from "react";

const DEFAULT_THRESHOLD = 24;

/**
 * useScrolled - tracks whether the page has scrolled past a small threshold,
 * for scroll-aware chrome (a nav that pins, thins, and goes translucent).
 */
export function useScrolled(threshold: number = DEFAULT_THRESHOLD): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrolled(window.scrollY > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
