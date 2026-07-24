import type { ComponentProps } from "react";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

import { SideBySide, StatRow, PullQuote, FactCallout, FaqAccordion } from "@/components/blog-mdx";
import { SourceLink } from "@/components/source-link";

type MDXComponents = NonNullable<MDXRemoteProps["components"]>;

/**
 * Components available inside every post's MDX body: markdown-element
 * styling (a, table, ...) plus the rich content blocks posts can embed
 * directly, e.g. <SideBySide>, <StatRow>, <PullQuote>, <FactCallout>,
 * <FaqAccordion>, <SourceLink>.
 */
export const mdxComponents: MDXComponents = {
  SideBySide,
  StatRow,
  PullQuote,
  FactCallout,
  FaqAccordion,
  SourceLink,
  a: (props: ComponentProps<"a">) => (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#0165dc] hover:text-[#0154b8] underline decoration-[#0165dc]/30 underline-offset-4 transition-colors hover:decoration-[#0165dc]"
    />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
      <table {...props} className="w-full border-collapse text-left text-base" />
    </div>
  ),
  thead: (props: ComponentProps<"thead">) => (
    <thead {...props} className="bg-[#f5f5f7]" />
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      {...props}
      className="border-b border-r border-border px-5 py-3 font-semibold text-[#0a0a12] last:border-r-0"
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td
      {...props}
      className="border-b border-r border-border px-5 py-3 align-top text-[#3c3c43] last:border-r-0"
    />
  ),
  tr: (props: ComponentProps<"tr">) => (
    <tr {...props} className="last:[&>td]:border-b-0" />
  ),
};
