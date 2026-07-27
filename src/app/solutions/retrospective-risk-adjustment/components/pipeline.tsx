"use client";

import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    title: "Chase list",
    detail: "12,400 charts ranked by expected RAF impact and documentation strength",
    accent: "#0165dc",
  },
  {
    title: "Ingest",
    detail: "FHIR R4 · HL7 · claims extracts · scanned PDFs with OCR — normalized, de-duplicated",
    accent: "#0090e8",
  },
  {
    title: "Verify",
    detail: "Encounter · signature · credential · DOS · MEAT — page-level evidence linked per HCC",
    accent: "#7c3aed",
  },
  {
    title: "Exceptions",
    detail: "The 5% that needs judgment lands in reviewer queues with linked evidence",
    accent: "#d97706",
  },
  {
    title: "Submit",
    detail: "Adds and deletes exported in the format your submission pipeline expects",
    accent: "#067647",
  },
] as const;

const STEP_MS = 900;
const HOLD_MS = 3000;

/**
 * Pipeline - the retrospective flow, chase list to submission file, stages
 * lighting up in sequence. Respects prefers-reduced-motion.
 */
export function Pipeline() {
  const total = STAGES.length;
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRunning(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    if (reducedMotion) {
      if (step >= total) return;
      const timer = setTimeout(() => setStep(total), 0);
      return () => clearTimeout(timer);
    }
    if (step < total) {
      const timer = setTimeout(() => setStep((s) => s + 1), STEP_MS);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setStep(0), HOLD_MS);
    return () => clearTimeout(timer);
  }, [running, reducedMotion, step, total]);

  return (
    <section
      id="pipeline"
      className="apple-section-gray py-20 md:py-24 scroll-mt-24"
      aria-labelledby="pipeline-heading"
    >
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[760px] mx-auto mb-14">
          <h2 id="pipeline-heading" className="apple-display text-[30px] md:text-[40px] mb-5">
            One pipeline, from chase list to submission file.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            No hand-offs between vendors, spreadsheets, and submission teams —
            one engine and one audit trail, end to end.
          </p>
        </Reveal>

        <div ref={ref} className="max-w-[1240px] mx-auto">
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 list-none p-0 m-0">
            {STAGES.map((stage, index) => {
              const active = step > index;
              return (
                <li key={stage.title} className="relative">
                  <div
                    className={cn(
                      "rounded-[24px] border bg-white p-6 h-full transition-all duration-500",
                      active
                        ? "opacity-100 translate-y-0 shadow-[0_10px_30px_rgba(10,10,18,0.08)]"
                        : "opacity-40 translate-y-1 border-black/5"
                    )}
                    style={active ? { borderColor: `${stage.accent}44` } : undefined}
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <span
                        className={cn(
                          "inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold transition-colors duration-500"
                        )}
                        style={{ backgroundColor: active ? stage.accent : "#d2d2d7" }}
                      >
                        {active ? (
                          <Icon name="checked" className="w-3 h-3" aria-hidden />
                        ) : (
                          index + 1
                        )}
                      </span>
                      <h3 className="text-[17px] font-bold tracking-tight text-[#0a0a12] m-0">
                        {stage.title}
                      </h3>
                    </div>
                    <p className="text-[15px] apple-body leading-relaxed m-0">{stage.detail}</p>
                  </div>
                  {/* Connector arrow (desktop) */}
                  {index < STAGES.length - 1 && (
                    <span
                      className={cn(
                        "hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-10 items-center justify-center transition-opacity duration-500",
                        step > index + 1 ? "opacity-100" : "opacity-25"
                      )}
                      aria-hidden
                    >
                      <Icon name="arrow-right" className="w-4 h-4 text-[#6e6e73]" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
          <p
            className={cn(
              "evidence-mono text-sm text-center mt-8 mb-0 transition-opacity duration-500",
              step >= total ? "opacity-100" : "opacity-0"
            )}
            aria-live="polite"
          >
            <span className="text-[#067647] font-bold">11,780 closed automatically</span>
            <span className="text-muted"> · 620 to reviewers · deltas exported — all with page-level evidence</span>
          </p>
        </div>
      </div>
    </section>
  );
}
