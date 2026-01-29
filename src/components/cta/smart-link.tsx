"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface SmartLinkProps extends LinkProps, PropsWithChildren {
  className?: string;
  href: string;
}

export function SmartLink({ href, children, ...props }: SmartLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // If the link points to the current page, scroll to top smoothly
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      sessionStorage.setItem("navigationSource", pathname);
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
