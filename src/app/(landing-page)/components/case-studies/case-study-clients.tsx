"use client";

import { CASE_STUDIES, CASE_STUDY_COUNT } from "./case-study-config";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SliderArrows, SliderDots } from "@/components/SliderPagination";

const AUTO_ROTATE_MS = 3000;
/** Tab logos render at ~100×40; keep sizes tight for the responsive image hint */
const TAB_LOGO_SIZES = "100px";

/**
 * Interactive case study carousel: tabs (ARIA tablist), detail panel, dots + arrows, optional auto-advance.
 * Uses a numeric index as single source of truth to avoid repeated id→index lookups.
 */
export function CaseStudyClients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const tabPanelId = useId();

  const current = CASE_STUDIES[activeIndex] ?? CASE_STUDIES[0];
  const { Content: ActiveContent, description, id: currentId } = current;

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % CASE_STUDY_COUNT);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + CASE_STUDY_COUNT) % CASE_STUDY_COUNT);
  }, []);

  const selectByIndex = useCallback((index: number) => {
    if (index >= 0 && index < CASE_STUDY_COUNT) setActiveIndex(index);
  }, []);

  const handleTabListKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const { key } = event;
      if (
        key !== "ArrowRight" &&
        key !== "ArrowLeft" &&
        key !== "ArrowDown" &&
        key !== "ArrowUp" &&
        key !== "Home" &&
        key !== "End"
      ) {
        return;
      }
      event.preventDefault();

      if (key === "Home") {
        setActiveIndex(0);
        return;
      }
      if (key === "End") {
        setActiveIndex(CASE_STUDY_COUNT - 1);
        return;
      }
      if (key === "ArrowRight" || key === "ArrowDown") {
        setActiveIndex((idx) => (idx + 1) % CASE_STUDY_COUNT);
        return;
      }
      if (key === "ArrowLeft" || key === "ArrowUp") {
        setActiveIndex(
          (idx) => (idx - 1 + CASE_STUDY_COUNT) % CASE_STUDY_COUNT,
        );
      }
    },
    [],
  );

  const handleFocusIn = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleFocusOut = useCallback((event: FocusEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.relatedTarget as Node | null)
    ) {
      setIsPaused(false);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(goNext, AUTO_ROTATE_MS);
    return () => window.clearInterval(interval);
  }, [goNext, isPaused]);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center gap-10 container-main w-full"
      aria-labelledby="case-study-clients-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={handleFocusIn}
      onBlurCapture={handleFocusOut}
    >
      <h3 id="case-study-clients-heading" className="sr-only">
        Featured case studies
      </h3>

      <div
        role="tablist"
        aria-label="Select a case study"
        className="flex flex-wrap justify-center gap-4"
        onKeyDown={handleTabListKeyDown}
      >
        {CASE_STUDIES.map((study, index) => {
          const isSelected = index === activeIndex;
          return (
            <button
              key={study.id}
              type="button"
              role="tab"
              id={`case-study-tab-${study.id}`}
              tabIndex={isSelected ? 0 : -1}
              aria-selected={isSelected}
              aria-controls={tabPanelId}
              onClick={() => selectByIndex(index)}
              className={cn(
                "h-16 px-lg flex justify-center items-center gap-md",
                "border rounded-2xl cursor-pointer",
                "transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                isSelected
                  ? "border-primary bg-primary/8 shadow-xs"
                  : "border-border bg-white hover:border-primary/50",
              )}
            >
              <Image
                src={study.logoSrc}
                alt=""
                width={100}
                height={60}
                sizes={TAB_LOGO_SIZES}
                className="w-auto h-10 object-contain"
              />
              <span className="sr-only">{study.name}</span>
            </button>
          );
        })}
      </div>

      <div
        id={tabPanelId}
        role="tabpanel"
        aria-labelledby={`case-study-tab-${currentId}`}
        aria-live="polite"
        className="flex flex-col items-center w-full"
      >
        <p
          key={currentId}
          className={cn(
            "text-center text-base md:text-lg font-medium max-w-container w-full text-muted-foreground px-4 animate-case-study-enter",
            currentId === "wvuMedicine" ? "mb-4" : "mb-8 md:mb-11",
          )}
        >
          {description}
        </p>

        <div className="relative w-full min-h-[420px] rounded-[28px] border border-border bg-[#fbfbfd] mb-8 md:mb-11">
          <SliderArrows
            onPrev={goPrev}
            onNext={goNext}
            className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between pointer-events-none px-4"
            prevButtonClassName="pointer-events-auto border-border bg-white shadow-sm hover:border-primary/50 hover:bg-[#f5f5f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            nextButtonClassName="pointer-events-auto border-border bg-white shadow-sm hover:border-primary/50 hover:bg-[#f5f5f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            iconClassName="size-4 text-[#1d1d1f] transition-all group-hover:stroke-[2.5] group-hover:text-primary"
          />
          <div
            key={currentId}
            className="relative z-0 flex min-h-[min(520px,70vh)] w-full items-center justify-center px-14 animate-case-study-enter"
          >
            <ActiveContent />
          </div>
        </div>

        <SliderDots
          totalItems={CASE_STUDY_COUNT}
          currentIndex={activeIndex}
          onDotClick={selectByIndex}
          getAriaLabel={(index) =>
            `View ${CASE_STUDIES[index]?.name ?? `slide ${index + 1}`} details`
          }
        />
      </div>
    </section>
  );
}
