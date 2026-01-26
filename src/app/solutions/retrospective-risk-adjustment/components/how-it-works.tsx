import { HowItWorks as HowItWorksComponent, Step } from "@/components/how-it-works";
import StepOne from "@/../public/assets/step-1.png"
import StepTwo from "@/../public/assets/step-2.png"
import StepThree from "@/../public/assets/step-3.png"
import Image from "next/image";



const steps: Step[] = [
  {
    title: "Ingest & Normalize",
    description: "Pull clinical data, standardize, and de-duplicate at scale",
    points: [
      "Pull notes/PDFs, encounters, and claims",
      "Standardize and de-duplicate at scale",
      "Process millions of records reliably",
    ],
    fill: "bg-[#F48220]",
    icon:  <Image src={StepOne} alt="Step One" className="object-contain" />,
    id: "step-1"
  },
  {
    title: "Detect & Prioritize",
    description:
      "Identify gaps with MEAT evidence, ranked by impact",
    points: [
      'Identify HCC gaps + validate existing codes',
      "Link each finding to MEAT evidence (reduce overcoding risk)",
      "Prioritize chases by impact (RAF lift / yield)",
    ],
    fill: "bg-[#7F56D9]",
    icon: <Image src={StepTwo} alt="Step Two" className="object-contain" />,
    id: "step-2"
  },
  {
    title: "Review & ROI",
    description:
      "Fast reviews with linked docs and continuous improvement",
    points: [
      "Reviewer UI built for speed (page-level references)",
      "Push provider suggestions with links to historical docs",
      "Improve future suggestions with your feedback and standards",
    ],
    fill: "bg-[#0993DA]",
    icon: <Image src={StepThree} alt="Step Three" className="object-contain" />,
    id: "step-3"
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