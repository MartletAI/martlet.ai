import Image from "next/image";
import { LANDING_PAGE } from "@/constants/landing-page";
import { TrustFactor } from "./trust-factor";
import { Icon } from "@/components";

const { TITLE, SUBTITLE, TRUST_AND_ACCURACY_IMAGE, TRUST_FACTORS } =
  LANDING_PAGE.TRUST_AND_ACCURACY;

export function TrustAndAccuracy() {
  return (
    <section
      aria-labelledby="trust-and-accuracy-heading"
      className="gradient-hero py-10 flex flex-col items-center justify-center max-w-container mx-auto"
    >
      <header className="text-center max-w-[600px]">
        <h2 id="trust-and-accuracy-heading" className="section-heading">
          {TITLE}
        </h2>
        <p className="text-lg text-muted m-0 pt-5 pb-11.5">
          {SUBTITLE}
        </p>
      </header>

      <div className="flex items-center gap-8" role="img" aria-label="Trust factors diagram showing four key pillars connected to Martlet AI">
        {/* Left trust factors */}
        <ul className="flex flex-col gap-[150px] list-none p-0 m-0" aria-label="Trust factors">
          <li>
            <TrustFactor {...TRUST_FACTORS[0]} />
          </li>
          <li>
            <TrustFactor {...TRUST_FACTORS[1]} />
          </li>
        </ul>

        {/* Central diagram with decorative connectors */}
        <figure className="flex justify-center relative m-0">
          {/* Decorative connector lines */}
          <Icon name="connector-top-left" className="absolute top-26 -left-6 h-8 w-14" aria-hidden={true} />
          <Icon name="connector-bottom-left" className="absolute bottom-26 -left-6 h-8 w-14" aria-hidden={true} />

          <Image
            src={TRUST_AND_ACCURACY_IMAGE}
            alt="Martlet AI central hub connecting HIPAA compliance, trusted ecosystem, NLP engine, and peer-reviewed accuracy"
            width={400}
            height={400}
            className="relative z-10"
          />

          <Icon name="connector-top-right" className="absolute top-26 -right-6 h-8 w-14" aria-hidden={true} />
          <Icon name="connector-bottom-right" className="absolute bottom-26 -right-6 h-8 w-14" aria-hidden={true} />
        </figure>

        {/* Right trust factors */}
        <ul className="flex flex-col gap-[150px] list-none p-0 m-0" aria-label="Trust factors">
          <li>
            <TrustFactor {...TRUST_FACTORS[2]} />
          </li>
          <li>
            <TrustFactor {...TRUST_FACTORS[3]} />
          </li>
        </ul>
      </div>
    </section>
  );
}