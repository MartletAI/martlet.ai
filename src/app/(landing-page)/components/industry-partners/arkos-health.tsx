import Image from "next/image";
import Incremental_Revenue from "@/../public/assets/arkos-incremental-revenue.svg";
import HCC_CODING from "@/../public/assets/arkos-hcc-coding.svg";
import IMPROVED_AUDITS from "@/../public/assets/arkos-improved-audits.svg";


export function ArkosHealth() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Image 
        src={Incremental_Revenue} 
        alt="John Snow Labs workflow diagram" 
        className="object-contain" 
      />
      <Image 
        src={HCC_CODING} 
        alt="John Snow Labs workflow diagram" 
        className="object-contain" 
      />
      <Image 
        src={IMPROVED_AUDITS} 
        alt="John Snow Labs workflow diagram" 
        className="object-contain" 
      />
    </div>
  )
}