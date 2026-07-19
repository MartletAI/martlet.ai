import { Icon } from "@/components";

type WorkflowType = "prospective" | "retrospective" | "radv";

/** Per-workflow accent: label color, dot, tinted card wash, link color */
const ACCENTS: Record<
  WorkflowType,
  { label: string; dot: string; card: string; link: string }
> = {
  radv: {
    label: "text-[#7c3aed]",
    dot: "bg-[#7c3aed]",
    card: "bg-gradient-to-b from-white to-[#f7f4ff] border-[#7c3aed]/15",
    link: "text-[#7c3aed]",
  },
  retrospective: {
    label: "text-[#0165dc]",
    dot: "bg-[#0165dc]",
    card: "bg-gradient-to-b from-white to-[#eff6ff] border-[#0165dc]/15",
    link: "text-[#0165dc]",
  },
  prospective: {
    label: "text-[#0d9488]",
    dot: "bg-[#0d9488]",
    card: "bg-gradient-to-b from-white to-[#effcf9] border-[#0d9488]/15",
    link: "text-[#0d9488]",
  },
};

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
  type,
  label,
  subtitle,
  title,
  description,
  href,
  linkText,
}: WorkflowCardProps) {
  const accent = ACCENTS[type];

  return (
    <article
      className={`flex flex-col rounded-[28px] p-7 md:p-8 h-full border shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(10,10,18,0.10)] ${accent.card}`}
      aria-labelledby={`card-title-${label}`}
    >
      {/* Category label */}
      <p
        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] ${accent.label} mb-1`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${accent.dot}`}
          aria-hidden
        />
        {label}
      </p>
      <p className="text-sm text-[#6e6e73] font-medium mb-5">{subtitle}</p>

      {/* Title */}
      <h3
        id={`card-title-${label}`}
        className="text-[22px] font-bold tracking-tight text-[#0a0a12] leading-snug mb-3"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-base apple-body leading-relaxed m-0 mb-6">
        {description}
      </p>

      {/* Link with descriptive text for screen readers */}
      <a
        href={href}
        className={`inline-flex items-center gap-sm ${accent.link} font-semibold text-base no-underline transition-[gap] duration-150 mt-auto hover:gap-md focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus-visible:rounded-sm`}
        aria-describedby={`card-title-${label}`}
      >
        {linkText}
        <Icon name="arrow-right" className="w-4 h-4" aria-hidden />
      </a>
    </article>
  );
}
