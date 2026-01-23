import "./styles.css";
import { HowItWorks as HowItWorksComponent, Step } from "@/components/how-it-works";
import { StepOne } from "@/components/assets/step-one";
import { StepTwo } from "@/components/assets/step-two";
import { StepThree } from "@/components/assets/step-three";

const steps: Step[] = [
  {
    title: "Pre-visit gap detection",
    description: "Start with a tight, prioritized set of risk gaps per member.",
    points: [
      "Identify likely supported conditions based on available documentation",
      "Prioritize by expected impact and documentation strength",
      "Route work to the right clinic, provider, or team",
    ],
    fill: "bg-[#F48220]",
    icon: <StepOne />,
  },
  {
    title: "Point-of-care suggestions",
    description:
      "Make it easy to act: concise, evidence-linked, and MEAT-aware.",
    points: [
      'Show "what to document" cues (assessment, plan, monitoring, etc.)',
      "Include provenance so clinicians can validate quickly",
      "Guardrails to reduce unsupported coding and noise",
    ],
    fill: "bg-[#7F56D9]",
    icon: <StepTwo />,
  },
  {
    title: "Close the loop",
    description:
      "Turn actions into measurable outcomes and downstream readiness.",
    points: [
      "Export outcomes for QA, analytics, and downstream submissions",
      "Track adoption, lift, and where documentation breaks down",
      "Improve future suggestions with your feedback and standards",
    ],
    fill: "bg-[#0993DA]",
    icon: <StepThree />,
  },
];

export function HowItWorks() {
  return (
    <HowItWorksComponent
      steps={steps}
      heading="One Simple Flow for Prospective Coding"
      subheading="Plan the visit → document with confidence → close gaps before they hit retrospective"
    />
  );
}