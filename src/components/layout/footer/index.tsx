import { FooterCertifications } from "./components/certifications";
import { FooterNav } from "./components/navigation";
import { FooterBottom } from "./components/bottom-bar";

export function Footer() {
  return (
    <footer className="bg-footer-bg w-full">
      {/* Footer Contents */}
      <section className="max-w-[1230px] pt-16 pb-12 mx-auto flex gap-26 sm:flex-row flex-col px-5 sm:px-0">
        <FooterCertifications />
        <FooterNav />
      </section>

      {/* Copyright & Legal */}
      <FooterBottom />
    </footer>
  );
}
