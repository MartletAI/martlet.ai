import { Reveal } from "@/components/reveal";

const FAQ_ITEMS = [
  {
    question: "What is a RADV audit?",
    answer:
      "Risk Adjustment Data Validation (RADV) is CMS's audit program for verifying that the diagnoses Medicare Advantage plans submitted for payment are supported by medical records. CMS samples 35–200 enrollees per contract, requests records for each audited HCC, and certified coders re-validate every diagnosis against the medical record. Since 2025, CMS audits every eligible MA contract every payment year — roughly 550 contracts, up from about 60.",
  },
  {
    question: "Does this work on codes we didn't code?",
    answer:
      "Yes. RADV runs against what was submitted, so it does not matter who did the original coding or which platform they used. Martlet AI ingests your submitted codes and the underlying records and validates them independently. That is the common case for plans whose retrospective coding was outsourced, or who have changed vendors since the payment year under audit.",
  },
  {
    question: "My contract was selected — what happens now?",
    answer:
      "CMS notifies you through HPMS, then posts your Enrollee Data List in CDAT with the sampled enrollees and audited HCCs. You have a five-month window to retrieve and submit medical records — up to two records per audited HCC, with one valid record sufficient. For the PY2020 cycle, records are due August 28, 2026. After certified-coder review, CMS issues findings, and you have 60 days to request reconsideration.",
  },
  {
    question: "Is CMS extrapolating audit findings right now?",
    answer:
      "Not currently. The February 2023 rule that authorized extrapolation was vacated by a federal court in September 2025 (Humana v. Becerra), and CMS's appeal is pending at the Fifth Circuit. In the meantime, CMS collects overpayments for the sampled enrollees only, but it designs audits to support extrapolation and has reserved the right to extrapolate later if it prevails. Prudent plans prepare as if extrapolation returns.",
  },
  {
    question: "What records does CMS accept as evidence?",
    answer:
      "Documentation of a single face-to-face encounter (or qualifying real-time audio-video telehealth), from an acceptable provider type and physician specialty, with dates of service inside the data-collection year and a valid, credentialed signature. Superbills, standalone problem lists, claim forms, and lab results alone do not qualify. A missing or illegible signature on outpatient records can only be cured with the CMS-generated attestation form.",
  },
  {
    question: "Can we fix documentation after we're selected?",
    answer:
      "Mostly no. Plans may not amend medical records or ask providers to amend them once an audit begins, and signatures obtained in response to the record request are invalid. The only cure CMS accepts is its own attestation form, for missing or illegible signatures on outpatient records, and it cannot validate diagnoses. That is why proactive mock audits matter: documentation gaps found before selection can still be fixed.",
  },
  {
    question: "How fast can Martlet AI run a mock RADV audit?",
    answer:
      "Days, not quarters. Martlet AI ingests your charts and submitted codes, samples the contract using CMS's stratified methodology, validates every sampled HCC against the same checks CMS applies at 99% precision, and returns findings by HCC with evidence packets and an exposure estimate — on-premises or in your private cloud, without PHI leaving your network.",
  },
  {
    question: "How is it priced?",
    answer:
      "An annual license, based on how many contracts and lives you run. Not per chart, not per code validated, and not a percentage of anything recovered. The fee stays fixed for the year, so you can add contracts or payment years without renegotiating.",
  },
] as const;

/**
 * RadvFaq - RADV-specific questions with definition-first answers and
 * FAQPage schema for search and AI-engine retrieval.
 */
export function RadvFaq() {
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
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="radv-faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-main max-w-[880px]!">
        <Reveal as="header" className="text-center mb-12">
          <h2 id="radv-faq-heading" className="apple-display text-[32px] md:text-[48px]">
            What compliance teams ask us about RADV.
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
