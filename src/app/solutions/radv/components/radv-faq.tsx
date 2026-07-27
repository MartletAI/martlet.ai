import { Reveal } from "@/components/reveal";

const FAQ_ITEMS = [
  {
    question: "What do you need from us to start?",
    answer:
      "Your charts and the codes you submitted for the payment year in question. Charts can be PDFs or scans; anything that is not already text goes through OCR. If you have been selected, we also take the Enrollee Data List CMS posts in CDAT. None of it needs to leave your network — the engine runs where the data already is.",
  },
  {
    question: "Does this work on codes we didn't code?",
    answer:
      "Yes. RADV runs against what was submitted, so it does not matter who did the original coding or which platform they used. Martlet AI ingests your submitted codes and the underlying records and validates them independently. That is the common case for plans whose retrospective coding was outsourced, or who have changed vendors since the payment year under audit.",
  },
  {
    question: "Who reviews what the engine finds?",
    answer:
      "Four levels run by default. Automated validation scores every code and closes the ones that are clearly supported or clearly unsupported, which is about 95% of them. Everything else reaches a certified coder as an exception, with the evidence already attached and ranked. A QA or audit lead re-reviews a sample for consistency, and compliance signs off. You configure how many levels run and where the thresholds sit, and every decision at every level is recorded against the evidence as it stood and cannot be altered afterwards.",
  },
  {
    question: "What happens to codes you flag for deletion?",
    answer:
      "They come back with the reason and the evidence behind the finding, so a coder confirms before anything moves. Confirmed deletions export as submission deltas in the format your pipeline already expects, alongside the additions, so both directions go out through the same route.",
  },
  {
    question: "What reporting comes out of it?",
    answer:
      "Findings by HCC and by enrollee, confirmation and deletion rates broken down by coder, vendor, provider group and condition, and an exposure estimate per contract. The breakdowns are what most teams take to their compliance committee, and they are what turns one audit's findings into documentation fixes at the source.",
  },
  {
    question: "How quickly can you run a mock RADV audit?",
    answer:
      "A mock audit on a single contract runs in days rather than quarters. Martlet AI ingests your charts and submitted codes, samples the contract on CMS's own stratified methodology, validates every sampled HCC against the same checks CMS applies, and returns findings by HCC with evidence packets and an exposure estimate. It runs on-premises or in your private cloud, so no PHI leaves your network.",
  },
] as const;

/**
 * RadvFaq - product questions only. The regulatory questions (what RADV is,
 * extrapolation status, what CMS accepts) live on the RADV Hub, which is the
 * reference asset.
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
          <h2 id="radv-faq-heading" className="apple-display text-[30px] md:text-[40px]">
            What buyers ask us.
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
