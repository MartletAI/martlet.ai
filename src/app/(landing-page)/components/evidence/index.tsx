import { Icon } from "@/components";
import { Reveal } from "@/components/reveal";

import { EvidenceDemo } from "./evidence-demo";

const EVIDENCE_CONTENT = {
  TITLE: "RADV — verify every code the way CMS verifies it.",
  SUBTITLE:
    "A detected encounter. A credentialed provider. A signed note. MEAT-supported documentation. Martlet AI runs the checks CMS applies at audit — automatically, on every chart — and links page-level evidence to every HCC. Codes that pass close on their own. Codes that don't get caught before CMS catches them.",
  CHECKS: [
    "Encounter detection",
    "Signature verification",
    "Provider credential check",
    "Page-level evidence links",
  ],
  FOOTNOTE: "All patient data shown is synthetically generated for illustration.",
} as const;

/**
 * EvidenceShowcase - the star of the page: what regulatory-grade HCC coding
 * means, shown live. Three synthetic charts cycle through the verification
 * pass with three different outcomes.
 */
export function EvidenceShowcase() {
  return (
    <section
      className="py-20 md:py-28 gradient-evidence"
      aria-labelledby="evidence-heading"
    >
      <div className="container-main">
        <Reveal className="text-center max-w-[780px] mx-auto mb-14">
          <h2
            id="evidence-heading"
            className="apple-display text-[30px] md:text-[40px] mb-5"
          >
            {EVIDENCE_CONTENT.TITLE}
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            {EVIDENCE_CONTENT.SUBTITLE}
          </p>
        </Reveal>

        {/* Live verification demo */}
        <Reveal className="max-w-[980px] mx-auto">
          <EvidenceDemo />
          <p className="text-xs text-muted-light text-center mt-4 mb-0">
            {EVIDENCE_CONTENT.FOOTNOTE}
          </p>
        </Reveal>

        {/* The CMS checklist, named */}
        <Reveal
          as="ul"
          stagger
          className="max-w-[980px] mx-auto mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0"
        >
          {EVIDENCE_CONTENT.CHECKS.map((check) => (
            <li
              key={check}
              className="flex items-center gap-2.5 text-sm md:text-base font-medium text-text-secondary-700 justify-center"
            >
              <Icon
                name="badge-check"
                className="w-5 h-5 text-primary shrink-0"
                aria-hidden
              />
              {check}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
