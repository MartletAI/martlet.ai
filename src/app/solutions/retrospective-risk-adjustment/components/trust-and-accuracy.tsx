import { TrustAndAccuracy as SharedTrustAndAccuracy } from "@/components/trust-and-accuracy";

export function TrustAndAccuracy() {
  return (
    <SharedTrustAndAccuracy bottomCard={
      [
        {
          image: "/assets/trust-and-accuracy/scale.png",
          width: 86,
          height: 81,
          alt: "",
          title: "Built to run at scale",
          description: "Designed for high-volume retrospective workloads, process millions of records with consistent output quality.",
        },
        {
          image: "/assets/trust-and-accuracy/secure.png",
          width: 92,
          height: 60,
          alt: "",
          title: "Deployed inside your environment",
          description: "Cloud/VPC/on-prem options so PHI stays under your control no external data egress required.",
        }
      ]
    }
  />
  );
}