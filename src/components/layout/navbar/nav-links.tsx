"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/nav-links";

export interface NavLink {
  label: string;
  href: string;
}

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
  inactiveLinkClassName?: string;
  onLinkClick?: () => void;
}

/**
 * Determines if a link is active based on the current pathname.
 */
function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/**
 * NavLinks - Renders navigation links with active state styling.
 */
export function NavLinks({
  className = "",
  linkClassName = "text-lg font-medium no-underline leading-normal transition-all duration-150",
  activeLinkClassName = "h-12 py-3 px-4.5 rounded-lg bg-white border-[1.5px] border-[#0375E2]",
  inactiveLinkClassName = "text-black hover:text-primary",
  onLinkClick,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => {
        const isActive = isLinkActive(link.href, pathname);
        
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${linkClassName} ${isActive ? activeLinkClassName : inactiveLinkClassName}`}
              aria-current={isActive ? "page" : undefined}
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
