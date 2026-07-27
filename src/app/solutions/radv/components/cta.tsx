import { CTA as SharedCTA } from "@/components/cta";

export function CTA() {
  return (
    <SharedCTA
      title="Bring one contract. We'll run a mock RADV on it."
      description="Sampled on CMS's methodology, validated at 99% precision, findings returned by HCC with evidence packets and an exposure estimate — inside your environment, on codes submitted years ago, by anyone, on any platform."
      submitLabel="Run a mock RADV"
      backgroundColor="bg-white"
    />
  );
}
