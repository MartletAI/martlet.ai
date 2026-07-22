import { CTA as SharedCTA } from "@/components/cta";

export function CTA() {
  return (
    <SharedCTA
      title="Bring an anonymized chart. We'll show you what audit-grade looks like."
      subtitle="Working session"
      description="30 minutes. We run Martlet AI on your data, walk the retrospective and RADV workflows end-to-end, and answer the security and deployment questions your team will ask."
      submitLabel="Schedule a walkthrough"
      backgroundColor="bg-white"
    />
  );
}
