import { Reveal } from "@/components/reveal";
import { WorkflowCard } from "./workflow-card";

const WORKFLOW_CONTENT = {
  TITLE: "Martlet AI covers all three risk-adjustment workflows.",
  SUBTITLE:
    "RADV, retrospective, and prospective — each covers a different part of the cycle, and you can run one or all three.",
  ITEMS: [
    {
      type: "radv",
      label: "RADV",
      subtitle: "audit readiness, year-round",
      title: "Regulatory-grade RADV",
      description:
        "Mock audits with RADV-style sampling and extrapolation exposure modeling. See which HCCs survive before CMS does — evidence packets in one click.",
      href: "/solutions/radv",
      linkText: "View RADV",
    },
    {
      type: "retrospective",
      label: "Retrospective",
      subtitle: "high volume",
      title: "95% of cases closed automatically",
      description:
        "Prioritized chase lists, undercoded HCC capture, MEAT validation, and submission-ready deltas. Reviewers work exceptions, not stacks of PDFs.",
      href: "/solutions/retrospective-risk-adjustment",
      linkText: "View Retrospective",
    },
    {
      type: "prospective",
      label: "Prospective",
      subtitle: "point of care",
      title: "Suggestions clinicians act on",
      description:
        "Suspected conditions from structured and unstructured data, delivered pre-visit and in-visit as concise, evidence-linked suggestions in your EHR.",
      href: "/solutions/prospective-risk-adjustment",
      linkText: "View Prospective",
    },
  ],
} as const;

export function Products() {
  return (
    <section
      className="apple-section-gray py-20 md:py-24 relative z-10"
      aria-labelledby="products-heading"
    >
      <div className="container-main">
        {/* Section Header */}
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12">
          <h2
            id="products-heading"
            className="apple-display text-[30px] md:text-[40px] mb-5"
          >
            {WORKFLOW_CONTENT.TITLE}
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            {WORKFLOW_CONTENT.SUBTITLE}
          </p>
        </Reveal>

        {/* Cards Grid */}
        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 list-none p-0 m-0"
        >
          {WORKFLOW_CONTENT.ITEMS.map((workflow) => (
            <li key={workflow.type} className="h-full">
              <WorkflowCard {...workflow} />
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
