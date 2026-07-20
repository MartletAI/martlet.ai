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
          className="text-[28px] font-normal text-[#0F317D] leading-6 pb-0.5"
          role="heading"
          aria-level={2}
        >
          Martlet&nbsp;
          <span className="text-[#2563EB]">AI</span>
        </span>
      </div>
      <p className="font-normal text-base text-[#4b4b52] leading-6 mb-6">
        Regulatory-grade AI for risk adjustment — retrospective, RADV, and
        prospective, run inside your environment.
      </p>
      <div className="inline-block rounded-2xl bg-white p-3 border border-black/[0.06] shadow-[0_1px_2px_rgba(10,10,18,0.04)] mb-5">
        <Image
          src={FOOTER_CERTIFICATIONS}
          alt="HIPAA compliant and NCQA Credentials Verification Organization certified"
          className="h-auto max-w-full"
        />
      </div>
      <div>
        <Link
          href="/trust"
          className="text-sm font-semibold text-[#0165dc] hover:text-[#0154b8] transition-colors"
        >
          See the full security &amp; deployment story →
        </Link>
      </div>
    </div>
  );
}
