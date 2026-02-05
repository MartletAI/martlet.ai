import { Icon } from "@/components";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

const pipelines = [
  {
    title: "Ingest",
    description: "Charts + code lists + metadata bulk in, consistent out.",
    icon: "file" as const,
    className: "radv-pipeline-injest"
  },
  {
    title: "Validate",
    description: "Evidence-linked verification with MEAT-aware signals.",
    icon: "check-verified" as const,
    className: "radv-pipeline-validate"
  },
  {
    title: "Package",
    description: "Submission-ready packets + exports for QA and ops.",
    icon: "package" as const,
    className: "radv-pipeline-package"
  },
]

function Svg2() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="821" height="337" viewBox="0 0 821 337" fill="none" className="absolute top-0 left-1/2 -translate-x-1/2 -ml-12">
      <path d="M479.634 336.924C391.652 336.924 319.335 266.052 317.22 178.408H317.03V174.462C317.03 89.2334 247.692 19.8932 162.462 19.8932C77.2318 19.8932 7.89287 89.2334 7.89287 174.462C7.89287 259.692 77.2318 329.031 162.462 329.031H165.093V336.924H162.462C72.8802 336.924 0 264.045 0 174.462C0 84.8805 72.8802 12.0003 162.462 12.0003C250.443 12.0003 322.761 82.8718 324.876 170.516H325.065V174.462C325.065 259.692 394.404 329.031 479.634 329.031C564.864 329.031 634.203 259.692 634.203 174.462V170.516H634.391C636.505 82.8718 708.823 12.0003 796.805 12.0003H799.436V19.8932H796.805C711.575 19.8932 642.237 89.2334 642.237 174.462V178.408H642.047C639.934 266.052 567.616 336.924 479.634 336.924Z" fill="url(#paint0_linear_1902_8684)"/>
      <path d="M799.436 32.069V0L820.629 16.094L799.436 32.069Z" fill="url(#paint1_linear_1902_8684)"/>
      <defs>
        <linearGradient id="paint0_linear_1902_8684" x1="0.00131548" y1="174.462" x2="799.437" y2="174.462" gradientUnits="userSpaceOnUse">
          <stop stopColor="#005AFF"/>
          <stop offset="0.485577" stopColor="#7C45DA"/>
          <stop offset="1" stopColor="#FF2FB2"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1902_8684" x1="0.00131548" y1="174.462" x2="799.437" y2="174.462" gradientUnits="userSpaceOnUse">
          <stop stopColor="#005AFF"/>
          <stop offset="0.485577" stopColor="#7C45DA"/>
          <stop offset="1" stopColor="#FF2FB2"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function Svg({ icon }: { icon: typeof pipelines[number]['icon'] }) {
  return (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="266" height="266" viewBox="0 0 266 266" fill="none">
        <path d="M132.944 265.888C206.367 265.888 265.888 206.367 265.888 132.944C265.888 59.521 206.367 0 132.944 0C59.521 0 0 59.521 0 132.944C0 206.367 59.521 265.888 132.944 265.888Z" fill="url(#paint0_linear_1902_8463)"/>
        <defs>
          <linearGradient id="paint0_linear_1902_8463" x1="38.6626" y1="38.6619" x2="223.367" y2="223.367" gradientUnits="userSpaceOnUse">
            <stop offset="0.1778" stopColor="#EEEFF2"/>
            <stop offset="0.2487" stopColor="#EDEEF2"/>
            <stop offset="0.6832" stopColor="#E5E7EC"/>
            <stop offset="0.8401" stopColor="#E2E4E9"/>
          </linearGradient>
        </defs>
      </svg>
      <Icon name={icon} className="absolute size-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
    </div>
  )
}

export function Pipeline() {
  return (
    <section
      aria-labelledby="approaches-heading-2"
      className="gradient-approaches-2 py-10"
    >
      <div className="container-main flex flex-col">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-11.5">
          <SectionLabel className="text-indicator-prospective mb-3">Approaches</SectionLabel>
          <h2
            id="designed-for-trust-heading"
            className="section-heading text-center mb-5"
          >
            A simple RADV pipeline
          </h2>
        </header>
        <div className="relative flex items-center justify-center gap-[50px] w-full max-w-[1250px] overflow-x-auto overflow-y-hidden pt-10 no-scrollbar">
          <Svg2 />
          {pipelines.map((pipeline, index) => (
            <div key={index} className={cn("relative w-[266px] h-[340px] mb-10 shrink-0", index === 0 && "ml-8")}>
              <Svg icon={pipeline.icon} />
              {index === 1 ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="271" height="81" viewBox="0 0 271 81" fill="none" className="absolute -top-7">
                  <path d="M0.707031 72.2176C33.9229 20.9389 96.6712 -7.607 159.419 2.85105C206.6 11.1083 246.379 39.4595 269.947 79.4211" stroke="#A7A9AC" strokeWidth="1.4157" strokeMiterlimit="10" strokeLinecap="round" strokeDasharray="12.55 12.55"/>
                </svg>
              ) : index === 2 ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="299" height="306" viewBox="0 0 299 306" fill="none" className="absolute -top-3 -right-6">
                  <path d="M202.091 0.708984C258.273 25.0848 297.57 81.0505 297.57 146.196C297.57 233.741 226.6 304.711 139.055 304.711C79.6318 304.711 27.8454 272.013 0.707031 223.629" stroke="#A7A9AC" strokeWidth="1.4157" strokeMiterlimit="10" strokeLinecap="round" strokeDasharray="12.19 12.19"/>
                </svg>
              ) : null}
              <h3 className={cn("text-center mt-15 text-xl font-semibold", pipeline.className)}>{pipeline.title}</h3>
              <p className="text-center text-base font-normal">{pipeline.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}