import { Reveal } from "@/components/reveal";

const INHERITED = [
  { value: "500+", caption: "enterprise healthcare organizations on the John Snow Labs stack" },
  { value: "#1", caption: "on 12 of 13 medical benchmarks vs. frontier general-purpose LLMs" },
  { value: "30+", caption: "peer-reviewed papers behind the medical language models" },
  { value: "2B+", caption: "patient notes processed at production scale on the stack" },
];

/**
 * Story - the origin: a John Snow Labs company, built for the long term.
 */
export function Story() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="story-heading">
      <div className="container-main">
        <Reveal className="max-w-[760px] mx-auto mb-14">
          <p className="mb-5 text-center">
            <span className="eyebrow-chip bg-[#0165dc]/10 text-[#0154b8]">
              Where we come from
            </span>
          </p>
          <h2 id="story-heading" className="apple-display text-[32px] md:text-[48px] mb-6 text-center">
            A John Snow Labs company.
          </h2>
          <div className="text-lg apple-body leading-relaxed flex flex-col gap-5">
            <p className="m-0">
              Martlet AI is the first of several planned John Snow Labs
              spinoffs, each targeting a specific high-stakes healthcare
              workflow. Ours is risk adjustment: HCC coding that has to hold up
              under a CMS audit three years after submission.
            </p>
            <p className="m-0">
              The medical language models, deployment posture, and AI
              governance framework underneath Martlet AI come from the John
              Snow Labs production stack — the same one running healthcare NLP
              in production at more than 500 enterprise healthcare and
              life-sciences organizations. John Snow Labs also uses Martlet
              AI&rsquo;s engine in its own medical coding products.
            </p>
            <p className="m-0">
              We are wholly funded by John Snow Labs — a profitable,
              cash-flow-positive healthcare AI company. No venture financing,
              no debt, no clock running to return capital. That structure is a
              customer feature: we are aligned with the organizations that run
              our software, not with a fundraising calendar.
            </p>
          </div>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 list-none p-0 m-0 max-w-[1100px] mx-auto border-t border-[#d2d2d7] pt-10">
          {INHERITED.map((stat) => (
            <li key={stat.caption} className="text-center lg:text-left">
              <div className="apple-stat whitespace-nowrap text-[34px] md:text-[38px] mb-2.5 text-[#0165dc]">
                {stat.value}
              </div>
              <p className="text-[15px] font-medium apple-caption leading-snug m-0 text-balance">
                {stat.caption}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
