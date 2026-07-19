"use client";

import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

const FIELDS = [
  { label: "Evidence sentence", value: "“A1c 8.1%. Type 2 diabetes with diabetic polyneuropathy — continue metformin, titrate gabapentin.”" },
  { label: "Source record", value: "progress_note_2025-03-14.pdf · page 4" },
  { label: "Encounter", value: "Office visit · face-to-face · detected" },
  { label: "Date of service", value: "03/14/2025 · inside collection year" },
  { label: "Provider", value: "J. Rivera, MD · acceptable specialty · credential verified" },
  { label: "Signature", value: "Electronically signed · authentication language present" },
  { label: "MEAT", value: "Evaluate · Treat" },
  { label: "Coversheet", value: "Enrollee matched · CDAT-ready ordering" },
] as const;

const STEP_MS = 480;
const HOLD_MS = 3400;

/**
 * PacketDemo - the evidence packet assembling itself, field by field, ending
 * submission-ready. Synthetic data; respects prefers-reduced-motion.
 */
export function PacketDemo() {
  const total = FIELDS.length + 1; // fields + ready banner
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

  const ready = step >= total;

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-[#7c3aed]/15 bg-white shadow-[0_24px_64px_-24px_rgba(124,58,237,0.28)] overflow-hidden max-w-[720px] mx-auto"
    >
      <div className="bg-[#f8f5ff] px-6 md:px-8 py-4 flex items-baseline justify-between gap-3">
        <div>
          <div className="evidence-mono text-sm text-muted mb-0.5">
            ICD-10 E11.42 → HCC 37 · v28
          </div>
          <div className="text-lg font-bold tracking-tight text-[#0a0a12]">
            Evidence packet · enrollee 014 of 200
          </div>
        </div>
        <span className="evidence-mono text-xs text-muted shrink-0">
          1 of 2 records
        </span>
      </div>

      <ul className="list-none p-6 md:p-8 m-0 flex flex-col gap-3.5">
        {FIELDS.map((field, index) => {
          const revealed = step > index;
          return (
            <li
              key={field.label}
              className={cn(
                "grid grid-cols-[150px_1fr] md:grid-cols-[180px_1fr] gap-3 items-baseline text-sm transition-all duration-300",
                revealed ? "opacity-100 translate-y-0" : "opacity-25 translate-y-1"
              )}
            >
              <span className="flex items-center gap-2 font-semibold text-[#1d1d1f]">
                {revealed ? (
                  <Icon name="badge-check" className="w-4 h-4 text-[#067647] shrink-0" aria-hidden />
                ) : (
                  <span className="w-4 h-4 rounded-full border-2 border-[#d2d2d7] shrink-0" aria-hidden />
                )}
                {field.label}
              </span>
              <span className={cn("evidence-mono leading-snug", revealed ? "text-muted" : "text-transparent")}>
                {field.value}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="px-6 md:px-8 pb-6 md:pb-8">
        <div
          className={cn(
            "rounded-xl border bg-[#ecfdf3] border-[#a6f4c5] px-4 py-3 flex items-center justify-between transition-all duration-500",
            ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
          aria-live="polite"
        >
          <span className="text-sm font-bold text-[#067647]">
            Packet ready — validates the audited HCC
          </span>
          <span className="evidence-mono text-xs text-[#067647]">
            one valid record suffices
          </span>
        </div>
      </div>
    </div>
  );
}
