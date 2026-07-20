import { FooterCertifications } from "./components/certifications";
import { FooterNav } from "./components/navigation";
import { FooterBottom } from "./components/bottom-bar";

export function Footer() {
  return (
    <footer className="apple-footer w-full border-t border-black/[0.06]">
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
