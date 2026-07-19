import { Reveal } from "@/components/reveal";

import { PacketDemo } from "./packet-demo";
import { SourceLink } from "./source-link";

const CHECKS = [
  {
    title: "A real face-to-face encounter",
    detail:
      "From an acceptable provider type and physician specialty on CMS's risk-adjustment list. Superbills, standalone problem lists, claim forms, and lab results alone don't count as evidence.",
  },
  {
    title: "Dates inside the collection year",
    detail:
      "PY2020 payments validate against 2019 dates of service — a great note from the wrong year validates nothing.",
  },
  {
    title: "A valid signature, with credentials",
    detail:
      "Stamped signatures are banned. Electronic signatures need authentication language plus name and credentials. Signatures obtained in response to the audit are invalid.",
  },
  {
    title: "The only cure: a CMS attestation",
    detail:
      "A missing or illegible signature on outpatient records can be cured — only with the CMS-generated form, for a single date of service. Attestations can't validate diagnoses.",
  },
  {
    title: "Coding per the official guidelines",
    detail:
      "ICD-10-CM Official Guidelines and AHA Coding Clinic in effect at the encounter date — the same standards Martlet AI validates against before submission.",
  },
] as const;

/**
 * CoderChecks - what CMS coders actually check, per the Medical Record
 * Reviewer Guidance, plus the packet assembling live.
 */
export function CoderChecks() {
  return (
    <section
      className="gradient-evidence py-20 md:py-28"
      aria-labelledby="coder-checks-heading"
    >
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#067647]/10 text-[#067647]">
              What CMS coders check
            </span>
          </p>
          <h2
            id="coder-checks-heading"
            className="apple-display text-[32px] md:text-[48px] mb-5"
          >
            The checklist your evidence must survive.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            From CMS&rsquo;s{" "}
            <SourceLink href="https://www.cms.gov/files/document/medical-record-reviewer-guidance-january-2020.pdf">
              Medical Record Reviewer Guidance
            </SourceLink>
            . Martlet AI runs every one of these checks on every chart — before
            submission, and again when assembling the packet.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 list-none p-0 m-0 mb-16 max-w-[1240px] mx-auto"
        >
          {CHECKS.map((check, index) => (
            <li key={check.title} className="rounded-3xl bg-white border border-border p-6">
              <div className="evidence-mono text-xs text-muted mb-3">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-bold tracking-tight text-[#0a0a12] leading-snug mb-2">
                {check.title}
              </h3>
              <p className="text-sm apple-body leading-relaxed m-0">{check.detail}</p>
            </li>
          ))}
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
