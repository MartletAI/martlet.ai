import { Clients } from "./clients";

const TITLE = "Industry Partners";


export function IndustryPartners() {
  return (
    <section
      aria-labelledby="industry-partners-heading"
      className="gradient-industry-partners py-10 flex flex-col items-center justify-center mx-auto gap-11.5"
    >
      <h2 id="industry-partners-heading" className="section-heading text-center">{TITLE}</h2>
      <Clients />
    </section>
  );
}