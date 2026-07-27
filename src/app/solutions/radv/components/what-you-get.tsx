import { Reveal } from "@/components/reveal";

const OUTCOMES = [
  {
    title: "Every code checked against the record",
    body: "Every code comes back supported with evidence, flagged for deletion, or routed to your team as an exception, with the page, the date and the signature behind the decision. This runs on codes submitted years ago, coded by anyone, on any platform you have since left.",
  },
  {
    title: "Your coders review the exceptions",
    body: "95% of codes arrive already decided. The rest reach your team as exceptions, with the evidence attached and ranked, so a coder confirms a finding instead of going to look for the chart first.",
  },
  {
    title: "Submission packets built as you go",
    body: "Evidence sentence, source page, date of service, provider, signature, MEAT signals and coversheet, generated per HCC as the validation runs. The packet exists before the record request arrives, rather than being assembled by hand inside a five-month window.",
  },
  {
    title: "Runs on your own infrastructure",
    body: "On-premises, in your private cloud, or air-gapped. No outsourced reviewers, no chart shipping, and no PHI leaving your network — with a full audit trail on every decision that can be replayed years later.",
  },
] as const;

/**
 * WhatYouGet - the four concrete outcomes of a RADV run, stated plainly and
 * early. Placed second so the page says what it does before it explains CMS.
 */
export function WhatYouGet() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="what-you-get-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12">
          <h2
            id="what-you-get-heading"
            className="apple-display text-[32px] md:text-[48px] mb-5"
          >
            What you actually get.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Four things come out of a Martlet AI RADV run, whatever stage of the
            audit you are in.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-2 gap-5 list-none p-0 m-0 max-w-[1100px] mx-auto"
        >
          {OUTCOMES.map((outcome) => (
            <li
              key={outcome.title}
              className="rounded-[28px] bg-[#fbfbfd] border border-border p-7 md:p-9"
            >
              <h3 className="text-xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-3">
                {outcome.title}
              </h3>
              <p className="text-base apple-body leading-relaxed m-0">
                {outcome.body}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
