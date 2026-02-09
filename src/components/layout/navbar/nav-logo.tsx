import Link from "next/link";

interface NavLogoProps {
  href?: string;
  alt?: string;
  width?: number;
  height?: number;
}

/**
 * NavLogo - Logo link for the navigation header.
 * Uses <picture> for WebP with PNG fallback.
 */
export function NavLogo({
  href = "/",
  alt = "Martlet AI Logo",
  width = 163,
  height = 39,
}: NavLogoProps) {
  return (
    <Link href={href} aria-label="Martlet AI Home">
      <picture>
        <source srcSet="/assets/logo/martlet-ai.webp" type="image/webp" />
        <img
          src="/assets/logo/martlet-ai.png"
          alt={alt}
          width={width}
          height={height}
          fetchPriority="high"
          decoding="async"
          className="w-[120px] md:w-[163px] h-auto"
        />
      </picture>
    </Link>
  );
}
