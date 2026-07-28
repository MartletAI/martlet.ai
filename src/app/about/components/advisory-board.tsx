import { Reveal } from "@/components/reveal";
import { PersonCard } from "@/components/person-card";
import { getAdvisors } from "@/lib/authors";

const CONTENT = {
  TITLE: "Advisory board.",
} as const;

/**
 * AdvisoryBoard - the current advisors, each linking to its full
 * /author/[slug] page. Who's included is defined once in src/lib/authors.ts
 * (ADVISOR_SLUGS).
 */
export function AdvisoryBoard() {
  const advisors = getAdvisors();

  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="advisory-board-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12">
          <h2 id="advisory-board-heading" className="apple-display text-[32px] md:text-[48px]">
            {CONTENT.TITLE}
          </h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 m-0 max-w-[760px] mx-auto"
        >
          {advisors.map((advisor) => (
            <li key={advisor.slug}>
              <PersonCard {...advisor} />
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
