import { Reveal } from "@/components/reveal";

/** The objections a clinical leader actually raises about a tool that will
 *  appear in front of their physicians. Questions that restate a section
 *  sitting above them have been dropped — suspecting, segments and the WVU
 *  deployment are all covered on the page already. */
const FAQ_ITEMS = [
  {
    question: "Does this add time to the visit?",
    answer:
      "The intent is the opposite: the pre-visit summary collects what a clinician would otherwise go hunting for across prior notes, labs and claims, and puts it on one screen. During the visit, suggestions are short, capped per encounter, and dismissible in a single action. We would rather you measured it than took our word for it — chart-prep minutes before and after, on your own panel, is the number to hold us to.",
  },
  {
    question: "How many suggestions will a clinician see in one encounter?",
    answer:
      "As many as you allow, and no more. The cap per encounter is a setting you control, as is the confidence threshold a suspect has to clear before it surfaces at all. Raising the bar shows fewer, stronger suggestions. This is the single most important dial in the system: a tool that interrupts a clinician too often stops being read, and after that its accuracy is irrelevant.",
  },
  {
    question: "What happens when a clinician disagrees with a suggestion?",
    answer:
      "They dismiss it, and that is the end of it for that encounter. Dismissals are recorded — not to challenge the clinician, but because the pattern of what gets dismissed is the clearest signal of where the suspecting logic is wrong. Those rates come back to you by condition and by signal type, so thresholds can be tightened where the tool is being noisy.",
  },
  {
    question: "Can it prompt a clinician toward something the record can't support?",
    answer:
      "It is built not to. A suspect surfaces as a documentation cue with the evidence behind it attached — the note, the lab, the medication it came from — so the clinician is being shown why something is worth considering, not handed a code to accept. The clinical decision is the clinician's, and a condition that is never addressed at the encounter never becomes a submitted diagnosis.",
  },
  {
    question: "Who decides what counts as a suspect?",
    answer:
      "You do. The signal types are published rather than hidden behind a score, so your clinical and coding leadership can review the logic and decide which sources to trust and at what threshold. Conditions, signal types and confidence tiers can each be turned up, turned down, or switched off entirely for your organization.",
  },
  {
    question: "What does it take to get this into our EHR?",
    answer:
      "Suggestions are delivered through the patterns your EHR already supports — Epic Best Practice Advisories and FHIR CDS Hooks — so clinicians see them where they already look, rather than in another tab. The work is mostly on the data feeds and the tuning, not on building a new interface for your physicians to learn.",
  },
  {
    question: "Where does it run, and does patient data leave our network?",
    answer:
      "It runs inside your own environment — on-premises, in your private cloud, or air-gapped. No PHI leaves your network and there are no external API calls in the data path, so your existing security controls, IAM and monitoring stay in effect. Updates ship as versioned releases your team applies on its own schedule.",
  },
  {
    question: "How do we know it's working once it's live?",
    answer:
      "Suggestion acceptance rate is the number that matters most, tracked by condition, by signal type and by clinician, because it tells you whether the people using it trust it. Alongside it: alerts per encounter, dismissal patterns, and how much of the panel had its conditions addressed during a visit rather than chased afterwards. If acceptance is falling, the logic needs tightening — and you will see that before it becomes a coding problem.",
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
    <section className="bg-white py-20 md:py-24" aria-labelledby="pro-faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-main max-w-[880px]!">
        <Reveal as="header" className="text-center mb-12">
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
