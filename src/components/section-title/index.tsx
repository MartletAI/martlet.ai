import { DetailsHTMLAttributes, PropsWithChildren } from "react";

interface SectionTitleProps
  extends DetailsHTMLAttributes<HTMLHeadingElement>,
    PropsWithChildren {}
export function SectionTitle({
  children,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <h2
      {...props}
      className={`text-center font-bold line-none text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] ${className}`}
    >
      {children}
    </h2>
  );
}
