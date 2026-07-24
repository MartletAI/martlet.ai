import { buildFaqJsonLd, safeJsonLdStringify, type FaqItem } from "@/lib/json-ld";

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
}

/** FaqAccordion - reusable FAQ block + FAQPage schema for blog posts. */
export function FaqAccordion({ items, title = "Frequently asked questions" }: FaqAccordionProps) {
  const faqJsonLd = buildFaqJsonLd(items);

  return (
    <div className="not-prose my-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(faqJsonLd) }}
      />
      <h2 className="apple-display text-[24px] md:text-[32px] mb-6">{title}</h2>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group bg-[#f5f5f7] rounded-2xl px-6 md:px-8 py-1 open:pb-5"
          >
            <summary className="cursor-pointer list-none py-5 flex items-center justify-between gap-4 text-[16px] md:text-lg font-bold tracking-tight text-[#0a0a12] [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden
                className="text-[#0165dc] text-2xl font-light leading-none transition-transform duration-200 group-open:rotate-45 shrink-0"
              >
                +
              </span>
            </summary>
            <p className="text-base apple-body leading-relaxed m-0 pr-8">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
