"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, RESOURCES_LINKS } from "@/constants/nav-links";
import { ResourcesDropdown } from "./resources-dropdown";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
  inactiveLinkClassName?: string;
  onLinkClick?: () => void;
  variant?: "desktop" | "mobile";
  /** Shrinks pill padding/text when the header is in its scrolled/thin state (desktop only). */
  compact?: boolean;
}

function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function isResourcesActive(pathname: string): boolean {
  return RESOURCES_LINKS.some((link) => pathname.startsWith(link.href));
}

export function NavLinks({
  className = "",
  linkClassName = "text-lg font-medium no-underline leading-normal transition-all duration-150",
  activeLinkClassName = "h-12 py-3 px-4.5 rounded-lg bg-white border-[1.5px] border-[#0375E2]",
  inactiveLinkClassName = "text-black hover:text-primary",
  onLinkClick,
  variant = "desktop",
  compact = false,
}: NavLinksProps) {
  const pathname = usePathname();

  if (variant === "mobile") {
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

        <li>
          <span
            className={`${linkClassName} ${isResourcesActive(pathname) ? activeLinkClassName : inactiveLinkClassName}`}
          >
            Resources
          </span>
          <ul className="mt-2 ml-3 flex flex-col gap-2">
            {RESOURCES_LINKS.map((link) => {
              const isActive = isLinkActive(link.href, pathname);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-1 text-base font-medium no-underline transition-colors ${
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={onLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    );
  }

  // Desktop: soft pill tabs, sized down when the header is compact/scrolled.
  const pillBase = "inline-flex items-center rounded-full no-underline whitespace-nowrap transition-all duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)]";
  const pillSize = compact ? "text-sm font-medium px-3.5 py-1.5" : "text-base font-medium px-4 py-2.5";
  const pillActive = "text-primary bg-primary/8 font-semibold";
  const pillInactive = "text-[#1d1d1f]/75 hover:text-primary hover:bg-primary/5";

  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => {
        const isActive = isLinkActive(link.href, pathname);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(pillBase, pillSize, isActive ? pillActive : pillInactive)}
              aria-current={isActive ? "page" : undefined}
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          </li>
        );
      })}

      <ResourcesDropdown onLinkClick={onLinkClick} compact={compact} />
    </ul>
  );
}
