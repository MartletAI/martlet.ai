import { Reveal } from "@/components/reveal";

const FAQ_ITEMS = [
  {
    question: "What is retrospective risk adjustment?",
    answer:
      "Retrospective risk adjustment is the review of medical records after care is delivered to ensure the diagnoses submitted for payment are complete and supported. It finds HCCs that were documented but never coded, and validates the codes already submitted against CMS documentation requirements — capturing missed revenue and removing unsupported codes before an audit finds them.",
  },
  {
    question: "How does Martlet AI close 95% of cases automatically?",
    answer:
      "Martlet AI's healthcare-specific medical language models validate each HCC against MEAT criteria and CMS requirements with a calibrated confidence score, operating at 99% precision on the codes it automates. High-confidence cases — 95% of the total — close end-to-end. The rest route to reviewer queues with page-level evidence attached, which is why review time drops by 95%.",
  },
  {
    question: "Does Martlet AI replace our coding team?",
    answer:
      "No — it changes what the team does. Instead of reading 40–50 charts a day each, your coders review the roughly 5% of cases the engine routes for judgment, run QA sampling, and own the standards the engine enforces. The same team covers many times the volume, and institutional knowledge stays in-house instead of at a vendor.",
  },
  {
    question: "When are risk adjustment submission deadlines?",
    answer:
      "CMS runs three submission sweeps per payment year: an initial sweep around the first Friday of September before the payment year, a mid-year sweep around the first Friday of March, and a final sweep around January 31 of the following year. All submissions flow as 837 encounter data (RAPS retired with PY2022). After the final deadline, CMS accepts only payment-reducing deletes under 42 CFR 422.310(g).",
  },
  {
    question: "How does the v28 model change our RAF?",
    answer:
      "PY2026 is the first year paid 100% on CMS-HCC v28. The model has 115 HCC categories but maps fewer ICD-10 codes (7,770, down from 9,797), constrains diabetes coefficients, and drops codes like unspecified PVD entirely. CMS estimates a −3.12% average risk-score impact, with plan-level results ranging from roughly −20% to +10% depending on condition mix. Martlet AI maps every diagnosis under both v24 and v28 with payment-year discipline.",
  },
  {
    question: "What data does Martlet AI ingest?",
    answer:
      "Clinical notes and PDFs (including scanned documents via OCR), FHIR R4 and HL7 feeds, CCDs, and claims extracts. Charts are normalized and de-duplicated at ingestion, and the platform is built for millions of records per run — deployed on-premises, in your private cloud, or air-gapped, so PHI never leaves your network.",
  },
] as const;

/**
 * RetroFaq - retrospective-specific questions with definition-first answers
 * and FAQPage schema.
 */
export function RetroFaq() {
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
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="retro-faq-heading">
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
          <h2 id="retro-faq-heading" className="apple-display text-[32px] md:text-[48px]">
            What operators ask about retrospective coding.
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
