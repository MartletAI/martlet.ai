import Image from "next/image";
import { LANDING_PAGE } from "@/constants/landing-page";
import { TrustFactor } from "./trust-factor";
import { Icon } from "@/components";

export function TrustAndAccuracy() {
  return (
    <section
      aria-labelledby="trust-and-accuracy-heading"
      className="gradient-hero py-12"
    >
      <div className="flex flex-col items-center justify-center max-w-container mx-auto">
        <h2 id="trust-and-accuracy-heading" className="section-heading">
          {LANDING_PAGE.TRUST_AND_ACCURACY.TITLE}
        </h2>
        <p className="text-lg text-muted text-center m-0 pt-5 pb-11.5 max-w-[600px]">
          {LANDING_PAGE.TRUST_AND_ACCURACY.SUBTITLE}
        </p>
        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-[150px]">
            <TrustFactor {...LANDING_PAGE.TRUST_AND_ACCURACY.TRUST_FACTORS[0]} />
            <TrustFactor {...LANDING_PAGE.TRUST_AND_ACCURACY.TRUST_FACTORS[1]} />
          </div>
          <div className="flex justify-center relative">
            <Icon name='connector-top-left' className="absolute top-26 -left-6 h-8 w-14" />
            <Icon name='connector-bottom-left' className="absolute bottom-26 -left-6 h-8 w-14" />
            <Image src={LANDING_PAGE.TRUST_AND_ACCURACY.TRUST_AND_ACCURACY_IMAGE} alt="Trust and Accuracy" width={400} height={400} className="relative z-10" />
            <Icon name='connector-top-right' className="absolute top-26 -right-6 h-8 w-14" />
            <Icon name='connector-bottom-right' className="absolute bottom-26 -right-6 h-8 w-14" />
          </div>
          <div className="flex flex-col gap-[150px]">
            <TrustFactor {...LANDING_PAGE.TRUST_AND_ACCURACY.TRUST_FACTORS[2]} />
            <TrustFactor {...LANDING_PAGE.TRUST_AND_ACCURACY.TRUST_FACTORS[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}