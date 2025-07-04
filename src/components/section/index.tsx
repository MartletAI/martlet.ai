import { HTMLAttributes, PropsWithChildren } from "react";
import { SectionTitle } from "../section-title";

interface SectionWithHeadingProps
  extends HTMLAttributes<HTMLElement>,
    PropsWithChildren {
  title?: string;
  titleClassName?: string;
}

export function SectionWithHeading({
  title,
  id,
  children,
  className,
  titleClassName = "",
  ...props
}: SectionWithHeadingProps) {
  const headingId = id ?? title?.toLowerCase().replace(/\s+/g, "-");

  return (
    <section
      className={`py-16! md:py-24! lg:py-32! ${className}`}
      aria-labelledby={headingId}
      {...props}
    >
      {title ? (
        <SectionTitle id={headingId} className={titleClassName}>
          {title}
        </SectionTitle>
      ) : null}

      {children}
    </section>
  );
}
