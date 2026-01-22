import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

interface SliderPaginationProps {
  totalItems: number;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  getAriaLabel?: (index: number) => string;
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
      <button
        type="button"
        onClick={onPrev}
        className="group size-10 flex items-center justify-center rounded-full border border-[#A7A9AC] bg-transparent shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] cursor-pointer transition-colors"
        aria-label="Previous"
        disabled={currentIndex === 0}
      >
        <Icon
          name="chevron-left"
          className="size-4 text-black transition-all group-disabled:text-[#A7A9AC] group-[:not(:disabled)]:hover:stroke-3"
        />
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalItems }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onDotClick(index)}
            className={cn(
              "size-2.5 rounded-full transition-colors cursor-pointer border-0",
              index === currentIndex ? "bg-primary" : "bg-primary/34"
            )}
            aria-label={getAriaLabel ? getAriaLabel(index) : `Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        className="group size-10 flex items-center justify-center rounded-full border border-[#A7A9AC] bg-transparent shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] cursor-pointer transition-colors"
        aria-label="Next"
        disabled={currentIndex === totalItems - 1}
      >
        <Icon
          name="chevron-right"
          className="size-4 stroke-current text-black transition-all group-hover:stroke-3 group-disabled:text-[#A7A9AC]"
        />
      </button>
    </div>
  );
}

