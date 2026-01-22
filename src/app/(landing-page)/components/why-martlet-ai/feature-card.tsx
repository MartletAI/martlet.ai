import { Icon, IconProps } from "@/components/Icon";


interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconProps["name"];
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-[17px] p-8 bg-white border border-border-light w-full max-w-[410px] h-[210px] rounded-2xl shadow-sm text-center transition-shadow hover:shadow-md">
      <div className="rounded-lg border-2 border-white/12 bg-indicator-prospective h-12 w-12 flex justify-center items-center">
        <Icon name={icon} className="text-white size-6" />
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-[#181D27] leading-7 text-center">
          {title}
        </h3>
        <p className="text-text-tertiary-600 text-base leading-6">
          {description}
        </p>
      </div>
    </div>
  );
}
