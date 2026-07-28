import type { ComponentType } from "react";
import { JohnSnowLabs } from "./john-snow-labs";
import { WVUMedicine } from "./wvu-medicine";
import { ArkosHealth } from "./arkos-health";

const CASE_STUDY_ASSET_BASE = "/assets/case-study" as const;

type CaseStudyId = "johnSnowLabs" | "wvuMedicine" | "arkosHealth";

interface CaseStudyDefinition {
  id: CaseStudyId;
  /** Human-readable name for accessibility and alt text */
  name: string;
  logoSrc: string;
  description: string;
  Content: ComponentType;
}

/** Arkos leads: it's the one case study that names all three workflows,
 *  including RADV — the site's current emphasis. */
export const CASE_STUDIES = [
  {
    id: "arkosHealth",
    name: "Arkos Health",
    logoSrc: `${CASE_STUDY_ASSET_BASE}/arkos-health.svg`,
    description:
      "Arkos Health runs Martlet AI across the full risk cycle: retrospective recapture, prospective capture at point of care, and mock RADV testing with automated evidence packets.",
    Content: ArkosHealth,
  },
  {
    id: "johnSnowLabs",
    name: "John Snow Labs",
    logoSrc: `${CASE_STUDY_ASSET_BASE}/john-snow-labs.svg`,
    description:
      "When the company behind the medical language models used by 500+ healthcare organizations needed an HCC coding engine, it built — and now uses — Martlet AI in its own medical coding products.",
    Content: JohnSnowLabs,
  },
  {
    id: "wvuMedicine",
    name: "WVU Medicine",
    logoSrc: `${CASE_STUDY_ASSET_BASE}/wvu-medicine.svg`,
    description:
      "WVU Medicine, a 25-hospital academic health system, surfaced previously missed HCCs with automated longitudinal chart analysis and point-of-care suggestions inside Epic workflows — presented publicly at the NLP Summit.",
    Content: WVUMedicine,
  },
] as const satisfies readonly CaseStudyDefinition[];

export const CASE_STUDY_COUNT = CASE_STUDIES.length;
