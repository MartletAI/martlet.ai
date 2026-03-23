import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
  /**
   * Fade the scrolling content at the start/end edges (mask gradient).
   * Horizontal: left & right. Vertical: top & bottom.
   * @default true
   */
  fadeEdges?: boolean;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  fadeEdges = true,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        fadeEdges && (vertical ? "marquee-edge-fade-y" : "marquee-edge-fade-x"),
        /* Parent :hover so pause wins over `animation` shorthand on .marquee-track */
        pauseOnHover &&
          "hover:[&_.marquee-track]:[animation-play-state:paused]!",
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "marquee-track flex shrink-0 justify-around gap-(--gap)",
              vertical
                ? "animate-marquee-vertical flex-col"
                : "animate-marquee flex-row",
              reverse && "[animation-direction:reverse]",
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
