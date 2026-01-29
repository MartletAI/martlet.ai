import { Icon } from "@/components";

export type WorkflowType = "prospective" | "retrospective" | "radv";

interface WorkflowCardProps {
  type: WorkflowType;
  label: string;
  subtitle: string;
  title: string;
  description: string;
  href: string;
  linkText: string;
}

export function WorkflowCard({
  label,
  subtitle,
  title,
  description,
  href,
  linkText,
}: WorkflowCardProps) {
  return (
    <article
      className="flex items-center justify-center p-1.5 bg-surface border border-black/8 rounded-[3rem] shadow-[0_3px_20.6px_0_rgba(0,0,0,0.1)] min-h-[270px] h-full transition-shadow duration-200 hover:shadow-[0_6px_28px_0_rgba(0,0,0,0.12)]"
      aria-labelledby={`card-title-${label}`}
    >
      <div className="bg-border-light rounded-[3rem] p-2 h-full">
        <div className="flex flex-col gap-md p-2 bg-surface border-[0.625rem] border-transparent rounded-[2.75rem] w-full min-w-[280px] h-full justify-start">
          {/* Pill Label */}
          <div
            className="flex items-center gap-3 px-4 py-1.5 bg-[#e9efff] rounded-full h-11.25 w-full"
            role="presentation"
          >
            <span
              className="w-2 h-2 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span className="text-base text-foreground leading-none">
              <strong className="font-semibold">{label}</strong>
              <span className="font-normal text-[#505867]"> - {subtitle}</span>
            </span>
          </div>

          {/* Content Container */}
          <div className="flex flex-col justify-center w-full">
            {/* Title */}
            <h3
              id={`card-title-${label}`}
              className="text-lg font-semibold text-foreground leading-snug mb-sm"
            >
              {title}
            </h3>

            {/* Description */}
            <p className="text-base font-normal text-muted leading-relaxed">
              {description}
            </p>
          </div>

          {/* Link with descriptive text for screen readers */}
          <a
            href={href}
            className="inline-flex items-center gap-sm text-primary font-medium text-base no-underline transition-[gap] duration-150 mt-auto hover:gap-md focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus-visible:rounded-sm"
            aria-describedby={`card-title-${label}`}
          >
            {linkText}
            <Icon name="arrow-right" className="w-4 h-4" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}
