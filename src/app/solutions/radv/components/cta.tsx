import { CTA as SharedCTA } from "@/components/cta";

export function CTA() {
  return (
    <SharedCTA
      title="Bring one contract. We'll run a mock RADV on it."
      subtitle="Working session"
      description="Sampled per CMS's methodology, validated at 99% precision, findings by HCC — with evidence packets and an exposure estimate. Inside your environment, on your charts."
      ctaText="Run a mock RADV"
      ctaLink="/contact"
      backgroundColor="bg-white"
    />
  );
}
