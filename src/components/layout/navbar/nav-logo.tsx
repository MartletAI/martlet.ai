import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/assets/logo/martlet-ai.svg";
/** SVG viewBox 254×220; lock height to match navbar */
const LOGO_HEIGHT_PX = 27;
const LOGO_WIDTH_PX = Math.round((254 / 220) * LOGO_HEIGHT_PX);

interface NavLogoProps {
  href?: string;
  /** Merged onto the root link (e.g. for layout tweaks in the navbar). */
  className?: string;
  /** Shrinks the mark slightly when the header is in its scrolled/thin state. */
  compact?: boolean;
}

/**
 * Navbar brand: home link with mark + wordmark.
 * The graphic is decorative (visible “Martlet AI” text follows); `alt=""` avoids duplicate announcements with `aria-label`.
 */
export function NavLogo({ href = "/", className, compact = false }: NavLogoProps) {
  return (
    <Link
      href={href}
      aria-label="Martlet AI Home"
      className={cn("flex shrink-0 items-center gap-2.5", className)}
    >
      <Image
        src={LOGO_SRC}
        alt="Martlet AI logo"
        width={LOGO_WIDTH_PX}
        height={LOGO_HEIGHT_PX}
        priority
        className={cn(
          "w-auto transition-all duration-300",
          compact ? "h-[21px]" : "h-[27px]"
        )}
      />
      <span
        className={cn(
          "font-normal text-[#0F317D] transition-all duration-300",
          compact ? "text-xl" : "text-2xl"
        )}
      >
        Martlet&nbsp;
        <span className="text-[#2563EB]">AI</span>
      </span>
    </Link>
  );
}
