import { WVUMedicine } from "@/app/(landing-page)/components/case-studies/wvu-medicine";
import { Reveal } from "@/components/reveal";

/**
 * Wvu - the anchor case study for prospective: in production at a
 * 25-hospital academic health system, presented publicly at the NLP Summit.
 */
export function Wvu() {
  return (
    <section className="apple-section-gray py-20 md:py-24" aria-labelledby="wvu-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[800px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#d97706]/10 text-[#b45309]">
              In production
            </span>
          </p>
          <h2 id="wvu-heading" className="apple-display text-[32px] md:text-[48px] mb-5">
            WVU Medicine runs this, inside Epic.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            A 25-hospital academic health system uses Martlet AI&rsquo;s
            prospective engine for longitudinal chart analysis and
            point-of-care suggestions — presented publicly at the NLP Summit:
            &ldquo;Maximizing Patient Care through AI-Enhanced HCC Code
            Discovery.&rdquo;
          </p>
        </Reveal>

        <Reveal>
          <WVUMedicine />
        </Reveal>
      </div>
    </section>
  );
}
