import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

import { Verdicts } from "./verdicts";

interface Outcome {
  title: string;
  body: ReactNode;
  accent: string;
}

/** Bold carries the scan path — a reader who only reads the bold still gets the argument. */
const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-[#0a0a12]">{children}</strong>
);

const OUTCOMES: Outcome[] = [
  {
    title: "Every code checked against the record",
    accent: "bg-[#0165dc]",
    body: (
      <>
        Every code comes back{" "}
        <B>supported with evidence, flagged for deletion, or routed to your
        team as an exception</B>{" "}
        — with the page, the date and the signature behind the decision. A
        supported code carries the sentence that supports it; a flagged one
        carries the reason it failed. This runs on{" "}
        <B>codes submitted years ago, coded by anyone</B>, on a platform you may
        have since left.
      </>
    ),
  },
  {
    title: "Your coders review the exceptions",
    accent: "bg-[#7c3aed]",
    body: (
      <>
        <B>95% of codes arrive already decided.</B> The rest reach your team as
        exceptions, ranked so the highest-value and weakest-evidence ones surface
        first, with the chart already open to the page in question. A coder{" "}
        <B>confirms a finding instead of going to look for it.</B>
      </>
    ),
  },
  {
    title: "Submission packets built as you go",
    accent: "bg-[#d97706]",
    body: (
      <>
        Evidence sentence, source page, date of service, provider, signature and
        MEAT signals, assembled per HCC as the validation runs and{" "}
        <B>regenerated whenever the underlying evidence changes.</B> The packet
        exists before the record request arrives, rather than being{" "}
        <B>assembled by hand inside a five-month window.</B>
      </>
    ),
  },
  {
    title: "Runs on your own infrastructure",
    accent: "bg-[#067647]",
    body: (
      <>
        On-premises, in your private cloud, or air-gapped, with updates shipped
        as versioned releases your team applies on its own schedule.{" "}
        <B>No outsourced reviewers, no chart shipping, and no PHI leaving your
        network</B>{" "}
        — with a full audit trail on every decision that can be replayed years
        later.
      </>
    ),
  },
];

/**
 * WhatYouGet - the four concrete outcomes of a RADV run. Light-blue cards on
 * white with an accent rule under each title, matching the brochure.
 */
export function WhatYouGet() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="what-you-get-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12">
          <h2
            id="what-you-get-heading"
            className="apple-display text-[30px] md:text-[40px] mb-5"
          >
            What you actually get.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Four things come out of a Martlet AI RADV run, whatever stage of the
            audit you are in.
          </p>
        </Reveal>

        {/* The three verdicts, as the artifact rather than a description */}
        <Reveal className="mb-14">
          <Verdicts />
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-2 gap-5 list-none p-0 m-0 max-w-[1100px] mx-auto"
        >
          {OUTCOMES.map((outcome) => (
            <li
              key={outcome.title}
              className="rounded-[28px] bg-[#eff5fc] p-7 md:p-9"
            >
              <h3 className="text-xl font-bold tracking-tight text-[#0a0a12] leading-snug mb-2.5">
                {outcome.title}
              </h3>
              <span
                className={`block w-9 h-[3px] rounded-full mb-4 ${outcome.accent}`}
                aria-hidden
              />
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
