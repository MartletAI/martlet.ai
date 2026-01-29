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
        "flex items-center gap-4 justify-end",
        reverse && "flex-row-reverse justify-start"
      )}
    >
      <h3
        className={cn(
          width,
          "text-foreground text-lg font-semibold m-0",
          reverse ? "text-left" : "text-right"
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