import type { ReactNode } from "react";

/** Small inline citation link — primary sources are the trust signal. */
export function SourceLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#0165dc] underline decoration-[#0165dc]/30 decoration-1 underline-offset-2 hover:decoration-[#0165dc]"
    >
      {children}
    </a>
  );
}
