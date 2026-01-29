import { Icon, IconProps } from "../icon";
import { SectionLabel } from "../section-label";
import Image from "next/image";

const DATA = [
  {
    title: "More captured value",
    description:
      "Find supported, under coded HCCs with evidence packaged for action.",
    icon: "settings" as const,
    iconColor: "#2563EB",
    bg: "bg-[#eff7ff]",
  },
  {
    title: "Less wasted review time",
    description:
      "Page-level evidence and provenance reduce “PDF hunting” and speed decisions.",
    icon: "lightning" as const,
    iconColor: "#079455",
    bg: "bg-[#f0fff8]",
  },
  {
    title: "Stronger audit posture",
    description:
      "MEAT-aware findings help prevent overcoding and improve RADV readiness.",
    icon: "micro-scope" as const,
    iconColor: "#F48220",
    bg: "bg-[#fffbf2]",
  },
  {
    title: "Higher trust output",
    description:
      'Every recommendation ships with "why" so reviewers can validate in seconds.',
    icon: "shield" as const,
    iconColor: "#6D44C9",
    bg: "bg-[#f2f3ff]",
  },
];


interface TrustAndAccuracyProps {
  topCard?: {
    title: string;
    description: string;
    icon: IconProps['name'];
    iconColor: string;
    bg: string;
  }[];
	bottomCard: {
    image: string;
    width: number;
    height: number;
    alt: string;
    title: string;
    description: string;
  }[]
}

export function TrustAndAccuracy({ bottomCard, topCard = DATA }: TrustAndAccuracyProps) {
	return (
    <section
      id="trust-and-accuracy"
      className="bg-white py-10"
    >
      <div className="flex flex-col items-center mb-11.5">
      <SectionLabel className="text-indicator-prospective mb-3">Outcomes</SectionLabel>
      <h2 className="section-heading pb-5">
        Built for Trust and Accuracy
      </h2>
      <p className="font-normal text-xl leading-normal text-center text-text-tertiary-600">
        Martlet AI is designed for environments where compliance, precision
        and transparency are non-negotiable.
      </p>
      </div>

      <div className="mb-11.5 flex flex-col justify-center items-center gap-16 self-stretch max-w-container mx-auto bg-white rounded-xl border border-black/8 shadow-[0_6px_20.6px_0_rgba(0,0,0,0.04)] p-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 self-stretch w-full">
          {topCard.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col px-5 py-3 rounded-xl border border-black/8 items-start ${item.bg}`}
            >
              <Icon name={item.icon} className={`w-6 h-6 text-[${item.iconColor}]`} />
              <h3 className="font-semibold text-base leading-7 text-foreground mt-3">
                {item.title}
              </h3>
              <p className="font-normal text-base text-[#252B37] leading-6 mt-2">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[26px] mb-11.5 px-4 lg:px-0">
				{bottomCard.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl bg-accent-purple px-9 py-5 text-white flex items-center min-h-[159px]">
            <Image 
              src="/assets/trust-bg.png" 
              alt="" 
              fill 
              className="object-cover opacity-6 mix-blend-overlay pointer-events-none" 
              priority
            />
            <div className="relative z-10 flex gap-6 items-center">
              <div 
                className="shrink-0 flex items-center justify-center"
                style={{ width: item.width }}
              >
                <Image 
                  src={item.image}
                  width={item.width}
                  height={item.height} 
                  alt={item.alt} 
                  className="object-contain" 
                />
              </div>
              <div>
                <h3 className="text-[20px] font-bold leading-[28px]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[16px] font-normal leading-[24px] text-white/90">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
			</div>
    </section>
	)
}