import { Reveal } from "@/components/reveal";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is regulatory-grade HCC coding?",
    answer:
      "Regulatory-grade HCC coding means every code is verified against the requirements CMS applies at audit: a valid, detected encounter; a credentialed provider; a present signature; and MEAT-supported documentation — with page-level evidence linked to each HCC. Martlet AI runs these checks automatically on every chart, so submissions are defensible under RADV three years later.",
  },
  {
    question: "How does Martlet AI close 95% of retrospective cases automatically?",
    answer:
      "Martlet AI's healthcare-specific medical language models validate each HCC against MEAT criteria and CMS requirements with a calibrated confidence score, operating at 99% precision on the codes it automates. High-confidence cases — 95% of the total — close end-to-end; the rest route to reviewer queues with linked evidence. The result is a 95% reduction in chart review time.",
  },
  {
    question: "Does PHI ever leave our network?",
    answer:
      "No. Martlet AI deploys on-premises, in your private cloud (AWS, Azure, or GCP), or fully air-gapped. There are no external AI API calls in the data path, and PHI never leaves your network — your existing security controls, SIEM, and IAM stay in effect.",
  },
  {
    question: "What does Martlet AI hand off to our submission pipeline?",
    answer:
      "Adds and deletes, exported in the format your submission pipeline already expects, each carrying the date of service, the provider and the linked evidence behind the code. Unsupported codes identified during validation flow out as deletes, closing the loop on RADV exposure.",
  },
  {
    question: "Does Martlet AI support the v28 transition?",
    answer:
      "Yes. Martlet AI maps every diagnosis under both CMS-HCC v24 and v28 with payment-year discipline: codes are validated against the model that applies to the payment year in question, and outdated codes are blocked at submission.",
  },
  {
    question: "How do we prepare for a RADV audit?",
    answer:
      "Run mock RADV audits year-round: Martlet AI samples your contracts RADV-style, validates each sampled HCC against MEAT and CMS requirements, models your exposure, and assembles CMS-ready evidence packets — chart sentence, encounter, provider, credentials, and signature — in one click. When CMS selects your contract, the packet is already built.",
  },
] as const;

const CONTENT = {
  TITLE: "Questions buyers ask first.",
} as const;

/**
 * FAQ - buyer questions with definition-first answers.
 * FAQPage JSON-LD included for search and AI-engine retrieval.
 */
export function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      className="apple-section-gray py-20 md:py-24"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-main max-w-[880px]!">
        <Reveal as="header" className="text-center mb-12">
          <h2
            id="faq-heading"
            className="apple-display text-[30px] md:text-[40px]"
          >
            {CONTENT.TITLE}
          </h2>
        </Reveal>

        <Reveal className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group bg-white rounded-2xl px-6 md:px-8 py-1 open:pb-5"
            >
              <summary className="cursor-pointer list-none py-5 flex items-center justify-between gap-4 text-[17px] md:text-lg font-bold tracking-tight text-[#0a0a12] [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden
                  className="text-[#0165dc] text-2xl font-light leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="text-base apple-body leading-relaxed m-0 pr-8">
                {item.answer}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
