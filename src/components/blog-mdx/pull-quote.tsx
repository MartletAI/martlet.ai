import type { ReactNode } from "react";

interface PullQuoteProps {
  children: ReactNode;
  /** Source of the quote or fact, e.g. "CMS, 2026 Final Rule". */
  attribution?: string;
}

/** PullQuote - a fact or quote pulled out of the body copy at display size. */
export function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <blockquote className="not-prose my-10 md:my-12 border-l-4 border-[#0165dc] pl-6 md:pl-8">
      <p className="apple-display text-[22px] md:text-[28px] leading-snug text-[#0a0a12] m-0">
        {children}
      </p>
      {attribution && (
        <cite className="block mt-3 text-sm apple-caption not-italic">
          {attribution}
        </cite>
      )}
    </blockquote>
  );
}
