import { Icon } from "@/components";
import { SectionLabel } from "@/components/section-label";

const features = [
  {
    icon: "square-code" as const,
    title: "Code-level verdicts",
    description: "Supported vs weak, with reasons and traceability."
  },
  {
    icon: "data" as const,
    title: "Evidence packets",
    description: "Page references + snippets packaged for review and submission."
  },
  {
    icon: "file" as const,
    title: "Mock audit reports",
    description: "Trends by vendor/provider/condition to target fixes."
  }
]

export function Outputs() {
  return (
    <section
      aria-labelledby="outputs-heading"
      className="gradient-outputs py-10"
    >
      <div className="container-main flex flex-col gap-[46px]">
        {/* Header Section */}
        <header className="flex flex-col items-center">
          <SectionLabel className="text-indicator-prospective mb-3">Outputs</SectionLabel>
          <h2
            id="designed-for-trust-heading"
            className="font-semibold text-[36px] leading-[44px] tracking-[-0.72px] text-center text-foreground"
          >
            Built for auditors and operations
          </h2>
        </header>
        <div className="flex flex-col gap-5 xl:flex-row justify-between items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start gap-[17px] w-[399.333px] h-[211px] min-w-[280px] p-[32px] rounded-[12px] bg-white border border-[rgba(0,0,0,0.08)] shadow-[0_6px_20.6px_0_rgba(0,0,0,0.08)]">
              <div className="w-12 h-12 flex justify-center items-center gap-2.5 bg-[#F3EEFF] p-3 rounded-[10px]">
                <Icon name={feature.icon} className="text-[#682FE9] size-5" />
              </div>
              <div className="flex flex-col justify-center gap-[54px] self-stretch">
                <div className="flex flex-col justify-center gap-1 self-stretch">
                  <span className="font-semibold text-[16px] leading-[28px] text-[#181d27]">{feature.title}</span>
                  <span className="font-normal text-base text-[#252b37]">{feature.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}