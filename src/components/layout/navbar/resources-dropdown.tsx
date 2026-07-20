"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RESOURCES_LINKS } from "@/constants/nav-links";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

interface ResourcesDropdownProps {
  onLinkClick?: () => void;
  /** Shrinks pill padding/text when the header is in its scrolled/thin state. */
  compact?: boolean;
}

function isResourcesActive(pathname: string): boolean {
  return RESOURCES_LINKS.some((link) => pathname.startsWith(link.href));
}

export function ResourcesDropdown({ onLinkClick, compact = false }: ResourcesDropdownProps) {
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

  const pillBase = "inline-flex cursor-pointer items-center gap-1.5 rounded-full whitespace-nowrap transition-all duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)]";
  const pillSize = compact ? "text-sm font-medium px-3.5 py-1.5" : "text-base font-medium px-4 py-2.5";
  const pillActive = "text-primary bg-primary/8 font-semibold";
  const pillInactive = "text-[#1d1d1f]/75 hover:text-primary hover:bg-primary/5";

  return (
    <li ref={containerRef} className="relative">
      <button
        type="button"
        className={cn(pillBase, pillSize, isActive ? pillActive : pillInactive)}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
      >
        Resources
        <Icon
          name="chevron-down"
          className={cn("size-4 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul className="absolute left-0 top-[calc(100%+10px)] z-50 min-w-[200px] rounded-2xl border border-black/5 bg-white/95 backdrop-blur-xl p-2 shadow-[0_12px_32px_rgba(16,24,40,0.14)]">
          {RESOURCES_LINKS.map((link) => {
            const isLinkActive = pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block cursor-pointer rounded-xl px-3.5 py-2.5 text-[15px] font-medium transition-colors",
                    isLinkActive
                      ? "bg-primary/8 text-primary"
                      : "text-[#1d1d1f]/80 hover:bg-primary/5 hover:text-primary"
                  )}
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
