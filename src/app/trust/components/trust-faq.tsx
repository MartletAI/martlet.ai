import { Reveal } from "@/components/reveal";

const FAQ_ITEMS = [
  {
    question: "Is Martlet AI HIPAA compliant?",
    answer:
      "Martlet AI is HIPAA-aligned by deployment model: the platform runs inside your environment, so PHI remains under your existing HIPAA safeguards at all times, and we execute a Business Associate Agreement. Because no PHI flows to Martlet AI's systems, the strongest control is architectural — there is no vendor data path to secure.",
  },
  {
    question: "Are you SOC 2 or HITRUST certified?",
    answer:
      "Our policies and controls map to the requirements of SOC 2, HITRUST CSF, NIST 800-53, and ISO 27001. But the more important answer is architectural: those certifications attest to how a vendor protects customer data in the vendor's environment — and in our deployment model, your data never enters our environment. The controls in effect are the ones your security team already runs.",
  },
  {
    question: "Where does PHI go?",
    answer:
      "Nowhere. Charts, claims, and every model inference stay inside your network — on-premises, in your private cloud tenancy, or air-gapped. There are no external AI API calls in the data path and no subprocessors touching PHI.",
  },
  {
    question: "Do you train models on our data?",
    answer:
      "Your data trains nothing outside your environment. The underlying medical language models are built on public clinical text and proprietary annotated datasets developed by John Snow Labs. Feedback from your reviewers tunes behavior inside your deployment — it never leaves your network.",
  },
  {
    question: "How do model updates work in an air-gapped deployment?",
    answer:
      "Through versioned, controlled release packages that your team applies on your schedule. Every release is tested before it ships, every model is versioned, and rollback is one step — so an air-gapped environment stays current without ever opening a connection.",
  },
  {
    question: "What does the audit trail capture?",
    answer:
      "Every AI decision and every human action: who acted, what changed, when, and with which model version — across coding, review, and export. Outputs are deterministic under a fixed configuration, so any past result can be reproduced and defended, including three years later under RADV.",
  },
] as const;

/**
 * TrustFaq - the security-review questions, answered the way a CISO reads
 * them. FAQPage schema included.
 */
export function TrustFaq() {
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
    <section className="bg-white py-20 md:py-24" aria-labelledby="trust-faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-main max-w-[880px]!">
        <Reveal as="header" className="text-center mb-12">
          <h2 id="trust-faq-heading" className="apple-display text-[32px] md:text-[48px]">
            What security reviewers ask us.
          </h2>
        </Reveal>

        <Reveal className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#fbfbfd] border border-border rounded-2xl px-6 md:px-8 py-1 open:pb-5">
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
