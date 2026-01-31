import { Icon, IconProps } from "@/components";
import { cn } from "@/lib/utils";

interface TrustFactorProps {
  title: string;
  icon: IconProps["name"];
  backgroundColor: string;
  color: string;
  border: string;
  reverse: boolean;
  width: string;
}

export function TrustFactor({
  title,
  icon,
  backgroundColor,
  color,
  border,
  reverse,
  width,
}: TrustFactorProps) {
  return (
    <article
      className={cn(
        "flex gap-4",
        // Mobile: Icon Top (col-reverse), Left aligned
        "flex-col-reverse items-start",
        // Tablet: Icon Top, Centered
        "md:items-center",
        // Desktop: Butterfly layout
        !reverse && "lg:flex-row lg:justify-end lg:items-center",
        reverse && "lg:flex-row-reverse lg:justify-start lg:items-center"
      )}
    >
      <h3
        className={cn(
          width,
          "text-foreground text-lg font-semibold m-0",
          // Mobile: Left aligned text
          "text-left",
          // Tablet: Center aligned text
          "md:text-center",
          // Desktop: Side specific alignment
          !reverse && "lg:text-right",
          reverse && "lg:text-left"
        )}
      >
        {title}
      </h3>
      <div
        className={cn(
          backgroundColor,
          color,
          border,
          "rounded-full size-18 flex justify-center items-center shrink-0"
        )}
        aria-hidden="true"
      >
        <Icon name={icon} className="size-11.5" />
      </div>
    </article>
  );
}