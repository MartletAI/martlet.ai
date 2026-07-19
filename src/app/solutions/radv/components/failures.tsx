import { Reveal } from "@/components/reveal";

import { SourceLink } from "./source-link";

const OIG_AUDITS = [
  {
    plan: "Humana Health Plan (H2649)",
    href: "https://oig.hhs.gov/reports/all/2024/medicare-advantage-compliance-audit-of-specific-diagnosis-codes-that-humana-health-plan-inc-contract-h2649-submitted-to-cms/",
    years: "2017–18",
    sample: "240",
    unsupported: "84%",
    refund: "$6.8M refund",
  },
  {
    plan: "Humana of Louisiana (H1951)",
    href: "https://oig.hhs.gov/reports/all/2025/medicare-advantage-compliance-audit-of-specific-diagnosis-codes-humana-health-benefit-of-louisiana-contract-h1951-submitted-to-cms/",
    years: "2017–18",
    sample: "240",
    unsupported: "91%",
    refund: "≥$10.5M est.",
  },
  {
    plan: "UCare Minnesota (H2459)",
    href: "https://oig.hhs.gov/reports/all/2024/medicare-advantage-compliance-audit-of-specific-diagnosis-codes-that-ucare-minnesota-contract-h2459-submitted-to-cms/",
    years: "2018–19",
    sample: "294",
    unsupported: "86%",
    refund: "$4.7M refund",
  },
  {
    plan: "Blue Care Network of Michigan (H5883)",
    href: "https://oig.hhs.gov/reports/all/2024/medicare-advantage-compliance-audit-of-specific-diagnosis-codes-blue-care-network-of-michigan-contract-h5883-submitted-to-cms/",
    years: "2017–18",
    sample: "210",
    unsupported: "91%",
    refund: "$3.4M refund",
  },
  {
    plan: "Triple-S Advantage (H5774)",
    href: "https://oig.hhs.gov/reports/all/2024/medicare-advantage-compliance-audit-of-specific-diagnosis-codes-that-triple-s-advantage-inc-contract-h5774-submitted-to-cms/",
    years: "2016–17",
    sample: "281",
    unsupported: "73%",
    refund: "$297K refund",
  },
  {
    plan: "Industry-wide acute-stroke audit",
    href: "https://oig.hhs.gov/reports/all/2026/cms-potentially-overpaid-medicare-advantage-organizations-462-million-based-on-certain-unsupported-acute-stroke-diagnosis-codes/",
    years: "PY2021",
    sample: "97",
    unsupported: "100%",
    refund: "~$462M est.*",
  },
];

const PATTERNS = [
  "Acute stroke or MI coded from an office claim with no matching inpatient claim — OIG found over 90% of these unsupported",
  "Cancers coded as active with no treatment or management in the service year (history-of codes don't risk-adjust)",
  "Sepsis without an inpatient claim; embolism without anticoagulant management",
  "Major depressive disorder without documented severity or treatment",
  "Conditions supported only by a problem list, with no evidence in the encounter",
];

/**
 * Failures - the OIG audit record: published error rates by plan, and the
 * failure patterns behind them.
 */
export function Failures() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="failures-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#b42318]/10 text-[#b42318]">
              Why codes fail
            </span>
          </p>
          <h2 id="failures-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            The OIG has been publishing the answers.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            HHS-OIG audits of high-risk diagnosis codes at named MA plans.
            Across the series, roughly <strong>70% of audited high-risk codes
            were unsupported</strong> by the medical record.{" "}
            <SourceLink href="https://oig.hhs.gov/reports/all/2023/toolkit-to-help-decrease-improper-payments-in-medicare-advantage-through-the-identification-of-high-risk-diagnosis-codes/">
              OIG toolkit
            </SourceLink>
          </p>
        </Reveal>

        <Reveal className="max-w-[900px] mx-auto mb-12">
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[15px] border-collapse">
                <thead>
                  <tr className="bg-[#f5f5f7] border-b border-border text-muted text-sm">
                    <th className="px-5 py-3 font-semibold">OIG audit</th>
                    <th className="px-5 py-3 font-semibold">Years</th>
                    <th className="px-5 py-3 font-semibold">Sampled</th>
                    <th className="px-5 py-3 font-semibold">Unsupported</th>
                    <th className="px-5 py-3 font-semibold">Finding</th>
                  </tr>
                </thead>
                <tbody>
                  {OIG_AUDITS.map((row) => (
                    <tr key={row.plan} className="border-b border-border-light last:border-0">
                      <td className="px-5 py-3 apple-body font-medium">
                        <SourceLink href={row.href}>{row.plan}</SourceLink>
                      </td>
                      <td className="px-5 py-3 evidence-mono text-muted">{row.years}</td>
                      <td className="px-5 py-3 evidence-mono text-muted">{row.sample}</td>
                      <td className="px-5 py-3 evidence-mono font-bold text-[#b42318]">{row.unsupported}</td>
                      <td className="px-5 py-3 evidence-mono text-[#0a0a12]">{row.refund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm apple-caption mt-4 mb-0 text-center max-w-[720px] mx-auto">
            Each row links to the published HHS-OIG report; figures are
            OIG&rsquo;s findings and recommendations as stated in each report.
            *Estimated industry-wide overpayment; OIG recommended preventive
            edits. In their published responses, the audited plans generally
            disputed OIG&rsquo;s findings, methodology, or recommendations —
            each report includes the plan&rsquo;s response.
          </p>
        </Reveal>

        <Reveal className="max-w-[780px] mx-auto">
          <h3 className="text-xl font-bold tracking-tight text-[#0a0a12] mb-4 text-center">
            The patterns behind the numbers
          </h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-3 mb-8">
            {PATTERNS.map((pattern) => (
              <li key={pattern} className="flex gap-3 items-start text-base apple-body leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#b42318] shrink-0" aria-hidden />
                {pattern}
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold text-[#0a0a12] text-center m-0">
            Martlet AI screens every one of these patterns before submission —
            and flags the deletes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
