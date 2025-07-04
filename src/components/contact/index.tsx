import { SectionWithHeading } from "../section";
import { Button } from "../ui/button";
import "./contact.css";

export function Contact() {
  return (
    <SectionWithHeading
      aria-labelledby="contact"
      titleClassName="mb-8 relative z-10"
      className="rounded-[25px] py-8! px-4! xl:py-20! bg-[#F5F6F8] overflow-hidden backdrop-blur-[283.5906982421875px]"
      title="Ready to Transform Your Risk Adjustment?"
    >
      <div className="purple-circle"></div>
      <div className="blue-circle"></div>
      <div className="sky-circle"></div>
      <div className="sky-circle-2"></div>
      <p className="text-center relative z-10">
        Join forward-thinking healthcare teams using Martlet AI for smarter
        <br className="hidden md:block" />
        coding and better outcomes.
      </p>
      <div className="flex justify-center gap-4 mt-8 relative z-10">
        <Button>Book a call</Button>
        <Button variant="outline">Watch demo</Button>
      </div>
    </SectionWithHeading>
  );
}
