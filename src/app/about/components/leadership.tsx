import { Reveal } from "@/components/reveal";

const LEADERS = [
  {
    initials: "HU",
    name: "Hasham Ul Haq",
    role: "Co-founder & Chief Technology Officer",
    bio: "Leads the engine: the medical language models, the verification stack, and the deployment architecture — built on eight years of healthcare-specific model development at John Snow Labs.",
    chip: "bg-[#e9f1fe] text-[#0154b8]",
  },
  {
    initials: "RJ",
    name: "Ritwik Jain",
    role: "Co-founder & Chief Revenue Officer",
    bio: "Leads go-to-market and customer outcomes: how health plans, health systems, and ACOs take risk adjustment in-house and what it returns — measured, not promised.",
    chip: "bg-[#f0eafe] text-[#6d28d9]",
  },
] as const;

/**
 * Leadership - the two co-founders, equal weight.
 */
export function Leadership() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="leadership-heading">
      <div className="container-main">
        <Reveal as="header" className="text-center max-w-[720px] mx-auto mb-12">
          <p className="mb-5">
            <span className="eyebrow-chip bg-[#d97706]/10 text-[#b45309]">
              Leadership
            </span>
          </p>
          <h2 id="leadership-heading" className="apple-display text-[32px] md:text-[48px]">
            Two co-founders, one operating company.
          </h2>
        </Reveal>

        <Reveal as="ul" stagger className="grid grid-cols-1 md:grid-cols-2 gap-5 list-none p-0 m-0 max-w-[900px] mx-auto">
          {LEADERS.map((leader) => (
            <li key={leader.name} className="rounded-[28px] bg-[#fbfbfd] border border-border p-7 md:p-9">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl text-lg font-bold mb-5 ${leader.chip}`}>
                {leader.initials}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#0a0a12] mb-1">
                {leader.name}
              </h3>
              <p className="text-sm font-semibold text-muted mb-4">{leader.role}</p>
              <p className="text-[15px] apple-body leading-relaxed m-0">{leader.bio}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
