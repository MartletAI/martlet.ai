import { Icon } from "@/components/icon"
import { Form } from "./form"

export function Hero() {
  return(
    <section className="gradient-contact-hero pt-28 pb-10 md:pt-[156px] relative overflow-hidden">
      <div className="container-main mx-auto flex flex-col justify-center relative z-10 px-4 md:px-0">
        <div className="mx-auto flex w-fit h-auto py-1 md:py-1.5 md:h-[37px] px-3 md:px-4 justify-center items-center gap-1.5 rounded-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] mb-6">
          <Icon name="ellipse" className="fill-[#33C020] size-1.5 md:size-2" />
          <p className="text-black font-medium text-xs md:text-[14px]">Contact Us</p>
        </div>
        <h1 className="flex flex-wrap justify-center text-center font-extrabold text-4xl md:text-[64px] leading-tight md:leading-[77px] tracking-[-0.02em] mx-auto">
          <span className="gradient-contact-text-primary block">Tell Us About&nbsp;</span>
          <span className="gradient-contact-text-secondary block">Your Needs</span>
        </h1>
        <p className="my-6 md:my-8 text-center text-lg md:text-2xl italic font-medium leading-normal md:leading-8 text-foreground mx-auto max-w-[90%] md:max-w-full">Join healthcare teams using Martlet AI for smarter coding and better outcomes</p>
        <Form />
      </div>
    </section>
  )
}