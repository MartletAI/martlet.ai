import Image from "next/image";
import Link from "next/link";

import FOOTER_CERTIFICATIONS from "@/../public/assets/logo/hipaa-compliant.svg";

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
      <p className="font-normal text-base text-white/70 leading-6 mb-6">
        Regulatory-grade AI for risk adjustment — retrospective, RADV, and
        prospective, run inside your environment.
      </p>
      <div className="inline-block rounded-2xl bg-white/95 p-3 mb-5">
        <Image
          src={FOOTER_CERTIFICATIONS}
          alt="HIPAA compliant and NCQA Credentials Verification Organization certified"
          className="h-auto max-w-full"
        />
      </div>
      <div>
        <Link
          href="/trust"
          className="text-sm font-semibold text-[#9dc2ff] hover:text-white transition-colors"
        >
          See the full security &amp; deployment story →
        </Link>
      </div>
    </div>
  );
}
