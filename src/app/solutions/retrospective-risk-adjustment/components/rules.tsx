import { EvidenceDemo } from "@/app/(landing-page)/components/evidence/evidence-demo";
import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

/** Each entry describes the check we run, not what the rule says. Guidance
 *  moves and carries exceptions; a description of our own behaviour stays
 *  true when it does. The sources are kept for credibility. */
const RULES = [
  {
    title: "Clinical support",
    detail: (
      <>
        Each diagnosis is checked for support in the encounter itself rather
        than accepted because it appeared before, using the{" "}
        <SourceLink href="https://www.aapc.com/blog/41212-include-meat-in-your-risk-adjustment-documentation/">
          MEAT framework
        </SourceLink>{" "}
        most coding programs are held to, and the sentence carrying that
        support is linked to its page.
      </>
    ),
  },
  {
    title: "Encounter type",
    detail: (
      <>
        Every encounter is identified and typed on its own, including
        telehealth, and assessed against the criteria that apply to that type
        of encounter.{" "}
        <SourceLink href="https://www.cms.gov/files/document/applicability-diagnoses-telehealth-services-risk-adjustment-4102020.pdf">
          CMS guidance
        </SourceLink>
      </>
    ),
  },
  {
    title: "Provider specialty",
    detail: (
      <>
        Signing clinicians are resolved against the{" "}
        <SourceLink href="https://www.cms.gov/medicare/payment/medicare-advantage-rates-statistics/risk-adjustment/acceptable-physician-specialty-type-lists">
          specialty list CMS publishes
        </SourceLink>
        , which is reissued each year. Where a provider type does not resolve,
        the diagnosis is flagged with the reason rather than assumed.
      </>
    ),
  },
  {
    title: "Signature and attribution",
    detail: (
      <>
        Each record is checked for a signature and for whether it can be
        attributed to the clinician who wrote the note. Anything missing,
        unattributable or unclear is flagged rather than assumed.{" "}
        <SourceLink href="https://www.cms.gov/files/document/mln905364-complying-medicare-signature-requirements.pdf">
          Medicare signature requirements
        </SourceLink>
      </>
    ),
  },
  {
    title: "The payment year being coded",
    detail: (
      <>
        Risk adjustment works a payment year at a time, so we track which
        conditions have support inside the year being coded and which are
        carrying over from an earlier one — and score each against the model
        that applies to its own year.
      </>
    ),
  },
] as const;

/**
 * Rules - the documentation checks run on every chart, plus the verification
 * demo running live.
 */
export function Rules() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="rules-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-12">
          <h2 id="rules-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            The documentation rules, enforced on every chart.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Every chart runs through the same checks an audit would apply,
            before submission rather than years after it. CMS guidance changes;
            we update the checks to match, so validation follows the rules
            currently in force.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 list-none p-0 m-0 mb-16 max-w-[1240px] mx-auto"
        >
          {RULES.map((rule, index) => (
            <li key={rule.title} className="rounded-3xl bg-[#fbfbfd] border border-border p-6">
              <div className="evidence-mono text-xs text-muted mb-3">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-bold tracking-tight text-[#0a0a12] leading-snug mb-2">
                {rule.title}
              </h3>
              <p className="text-sm apple-body leading-relaxed m-0">{rule.detail}</p>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[980px] mx-auto">
          <EvidenceDemo />
          <p className="text-xs text-muted-light text-center mt-4 mb-0">
            All patient data shown is synthetically generated for illustration.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
