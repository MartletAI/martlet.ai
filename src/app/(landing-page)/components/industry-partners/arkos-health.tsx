import Image from "next/image";
import ARKOS_1 from "@/../public/assets/industry-partners/arkos-1.png"
import ARKOS_2 from "@/../public/assets/industry-partners/arkos-2.png"
import ARKOS_3 from "@/../public/assets/industry-partners/arkos-3.jpg"


export function ArkosHealth() {
  const METRICS = [
    {
      label: "Incremental Revenue",
      description: "Meaningful incremental revenue from validated HCC recapture + in-year capture",
      imageSrc: ARKOS_1,
      alt: "Incremental Revenue"
    },
    {
      label: "HCC Coding Accuracy", 
      description: "Higher coding throughput by reducing manual chart hunting and the rework",
      imageSrc: ARKOS_2,
      alt: "HCC Coding Accuracy"
    },
    {
      label: "Improved Audits",
      description: "Improved audit readiness through mock RADV testing & evidence packet automation",
      imageSrc: ARKOS_3,
      alt: "Improved Audits"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-[18px]">
      {METRICS.map((metric, index) => (
        <div 
          key={index}
          className="flex flex-col items-center justify-between bg-white w-[390px] h-[373px] pt-[48px] pb-[71px] px-[12px] rounded-[30px] shadow-[0_6px_20px_0_rgba(0,0,0,0.08)]"
        >
          <div className="w-full h-[180px] relative flex items-center justify-center">
            <Image
                src={metric.imageSrc}
                alt={metric.alt}
                fill
                className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-semibold text-black text-center">
              {metric.label}
            </h4>
            <p className="text-base font-normal leading-6 text-foreground text-center">
              {metric.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}