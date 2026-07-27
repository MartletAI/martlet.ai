import { Icon } from "@/components/icon";
import type { IconProps } from "@/components/icon";
import { Reveal } from "@/components/reveal";

interface Spec {
  title: string;
  body: string;
  icon: IconProps["name"];
  accent: string;
  chip: string;
}

/** Icons chosen from the set that inherits currentColor — several others
 *  carry hardcoded fills and would ignore the accent. */
const SPECS: Spec[] = [
  {
    title: "What it ingests",
    body: "Charts as PDFs or scans, with OCR run on anything that is not already text, along with claims extracts and the code lists you submitted. If you have been selected, it also takes the Enrollee Data List CMS posts in CDAT.",
    icon: "document",
    accent: "text-[#0165dc]",
    chip: "bg-[#e9f1fe]",
  },
  {
    title: "Sampling",
    body: "Sample on CMS's stratified methodology so your findings line up with how CMS draws, or verify every submitted HCC across the whole contract.",
    icon: "intersect-circle",
    accent: "text-[#7c3aed]",
    chip: "bg-[#f0eafe]",
  },
  {
    title: "Contracts and payment years",
    body: "Several contracts and several payment years run at once, each scored against the model and the guidance that applied to its own year.",
    icon: "layers-three",
    accent: "text-[#0d9488]",
    chip: "bg-[#e6f7f4]",
  },
  {
    title: "Thresholds and routing",
    body: "You set the confidence thresholds, how many review levels run, and which findings go to which queue.",
    icon: "brackets-check",
    accent: "text-[#d97706]",
    chip: "bg-[#fdf3e0]",
  },
  {
    title: "Reviewer workflow",
    body: "Exceptions arrive in queues with the evidence attached and ranked. Second-level review, QA sampling and sign-off run in the same system, and every action is recorded.",
    icon: "users",
    accent: "text-[#067647]",
    chip: "bg-[#e7f4ec]",
  },
  {
    title: "Evidence packets",
    body: "Each HCC gets a packet carrying the evidence sentence, the source page, the date of service, the provider and signature status, and the MEAT signals behind the decision.",
    icon: "file-checked",
    accent: "text-[#c026a3]",
    chip: "bg-[#fbeaf7]",
  },
  {
    title: "Reporting",
    body: "Confirmation and deletion rates roll up by coder, vendor, provider group and condition, alongside findings by HCC and by enrollee and an exposure estimate for the contract.",
    icon: "bar-line-chart",
    accent: "text-[#0165dc]",
    chip: "bg-[#e9f1fe]",
  },
  {
    title: "Exports and integration",
    body: "Packets, findings and submission deltas leave in the formats your submission pipeline and reporting stack already expect.",
    icon: "data-flow",
    accent: "text-[#7c3aed]",
    chip: "bg-[#f0eafe]",
  },
];

/**
 * Specifics - the spec surface a buyer scans before a pilot. Icons give the
 * densest block on the page a glanceable identity per item.
 */
export function Specifics() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="specifics-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12 md:mb-14">
          <h2
            id="specifics-heading"
            className="apple-display text-[30px] md:text-[40px] mb-5"
          >
            The specifics.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            The questions that come up before a pilot, answered here rather than
            in a follow-up call.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 list-none p-0 m-0"
        >
          {SPECS.map((spec) => (
            <li key={spec.title}>
              <div
                className={`inline-flex items-center justify-center size-10 rounded-xl mb-4 ${spec.chip}`}
              >
                <Icon
                  name={spec.icon}
                  className={`w-5 h-5 ${spec.accent}`}
                  aria-hidden
                />
              </div>
              <h3 className="text-[18px] font-bold tracking-tight text-[#0a0a12] leading-snug mb-2.5">
                {spec.title}
              </h3>
              <p className="text-base apple-body leading-relaxed m-0">
                {spec.body}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
