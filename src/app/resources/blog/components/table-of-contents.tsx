import type { Heading } from "@/lib/blog";

interface TableOfContentsProps {
  headings: Heading[];
}

/** Same cycle, same order, as the .post-prose h2 nth-of-type colors in globals.css. */
const ACCENT_COLORS = ["#0154b8", "#6d28d9", "#0f766e", "#b45309"] as const;

/**
 * TableOfContents - jump links generated from the post's real H2s, each
 * dot colored to match that section's heading badge, so the index and
 * the section it points to visually pair up as you scroll.
 */
export function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a12] mb-4">
        On this page
      </p>
      <ul className="flex flex-col gap-0.5 list-none p-0 m-0">
        {headings.map((heading, index) => (
          <li key={heading.slug}>
            <a
              href={`#${heading.slug}`}
              className="flex items-start gap-2.5 rounded-lg px-2.5 py-2 -mx-2.5 text-sm text-[#3c3c43] leading-snug hover:bg-white hover:text-[#0a0a12] transition-colors"
            >
              <span
                className="mt-[5px] size-1.5 rounded-full shrink-0"
                style={{ backgroundColor: ACCENT_COLORS[index % ACCENT_COLORS.length] }}
                aria-hidden="true"
              />
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
