"use client";

import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

const SIGNALS = [
  { label: "Prior year", value: "CKD stage 3 coded 2024 · absent 2025" },
  { label: "Lab", value: "eGFR 52 (11/2024) → 48 (03/2025)" },
  { label: "Pharmacy", value: "lisinopril 20mg · active" },
  { label: "Claims", value: "nephrology consult · 02/2025" },
] as const;

const STEP_MS = 620;
const HOLD_MS = 3400;

/**
 * SuspectDemo - a suspect card building its case signal by signal, ending
 * queued for pre-visit review. Synthetic data; reduced-motion aware.
 */
export function SuspectDemo() {
  const total = SIGNALS.length + 1;
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

  const done = step >= total;

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-[#0d9488]/20 bg-white shadow-[0_24px_64px_-24px_rgba(13,148,136,0.3)] overflow-hidden max-w-[560px] mx-auto"
    >
      <div className="bg-[#effcf9] px-6 md:px-7 py-4 flex items-baseline justify-between gap-3">
        <div>
          <div className="evidence-mono text-sm text-muted mb-0.5">
            Suspect · N18.32 · CKD stage 3b
          </div>
          <div className="text-lg font-bold tracking-tight text-[#0a0a12]">
            Pre-visit suggestion
          </div>
        </div>
        <span className="evidence-mono text-xs text-muted shrink-0">
          visit 04/22
        </span>
      </div>

      <ul className="list-none px-6 md:px-7 pt-6 pb-2 m-0 flex flex-col gap-3">
        {SIGNALS.map((signal, index) => {
          const revealed = step > index;
          return (
            <li
              key={signal.label}
              className={cn(
                "grid grid-cols-[92px_1fr] gap-3 items-baseline text-sm transition-all duration-300",
                revealed ? "opacity-100 translate-y-0" : "opacity-25 translate-y-1"
              )}
            >
              <span className="flex items-center gap-2 font-semibold text-[#1d1d1f]">
                {revealed ? (
                  <Icon name="badge-check" className="w-4 h-4 text-[#0f766e] shrink-0" aria-hidden />
                ) : (
                  <span className="w-4 h-4 rounded-full border-2 border-[#d2d2d7] shrink-0" aria-hidden />
                )}
                {signal.label}
              </span>
              <span className={cn("evidence-mono leading-snug", revealed ? "text-muted" : "text-transparent")}>
                {signal.value}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="px-6 md:px-7 pb-6 md:pb-7 pt-4">
        <div
          className={cn(
            "rounded-xl border bg-[#effcf9] border-[#0d9488]/30 px-4 py-3 transition-all duration-500",
            done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
          aria-live="polite"
        >
          <p className="text-sm font-bold text-[#0f766e] m-0 mb-1">
            Queued for pre-visit review · high confidence
          </p>
          <p className="text-xs apple-body m-0">
            Documentation cue: confirm stage from current labs and document the
            plan. The clinician decides — nothing is auto-coded.
          </p>
        </div>
      </div>
    </div>
  );
}
