"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RESOURCES_LINKS } from "@/constants/nav-links";
import { Icon } from "@/components/icon";

interface ResourcesDropdownProps {
  linkClassName?: string;
  activeLinkClassName?: string;
  inactiveLinkClassName?: string;
  onLinkClick?: () => void;
}

function isResourcesActive(pathname: string): boolean {
  return RESOURCES_LINKS.some((link) => pathname.startsWith(link.href));
}

export function ResourcesDropdown({
  linkClassName = "text-lg font-medium no-underline leading-normal transition-all duration-150",
  activeLinkClassName = "h-12 py-3 px-4.5 rounded-lg bg-white border-[1.5px] border-[#0375E2]",
  inactiveLinkClassName = "text-black hover:text-primary",
  onLinkClick,
}: ResourcesDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);
  const isActive = isResourcesActive(pathname);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li ref={containerRef} className="relative">
      <button
        type="button"
        className={`inline-flex cursor-pointer items-center gap-1.5 ${linkClassName} ${isActive ? activeLinkClassName : inactiveLinkClassName}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
      >
        Resources
        <Icon
          name="chevron-down"
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="absolute left-0 top-[calc(100%+8px)] z-50 min-w-[180px] rounded-xl border border-[#E4E7EC] bg-white p-2 shadow-[0px_8px_24px_rgba(16,24,40,0.12)]">
          {RESOURCES_LINKS.map((link) => {
            const isLinkActive = pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block cursor-pointer rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    isLinkActive
                      ? "bg-[#F2F4F7] text-[#1A41B5]"
                      : "text-foreground hover:bg-[#F9FAFB] hover:text-[#1A41B5]"
                  }`}
                  aria-current={isLinkActive ? "page" : undefined}
                  onClick={() => {
                    setOpen(false);
                    onLinkClick?.();
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
