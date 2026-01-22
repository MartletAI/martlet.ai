import { FeatureCard } from "./cards";
import { FeatureCardProps } from "./types";

interface WhyMartletAIProps {
  features: FeatureCardProps[];
  sectionGAP: number;
  title?: string;
  subtitle?: string;
}

export function WhyMartletAI({ features, sectionGAP, title, subtitle }: WhyMartletAIProps) {
  return (
    <section 
      aria-labelledby="why-martlet-heading"
      className="gradient-why-martlet py-10 flex flex-col items-center justify-center w-full max-w-container mx-auto"
    >
      <header className="text-center max-w-[768px]" style={{ paddingBottom: sectionGAP }}>
        <h2 id="why-martlet-heading" className="section-heading">
          {title || "Why Martlet AI?"}
        </h2>
        <p className="text-xl text-text-tertiary-600 leading-7 font-normal pt-5">
          {subtitle || "Proven technology that delivers measurable results at enterprise scale"}
        </p>
      </header>

			<div className="flex items-center justify-between w-full max-w-[1230px] mx-auto gap-3">
				{features.map((feature, index) => (
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
