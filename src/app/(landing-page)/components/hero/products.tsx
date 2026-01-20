import { WORKFLOWS } from "@/constants/static";
import { WorkflowCard } from "./workflow-card";

export function Products() {
  return (
    <section
      className="container-main pt-[46px] pb-[40px] relative z-10"
      aria-labelledby="products-heading"
    >
      {/* Section Header */}
      <header className="text-center mb-[30px]">
        <span className="section-label mb-md block" aria-hidden="true">
          Products
        </span>
        <h2 id="products-heading" className="section-heading">
          Three Workflows
        </h2>
      </header>

      {/* Cards Grid */}
      <ul
        className="grid grid-cols-[repeat(auto-fit,minmax(var(--size-products-min),1fr))] gap-xl list-none p-0 m-0 animate-stagger"
        role="list"
      >
        {WORKFLOWS.map((workflow) => (
          <li key={workflow.type} className="contents">
            <WorkflowCard {...workflow} />
          </li>
        ))}
      </ul>
    </section>
  );
}
