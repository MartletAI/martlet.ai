import { Reveal } from "@/components/reveal";

import { PacketDemo } from "./packet-demo";
import { SourceLink } from "./source-link";

/** Numerals carry the colour, the way the brochure does — they are the anchor,
 *  so the cards need no rule above them. */
const CHECK_COLORS = [
  "text-[#0165dc]",
  "text-[#7c3aed]",
  "text-[#0d9488]",
  "text-[#d97706]",
  "text-[#067647]",
  "text-[#c026a3]",
] as const;

const CHECKS = [
  {
    title: "Document and encounter type",
    detail:
      "Every encounter inside a bundled file is identified and classified on its own, so a single PDF holding months of visits is separated into the encounters it actually contains — progress notes, discharge summaries, consults and outpatient records, each typed before anything is coded against it.",
  },
  {
    title: "Signature validity",
    detail:
      "Each record is checked for a signature and for whether it can be attributed to the clinician who wrote the note. Anything missing, unattributable or unclear is flagged rather than assumed, and surfaced early enough to be acted on.",
  },
  {
    title: "Provider credentials",
    detail:
      "Signing clinicians are resolved against the current CMS specialty list, and gaps are flagged with the reason attached.",
  },
  {
    title: "Dates of service",
    detail:
      "A date of service is established per encounter and checked against the period that applies to the payment year being validated.",
  },
  {
    title: "Labs, imaging and pathology",
    detail:
      "Diagnostic reports are read and assessed under the criteria that apply to each type, including results that sit inside a scanned report rather than a structured feed.",
  },
  {
    title: "Clinical support",
    detail:
      "Each diagnosis is checked for support in the encounter itself rather than carried forward, and the sentence carrying that support is linked to its page.",
  },
] as const;

/**
 * CoderChecks - what CMS reads for at audit, and the same checks running here
 * first. One continuous idea, then the packet assembling live.
 */
export function CoderChecks() {
  return (
    <section
      id="checks"
      className="apple-section-blue py-20 md:py-28 scroll-mt-24"
      aria-labelledby="checks-heading"
    >
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-14">
          <h2
            id="checks-heading"
            className="apple-display text-[30px] md:text-[40px] mb-5"
          >
            What gets checked on every chart.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            The same six checks run on every chart, before submission and again
            when the packet is assembled.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9 list-none p-0 m-0 mb-12 max-w-[1100px] mx-auto"
        >
          {CHECKS.map((check, index) => (
            <li key={check.title}>
              <div
                className={`evidence-mono text-[22px] font-bold leading-none mb-3 ${CHECK_COLORS[index]}`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[18px] font-bold tracking-tight text-[#0a0a12] leading-snug mb-2">
                {check.title}
              </h3>
              <p className="text-base apple-body leading-relaxed m-0">
                {check.detail}
              </p>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[760px] mx-auto mb-16">
          <p className="text-base apple-body leading-relaxed m-0 text-center">
            CMS guidance changes. We update the checks to match, so validation
            follows the rules currently in force — published in CMS&rsquo;s{" "}
            <SourceLink href="https://www.cms.gov/files/document/medical-record-reviewer-guidance-january-2020.pdf">
              Medical Record Reviewer Guidance
            </SourceLink>
            .
          </p>
        </Reveal>

        <Reveal>
          <PacketDemo />
          <p className="text-xs text-muted-light text-center mt-4 mb-0">
            All patient data shown is synthetically generated for illustration.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
