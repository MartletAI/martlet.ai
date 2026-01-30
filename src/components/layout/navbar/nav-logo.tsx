import Link from "next/link";
import Image from "next/image";

interface NavLogoProps {
  href?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

/**
 * NavLogo - Logo link for the navigation header.
 */
export function NavLogo({
  href = "/",
  src = "/assets/logo/martlet-ai.png",
  alt = "Martlet AI Logo",
  width = 163,
  height = 39.2,
}: NavLogoProps) {
  return (
    <Link href={href} aria-label="Martlet AI Home">
      <Image src={src} alt={alt} width={width} height={height} className="w-[120px] md:w-[163px] h-auto" />
    </Link>
  );
}
