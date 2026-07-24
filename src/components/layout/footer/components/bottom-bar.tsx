import Link from "next/link";
import { FOOTER_LINKS } from "@/constants/footer-links";

export function FooterBottom() {


  return (
    <section className="py-8 border-t border-black/[0.06]">
      <div className="container-main mx-auto flex justify-between items-center lg:flex-row flex-col-reverse gap-6 lg:gap-0 px-4 md:px-0 lg:px-0">
        {/* Copyright */}
        <p className="text-[#6e6e73] text-sm leading-6 font-medium max-w-fit w-full text-center">
            {FOOTER_LINKS.COPY_RIGHT}
        </p>

        <div className="flex gap-6 items-center flex-col sm:flex-row w-full sm:w-auto">
            {/* Legal */}
            <nav aria-labelledby="footer-legal">
              <h2 id="footer-legal" className="sr-only">Legal Links</h2>
              <ul className="flex flex-col sm:flex-row gap-5 items-center">
                  {FOOTER_LINKS.LEGAL.map((legal) => (
                  <li key={legal.label}>
                      <Link href={legal.href} className="text-[#6e6e73] text-sm leading-6 font-medium hover:text-[#0165dc] transition-colors">
                      {legal.label}
                      </Link>
                  </li>
                  ))}
              </ul>
            </nav>
        </div>
      </div>
    </section>
  );
}
