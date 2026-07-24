import { Icon, SmartLink } from "@/components";

export function Hero() {
  return (
    <div className="apple-hero">
      <section className="max-w-[1440px] m-auto pt-32 pb-16 md:pt-[168px] md:pb-24 relative z-10 min-h-[70vh]">
        <div className="container-main mx-auto flex flex-col justify-center items-center text-center">
          <p className="animate-fade-in mb-6">
            <span className="eyebrow-chip bg-[#067647]/10 text-[#067647]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" aria-hidden />
              Message received
            </span>
          </p>

          <h1 className="apple-display text-[38px] md:text-[60px] animate-fade-in mb-6 max-w-[800px]">
            <span className="text-gradient-steel">Thank you for</span>
            <br />
            <span className="text-gradient-blue">reaching out.</span>
          </h1>

          <p className="text-lg md:text-[21px] apple-body font-medium leading-relaxed animate-fade-in animation-delay-100 mb-10 max-w-[600px]">
            We typically reply within one business day.
          </p>

          <div className="animate-fade-in animation-delay-200 w-full max-w-[540px] bg-white rounded-[24px] shadow-[0_6px_24px_rgba(10,10,18,0.06)] border border-border p-6 md:p-10 flex flex-col items-center text-center gap-6">
            <div className="flex items-center justify-center size-16 md:size-20 rounded-full bg-primary/8">
              <Icon
                name="badge-check"
                className="size-8 md:size-10 text-primary"
              />
            </div>

            <p className="text-base md:text-lg text-muted leading-relaxed">
              Your message has been received. Our team will review your
              inquiry and get back to you shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <SmartLink
                href="/"
                className="btn btn-gradient h-[48px]! px-5! text-base! font-semibold!"
              >
                Back to home
              </SmartLink>
              <SmartLink
                href="/solutions/radv"
                className="btn btn-outline h-[48px]! px-5! text-base! font-semibold!"
              >
                Explore RADV readiness
              </SmartLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
