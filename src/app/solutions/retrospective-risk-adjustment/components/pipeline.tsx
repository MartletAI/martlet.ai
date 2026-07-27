"use client";

import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/reveal";
import { SourceLink } from "@/components/source-link";
import { cn } from "@/lib/utils";

/** Colours sampled from the brochure's pipeline panel. */
const STAGES = [
  {
    title: "Ingest",
    detail:
      "Claims, EHR notes, scanned PDFs and bundled files — normalized and de-duplicated.",
    color: "#0071e3",
  },
  {
    title: "Prioritize",
    detail:
      "Charts ranked by expected RAF impact and documentation strength.",
    color: "#af52de",
  },
  {
    title: "Validate",
    detail:
      "Every code checked against the record, with the evidence linked to its page.",
    color: "#ff375f",
  },
  {
    title: "Review",
    detail:
      "Exceptions routed to your coders, with the evidence already attached.",
    color: "#ff9500",
  },
  {
    title: "Submit",
    detail:
      "Adds and deletes exported in the format your submission pipeline expects.",
    color: "#00a25b",
  },
] as const;

/** Stage 3 is the one that opens out below. Its tint runs from the column
 *  straight into the detail panel, so the two read as one object. */
const VALIDATE_INDEX = 2;
const TINT = "#fdeff3";
const VALIDATE_COLOR = STAGES[VALIDATE_INDEX].color;

const STEP_MS = 620;

export function Pipeline() {
  const total = STAGES.length;
  const [step, setStep] = useState(0);
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            setStep(reducedMotion ? total : 1);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, total]);

  useEffect(() => {
    if (reducedMotion || step === 0 || step >= total) return;
    const timer = setTimeout(() => setStep((s) => s + 1), STEP_MS);
    return () => clearTimeout(timer);
  }, [step, reducedMotion, total]);

  /** Opens the moment the Validate node itself lights up, not once the whole
   *  row finishes — the text used to wait on "done" (all 5 stages), which is
   *  ~1.2s later than the node it's meant to explain. */
  const validateActive = step > VALIDATE_INDEX;
  const done = step >= total;

  return (
    <section
      id="pipeline"
      className="apple-section-blue py-20 md:py-24 scroll-mt-24"
      aria-labelledby="pipeline-heading"
    >
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-12">
          <h2 id="pipeline-heading" className="apple-display text-[30px] md:text-[40px] mb-5">
            From your data to your submission file.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Charts, claims and prior coding go in. Verified codes and
            submission-ready files come out. One system, with no hand-offs to
            vendors or spreadsheets in between.
          </p>
        </Reveal>

        <div ref={ref} className="max-w-[1140px] mx-auto">
          <div className="rounded-[28px] bg-white border border-border p-7 md:p-10">
            {/* Stage row. The grid must match nothing else — the connectors
                live inside each column and reach exactly one gap to the
                right, so alignment holds at any width. */}
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8 list-none p-0 m-0">
              {STAGES.map((stage, index) => {
                const active = step > index;
                const isValidate = index === VALIDATE_INDEX;
                return (
                  <li key={stage.title} className="relative">
                    {/* Tint behind the Validate column, carrying down past the
                        row to meet the detail panel below. */}
                    {isValidate && (
                      <span
                        className="hidden lg:block absolute -inset-x-5 -top-5 -bottom-10 rounded-t-2xl"
                        style={{ backgroundColor: TINT }}
                        aria-hidden
                      />
                    )}

                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3 lg:block">
                        <span
                          className={cn(
                            "inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-[13px] font-bold shrink-0 transition-all duration-500",
                            active ? "scale-100 opacity-100" : "scale-90 opacity-45"
                          )}
                          style={{
                            backgroundColor: active ? stage.color : "#c9cfd8",
                          }}
                          aria-hidden
                        >
                          {index + 1}
                        </span>
                        <h3 className="text-[17px] font-bold tracking-tight text-[#0a0a12] m-0 lg:mt-3.5">
                          {stage.title}
                        </h3>
                      </div>
                      <p className="text-[15px] apple-body leading-relaxed m-0">
                        {stage.detail}
                      </p>

                      {/* Connector: from this node to the next column's left
                          edge. -right-8 is exactly the gap-x-8 between them. */}
                      {index < total - 1 && (
                        <span
                          className="hidden lg:block absolute left-[30px] -right-8 top-[11px] h-px transition-colors duration-500"
                          style={{
                            backgroundColor:
                              step > index + 1 ? STAGES[index + 1].color : "#dde7f4",
                          }}
                          aria-hidden
                        />
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Stage 3, opened out. The outer grid animates 0fr → 1fr, which
                is a real height transition (no JS measurement needed) — the
                shell genuinely grows downward as Validate activates, rather
                than reserving blank space and only fading its opacity. */}
            <div
              className="grid transition-[grid-template-rows] duration-700 ease-in-out"
              style={{ gridTemplateRows: validateActive ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    "relative rounded-2xl lg:rounded-t-none mt-10 p-6 md:p-8 transition-all duration-500",
                    validateActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-3"
                  )}
                  style={{ backgroundColor: TINT }}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-[13px] font-bold shrink-0"
                      style={{ backgroundColor: VALIDATE_COLOR }}
                      aria-hidden
                    >
                      3
                    </span>
                    <h3
                      className="text-[17px] font-bold tracking-tight m-0"
                      style={{ color: VALIDATE_COLOR }}
                    >
                      Verify. Add. Delete.
                    </h3>
                  </div>

                  <p className="text-[15px] apple-body leading-relaxed mb-6">
                    Validation returns more than a pass or a fail. Every code
                    comes back with{" "}
                    <strong className="font-semibold text-[#0a0a12]">
                      its full evidence mapping
                    </strong>{" "}
                    — the supporting sentence, the encounter and date of
                    service, the signing provider and their credentials, and
                    the source page. That mapping sorts each code one of two
                    ways.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
                    <div className="md:pr-8">
                      <p className="text-[15px] font-bold text-[#006cd9] mb-2">
                        Add — capture revenue
                      </p>
                      <p className="text-[15px] apple-body leading-relaxed m-0">
                        Documented but never coded. Returned{" "}
                        <strong className="font-semibold text-[#0a0a12]">
                          ranked by RAF impact
                        </strong>
                        , with the evidence attached, so a coder confirms
                        rather than goes hunting for the chart.
                      </p>
                    </div>
                    <div className="md:pl-8 md:border-l md:border-[#f0cdd7]">
                      <p className="text-[15px] font-bold text-[#a15e00] mb-2">
                        Delete — reduce risk
                      </p>
                      <p className="text-[15px] apple-body leading-relaxed m-0">
                        Problem-list carryovers, unsupported specialties,
                        missing signatures.{" "}
                        <strong className="font-semibold text-[#0a0a12]">
                          Flagged for removal with the reason
                        </strong>
                        , before submission rather than at reconciliation —
                        and what can still be corrected after a window closes
                        is set by CMS and changes over time (
                        <SourceLink href="https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-G/section-422.310">
                          42 CFR 422.310
                        </SourceLink>
                        ).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p
              className={cn(
                "text-[15px] apple-caption leading-relaxed m-0 mt-7 transition-opacity duration-500",
                done ? "opacity-100" : "opacity-0"
              )}
              aria-live="polite"
            >
              On a 12,400-chart run:{" "}
              <strong className="font-semibold text-[#0a0a12]">
                11,780 closed automatically
              </strong>{" "}
              · 620 routed to reviewers · deltas exported — every one with
              page-level evidence attached.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
