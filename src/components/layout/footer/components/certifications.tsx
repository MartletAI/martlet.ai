import Image from "next/image";
import { Icon } from "@/components/Icon";
import FOOTER_CERTIFICATIONS from "@/../public/assets/footer-certifications.svg";

export function FooterCertifications() {
  return (
    <div className="max-w-[320px]">
      <div className="flex items-end mb-6">
        <Icon name="parrot" className="w-10 h-10 text-transparent" aria-hidden={true} />
        <span className="text-[28px] font-normal text-white leading-6 pb-0.5" role="heading" aria-level={2}>
          Martlet AI
        </span>
      </div>
      <p className="font-normal text-base text-white leading-6 mb-6">
        AI-powered risk adjustment and HCC coding for healthcare
      </p>
      <Image 
        src={FOOTER_CERTIFICATIONS} 
        alt="NCQA HIPPA Compliant and Credentials Verification Organization Certifications" 
      />
    </div>
  );
}
