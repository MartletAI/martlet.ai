import { Icon } from "../icon";
import { SectionWithHeading } from "../section";
import { SectionTitle } from "../section-title";
import { Feature } from "./feature";
import { whyMartletAI } from "@/constants/why-martlet-ai";

export function WhyMartletAI() {
  return (
    <SectionWithHeading
      aria-labelledby="why-martlet-ai"
      className="flex flex-col xl:flex-row gap-8 xl:gap-0"
    >
      <div className="xl:w-[33%] mb-4 lg:mb-8">
        <SectionTitle
          className="mb-8 md:mb-4 text-start whitespace-nowrap md:mt-[-16px]"
          id={"why-martlet-ai"}
        >
          Why Martlet AI
        </SectionTitle>
        <p className="whitespace-nowrap">
          Smarter risk adjustment. Built <br /> for real-world healthcare
        </p>
      </div>
      <div className="flex flex-wrap gap-8 lg:gap-16 xl:w-[66%]">
        {/* Real Time EHR Suggestions */}
        <Feature
          icon={
            <Icon
              src={whyMartletAI.RealTimeEHRSuggestions.icon}
              alt={whyMartletAI.RealTimeEHRSuggestions.alt}
            />
          }
          title={whyMartletAI.RealTimeEHRSuggestions.title}
          description={whyMartletAI.RealTimeEHRSuggestions.description}
        />

        {/* NLP Based HCC Coding */}
        <Feature
          icon={
            <Icon
              src={whyMartletAI.NLPBasedHCCCoding.icon}
              alt={whyMartletAI.NLPBasedHCCCoding.alt}
            />
          }
          title={whyMartletAI.NLPBasedHCCCoding.title}
          description={whyMartletAI.NLPBasedHCCCoding.description}
        />

        {/* On Premise & HIPPA Compliant */}
        <Feature
          icon={
            <Icon
              src={whyMartletAI.OnPremiseAndHIPPACompliant.icon}
              alt={whyMartletAI.OnPremiseAndHIPPACompliant.alt}
            />
          }
          title={whyMartletAI.OnPremiseAndHIPPACompliant.title}
          description={whyMartletAI.OnPremiseAndHIPPACompliant.description}
        />

        {/* Audit Ready & Raf Optimized */}
        <Feature
          icon={
            <Icon
              src={whyMartletAI.AuditReadyAndRafOptimized.icon}
              alt={whyMartletAI.AuditReadyAndRafOptimized.alt}
            />
          }
          title={whyMartletAI.AuditReadyAndRafOptimized.title}
          description={whyMartletAI.AuditReadyAndRafOptimized.description}
        />
      </div>
    </SectionWithHeading>
  );
}
