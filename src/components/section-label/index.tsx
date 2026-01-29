
import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface SectionLabelProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-semibold text-base leading-6 text-center",
        className
      )}

    >
      {children}
    </span>
  );
}
