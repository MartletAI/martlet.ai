import { TrustAndAccuracy as SharedTrustAndAccuracy } from "@/components/trust-and-accuracy";

export function TrustAndAccuracy() {
  return (
    <SharedTrustAndAccuracy bottomCard={
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
					description: "Deliver recommendations where your teams work (EHR workflows, queues, exports)",
				}
			]
		}
	/>
  );
}