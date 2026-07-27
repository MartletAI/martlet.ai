import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";

const OIG_AUDITS = [
  {
    plan: "Humana Health Plan (H2649)",
    href: "https://oig.hhs.gov/reports/all/2024/medicare-advantage-compliance-audit-of-specific-diagnosis-codes-that-humana-health-plan-inc-contract-h2649-submitted-to-cms/",
    years: "2017–18",
    sample: "240",
    unsupported: "84%",
    finding: "$6.8M refund",
  },
  {
    plan: "Humana of Louisiana (H1951)",
    href: "https://oig.hhs.gov/reports/all/2025/medicare-advantage-compliance-audit-of-specific-diagnosis-codes-humana-health-benefit-of-louisiana-contract-h1951-submitted-to-cms/",
    years: "2017–18",
    sample: "240",
    unsupported: "91%",
    finding: "≥$10.5M est.",
  },
  {
    plan: "UCare Minnesota (H2459)",
    href: "https://oig.hhs.gov/reports/all/2024/medicare-advantage-compliance-audit-of-specific-diagnosis-codes-that-ucare-minnesota-contract-h2459-submitted-to-cms/",
    years: "2018–19",
    sample: "294",
    unsupported: "86%",
    finding: "$4.7M refund",
  },
  {
    plan: "Blue Care Network of Michigan (H5883)",
    href: "https://oig.hhs.gov/reports/all/2024/medicare-advantage-compliance-audit-of-specific-diagnosis-codes-blue-care-network-of-michigan-contract-h5883-submitted-to-cms/",
    years: "2017–18",
    sample: "210",
    unsupported: "91%",
    finding: "$3.4M refund",
  },
  {
    plan: "Triple-S Advantage (H5774)",
    href: "https://oig.hhs.gov/reports/all/2024/medicare-advantage-compliance-audit-of-specific-diagnosis-codes-that-triple-s-advantage-inc-contract-h5774-submitted-to-cms/",
    years: "2016–17",
    sample: "281",
    unsupported: "73%",
    finding: "$297K refund",
  },
  {
    plan: "Industry-wide acute-stroke audit",
    href: "https://oig.hhs.gov/reports/all/2026/cms-potentially-overpaid-medicare-advantage-organizations-462-million-based-on-certain-unsupported-acute-stroke-diagnosis-codes/",
    years: "PY2021",
    sample: "97",
    unsupported: "100%",
    finding: "~$462M est.*",
  },
];

const PATTERNS = [
  "Acute stroke or myocardial infarction coded from an office claim with no matching inpatient claim. OIG found over 90% of these unsupported.",
  "Cancers coded as active with no treatment or management in the service year, where a history-of code would apply and does not risk-adjust.",
  "Sepsis without an inpatient claim, and embolism without anticoagulant management.",
  "Major depressive disorder without documented severity or treatment.",
  "Conditions supported only by a problem list, with no evidence in the encounter itself.",
];

/**
 * OigFindings - the published OIG audit record. Reference material: every row
 * links to the report it came from, and figures are OIG's own.
 */
export function OigFindings() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="oig-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal as="header" className="mb-8">
          <h2 id="oig-heading" className="apple-display text-[28px] md:text-[40px] mb-3">
            What OIG has found, by plan
          </h2>
          <p className="text-base md:text-lg apple-body leading-relaxed m-0">
            HHS-OIG audits high-risk diagnosis codes at named Medicare Advantage
            plans and publishes the results. Across the series, roughly 70% of
            audited high-risk codes were unsupported by the medical record.{" "}
            <SourceLink href="https://oig.hhs.gov/reports/all/2023/toolkit-to-help-decrease-improper-payments-in-medicare-advantage-through-the-identification-of-high-risk-diagnosis-codes/">
              OIG high-risk toolkit
            </SourceLink>
          </p>
        </Reveal>

        <Reveal className="mb-8">
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
                      <td className="px-5 py-3 evidence-mono text-[#0a0a12]">{row.finding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm apple-caption mt-4 mb-0">
            Each row links to the published HHS-OIG report, and the figures are
            OIG&rsquo;s findings and recommendations as stated in each one.
            *Estimated industry-wide overpayment, where OIG recommended
            preventive edits. In their published responses, the audited plans
            generally disputed OIG&rsquo;s findings, methodology, or
            recommendations, and each report includes the plan&rsquo;s response.
          </p>
        </Reveal>

        <Reveal>
          <h3 className="text-xl font-bold tracking-tight text-[#0a0a12] mb-4">
            The patterns behind the findings
          </h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            {PATTERNS.map((pattern) => (
              <li key={pattern} className="flex gap-3 items-start text-base apple-body leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#b42318] shrink-0" aria-hidden />
                {pattern}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
