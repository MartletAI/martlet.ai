import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export interface SliderPaginationProps {
  totalItems: number;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  getAriaLabel?: (index: number) => string;
}

const defaultArrowButtonClass =
  "group size-10 flex items-center justify-center rounded-full border border-[#A7A9AC] bg-transparent shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] cursor-pointer transition-colors";
const defaultArrowIconClass =
  "size-4 text-black transition-all group-hover:stroke-3";

export function SliderArrows({
  onPrev,
  onNext,
  className,
  prevButtonClassName,
  nextButtonClassName,
  iconClassName,
}: Pick<SliderPaginationProps, "onPrev" | "onNext"> & {
  className?: string;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
  iconClassName?: string;
}) {
  const iconCls = iconClassName ?? defaultArrowIconClass;

  return (
    <div className={cn("flex items-center justify-between px-2", className)}>
      <button
        type="button"
        onClick={onPrev}
        className={cn(defaultArrowButtonClass, prevButtonClassName)}
        aria-label="Previous"
      >
        <Icon name="chevron-left" className={iconCls} />
      </button>

      <button
        type="button"
        onClick={onNext}
        className={cn(defaultArrowButtonClass, nextButtonClassName)}
        aria-label="Next"
      >
        <Icon name="chevron-right" className={cn("stroke-current", iconCls)} />
      </button>
    </div>
  );
}

export function SliderDots({
  totalItems,
  currentIndex,
  onDotClick,
  getAriaLabel,
  className,
}: Pick<
  SliderPaginationProps,
  "totalItems" | "currentIndex" | "onDotClick" | "getAriaLabel"
> & { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {Array.from({ length: totalItems }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDotClick(index)}
          className="size-6 flex items-center justify-center cursor-pointer border-0 bg-transparent"
          aria-label={
            getAriaLabel ? getAriaLabel(index) : `Go to slide ${index + 1}`
          }
          aria-current={index === currentIndex ? "true" : undefined}
        >
          <span
            className={cn(
              "size-2.5 rounded-full transition-colors",
              index === currentIndex ? "bg-primary" : "bg-primary/34",
            )}
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  );
}

export function SliderPagination({
  totalItems,
  currentIndex,
  onPrev,
  onNext,
  onDotClick,
  getAriaLabel,
}: SliderPaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <SliderArrows onPrev={onPrev} onNext={onNext} />
      <SliderDots
        totalItems={totalItems}
        currentIndex={currentIndex}
        onDotClick={onDotClick}
        getAriaLabel={getAriaLabel}
      />
    </div>
  );
}
