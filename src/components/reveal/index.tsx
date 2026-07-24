"use client";

import { useCallback, useRef, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Reveal children one-by-one instead of the wrapper as a whole */
  stagger?: boolean;
  as?: ElementType;
}

/**
 * Reveal - fades content up on first scroll into view.
 * Transition-based so the global prefers-reduced-motion rules disable it.
 *
 * Uses a ref callback (not a mount-only effect) so the observer re-attaches
 * whenever the underlying host node actually changes — e.g. when a soft
 * client-side navigation swaps this instance's rendered tag (div <-> ul),
 * which React can do without remounting the Reveal component itself.
 */
export function Reveal({
  children,
  className,
  stagger = false,
  as: Tag = "div",
}: RevealProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setNode = useCallback((node: HTMLElement | null) => {
    observerRef.current?.disconnect();
    observerRef.current = null;

    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px 120px 0px" }
    );

    observer.observe(node);
    observerRef.current = observer;
  }, []);

  return (
    <Tag
      ref={setNode}
      className={cn(stagger ? "reveal-stagger" : "reveal", className)}
    >
      {children}
    </Tag>
  );
}
