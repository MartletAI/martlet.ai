import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLink {
  label: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
  inactiveLinkClassName?: string;
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
  links,
  className = "",
  linkClassName = "text-sm font-medium no-underline transition-all duration-150",
  activeLinkClassName = "nav-link-active",
  inactiveLinkClassName = "text-black hover:text-primary",
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {links.map((link) => {
        const isActive = isLinkActive(link.href, pathname);
        
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${linkClassName} ${isActive ? activeLinkClassName : inactiveLinkClassName}`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
