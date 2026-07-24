"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

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
 */
export function Reveal({
  children,
  className,
  stagger = false,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
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
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(stagger ? "reveal-stagger" : "reveal", className)}
    >
      {children}
    </Tag>
  );
}
