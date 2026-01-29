import { Icon } from "@/components/icon";
import { FeatureTextProps } from "./types";


export function FeatureText({ icon, text }: FeatureTextProps) {
  return (
    <div className="h-[193px] w-[193px] p-xl rounded-xl border border-black/8 bg-white shadow-[0_6px_20.6px_0_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-4">
      <div className="rounded-lg border-2 border-white/12 bg-indicator-prospective h-12 w-12 flex justify-center items-center">
        <Icon name={icon} className="text-white size-5" />
      </div>
      <p className="text-foreground text-center text-base font-semibold leading-6">{text}</p>
    </div>
  )
}