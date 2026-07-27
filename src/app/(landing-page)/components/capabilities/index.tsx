import { Reveal } from "@/components/reveal";

interface Capability {
  title: string;
  description: string;
}

const CAPABILITIES: Capability[] = [
  {
    title: "Chase list prioritization",
    description:
      "Chases ranked by expected RAF impact and documentation strength. Work the charts that matter first, and track every chase to closure.",
  },
  {
    title: "CMS requirement verification",
    description:
      "Encounter detection, provider credential checks, and signature verification on every chart — the checks CMS coders run, run first.",
  },
  {
    title: "MEAT validation",
    description:
      "Monitor, Evaluate, Assess, Treat — validated at the sentence level, with v24/v28 dual mapping and payment-year discipline.",
  },
  {
    title: "Submission-ready 837 outputs",
    description:
      "Add and delete deltas formatted for your 837/EDPS pipeline. Validated codes flow to submission; unsupported codes flow out.",
  },
  {
    title: "One-click evidence packets",
    description:
      "Chart sentence, encounter ID, date of service, provider, credentials, signature — assembled into a CMS-ready packet per HCC.",
  },
  {
    title: "Mock RADV sampling",
    description:
      "RADV-style sampling and extrapolation modeling against your own contracts. See your exposure before CMS measures it.",
  },
  {
    title: "Reviewer UI + exception queues",
    description:
      "The 5% that needs judgment lands in queues with linked evidence. QA sampling and dual review built in.",
  },
  {
    title: "EHR + claims ingestion",
    description:
      "FHIR R4, HL7, CCDs, claims extracts, and scanned PDFs with OCR. Millions of charts, normalized and de-duplicated.",
  },
  {
    title: "Suspecting engine",
    description:
      "Suspected conditions surfaced from structured and unstructured data — labs, meds, notes — prioritized for pre-visit review.",
  },
  {
    title: "RAF analytics",
    description:
      "RAF lift, capture rate, coder throughput, and cost per chart — measured continuously, reportable to the CFO.",
  },
  {
    title: "Complete audit trail",
    description:
      "Who coded what, when, and based on which evidence — every action recorded, ready to hand to an auditor.",
  },
  {
    title: "Your deployment, your terms",
    description:
      "On-premises, private cloud (AWS, Azure, GCP), or air-gapped. Your existing security controls stay in effect, because nothing leaves them.",
  },
];

/** Rules cycle through the brand accent hues so the grid reads designed, not templated */
const CAPABILITY_RULE_COLORS = [
  "border-[#0165dc]",
  "border-[#7c3aed]",
  "border-[#0d9488]",
  "border-[#f5a623]",
] as const;

const CONTENT = {
  TITLE: "Everything a risk-adjustment program runs on.",
  SUBTITLE:
    "One engine under retrospective, RADV, and prospective — with the operational machinery around it.",
} as const;

/**
 * Capabilities - the full feature surface, tech-specs style. Keyword-dense
 * on purpose: this is what active buyers search and shortlist on.
 */
export function Capabilities() {
  return (
    <section
      className="bg-white py-20 md:py-24"
      aria-labelledby="capabilities-heading"
    >
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-12 md:mb-14">
          <h2
            id="capabilities-heading"
            className="apple-display text-[32px] md:text-[48px] mb-5"
          >
            {CONTENT.TITLE}
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            {CONTENT.SUBTITLE}
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9 list-none p-0 m-0"
        >
          {CAPABILITIES.map((capability, index) => (
            <li
              key={capability.title}
              className={`border-t-2 pt-5 ${CAPABILITY_RULE_COLORS[index % CAPABILITY_RULE_COLORS.length]}`}
            >
              <h3 className="text-[17px] font-bold tracking-tight text-[#0a0a12] leading-snug mb-2">
                {capability.title}
              </h3>
              <p className="text-[15px] apple-body leading-relaxed m-0">
                {capability.description}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
