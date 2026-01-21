import { LANDING_PAGE } from "@/constants/landing-page";
import { WorkflowCard } from "./workflow-card";

export function Products() {
  return (
    <section
      className="container-main pt-[46px] pb-[40px] relative z-10"
      aria-labelledby="products-heading"
    >
      {/* Section Header */}
      <header className="text-center mb-[30px]">
        <span className="section-label mb-md block -ml-3" aria-hidden="true">
          {LANDING_PAGE.HERO.WORKFLOWS_LABEL}
        </span>
        <h2 id="products-heading" className="section-heading tracking-tight -ml-3">
          {LANDING_PAGE.HERO.WORKFLOWS_TITLE}
        </h2>
      </header>

      {/* Cards Grid */}
      <ul
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 list-none p-0 m-0 animate-stagger"
        role="list"
      >
        {LANDING_PAGE.HERO.WORKFLOWS.map((workflow) => (
          <li key={workflow.type} className="contents">
            <WorkflowCard {...workflow} />
          </li>
        ))}
      </ul>
    </section>
  );
}
