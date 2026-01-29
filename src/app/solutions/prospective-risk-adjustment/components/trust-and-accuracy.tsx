import { TrustAndAccuracy as SharedTrustAndAccuracy } from "@/components/trust-and-accuracy";

export function TrustAndAccuracy() {
  return (
    <SharedTrustAndAccuracy
			topCard={
				[
					{
						title: "More accurate capture",
						description:
							"Surface supported risk gaps early, when clinicians can still document and address them.",
						icon: "settings" as const,
						iconColor: "#2563EB",
						bg: "bg-[#eff7ff]",
					},
					{
						title: "Less back-and-forth",
						description:
							"Reduce CDI queries by providing specific cues for what to document and where it matters.",
						icon: "lightning" as const,
						iconColor: "#079455",
						bg: "bg-[#f0fff8]",
					},
					{
						title: "Cleaner submissions",
						description:
							"MEAT-aware guardrails help avoid unsupported coding and improve downstream audit posture.",
						icon: "micro-scope" as const,
						iconColor: "#F48220",
						bg: "bg-[#fffbf2]",
					},
					{
						title: "Faster workflows",
						description:
							"Evidence-linked recommendations are linked to exact documents, reducing chart hunting.",
						icon: "shield" as const,
						iconColor: "#6D44C9",
						bg: "bg-[#f2f3ff]",
					},
				]
			}
			bottomCard={
				[
					{
						image: "/assets/lightning.png",
						width: 48,
						height: 74,
					alt: "",
					title: "Built for point-of-care speed",
					description: "Short, prioritized suggestions designed for pre-visit planning and in-visit workflows.",
				},
				{
					image: "/assets/integration.png",
					width: 64,
					height: 64,
					alt: "",
					title: "Integrates with your systems",
					description: "Deliver recommendations where your teams work (EHR workflows, queues, exports).",
				}
			]
		}
	/>
  );
}
