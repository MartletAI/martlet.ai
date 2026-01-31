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
      width: "w-full max-w-[320px]",
    },
    {
      title: "Trusted by providers, Payers and the Full revenue cycle Ecosystem",
      icon: "atom",
      backgroundColor: "bg-[#DAF8FF]",
      color: "text-[#1096D0]",
      border: "#0098DA",
      reverse: false,
      width: "w-full max-w-[320px]",
    },
    {
      title: "NLP & reasoning Engine Trained on real data",
      icon: "layers",
      backgroundColor: "bg-[#FFF5DB]",
      color: "text-[#D06B18]",
      border: "#FF7D43",
      reverse: true,
      width: "w-full max-w-[240px]",
    },
    {
      title: "Peer-Reviewed Accuracy Benchmark",
      icon: "chart-bar",
      backgroundColor: "bg-[#EBD8FF]",
      color: "text-[#6C25CF]",
      border: "#7F149A",
      reverse: true,
      width: "w-full max-w-[240px]",
    },
  ],
} as const;

export function TrustAndAccuracy() {
  return (
    <section
      aria-labelledby="trust-and-accuracy-heading"
      className="gradient-hero py-10 flex flex-col items-center justify-center mx-auto"
    >
      <header className="container-main text-center max-w-[600px]">
        <h2 id="trust-and-accuracy-heading" className="section-heading">
          {TRUST_AND_ACCURACY_CONTENT.TITLE}
        </h2>
        <p className="text-lg text-muted m-0 pt-5 pb-11.5">
          {TRUST_AND_ACCURACY_CONTENT.SUBTITLE}
        </p>
      </header>

      <div
        className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] md:gap-y-12 items-center gap-8 w-full max-w-[1000px]"
        role="img"
        aria-label="Trust factors diagram showing four key pillars connected to Martlet AI"
      >
        {/* Left trust factors - Desktop: Left, Mobile: Bottom group 1 */}
        <ul
          className="flex flex-col gap-6 lg:gap-[150px] list-none p-0 m-0 order-2 lg:order-1 items-start md:items-center lg:items-end w-full"
          aria-label="Trust factors group 1"
        >
          <li className="w-full flex justify-start md:justify-center lg:justify-end">
            <TrustFactor
              {...TRUST_AND_ACCURACY_CONTENT.TRUST_FACTORS[0]}
            />
          </li>
          <li className="w-full flex justify-start md:justify-center lg:justify-end">
            <TrustFactor
              {...TRUST_AND_ACCURACY_CONTENT.TRUST_FACTORS[1]}
            />
          </li>
        </ul>

        {/* Central diagram - Desktop: Center, Mobile: Top */}
        <figure className="flex justify-center relative m-0 order-1 lg:order-2 md:col-span-2 lg:col-span-1">
          {/* Decorative connector lines - Hidden on mobile */}
          <Icon
            name="connector-top-left"
            className="hidden lg:block absolute top-26 -left-6 h-8 w-14"
            aria-hidden={true}
          />
          <Icon
            name="connector-bottom-left"
            className="hidden lg:block absolute bottom-26 -left-6 h-8 w-14"
            aria-hidden={true}
          />

          <Image
            src={TRUST_AND_ACCURACY_CONTENT.IMAGE}
            alt="Martlet AI central hub connecting HIPAA compliance, trusted ecosystem, NLP engine, and peer-reviewed accuracy"
            width={400}
            height={400}
            className="relative z-10 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]"
          />

          <Icon
            name="connector-top-right"
            className="hidden lg:block absolute top-26 -right-6 h-8 w-14"
            aria-hidden={true}
          />
          <Icon
            name="connector-bottom-right"
            className="hidden lg:block absolute bottom-26 -right-6 h-8 w-14"
            aria-hidden={true}
          />
        </figure>

        {/* Right trust factors - Desktop: Right, Mobile: Bottom group 2 */}
        <ul
          className="flex flex-col gap-6 lg:gap-[150px] list-none p-0 m-0 order-3 lg:order-3 items-start md:items-center lg:items-start w-full"
          aria-label="Trust factors group 2"
        >
          <li className="w-full flex justify-start md:justify-center lg:justify-start">
            <TrustFactor
              {...TRUST_AND_ACCURACY_CONTENT.TRUST_FACTORS[2]}
            />
          </li>
          <li className="w-full flex justify-start md:justify-center lg:justify-start">
            <TrustFactor
              {...TRUST_AND_ACCURACY_CONTENT.TRUST_FACTORS[3]}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}