import { FeatureText } from "./feature-text";
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
    <div className="flex items-start justify-center gap-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FEATURES.map((item) => (
          <FeatureText key={item.icon} icon={item.icon} text={item.text} />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-[790px] h-[400px] max-w-full rounded-xl border border-[rgba(0,0,0,0.08)] overflow-hidden shadow-[0_6px_20.6px_0_rgba(0,0,0,0.08)] bg-black/5">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6jTyxiREvVE"
            title="WVU Medicine video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}