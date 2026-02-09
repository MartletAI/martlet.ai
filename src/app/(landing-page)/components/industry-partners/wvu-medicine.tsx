import { FeatureText } from "./feature-text";
import { YouTubeFacade } from "./youtube-facade";

import { FeatureTextProps } from "./types";

const FEATURES: FeatureTextProps[] = [
  {
    icon: "intersect-circle",
    text: "Prospective risk adjustment",
  },
  {
    icon: "bar-line-chart",
    text: "Fully automated chart review",
  },
  {
    icon: "data-flow",
    text: "Embedded in Epic workflows",
  },
  {
    icon: "brackets-check",
    text: "Provider-focused code validation",
  },
];

export function WVUMedicine() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-7 w-full">
      <div className="grid grid-cols-2 gap-4 w-fit lg:w-auto">
        {FEATURES.map((item) => (
          <FeatureText key={item.icon} icon={item.icon} text={item.text} />
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full lg:flex-1">
        <div className="w-full max-w-[790px] h-[400px] aspect-video border border-[rgba(0,0,0,0.08)] overflow-hidden shadow-[0_6px_20.6px_0_rgba(0,0,0,0.08)] bg-black/5 rounded-xl mx-auto">
          <YouTubeFacade
            videoId="6jTyxiREvVE"
            title="WVU Medicine video"
          />
        </div>
      </div>
    </div>
  )
}