"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-[#0a0a12]">{children}</strong>
);

interface Level {
  level: string;
  title: string;
  share: string;
  body: ReactNode;
  color: string;
}

const LEVELS: Level[] = [
  {
    level: "01",
    title: "Automated validation",
    share: "95% of codes",
    body: (
      <>
        Every check runs and each code is scored. The ones that are{" "}
        <B>clearly supported or clearly unsupported close here.</B>
      </>
    ),
    color: "#0165dc",
  },
  {
    level: "02",
    title: "Certified coder",
    share: "the remaining 5%",
    body: (
      <>
        <B>Exceptions only</B>, with the evidence already attached and ranked,
        so a coder confirms rather than goes looking.
      </>
    ),
    color: "#7c3aed",
  },
  {
    level: "03",
    title: "QA and audit lead",
    share: "a sample of the above",
    body: (
      <>
        Re-reviewed for consistency, with{" "}
        <B>recurring patterns reported back</B> by coder, vendor and provider
        group.
      </>
    ),
    color: "#d97706",
  },
  {
    level: "04",
    title: "Compliance sign-off",
    share: "final approval",
    body: (
      <>
        <B>Final approval</B>, recorded against the evidence as it stood at the
        time, and against the model version that produced it.
      </>
    ),
    color: "#067647",
  },
];

const STEP_MS = 620;

/**
 * ReviewLevels - the four review levels as a timeline that draws itself once
 * on scroll, rather than four static cards. Reveals and settles; it does not
 * loop, so it draws the eye once and then stays out of the way.
 */
export function ReviewLevels() {
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
            setStep(reducedMotion ? LEVELS.length : 1);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || step === 0 || step >= LEVELS.length) return;
    const timer = setTimeout(() => setStep((s) => s + 1), STEP_MS);
    return () => clearTimeout(timer);
  }, [step, reducedMotion]);

  /** Track fills from the first node to the last as levels activate. */
  const fillPercent =
    step <= 1 ? 0 : ((step - 1) / (LEVELS.length - 1)) * 100;

  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="review-levels-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[780px] mx-auto mb-14">
          <h2
            id="review-levels-heading"
            className="apple-display text-[30px] md:text-[40px] mb-5"
          >
            Four levels of review, in one workflow.
          </h2>
          <p className="text-lg md:text-xl apple-body leading-relaxed m-0">
            Findings arrive in the system your coders already work in. Four
            levels run by default, configured to your existing process, and
            every decision is recorded at each one.
          </p>
        </Reveal>

        <div ref={ref} className="max-w-[1140px] mx-auto">
          <div className="rounded-[28px] bg-[#f7f9fc] border border-border p-7 md:p-10">
            {/* Desktop: horizontal track behind the nodes */}
            <div className="hidden lg:block relative mb-7">
              <div className="absolute left-0 right-0 top-[7px] h-px bg-[#dfe3ea]" aria-hidden />
              <div
                className="absolute left-0 top-[7px] h-px bg-[#0165dc] transition-[width] duration-500 ease-out"
                style={{ width: `${fillPercent}%` }}
                aria-hidden
              />
              <ol className="relative grid grid-cols-4 list-none p-0 m-0">
                {LEVELS.map((item, index) => (
                  <li key={item.level}>
                    <span
                      className={cn(
                        "block w-3.5 h-3.5 rounded-full transition-all duration-500",
                        step > index ? "scale-100" : "scale-75"
                      )}
                      style={{
                        backgroundColor: step > index ? item.color : "#c9cfd8",
                      }}
                      aria-hidden
                    />
                  </li>
                ))}
              </ol>
            </div>

            {/* Level content — 4-up on desktop, stacked with a rail on mobile */}
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 list-none p-0 m-0">
              {LEVELS.map((item, index) => {
                const active = step > index;
                return (
                  <li
                    key={item.level}
                    className={cn(
                      "transition-all duration-500 lg:pr-4",
                      active ? "opacity-100 translate-y-0" : "opacity-40 translate-y-1"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-2 lg:hidden">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: active ? item.color : "#c9cfd8" }}
                        aria-hidden
                      />
                      <span
                        className="evidence-mono text-xs font-bold"
                        style={{ color: item.color }}
                      >
                        Level {item.level}
                      </span>
                    </div>
                    <span
                      className="hidden lg:block evidence-mono text-xs font-bold mb-2"
                      style={{ color: item.color }}
                    >
                      Level {item.level}
                    </span>

                    <h3 className="text-lg font-bold tracking-tight text-[#0a0a12] leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p
                      className="text-[14px] font-semibold mb-2.5 evidence-mono"
                      style={{ color: item.color }}
                    >
                      {item.share}
                    </p>
                    <p className="text-base apple-body leading-relaxed m-0">
                      {item.body}
                    </p>
                  </li>
                );
              })}
            </ol>

            <p className="text-[15px] apple-caption leading-relaxed m-0 mt-8 pt-6 border-t border-[#dfe3ea]">
              Once recorded, a decision cannot be altered or removed. Every one
              shows who made it, on what evidence, and which model version
              produced it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
