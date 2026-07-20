import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icon";

const TRUST_BADGES = [
  { label: "HIPAA-aligned deployment", icon: "badge-check" as const },
  { label: "Pacific AI certified", icon: "shield-check" as const },
];

export function FooterCertifications() {
  return (
    <div className="max-w-[320px]">
      <div className="flex items-end mb-6">
        <Image
          src="/assets/logo/martlet-ai.svg"
          alt="Martlet AI Logo"
          width={32}
          height={27}
          className="object-contain mr-1"
        />
        <span
          className="text-[28px] font-normal text-white leading-6 pb-0.5"
          role="heading"
          aria-level={2}
        >
          Martlet AI
        </span>
      </div>
      <p className="font-normal text-base text-white/80 leading-6 mb-6">
        Regulatory-grade AI for risk adjustment — retrospective, RADV, and
        prospective, run inside your environment.
      </p>
      <ul className="flex flex-wrap gap-3 list-none p-0 m-0 mb-6">
        {TRUST_BADGES.map((badge) => (
          <li
            key={badge.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-white/90"
          >
            <Icon name={badge.icon} className="w-4 h-4 text-[#60a5fa]" aria-hidden />
            {badge.label}
          </li>
        ))}
      </ul>
      <Link
        href="/trust"
        className="text-sm font-semibold text-[#9dc2ff] hover:text-white transition-colors"
      >
        See the full security &amp; deployment story →
      </Link>
    </div>
  );
}
