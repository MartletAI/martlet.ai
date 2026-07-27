import { Reveal } from "@/components/reveal";

const FAQ_ITEMS = [
  {
    question: "What is a RADV audit?",
    answer:
      "Risk Adjustment Data Validation (RADV) is CMS's audit program for verifying that the diagnoses Medicare Advantage plans submitted for payment are supported by medical records. CMS samples 35 to 200 enrollees per contract, requests records for each audited HCC, and certified coders re-validate every diagnosis against the record. Since 2025, CMS audits every eligible MA contract every payment year, which is roughly 550 contracts rather than the 60 or so it audited before.",
  },
  {
    question: "Is CMS extrapolating audit findings right now?",
    answer:
      "Not currently. The February 2023 rule that authorized extrapolation was vacated by a federal court in September 2025 (Humana v. Becerra), and CMS's appeal is pending at the Fifth Circuit. In the meantime CMS collects overpayments for the sampled enrollees only, but it designs audits to support extrapolation and has reserved the right to extrapolate later if it prevails, so it is worth preparing as though extrapolation returns.",
  },
  {
    question: "My contract was selected. What happens now?",
    answer:
      "CMS notifies you through HPMS, then posts your Enrollee Data List in CDAT with the sampled enrollees and audited HCCs. You have a five-month window to retrieve and submit medical records, with up to two records per audited HCC and one valid record enough to support it. For the PY2020 cycle now underway, records are due August 28, 2026. After certified-coder review CMS issues findings, and you have 60 days to request reconsideration.",
  },
  {
    question: "What records does CMS accept as evidence?",
    answer:
      "Documentation of a single face-to-face encounter, or qualifying real-time audio-video telehealth, from an acceptable provider type and physician specialty, with dates of service inside the data-collection year and a valid, credentialed signature. Superbills, standalone problem lists, claim forms and lab results on their own do not qualify. A missing or illegible signature on an outpatient record can be cured only with the CMS-generated attestation form.",
  },
  {
    question: "Can documentation be fixed after selection?",
    answer:
      "In most cases no. Plans may not amend medical records or ask providers to amend them once an audit begins, and signatures obtained in response to the record request are invalid. The only cure CMS accepts is its own attestation form, for missing or illegible signatures on outpatient records, and that form cannot validate a diagnosis. Gaps found before selection can still be fixed at the source.",
  },
] as const;

/**
 * HubFaq - the regulatory questions, with FAQPage schema. These live on the
 * hub rather than the product page: the hub is the reference asset, and these
 * are the definitional answers search and AI engines retrieve.
 */
export function HubFaq() {
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
    <section className="bg-white py-16 md:py-20" aria-labelledby="hub-faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-main max-w-[980px]!">
        <Reveal as="header" className="mb-8">
          <h2 id="hub-faq-heading" className="apple-display text-[28px] md:text-[40px] mb-3">
            Common questions
          </h2>
          <p className="text-base md:text-lg apple-body leading-relaxed m-0">
            The questions compliance and risk-adjustment teams ask most often
            about how the program works.
          </p>
        </Reveal>

        <Reveal className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group bg-[#fbfbfd] border border-border rounded-2xl px-6 md:px-8 py-1 open:pb-5"
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
              <p className="text-base apple-body leading-relaxed m-0 pr-8">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
