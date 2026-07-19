import { Reveal } from "@/components/reveal";

const FAQ_ITEMS = [
  {
    question: "What is prospective risk adjustment?",
    answer:
      "Prospective risk adjustment identifies suspected conditions before or during the patient visit — from labs, medications, prior coding, claims, and clinical notes — so clinicians can evaluate and document them at the point of care. It replaces the retrospective chase with capture at the moment the clinician can still act, and it matters because every RAF score resets on January 1.",
  },
  {
    question: "What data feeds Martlet AI's suspects?",
    answer:
      "Five signal classes, each with its own confidence tier: prior-year dropped HCCs, lab results meeting diagnostic thresholds, active medications implying undocumented conditions, conditions documented in narrative notes but never coded, and claims/ADT history. Every suspect carries full provenance — the exact note, lab, or claim it came from — and thresholds are configurable to your standards.",
  },
  {
    question: "How does it fit into clinician workflow?",
    answer:
      "Suggestions are delivered inside the EHR using native patterns — Epic Best Practice Advisories and FHIR CDS Hooks — plus a pre-visit prep summary that takes minutes to read. Suggestions are concise, capped per encounter to prevent alert fatigue, and dismissible in one action. Confirmed conditions flow to validation and submission automatically.",
  },
  {
    question: "Does it prompt clinicians toward unsupported codes?",
    answer:
      "No. Martlet AI is MEAT-aware by design: it never suggests a condition the documentation cannot support, and suggestions are framed as documentation cues with evidence attached — not bare codes to click. Clinicians make every clinical decision; the engine's job is to make the evidence easy to see.",
  },
  {
    question: "How is prospective different for ACOs than for MA plans?",
    answer:
      "MA plans buy prospective coding for accurate, timely capture, since payment follows documented risk. ACOs in MSSP and ACO REACH operate under risk-score growth caps, so they buy defensible completeness: an accurate severity picture for benchmarking, two-way suspecting, and evidence trails that stand up to compliance review. Martlet AI supports both configurations from the same engine.",
  },
  {
    question: "Is Martlet AI's prospective engine in production?",
    answer:
      "Yes. WVU Medicine, a 25-hospital academic health system, runs Martlet AI's prospective engine for longitudinal chart analysis and point-of-care suggestions inside Epic workflows — presented publicly at the NLP Summit. Across the platform, Martlet AI serves 100,000+ lives at 10 health systems and payers.",
  },
] as const;

/**
 * ProFaq - prospective-specific questions with definition-first answers and
 * FAQPage schema.
 */
export function ProFaq() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="pro-faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-main max-w-[880px]!">
        <Reveal as="header" className="text-center mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#0165dc]/10 text-[#0154b8]">
              FAQ
            </span>
          </p>
          <h2 id="pro-faq-heading" className="apple-display text-[32px] md:text-[48px]">
            What clinical and quality leaders ask.
          </h2>
        </Reveal>

        <Reveal className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-white rounded-2xl px-6 md:px-8 py-1 open:pb-5">
              <summary className="cursor-pointer list-none py-5 flex items-center justify-between gap-4 text-[17px] md:text-lg font-bold tracking-tight text-[#0a0a12] [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden
                  className="text-[#0165dc] text-2xl font-light leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="text-base apple-body leading-relaxed m-0 pr-8">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
