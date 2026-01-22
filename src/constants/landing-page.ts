

import { JohnSnowLabs } from "@/app/(landing-page)/components/industry-partners/john-snow-labs";
import { WVUMedicine } from "@/app/(landing-page)/components/industry-partners/wvu-medicine";
import { ArkosHealth } from "@/app/(landing-page)/components/industry-partners/arkos-health";
import { IconProps } from "@/components/Icon";

type IconName = IconProps["name"];

export const LANDING_PAGE = {
  HERO: {
    TITLE: "Smarter Risk Adjustment with",
    TITLE_HIGHLIGHT: "MARTLET AI",
    TAGLINE: "On-premise, Secure, Real-time HCC Coding & Risk Profiling",
    CTA: "Book a Demo",
    PARROT: "/assets/parrot.svg",
    WORKFLOWS_TITLE: "Three Workflows",
    WORKFLOWS_LABEL: "Products",
    WORKFLOWS: [
      {
        type: "prospective",
        label: "Prospective",
        subtitle: "point of care",
        title: "Clinicians-friendly gap capture",
        description:
          "Pre-visit and in-visit suggestions that are concise, actionable, and evidence-linked.",
        href: "/solutions/prospective",
        linkText: "View Prospective",
      },
      {
        type: "retrospective",
        label: "Retrospective",
        subtitle: "high volume",
        title: "High-precision chart review",
        description:
          "Find undercoded HCCs and validate existing codes with MEAT-aware evidence.",
        href: "/solutions/retrospective",
        linkText: "View Retrospective",
      },
      {
        type: "radv",
        label: "RADV",
        subtitle: "readiness at scale",
        title: "Mock audits + defensible packets",
        description:
          "Run proactive mock tests or execute reactive audits under deadline, without chaos.",
        href: "/solutions/radv",
        linkText: "View RADV",
      },
    ]
  },
  TRUST_AND_ACCURACY: {
    TITLE: "Built for Trust and Accuracy",
    SUBTITLE: "Martlet AI is designed for environments where compliance, precisions and transparency are non-negotiable",
    TRUST_AND_ACCURACY_IMAGE: "/assets/trust-and-accuracy.svg",
    TRUST_FACTORS: [
      {
        title:"Hippa-Compiance On-Premise Deployment",
        icon: "badge-check",
        backgroundColor: "bg-[#D7FFDB]",
        color: "text-[#147707]",
        border: "border border-[#27A738]",
        reverse: false,
        width: "w-[320px]"
      }, 
      {
        title: "Trusted by providers, Payers and the Full revenue cycle Ecosystem", 
        icon: "atom", 
        backgroundColor: "bg-[#DAF8FF]", 
        color: "text-[#1096D0]", 
        border: "#0098DA",
        reverse: false,
        width: "w-[320px]"
      }, 
      {
        title: "NLP & reasoning Engine Trained on real data", 
        icon: "layers", 
        backgroundColor: "bg-[#FFF5DB]", 
        color: "text-[#D06B18]", 
        border: "#FF7D43",
        reverse: true,
        width: "w-[240px]"  
      }, 
      {
        title: "Peer-Reviewed Accuracy Benchmark", 
        icon: "chart-bar", 
        backgroundColor: "bg-[#EBD8FF]", 
        color: "text-[#6C25CF]", 
        border: "#7F149A",
        reverse: true,
        width: "w-[240px]"
      }
    ]
  },
  INDUSTRY_PARTNERS: {
    TITLE: "Industry Partners",
    CLIENTS: {
      johnSnowLabs: {
        logo: "/clients/john-snow-labs.svg",
        id: "johnSnowLabs",
        description: "John Snow Labs uses Martlet AI's engine to power it's own suite of medical coding solutions",
        component: JohnSnowLabs
      },
      wvuMedicine: {
        logo: "/clients/wvu-medicine.svg",
        id: "wvuMedicine",
        description: "John Snow Labs uses Martlet AI's engine to power it's own suite of medical coding solutions",
        component: WVUMedicine,
        featureText: [
          {
            icon: "intersect-circle" as IconName,
            text: "Retrospective risk adjustment"
          },
          {
            icon: "bar-line-chart" as IconName,
            text: "Fully automated chart review"
          },
          {
            icon: "data-flow" as IconName,
            text: "Embedded in Epic workflows"
          },
          {
            icon: "brackets-check" as IconName,
            text: "Provider-focused code validation"
          }
        ]
      },
      arkosHealth: {
        logo: "/clients/arkos-health.svg",
        id: "arkosHealth",
        description: "Arkos uses Martlet across the full risk cycle - Retrospective, Prospective, and RADV - to drive measurable financial and operational impact.",
        component: ArkosHealth
      }
    }
  },
  WHY_MARTLET_AI: {
    TITLE: "Why Martlet AI ?",
    SUBTITLE: "Proven technology that delivers measurable results at enterprise scale",
    FEATURES: [
      {
        title: "Industry-leading performance",
        description: "Validated by peer reviewed publications",
        icon: "featured-icon" as IconName
      },
      {
        title: "Proven ROI",
        description: "Measurable lift in throughput and captured value.",
        icon: "coins-stacked" as IconName
      },
      {
        title: "Scalable by design",
        description: "High-volume workloads across millions of records.",
        icon: "layers-three" as IconName
      }
    ]
  },
  CTA: {
    TITLE: "Ready to Transform Your Risk Adjustment?",
    SUBTITLE: "Get Started",
    DESCRIPTION:"Join forward-thinking healthcare teams using Martlet AI for smarter coding and better outcomes.",
    CTA: "Request a Demo",
    IMAGE: "/assets/cta-bg.svg"
  }
} as const;



