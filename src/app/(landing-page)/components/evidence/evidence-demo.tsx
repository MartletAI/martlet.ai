"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

type CheckState = "pass" | "warn" | "fail";
type VerdictKind = "auto" | "review" | "delete";

interface VerificationCheck {
  label: string;
  value: string;
  state: CheckState;
}

interface DemoCase {
  id: string;
  file: string;
  before: string;
  highlight: string;
  after: string;
  code: string;
  name: string;
  version: string;
  checks: VerificationCheck[];
  verdict: { kind: VerdictKind; label: string; detail: string };
}

const CASES: DemoCase[] = [
  {
    id: "close",
    file: "progress_note_2025-03-14.pdf · page 4",
    before: "Reviewed labs and medication adherence. ",
    highlight:
      "A1c 8.1%. Type 2 diabetes with diabetic polyneuropathy — continue metformin, titrate gabapentin.",
    after:
      " Follow-up in 3 months. Discussed diet and foot care; monofilament exam performed.",
    code: "ICD-10 E11.42 → HCC 37",
    name: "Diabetes with chronic complications",
    version: "v28",
    checks: [
      { label: "Encounter", value: "Office visit · detected", state: "pass" },
      { label: "Date of service", value: "03/14/2025", state: "pass" },
      {
        label: "Provider",
        value: "J. Rivera, MD · credential verified",
        state: "pass",
      },
      { label: "Signature", value: "Present · e-signed", state: "pass" },
      { label: "MEAT", value: "Evaluate · Treat", state: "pass" },
    ],
    verdict: {
      kind: "auto",
      label: "Closed automatically",
      detail: "confidence 0.97",
    },
  },
  {
    id: "review",
    file: "discharge_summary_2025-01-22.pdf · page 12",
    before: "Discharged on lisinopril and carvedilol. ",
    highlight:
      "Chronic systolic heart failure, EF 35% — continue guideline-directed therapy, cardiology follow-up in 2 weeks.",
    after: " Patient educated on daily weights and sodium restriction.",
    code: "ICD-10 I50.22 → HCC 226",
    name: "Heart failure, chronic systolic",
    version: "v28",
    checks: [
      {
        label: "Encounter",
        value: "Inpatient discharge · detected",
        state: "pass",
      },
      { label: "Date of service", value: "01/22/2025", state: "pass" },
      {
        label: "Provider",
        value: "T. Chen, DO · credential verified",
        state: "pass",
      },
      { label: "Signature", value: "Not found · unsigned", state: "warn" },
      { label: "MEAT", value: "Evaluate · Treat", state: "pass" },
    ],
    verdict: {
      kind: "review",
      label: "Routed to reviewer",
      detail: "signature missing",
    },
  },
  {
    id: "delete",
    file: "office_note_2024-11-05.pdf · page 2",
    before: "Seen today for ankle sprain after fall. ",
    highlight: "Past medical history: major depressive disorder.",
    after:
      " Exam focused on left ankle; X-ray negative. RICE protocol discussed.",
    code: "ICD-10 F33.1 → HCC 155",
    name: "Major depressive disorder",
    version: "v28",
    checks: [
      { label: "Encounter", value: "Office visit · detected", state: "pass" },
      { label: "Date of service", value: "11/05/2024", state: "pass" },
      {
        label: "Provider",
        value: "S. Okafor, MD · credential verified",
        state: "pass",
      },
      { label: "Signature", value: "Present · e-signed", state: "pass" },
      { label: "MEAT", value: "History only · not documented", state: "fail" },
    ],
    verdict: {
      kind: "delete",
      label: "Flagged for deletion",
      detail: "MEAT not met",
    },
  },
];

const CHECK_STYLES: Record<CheckState, { icon: string; text: string }> = {
  pass: { icon: "text-[#067647]", text: "text-muted" },
  warn: { icon: "text-[#b45309]", text: "text-[#b45309]" },
  fail: { icon: "text-[#b42318]", text: "text-[#b42318]" },
};

const VERDICT_STYLES: Record<VerdictKind, { box: string; text: string }> = {
  auto: { box: "bg-[#ecfdf3] border-[#a6f4c5]", text: "text-[#067647]" },
  review: { box: "bg-[#fffaeb] border-[#fedf89]", text: "text-[#b45309]" },
  delete: { box: "bg-[#fef3f2] border-[#fecdca]", text: "text-[#b42318]" },
};

const HIGHLIGHT_STYLES: Record<VerdictKind, string> = {
  auto: "bg-[#d9e9ff]",
  review: "bg-[#fef0c7]",
  delete: "bg-[#fee4e2]",
};

const STEP_MS = 550;
const HOLD_MS = 3200;

/**
 * EvidenceDemo - animated verification pass. Three synthetic charts cycle:
 * checks run one-by-one, and each chart ends differently — closed
 * automatically, routed to reviewer, flagged for deletion.
 */
export function EvidenceDemo() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  const current = CASES[active];
  const totalSteps = current.checks.length + 1; // checks + verdict

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) =>
      setReducedMotion(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Start when scrolled into view
  useEffect(() => {
    const node = containerRef.current;
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
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Animation timeline — all transitions scheduled, never synchronous
  useEffect(() => {
    if (!running) return;
    if (reducedMotion) {
      if (step >= totalSteps) return;
      const timer = setTimeout(() => setStep(totalSteps), 0);
      return () => clearTimeout(timer);
    }
    if (step < totalSteps) {
      const timer = setTimeout(() => setStep((s) => s + 1), STEP_MS);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setActive((a) => (a + 1) % CASES.length);
      setStep(0);
    }, HOLD_MS);
    return () => clearTimeout(timer);
  }, [running, reducedMotion, step, totalSteps]);

  const jumpTo = useCallback(
    (index: number) => {
      setActive(index);
      setStep(reducedMotion ? CASES[index].checks.length + 1 : 0);
    },
    [reducedMotion]
  );

  const verdictVisible = step >= totalSteps;
  const verdictStyle = VERDICT_STYLES[current.verdict.kind];

  return (
    <div ref={containerRef}>
      <div className="rounded-3xl border border-[#0165dc]/10 bg-white shadow-[0_24px_64px_-24px_rgba(1,101,220,0.25)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
          {/* Left: chart excerpt with highlighted evidence sentence */}
          <div className="p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-border bg-[#f8fafd] lg:min-h-[340px]">
            <div className="evidence-mono text-xs text-muted mb-4">
              {current.file}
            </div>
            <p className="text-base md:text-lg leading-relaxed text-text-secondary-700 m-0">
              {current.before}
              <mark
                className={cn(
                  "rounded-[4px] px-1 py-0.5 text-text-primary-900 transition-colors duration-500",
                  HIGHLIGHT_STYLES[current.verdict.kind]
                )}
              >
                {current.highlight}
              </mark>
              {current.after}
            </p>
          </div>

          {/* Right: mapped HCC + verification checklist running live */}
          <div className="p-7 md:p-10 bg-white lg:min-h-[340px]">
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <div className="evidence-mono text-sm text-muted mb-1">
                  {current.code}
                </div>
                <div className="text-lg font-bold tracking-tight text-[#0a0a12]">
                  {current.name}
                </div>
              </div>
              <span className="evidence-mono text-xs text-muted shrink-0">
                {current.version}
              </span>
            </div>

            <ul className="list-none p-0 m-0 flex flex-col gap-3 mb-7">
              {current.checks.map((check, index) => {
                const revealed = step > index;
                const style = CHECK_STYLES[check.state];
                return (
                  <li
                    key={check.label}
                    className={cn(
                      "flex items-center justify-between gap-3 text-sm transition-all duration-300",
                      revealed
                        ? "opacity-100 translate-y-0"
                        : "opacity-30 translate-y-1"
                    )}
                  >
                    <span className="flex items-center gap-2 text-[#1d1d1f] font-semibold">
                      {revealed ? (
                        <Icon
                          name="badge-check"
                          className={cn("w-4 h-4", style.icon)}
                          aria-hidden
                        />
                      ) : (
                        <span
                          className="w-4 h-4 rounded-full border-2 border-[#d2d2d7]"
                          aria-hidden
                        />
                      )}
                      {check.label}
                    </span>
                    <span
                      className={cn(
                        "evidence-mono text-right transition-opacity duration-300",
                        revealed ? style.text : "text-transparent"
                      )}
                    >
                      {check.value}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div
              className={cn(
                "rounded-xl border px-4 py-3 flex items-center justify-between transition-all duration-500",
                verdictStyle.box,
                verdictVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              )}
              aria-live="polite"
            >
              <span className={cn("text-sm font-bold", verdictStyle.text)}>
                {current.verdict.label}
              </span>
              <span
                className={cn("evidence-mono text-xs", verdictStyle.text)}
              >
                {current.verdict.detail}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Case selector dots */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {CASES.map((demoCase, index) => (
          <button
            key={demoCase.id}
            type="button"
            onClick={() => jumpTo(index)}
            aria-label={`Show example: ${demoCase.verdict.label}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              index === active
                ? "w-7 bg-[#0165dc]"
                : "w-2 bg-[#d2d2d7] hover:bg-[#a8a8ad]"
            )}
          />
        ))}
      </div>
    </div>
  );
}
