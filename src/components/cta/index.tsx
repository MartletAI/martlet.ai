"use client";

import { useState } from "react";

import { Icon } from "../icon";
import { LeadForm } from "../lead-form";

interface CTAProps {
  title: string;
  description: string;
  /** Button label before it expands into the form. */
  submitLabel?: string;
  backgroundColor: string;
}

const PROOF_STATS = [
  { value: "95%", caption: "closed automatically" },
  { value: "99%", caption: "precision on automated codes" },
  { value: "100,000+", caption: "lives on the platform" },
] as const;

/**
 * CTA - shared closing panel. Pitch copy stays put on the left; the right
 * side shows proof stats + a button by default, and expands in place into
 * the lead form on click — no navigation to a separate page.
 */
export function CTA({ title, description, submitLabel = "Get in touch", backgroundColor }: CTAProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`py-16 md:py-20 ${backgroundColor} px-4 md:px-0`} aria-labelledby="cta-heading">
      <div className="container-main mx-auto">
        <div className="apple-section-dark relative overflow-hidden rounded-[32px] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: pitch */}
          <div className="flex flex-col justify-center px-6 py-12 md:px-14 md:py-16 text-left">
            <h2
              id="cta-heading"
              className="apple-display text-white! text-[26px] md:text-[36px] mb-5 max-w-[520px]"
            >
              {title}
            </h2>

            <p className="apple-body text-base md:text-lg leading-relaxed max-w-[480px] m-0">
              {description}
            </p>
          </div>

          {/* Right: proof + button, expands in place into the form */}
          <div className="px-6 py-10 md:px-10 md:py-12 flex flex-col justify-center">
            {expanded ? (
              <div className="bg-white rounded-[24px] p-6 md:p-8 animate-fade-in">
                <LeadForm submitLabel={submitLabel} />
                <p className="text-xs text-muted-light text-center mt-5 mb-0">
                  Trusted by 10 health systems and payers running Martlet AI today.
                </p>
              </div>
            ) : (
              <div className="animate-fade-in">
                <ul className="grid grid-cols-3 gap-4 list-none p-0 m-0 mb-8 border-t border-white/15 pt-6">
                  {PROOF_STATS.map((stat) => (
                    <li key={stat.caption}>
                      <div className="apple-stat text-[22px] md:text-[26px] text-[#fbbf24] mb-1.5">
                        {stat.value}
                      </div>
                      <p className="text-xs apple-caption leading-snug m-0">
                        {stat.caption}
                      </p>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="btn btn-lg bg-white text-[#101014] hover:bg-[#e8e8ed] h-[52px]! py-3! px-7! text-lg! font-semibold! w-full sm:w-auto"
                >
                  {submitLabel}
                  <Icon name="arrow-right" className="h-4 w-4" aria-hidden />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
