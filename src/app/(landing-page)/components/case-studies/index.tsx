import { CaseStudyClients } from "./case-study-clients";

const TITLE = "Case Studies";

/**
 * CaseStudies — former interactive industry-partner case study content (tabs + detail panels).
 */
export function CaseStudies() {
  return (
    <section
      aria-labelledby="case-studies-heading"
      className="py-10 flex flex-col items-center justify-center mx-auto gap-11.5"
    >
      <h2 id="case-studies-heading" className="section-heading text-center">
        {TITLE}
      </h2>
      <CaseStudyClients />
    </section>
  );
}
