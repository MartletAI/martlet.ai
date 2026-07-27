import { Reveal } from "@/components/reveal";

/** Operational questions in the buyer's own voice. This audience runs risk
 *  adjustment for a living — definitional questions belong in the blog, not
 *  on the page where they are deciding. */
const FAQ_ITEMS = [
  {
    question: "How do you decide which charts to work?",
    answer:
      "Charts are ranked by expected RAF impact and by how strong the documentation behind them looks, so the work starts where the return is. The weighting is yours to set — by line of business, provider group, condition, or a rule your own program already uses — and you can also run the full population rather than a list, which is what most customers do once the throughput is there.",
  },
  {
    question: "How do we know the codes it closes automatically are right?",
    answer:
      "Every automated code carries the sentence that supports it, the source page, the encounter and date of service, and the provider and signature status — so any decision can be opened and checked rather than taken on trust. You set the confidence threshold at which a code closes without review, and you can route any share of automatic closures into QA sampling. Confirmation and deletion rates are tracked by coder and reviewer, so drift shows up in your reporting rather than in an audit.",
  },
  {
    question: "What happens to the cases it doesn't close?",
    answer:
      "They arrive in your reviewers' queues as exceptions, ranked so the highest-value and weakest-evidence ones surface first, with the chart already open to the page in question. A coder confirms a finding instead of going to look for it. Second-level review, QA sampling and sign-off run in the same system, and every action is recorded against the person who took it.",
  },
  {
    question: "Does it remove codes as well as add them?",
    answer:
      "Yes, and the same validation pass produces both. Codes that are supported but were never submitted come back as adds, ranked by impact with the evidence attached. Codes already submitted that the record does not support come back as deletes, each with the reason it failed. Most retrospective programs only look for what is missing, which leaves the second half of the exposure untouched.",
  },
  {
    question: "Does Martlet AI replace our coding team?",
    answer:
      "No. It changes what the team spends its day on. Instead of reading 40 to 50 charts each, your coders work the roughly 5% of cases routed for judgment, run second-level review and QA sampling, and own the standards the platform applies. The same team covers many times the volume, and the institutional knowledge stays in-house rather than at a vendor.",
  },
  {
    question: "What does it ingest, and what comes back out?",
    answer:
      "In: clinical notes and PDFs, including scanned documents read with OCR, along with FHIR and HL7 feeds, CCDs, claims extracts and your prior coding, normalized and de-duplicated at ingestion. Out: adds and deletes in the format your submission pipeline expects, the evidence behind each code, and reporting on confirmation and deletion rates by coder, vendor and provider group.",
  },
  {
    question: "Where does it run, and does PHI leave our network?",
    answer:
      "It runs inside your own environment — on-premises, in your private cloud, or air-gapped. No charts are shipped out, no outsourced coders touch them, and no PHI leaves your network. Updates ship as versioned releases your team applies on its own schedule, and every decision is recorded with the evidence and the model version behind it.",
  },
  {
    question: "What happens when CMS guidance changes?",
    answer:
      "We update the checks to match, so validation follows the rules currently in force rather than the ones that applied when the platform was installed. Because each code is scored against the model and the guidance that apply to the year being coded, a run covering several payment years is never pushed through a single set of rules.",
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
          <h2 id="retro-faq-heading" className="apple-display text-[30px] md:text-[40px]">
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
