import Image from "next/image";
import { TrustFactor } from "./trust-factor";
import { Icon } from "@/components";
const TRUST_AND_ACCURACY_CONTENT = {
  TITLE: "Built for Trust and Accuracy",
  SUBTITLE:
    "Martlet AI is designed for environments where compliance, precisions and transparency are non-negotiable",
  IMAGE: "/assets/illustrations/trust-and-accuracy.svg",
  TRUST_FACTORS: [
    {
      title: "Hippa-Compiance On-Premise Deployment",
      icon: "badge-check",
      backgroundColor: "bg-[#D7FFDB]",
      color: "text-[#147707]",
      border: "border border-[#27A738]",
      reverse: false,
      width: "w-[320px]",
    },
    {
      title: "Trusted by providers, Payers and the Full revenue cycle Ecosystem",
      icon: "atom",
      backgroundColor: "bg-[#DAF8FF]",
      color: "text-[#1096D0]",
      border: "#0098DA",
      reverse: false,
      width: "w-[320px]",
    },
    {
      title: "NLP & reasoning Engine Trained on real data",
      icon: "layers",
      backgroundColor: "bg-[#FFF5DB]",
      color: "text-[#D06B18]",
      border: "#FF7D43",
      reverse: true,
      width: "w-[240px]",
    },
    {
      title: "Peer-Reviewed Accuracy Benchmark",
      icon: "chart-bar",
      backgroundColor: "bg-[#EBD8FF]",
      color: "text-[#6C25CF]",
      border: "#7F149A",
      reverse: true,
      width: "w-[240px]",
    },
  ],
} as const;

export function TrustAndAccuracy() {
  return (
    <section
      aria-labelledby="trust-and-accuracy-heading"
      className="gradient-hero py-10 flex flex-col items-center justify-center mx-auto"
    >
      <header className="text-center max-w-[600px]">
        <h2 id="trust-and-accuracy-heading" className="section-heading">
          {TRUST_AND_ACCURACY_CONTENT.TITLE}
        </h2>
        <p className="text-lg text-muted m-0 pt-5 pb-11.5">
          {TRUST_AND_ACCURACY_CONTENT.SUBTITLE}
        </p>
      </header>

      <div
        className="flex items-center gap-8"
        role="img"
        aria-label="Trust factors diagram showing four key pillars connected to Martlet AI"
      >
        {/* Left trust factors */}
        <ul
          className="flex flex-col gap-[150px] list-none p-0 m-0"
          aria-label="Trust factors"
        >
          <li>
            <TrustFactor
              {...TRUST_AND_ACCURACY_CONTENT.TRUST_FACTORS[0]}
            />
          </li>
          <li>
            <TrustFactor
              {...TRUST_AND_ACCURACY_CONTENT.TRUST_FACTORS[1]}
            />
          </li>
        </ul>

        {/* Central diagram with decorative connectors */}
        <figure className="flex justify-center relative m-0">
          {/* Decorative connector lines */}
          <Icon
            name="connector-top-left"
            className="absolute top-26 -left-6 h-8 w-14"
            aria-hidden={true}
          />
          <Icon
            name="connector-bottom-left"
            className="absolute bottom-26 -left-6 h-8 w-14"
            aria-hidden={true}
          />

          <Image
            src={TRUST_AND_ACCURACY_CONTENT.IMAGE}
            alt="Martlet AI central hub connecting HIPAA compliance, trusted ecosystem, NLP engine, and peer-reviewed accuracy"
            width={400}
            height={400}
            className="relative z-10"
          />

          <Icon
            name="connector-top-right"
            className="absolute top-26 -right-6 h-8 w-14"
            aria-hidden={true}
          />
          <Icon
            name="connector-bottom-right"
            className="absolute bottom-26 -right-6 h-8 w-14"
            aria-hidden={true}
          />
        </figure>

        {/* Right trust factors */}
        <ul
          className="flex flex-col gap-[150px] list-none p-0 m-0"
          aria-label="Trust factors"
        >
          <li>
            <TrustFactor
              {...TRUST_AND_ACCURACY_CONTENT.TRUST_FACTORS[2]}
            />
          </li>
          <li>
            <TrustFactor
              {...TRUST_AND_ACCURACY_CONTENT.TRUST_FACTORS[3]}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}