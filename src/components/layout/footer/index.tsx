import { FooterCertifications } from "./components/certifications";
import { FooterNav } from "./components/navigation";
import { FooterBottom } from "./components/bottom-bar";

export function Footer() {
  return (
    <footer className="bg-footer-bg w-full">
      {/* Footer Contents */}
      <section className="container-main pt-10 pb-8 xl:pt-16 xl:pb-12 mx-auto flex flex-col xl:flex-row gap-12 xl:gap-26 px-4 xl:px-0">
        <FooterCertifications />
        <FooterNav />
      </section>

      {/* Copyright & Legal */}
      <FooterBottom />
    </footer>
  );
}
