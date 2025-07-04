import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header>
      <Link href="/" aria-label="Martlet AI Home">
        <Image
          src="/logo/martlet-ai-logo.png"
          className="relative z-10"
          alt="Martlet AI Logo"
          height={46}
          width={192}
          priority
        />
      </Link>
    </header>
  );
}
