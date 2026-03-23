import type { ComponentType } from "react";
import { JohnSnowLabs } from "./john-snow-labs";
import { WVUMedicine } from "./wvu-medicine";
import { ArkosHealth } from "./arkos-health";

export const CASE_STUDY_ASSET_BASE = "/assets/case-study" as const;

export type CaseStudyId = "johnSnowLabs" | "wvuMedicine" | "arkosHealth";

export interface CaseStudyDefinition {
  id: CaseStudyId;
  /** Human-readable name for accessibility and alt text */
  name: string;
  logoSrc: string;
  description: string;
  Content: ComponentType;
}

export const CASE_STUDIES = [
  {
    id: "johnSnowLabs",
    name: "John Snow Labs",
    logoSrc: `${CASE_STUDY_ASSET_BASE}/john-snow-labs.svg`,
    description:
      "John Snow Labs uses Martlet AI's engine to power its own suite of medical coding solutions",
    Content: JohnSnowLabs,
  },
  {
    id: "wvuMedicine",
    name: "WVU Medicine",
    logoSrc: `${CASE_STUDY_ASSET_BASE}/wvu-medicine.svg`,
    description:
      "WVU Medicine uses Martlet AI's prospective engine to run longitudinal (vertical) chart analysis and deliver point-of-care suggestions — strengthening documentation, improving care, and capturing appropriate value.",
    Content: WVUMedicine,
  },
  {
    id: "arkosHealth",
    name: "Arkos Health",
    logoSrc: `${CASE_STUDY_ASSET_BASE}/arkos-health.svg`,
    description:
      "Arkos uses Martlet across the full risk cycle — Retrospective, Prospective, and RADV — to drive measurable financial and operational impact.",
    Content: ArkosHealth,
  },
] as const satisfies readonly CaseStudyDefinition[];

export const DEFAULT_CASE_STUDY_ID: CaseStudyId = CASE_STUDIES[0].id;

export const CASE_STUDY_COUNT = CASE_STUDIES.length;
