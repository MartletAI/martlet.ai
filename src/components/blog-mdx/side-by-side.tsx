import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SideBySideProps {
  image: string;
  imageAlt: string;
  /** Which side the image sits on at desktop width. Defaults to right. */
  imagePosition?: "left" | "right";
  children: ReactNode;
}

/**
 * SideBySide - image + text block for blog posts. Stacks on mobile,
 * sits side by side at md+. The one thing plain Markdown can't express.
 */
export function SideBySide({
  image,
  imageAlt,
  imagePosition = "right",
  children,
}: SideBySideProps) {
  return (
    <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center my-10 md:my-12">
      <div
        className={cn(
          "relative w-full aspect-4/3 rounded-2xl border border-border overflow-hidden",
          imagePosition === "right" ? "md:order-2" : "md:order-1"
        )}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div
        className={cn(
          "text-base md:text-lg apple-body leading-relaxed [&>p]:mb-4 [&>p:last-child]:mb-0",
          imagePosition === "right" ? "md:order-1" : "md:order-2"
        )}
      >
        {children}
      </div>
    </div>
  );
}
