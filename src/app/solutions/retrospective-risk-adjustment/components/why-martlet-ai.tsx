
import { WhyMartletAI as SharedWhyMartletAI } from "@/components/why-martlet-ai"

export function WhyMartletAI() {
	return (
		<SharedWhyMartletAI 
      title="Why Martlet AI?" 
      subtitle="Proven technology that delivers measurable results at enterprise scale" 
      features={[
        {
          icon: "checked",
          title: "Industry-leading performance",
          description: "Validated by peer reviewed publications"
        },
        {
          icon: "coins-stacked",
          title: "Proven ROI",
          description: "Measurable lift in throughput and captured value."
        },
        {
          icon: "lightning",
          title: "Scalable by design",
          description: "High-volume workloads across millions of records."
        },
        
      ]}
    sectionGAP={64} />
	)
}