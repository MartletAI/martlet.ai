import { Reveal } from "@/components/reveal";
import { CaseStudyClients } from "./case-study-clients";

const CONTENT = {
  TITLE: "In production at health systems, payers, and risk-bearing providers.",
} as const;

/**
 * CaseStudies — interactive case study content (tabs + detail panels).
 */
export function CaseStudies() {
  return (
    <section
      aria-labelledby="case-studies-heading"
      className="apple-section-gray py-20 md:py-24 flex flex-col items-center justify-center mx-auto gap-11.5"
    >
      <Reveal as="header" className="container-main text-center">
        <h2
          id="case-studies-heading"
          className="apple-display text-[30px] md:text-[40px] text-center max-w-[900px] mx-auto"
        >
          {CONTENT.TITLE}
        </h2>
      </Reveal>
      <CaseStudyClients />
    </section>
  );
}
