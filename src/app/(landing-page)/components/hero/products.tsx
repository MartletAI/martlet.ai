import { WorkflowCard } from "./workflow-card";

const WORKFLOW_CONTENT = {
  LABEL: "Products",
  TITLE: "Three Workflows",
  ITEMS: [
    {
      type: "prospective",
      label: "Prospective",
      subtitle: "point of care",
      title: "Clinicians-friendly gap capture",
      description:
        "Pre-visit and in-visit suggestions that are concise, actionable, and evidence-linked.",
      href: "/solutions/prospective",
      linkText: "View Prospective",
    },
    {
      type: "retrospective",
      label: "Retrospective",
      subtitle: "high volume",
      title: "High-precision chart review",
      description:
        "Find undercoded HCCs and validate existing codes with MEAT-aware evidence.",
      href: "/solutions/retrospective",
      linkText: "View Retrospective",
    },
    {
      type: "radv",
      label: "RADV",
      subtitle: "readiness at scale",
      title: "Mock audits + defensible packets",
      description:
        "Run proactive mock tests or execute reactive audits under deadline, without chaos.",
      href: "/solutions/radv",
      linkText: "View RADV",
    },
  ],
} as const;

export function Products() {
  return (
    <section
      className="container-main pt-[46px] pb-[40px] relative z-10"
      aria-labelledby="products-heading"
    >
      {/* Section Header */}
      <header className="text-center mb-[30px]">
        <span className="section-label mb-md block -ml-3" aria-hidden="true">
          {WORKFLOW_CONTENT.LABEL}
        </span>
        <h2 id="products-heading" className="section-heading tracking-tight -ml-3">
          {WORKFLOW_CONTENT.TITLE}
        </h2>
      </header>

      {/* Cards Grid */}
      <ul
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 list-none p-0 m-0 animate-stagger"
        role="list"
      >
        {WORKFLOW_CONTENT.ITEMS.map((workflow) => (
          <li key={workflow.type} className="contents">
            <WorkflowCard {...workflow} />
          </li>
        ))}
      </ul>
    </section>
  );
}
