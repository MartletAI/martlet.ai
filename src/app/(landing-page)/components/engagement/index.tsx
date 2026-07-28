import { Reveal } from "@/components/reveal";

const TERMS = [
  {
    title: "An annual license",
    body: "You pay a license fee for the year. Not per chart, not per code we validate, and not a percentage of what you capture.",
  },
  {
    title: "Priced to your size",
    body: "The fee is based on how many contracts and lives you run, and stays fixed for the year. Add contracts, volume or payment years without renegotiating.",
  },
  {
    title: "Configured to your process",
    body: "We set the review levels, thresholds and exports to match how your team works, and connect to the systems they already use.",
  },
] as const;

/**
 * Engagement - the pricing and engagement model, published once, sitewide.
 * No competitor in this category puts this on their site.
 */
export function Engagement() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="engagement-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12">
          <h2 id="engagement-heading" className="apple-display text-[30px] md:text-[40px]">
            How the engagement works.
          </h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 md:grid-cols-3 gap-5 list-none p-0 m-0 max-w-[1100px] mx-auto"
        >
          {TERMS.map((term) => (
            <li
              key={term.title}
              className="rounded-[28px] bg-[#fbfbfd] border border-border p-7 md:p-8 h-full"
            >
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] leading-snug mb-3">
                {term.title}
              </h3>
              <p className="text-[15px] apple-body leading-relaxed m-0">
                {term.body}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
