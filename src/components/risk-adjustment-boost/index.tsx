"use client";

import { companiesMap } from "@/constants/companies";
import { useCompanyStore } from "@/libs/store";
import { SectionWithHeading } from "../section";
import { Feature } from "./feature";
import { Icon } from "../icon";

export function RiskAdjustmentBoost() {
  const company = useCompanyStore((state) => state.company);

  return (
    <SectionWithHeading
      aria-labelledby="risk-adjustment"
      titleClassName="mb-8"
      title={companiesMap[company]?.title}
    >
      {companiesMap[company]?.description}

      <div className="flex flex-col xl:flex-row gap-8 mt-12">
        <figure
          className="w-full max-h-[520px] aspect-[928/520] bg-white rounded-[25px] shadow-[0px_25px_80px_0px_#1B1F3B33]"
          role="img"
          aria-label="Illustration showcasing Martlet AI in action"
        ></figure>
        <div className="flex flex-wrap justify-center gap-4 min-w-[100%] max-w-[100%] m-auto xl:justify-end md:min-w-[520px] md:max-w-[520px]">
          <Feature
            quantity={`+${companiesMap[company].hcc}%`}
            content="Increase in HCC code capture"
          />
          <Feature
            quantity={`-${companiesMap[company].manualReview}%`}
            content="Reduction in manual review time"
            bgColor="bg-[#E6EFFF]"
          />
          <Feature
            content="Fully integrated into EHR workflow"
            bgColor="bg-[#E6EFFF]"
            svg={
              <Icon src="/risk-adjustment/settings.svg" alt="settings icon" />
            }
          />
          <Feature
            content="Audit-ready documentation from day one"
            svg={<Icon src="/risk-adjustment/tick.svg" alt="tick icon" />}
          />
        </div>
      </div>
    </SectionWithHeading>
  );
}
