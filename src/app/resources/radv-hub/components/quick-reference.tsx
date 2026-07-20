import { Icon } from "@/components";
import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const SUBMISSION_RULES = [
  "Up to 2 medical records per audited HCC; one valid record validates",
  "A record = one face-to-face encounter (one DOS outpatient; one stay inpatient)",
  "Any acceptable provider and any DOS in the collection year — even encounters never submitted for payment",
  "No amending records, and no asking providers to amend, once the audit begins",
  "CMS attestation form is the only signature cure — outpatient records, single DOS, cannot validate diagnoses",
  "Intake feedback posts in CDAT; invalid submissions replaceable while the window is open",
  "Hardship exceptions available per contract, enrollee, or HCC — with their own deadline",
];

const CODER_CHECKS = [
  "Correct beneficiary on every page",
  "Acceptable provider type, source, and physician specialty for a face-to-face encounter",
  "Dates of service inside the data-collection year",
  "Valid signature with credentials — stamps banned; e-signatures need authentication language; audit-time signatures invalid",
  "Coding per ICD-10-CM Official Guidelines and AHA Coding Clinic at the encounter date",
  "Not acceptable: superbills, standalone problem lists, claim forms, lab results alone, unattended home-health forms",
];

/**
 * QuickReference - the two lists a compliance team pins to the wall:
 * record submission rules and the coder checklist.
 */
export function QuickReference() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="quick-ref-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal as="header" className="mb-8">
          <h2 id="quick-ref-heading" className="apple-display text-[28px] md:text-[40px] mb-3">
            Quick reference
          </h2>
          <p className="text-base md:text-lg apple-body leading-relaxed m-0">
            From the{" "}
            <SourceLink href="https://www.cms.gov/files/document/payment-year-2020-ma-radv-audit-methods-instructions.pdf">
              PY2020 Audit Methods &amp; Instructions
            </SourceLink>{" "}
            and the{" "}
            <SourceLink href="https://www.cms.gov/files/document/medical-record-reviewer-guidance-january-2020.pdf">
              Medical Record Reviewer Guidance
            </SourceLink>
            .
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-3xl border border-border bg-[#fbfbfd] p-6 md:p-8 h-full">
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] mb-4">
                Record submission rules
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {SUBMISSION_RULES.map((rule) => (
                  <li key={rule} className="flex gap-2.5 items-start text-[15px] apple-body leading-relaxed">
                    <Icon name="badge-check" className="w-4 h-4 text-[#0165dc] shrink-0 mt-1" aria-hidden />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-border bg-[#fbfbfd] p-6 md:p-8 h-full">
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] mb-4">
                What CMS coders check
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {CODER_CHECKS.map((check) => (
                  <li key={check} className="flex gap-2.5 items-start text-[15px] apple-body leading-relaxed">
                    <Icon name="badge-check" className="w-4 h-4 text-[#067647] shrink-0 mt-1" aria-hidden />
                    {check}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
