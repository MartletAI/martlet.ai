import { Icon } from "@/components/icon"


export function Hero() {
  return(
    <section className="gradient-blogs-hero pt-[156px] pb-10 relative overflow-hidden">
      <div className="container-main mx-auto flex flex-col justify-center relative z-10">
        <div className="mx-auto flex w-[188px] h-[37px] px-4 py-1.5 justify-center items-center gap-1.5 rounded-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] mb-6">
          <Icon name="ellipse" className="fill-[#33C020] size-2" />
          <p className="text-black font-medium text-[14px]">The Blog</p>
        </div>
        <h1 className="flex flex-wrap justify-center text-center font-extrabold text-[64px] leading-[77px] tracking-[-0.02em] mx-auto">
          <span className="gradient-blog-text-primary block">Martlet AI Blogs</span>
        </h1>
        <p className="my-8 text-center text-2xl italic font-medium leading-8 text-foreground mx-auto">New product features, the latest in technology, solutions and updates</p>
      </div>
    </section>
  )
}