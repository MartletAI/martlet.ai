import { LeadForm } from "@/components/lead-form";

export function Hero() {
  return(
    <div className="apple-hero">
      <section className="max-w-[1440px] m-auto pt-32 md:pt-[168px] pb-16 md:pb-20 relative z-10 text-center">
        <div className="container-main flex flex-col justify-center items-center">
          <h1 className="apple-display text-[38px] md:text-[60px] animate-fade-in mb-6 max-w-[900px]">
            <span className="text-gradient-steel">Let&rsquo;s look at</span>
            <br />
            <span className="text-gradient-blue">your charts.</span>
          </h1>

          <p className="text-lg md:text-[21px] apple-body font-medium leading-relaxed animate-fade-in animation-delay-100 mb-10 max-w-[680px]">
            Tell us which workflow you&rsquo;re evaluating — retrospective,
            RADV, or prospective — and we&rsquo;ll run a working session on
            your own data. We typically reply within one business day.
          </p>

          <div className="animate-fade-in animation-delay-200 w-full max-w-[560px] bg-white rounded-[24px] shadow-[0_6px_24px_rgba(10,10,18,0.06)] border border-border p-5 md:p-9">
            <LeadForm submitLabel="Get in touch" />
          </div>
        </div>
      </section>
    </div>
  )
}
