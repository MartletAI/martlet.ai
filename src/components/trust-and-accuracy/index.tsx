import { Icon } from "../icon";
import { SectionWithHeading } from "../section";
import { Feature } from "./feature";

export function TrustAndAccuracy() {
  return (
    <SectionWithHeading
      aria-labelledby="trust-accuracy"
      titleClassName="mb-8"
      title="Built for Trust and Accuracy"
    >
      <p className="text-center mb-24 text-[#38435A] font-semibold text-[24px]">
        Martlet AI is designed for environments where compliance, precision,
        <br className="hidden xl:block" /> and transparency are non-negotiable
      </p>

      <div className="flex flex-col md:flex-row gap-12 items-center md:justify-around xl:justify-between flex-wrap">
        <Feature
          svg={
            <Icon
              src="/trust-and-accuracy/hipaa-compliant.svg"
              alt="HIPAA Compliant Icon"
            />
          }
          content="HIPAA-Compliant On-Premise Deployment "
        />
        <Feature
          svg={
            <Icon
              src="/trust-and-accuracy/peer-reviewed.svg"
              alt="HIPAA Compliant Icon"
            />
          }
          content="Peer-Reviewed Accuracy Benchmarks"
        />
        <Feature
          svg={
            <Icon
              src="/trust-and-accuracy/nlp-engine.svg"
              alt="HIPAA Compliant Icon"
            />
          }
          content="NLP Engine Trained on Real Data"
        />
        <Feature
          svg={
            <Icon
              src="/trust-and-accuracy/real-ui.svg"
              alt="HIPAA Compliant Icon"
            />
          }
          content="Real UI Screenshots — No Mockups"
        />
      </div>
    </SectionWithHeading>
  );
}
