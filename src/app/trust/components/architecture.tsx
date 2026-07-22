import { Icon } from "@/components";
import { Reveal } from "@/components/reveal";

const DEPLOYMENTS = [
  {
    title: "On-premises",
    detail: "Runs on your hardware, inside your data center, under your physical controls.",
  },
  {
    title: "Private cloud (VPC)",
    detail: "Your AWS, Azure, or GCP tenancy — your IAM, your SIEM, your network rules.",
  },
  {
    title: "Air-gapped",
    detail: "Fully disconnected environments. Versioned release packages, applied by your team on your schedule.",
  },
] as const;

const INSIDE = [
  "EHR + claims feeds (FHIR R4, HL7, extracts)",
  "Document store (notes, PDFs, scans)",
  "Martlet AI engine — models, validation, audit log",
  "Reviewer UI + exception queues",
  "Exports: 837/EDPS deltas, packets, reports",
] as const;

/**
 * Architecture - the data-flow diagram in CSS: everything inside the
 * customer boundary, nothing crossing it.
 */
export function Architecture() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="architecture-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#0165dc]/10 text-[#0154b8]">
              The architecture
            </span>
          </p>
          <h2 id="architecture-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            One boundary. Everything inside it.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            The entire pipeline — ingestion, models, validation, review,
            exports — runs inside your network boundary. The diagram is short
            because the data path is.
          </p>
        </Reveal>

        {/* Boundary diagram */}
        <Reveal className="max-w-[860px] mx-auto mb-14">
          <div className="rounded-3xl border-2 border-dashed border-[#0165dc]/40 bg-[#f8fafd] p-6 md:p-8 relative">
            <span className="eyebrow-chip bg-[#0165dc] text-white absolute -top-4 left-6 md:left-8 text-[11px]!">
              Your environment
            </span>
            <ul className="list-none p-0 m-0 mt-2 flex flex-col gap-2.5">
              {INSIDE.map((item, index) => (
                <li key={item} className="flex items-center gap-3 bg-white rounded-xl border border-border px-4 py-3 text-[15px] font-medium text-[#1d1d1f]">
                  <span className="evidence-mono text-xs text-muted w-5 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                  {index < INSIDE.length - 1 && (
                    <Icon name="chevron-down" className="w-4 h-4 text-[#a8a8ad] ml-auto shrink-0" aria-hidden />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center mt-4">
            <span className="evidence-mono text-sm text-[#b42318] font-semibold">
              ⃠ nothing crosses the boundary — no vendor cloud, no external AI API, no PHI leaving your network
            </span>
          </div>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 list-none p-0 m-0 max-w-[1100px] mx-auto">
          {DEPLOYMENTS.map((deployment) => (
            <li key={deployment.title} className="rounded-3xl bg-[#fbfbfd] border border-border p-6 md:p-7">
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] mb-2">
                {deployment.title}
              </h3>
              <p className="text-[15px] apple-body leading-relaxed m-0">{deployment.detail}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
