import { FeatureCard } from "./cards";
import { FeatureCardProps } from "./types";

interface WhyMartletAIProps {
  features: FeatureCardProps[];
  title?: string;
  subtitle?: string;
}

export function WhyMartletAI({ features, title, subtitle }: WhyMartletAIProps) {
  return (
    <section 
      aria-labelledby="why-martlet-heading"
      className="gradient-why-martlet py-10 flex flex-col items-center justify-center w-full mx-auto"
    >
      <header className="text-center max-w-[768px] container-main mb-11.5">
        <h2 id="why-martlet-heading" className="section-heading">
          {title || "Why Martlet AI?"}
        </h2>
        <p className="text-xl text-text-tertiary-600 leading-7 font-normal pt-5">
          {subtitle || "Proven technology that delivers measurable results at enterprise scale"}
        </p>
      </header>

			<div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center mx-auto gap-3 w-full">
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
