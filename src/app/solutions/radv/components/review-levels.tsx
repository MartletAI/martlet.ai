import { Reveal } from "@/components/reveal";

const LEVELS = [
  {
    level: "01",
    title: "Automated validation",
    body: "Every check runs and each code is scored. 95% close here, either supported or flagged.",
    accent: "text-[#0165dc]",
    dot: "bg-[#0165dc]",
  },
  {
    level: "02",
    title: "Certified coder",
    body: "Exceptions only, with the evidence already attached and ranked.",
    accent: "text-[#0090e8]",
    dot: "bg-[#0090e8]",
  },
  {
    level: "03",
    title: "QA and audit lead",
    body: "A sample is re-reviewed for consistency, and recurring patterns are reported.",
    accent: "text-[#7c3aed]",
    dot: "bg-[#7c3aed]",
  },
  {
    level: "04",
    title: "Compliance sign-off",
    body: "Final approval, recorded against the evidence as it stood at the time.",
    accent: "text-[#067647]",
    dot: "bg-[#067647]",
  },
] as const;

/**
 * ReviewLevels - the human oversight story. Automated validation is the first
 * of four levels, not the whole workflow.
 */
export function ReviewLevels() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="review-levels-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-12">
          <h2
            id="review-levels-heading"
            className="apple-display text-[32px] md:text-[48px] mb-5"
          >
            Four levels of review, in one workflow.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Findings arrive in the system your coders already work in. Four
            levels run by default, configured to your existing process, and
            every decision is recorded at each one.
          </p>
        </Reveal>

        <Reveal
          as="ol"
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0 m-0 max-w-[1200px] mx-auto mb-10"
        >
          {LEVELS.map((item) => (
            <li
              key={item.level}
              className="rounded-[28px] bg-[#fbfbfd] border border-border p-7 h-full"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className={`w-2 h-2 rounded-full ${item.dot}`} aria-hidden />
                <span className={`evidence-mono text-xs font-bold ${item.accent}`}>
                  Level {item.level}
                </span>
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] leading-snug mb-2.5">
                {item.title}
              </h3>
              <p className="text-[15px] apple-body leading-relaxed m-0">
                {item.body}
              </p>
            </li>
          ))}
        </Reveal>

        <Reveal className="max-w-[820px] mx-auto">
          <div className="rounded-3xl border border-border bg-[#f5f5f7] p-6 md:p-7">
            <p className="text-base apple-body leading-relaxed m-0 text-center">
              Once recorded, a decision cannot be altered or removed. Every one
              shows who made it, on what evidence, and which model version
              produced it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
