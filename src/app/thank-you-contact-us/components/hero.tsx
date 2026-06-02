import { Icon, SmartLink } from "@/components";

export function Hero() {
  return (
    <section className="gradient-contact-hero pt-28 pb-16 md:pt-[156px] md:pb-24 relative overflow-hidden min-h-[70vh]">
      <div className="container-main mx-auto flex flex-col justify-center relative z-10 px-4 md:px-0">
        <div className="mx-auto flex w-fit h-auto py-1 md:py-1.5 md:h-[37px] px-3 md:px-4 justify-center items-center gap-1.5 rounded-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] mb-6">
          <Icon name="ellipse" className="fill-[#33C020] size-1.5 md:size-2" />
          <p className="text-black font-medium text-xs md:text-[14px]">
            Message Received
          </p>
        </div>

        <h1 className="flex flex-wrap justify-center text-center font-extrabold text-4xl md:text-[64px] leading-tight md:leading-[77px] tracking-[-0.02em] mx-auto">
          <span className="gradient-contact-text-primary block">
            Thank You for&nbsp;
          </span>
          <span className="gradient-contact-text-secondary block">
            Reaching Out
          </span>
        </h1>

        <p className="my-6 md:my-8 text-center text-lg md:text-2xl italic font-medium leading-normal md:leading-8 text-foreground mx-auto max-w-[90%]">
          We will get back to you shortly.
        </p>

        <div className="w-full max-w-[614px] mx-auto bg-white rounded-[12px] shadow-[0px_6px_20.6px_0px_rgba(0,0,0,0.05)] border border-[#E4E7EC] p-6 md:p-10 flex flex-col items-center text-center gap-6">
          <div className="flex items-center justify-center size-16 md:size-20 rounded-full bg-[#E7EEFF]">
            <Icon
              name="badge-check"
              className="size-8 md:size-10 text-[#2563EB]"
            />
          </div>

          <p className="text-base md:text-lg text-[#475467] leading-relaxed">
            Your message has been received. Our team will review your inquiry
            and respond as soon as possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <SmartLink
              href="/"
              className="inline-flex items-center justify-center gap-2 h-[48px] px-[18px] py-[12px] bg-[#2563EB] text-white font-semibold text-base rounded-lg border-2 border-white/12 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] transition-colors"
            >
              Back to Home
            </SmartLink>
            <SmartLink
              href="/solutions/retrospective-risk-adjustment"
              className="inline-flex items-center justify-center gap-2 h-[48px] px-[18px] py-[12px] bg-white text-[#2563EB] font-semibold text-base rounded-lg border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] transition-colors"
            >
              Explore Solutions
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}
