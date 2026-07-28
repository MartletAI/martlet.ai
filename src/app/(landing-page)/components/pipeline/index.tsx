"use client";

import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components";
import { Reveal } from "@/components/reveal";
import { SmartLink } from "@/components/cta/smart-link";
import { cn } from "@/lib/utils";

/** Colours sampled from the brochure's pipeline panel — same palette as the
 *  full version on the retrospective page. This is the condensed row only;
 *  the Validate stage's add/delete detail lives on that page, not here. */
const STAGES = [
  {
    title: "Ingest",
    detail: "Claims, EHR notes, scanned PDFs — normalized and de-duplicated.",
    color: "#0071e3",
  },
  {
    title: "Prioritize",
    detail: "Charts ranked by expected RAF impact and documentation strength.",
    color: "#af52de",
  },
  {
    title: "Validate",
    detail: "Every code checked against the record, evidence linked to its page.",
    color: "#ff375f",
  },
  {
    title: "Review",
    detail: "Exceptions routed to your coders, with the evidence already attached.",
    color: "#ff9500",
  },
  {
    title: "Submit",
    detail: "Adds and deletes exported in the format your submission pipeline expects.",
    color: "#00a25b",
  },
] as const;

const STEP_MS = 620;

/**
 * Pipeline - retrospective's flow, condensed to the row for the homepage.
 * Scoped and labeled explicitly to retrospective, not a claim about a shared
 * engine across all three workflows.
 */
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

  const done = step >= total;

  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="home-pipeline-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-12">
          <h2
            id="home-pipeline-heading"
            className="apple-display text-[30px] md:text-[40px] mb-5"
          >
            Retrospective — from your data to your submission file.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Charts, claims and prior coding go in. Verified codes and
            submission-ready files come out, with no hand-offs to vendors or
            spreadsheets in between.
          </p>
        </Reveal>

        <div ref={ref} className="max-w-[1140px] mx-auto">
          <div className="rounded-[28px] bg-[#fbfbfd] border border-border p-7 md:p-10">
            {/* The grid must match nothing else — connectors live inside each
                column and reach exactly one gap to the right, so alignment
                holds at any width. */}
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8 list-none p-0 m-0">
              {STAGES.map((stage, index) => {
                const active = step > index;
                return (
                  <li key={stage.title} className="relative">
                    <div className="flex items-center gap-3 mb-3 lg:block">
                      <span
                        className={cn(
                          "inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-[13px] font-bold shrink-0 transition-all duration-500",
                          active ? "scale-100 opacity-100" : "scale-90 opacity-45"
                        )}
                        style={{ backgroundColor: active ? stage.color : "#c9cfd8" }}
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
                  </li>
                );
              })}
            </ol>
          </div>

          <p
            className={cn(
              "text-center mt-8 transition-opacity duration-500",
              done ? "opacity-100" : "opacity-0"
            )}
          >
            <SmartLink
              href="/solutions/retrospective-risk-adjustment"
              className="link-arrow text-base!"
            >
              See the full retrospective workflow
              <Icon name="arrow-right" className="w-4 h-4" aria-hidden />
            </SmartLink>
          </p>
        </div>
      </div>
    </section>
  );
}
