
import { LANDING_PAGE } from "@/constants/landing-page";
import { FeatureCard } from "./feature-card";

const { TITLE, SUBTITLE, FEATURES } = LANDING_PAGE.WHY_MARTLET_AI;

export function WhyMartletAI() {
  return (
    <section 
      aria-labelledby="why-martlet-heading"
      className="gradient-why-martlet py-10 flex flex-col items-center justify-center w-full max-w-container mx-auto"
    >
      <header className="text-center max-w-[768px]">
        <h2 id="why-martlet-heading" className="section-heading">
          {TITLE}
        </h2>
        <p className="text-xl text-text-tertiary-600 leading-7 font-normal pt-5 pb-11.5">
          {SUBTITLE}
        </p>
      </header>

    <div className="flex items-center justify-between w-full max-w-[1230px] mx-auto gap-3">
        {FEATURES.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
