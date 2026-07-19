import { EvidenceDemo } from "@/app/(landing-page)/components/evidence/evidence-demo";
import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const RULES = [
  {
    title: "MEAT, precisely",
    detail: (
      <>
        Monitor, Evaluate, Assess, Treat — the industry standard that
        operationalizes CMS&rsquo;s guidance. One element suffices;
        problem-list carry-forwards and superbill-only diagnoses fail.{" "}
        <SourceLink href="https://www.aapc.com/blog/41212-include-meat-in-your-risk-adjustment-documentation/">
          AAPC
        </SourceLink>
      </>
    ),
  },
  {
    title: "Face-to-face, or qualifying telehealth",
    detail: (
      <>
        Diagnoses count only from face-to-face encounters — or real-time
        audio-video telehealth per{" "}
        <SourceLink href="https://www.cms.gov/files/document/applicability-diagnoses-telehealth-services-risk-adjustment-4102020.pdf">
          CMS&rsquo;s April 2020 memo
        </SourceLink>
        . Audio-only never qualifies.
      </>
    ),
  },
  {
    title: "Acceptable specialties only",
    detail: (
      <>
        CMS publishes the{" "}
        <SourceLink href="https://www.cms.gov/medicare/payment/medicare-advantage-rates-statistics/risk-adjustment/acceptable-physician-specialty-type-lists">
          acceptable physician specialty list
        </SourceLink>{" "}
        annually. A diagnosis from an unacceptable provider type validates
        nothing.
      </>
    ),
  },
  {
    title: "Signatures that authenticate",
    detail: (
      <>
        Handwritten or qualifying electronic signatures with credentials;
        stamps are banned.{" "}
        <SourceLink href="https://www.cms.gov/files/document/mln905364-complying-medicare-signature-requirements.pdf">
          Medicare signature requirements
        </SourceLink>
      </>
    ),
  },
  {
    title: "The January 1 reset",
    detail: (
      <>
        RAF resets every January 1 — chronic conditions must be re-documented
        from a qualifying encounter every year, or the HCC (and the revenue)
        disappears.
      </>
    ),
  },
] as const;

/**
 * Rules - the public documentation rules, enforced on every chart, plus the
 * verification demo running live.
 */
export function Rules() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="rules-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#067647]/10 text-[#067647]">
              Regulatory-grade, enforced
            </span>
          </p>
          <h2 id="rules-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            The rules are public. We enforce all of them.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Every chart is validated against the same requirements CMS applies
            at audit — automatically, before submission. Watch the pass run.
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
