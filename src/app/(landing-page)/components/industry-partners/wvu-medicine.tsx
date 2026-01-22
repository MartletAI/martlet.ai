import Image from "next/image";
import { FeatureText } from "./feature-text";
import VideoThumbnail from "@/../public/assets/video-thubmain.svg";
import { FeatureTextProps } from "./types";

const FEATURES: FeatureTextProps[] = [
  {
    icon: "intersect-circle",
    text: "Retrospective risk adjustment",
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
        <div className="rounded-xl border border-black/8 overflow-hidden shadow-[0_6px_20.6px_0_rgba(0,0,0,0.08)]">
          <Image
            src={VideoThumbnail}
            alt="WVU Medicine video thumbnail"
            className="object-contain"
          />
        </div>
        <span className="text-black text-base font-normal">Real impact powered by AI - directly inside the clinical workflow</span>
      </div>
    </div>
  )
}