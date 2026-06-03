"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, RESOURCES_LINKS } from "@/constants/nav-links";
import { ResourcesDropdown } from "./resources-dropdown";

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
  inactiveLinkClassName?: string;
  onLinkClick?: () => void;
  variant?: "desktop" | "mobile";
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

      <ResourcesDropdown
        linkClassName={linkClassName}
        activeLinkClassName={activeLinkClassName}
        inactiveLinkClassName={inactiveLinkClassName}
        onLinkClick={onLinkClick}
      />
    </ul>
  );
}
