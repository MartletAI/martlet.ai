import Link from "next/link";
import { Icon } from "@/components/icon";
import { FOOTER_LINKS } from "@/constants/footer-links";

export function FooterBottom() {


  return (
    <section className="py-12 border-t border-indicator-prospective">
      <div className="container-main mx-auto flex justify-between items-center lg:flex-row flex-col-reverse gap-6 lg:gap-0 px-4 md:px-0 lg:px-0">
        {/* Copyright */}
        <p className="text-white text-base leading-6 font-normal max-w-fit w-full text-center">
            {FOOTER_LINKS.COPY_RIGHT}
        </p>
        
        <div className="flex gap-6 items-center flex-col sm:flex-row w-full sm:w-auto">
            {/* Legal */}
            <nav aria-labelledby="footer-legal">
              <h2 id="footer-legal" className="sr-only">Legal Links</h2>
              <ul className="flex flex-col sm:flex-row gap-5 items-center">
                  {FOOTER_LINKS.LEGAL.map((legal) => (
                  <li key={legal.label}>
                      <Link href={legal.href} className="text-white text-base leading-6 font-normal hover:text-white/80 transition-colors">
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
