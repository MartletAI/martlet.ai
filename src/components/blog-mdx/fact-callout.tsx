import type { ReactNode } from "react";

interface FactCalloutProps {
  children: ReactNode;
  label?: string;
}

/**
 * FactCallout - highlighted context box. Pairs with SourceLink
 * (src/components/source-link) for the citation itself.
 */
export function FactCallout({ children, label = "Why it matters" }: FactCalloutProps) {
  return (
    <div className="not-prose my-10 md:my-12 rounded-2xl bg-[#0165dc]/5 border border-[#0165dc]/15 p-6 md:p-7">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0154b8] mb-3">
        {label}
      </p>
      <div className="text-base apple-body leading-relaxed [&>p]:mb-3 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
