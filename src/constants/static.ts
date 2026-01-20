import type { WorkflowType } from "@/app/(landing-page)/components/hero/workflow-card";

export const LANDING_PAGE = {
  HERO_TITLE: "Smarter Risk Adjustment with",
  HERO_TITLE_HIGHLIGHT: "MARTLET AI",
  HERO_TAGLINE: "On-premise, Secure, Real-time HCC Coding & Risk Profiling",
  HERO_CTA: "Book a Demo",
} as const;

export const WORKFLOWS: ReadonlyArray<{
  type: WorkflowType;
  label: string;
  subtitle: string;
  title: string;
  description: string;
  href: string;
  linkText: string;
}> = [
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
] as const;