import { Reveal } from "@/components/reveal";

import { PacketDemo } from "./packet-demo";
import { SourceLink } from "./source-link";

const CHECKS = [
  {
    title: "Document and encounter type",
    detail:
      "Every encounter inside a bundled file is identified and classified on its own. Sources CMS does not accept as evidence — superbills, standalone problem lists, claim forms, lab results on their own — are identified as such rather than counted.",
  },
  {
    title: "Signature validity",
    detail:
      "Each record is checked for a valid signature attributable to the clinician who wrote it. Stamped signatures and signatures obtained in response to a record request do not qualify, and electronic signatures are checked for the authentication language CMS requires.",
  },
  {
    title: "Provider credentials",
    detail:
      "Signing clinicians are resolved against the current CMS acceptable-specialty list, and gaps are flagged.",
  },
  {
    title: "Dates of service",
    detail:
      "A date of service is established per encounter and checked against the collection year that applies to the payment year under audit.",
  },
  {
    title: "Labs, imaging and pathology",
    detail:
      "Diagnostic reports are assessed under the criteria that apply to each type.",
  },
  {
    title: "Clinical support",
    detail:
      "Each diagnosis is checked for support in the encounter itself, rather than carried forward from a problem list or an earlier note.",
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
      className="gradient-evidence py-20 md:py-28 scroll-mt-24"
      aria-labelledby="checks-heading"
    >
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[820px] mx-auto mb-14">
          <h2
            id="checks-heading"
            className="apple-display text-[32px] md:text-[48px] mb-5"
          >
            What gets checked on every chart.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            When CMS validates a diagnosis, a certified coder reads the record
            looking for a specific set of things: that the encounter took place
            and was of an acceptable type, that the provider was credentialed to
            make the call, that the note was signed, that the date falls inside
            the collection year, and that the condition was addressed at that
            visit rather than carried forward from an earlier one. Martlet AI
            runs the same set of checks on every chart — before submission, and
            again when the packet is assembled.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9 list-none p-0 m-0 mb-12 max-w-[1100px] mx-auto"
        >
          {CHECKS.map((check, index) => (
            <li key={check.title} className="border-t-2 border-[#0165dc] pt-5">
              <div className="evidence-mono text-xs text-muted mb-2">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[17px] font-bold tracking-tight text-[#0a0a12] leading-snug mb-2">
                {check.title}
              </h3>
              <p className="text-[15px] apple-body leading-relaxed m-0">
                {check.detail}
              </p>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[820px] mx-auto mb-16">
          <p className="text-base apple-body leading-relaxed m-0 text-center">
            CMS guidance changes. We update the checks to match, so validation
            follows the rules currently in force. The requirements themselves
            are published in CMS&rsquo;s{" "}
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
