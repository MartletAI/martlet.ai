import Link from "next/link";
import { Icon } from "@/components/icon";
import { FOOTER_LINKS } from "@/constants/footer-links";

export function FooterBottom() {


  return (
    <section className="py-12 border-t border-indicator-prospective">
      <div className="max-w-container mx-auto flex justify-between items-center sm:flex-row flex-col gap-6 sm:gap-0">
        {/* Copyright */}
        <p className="text-white text-base leading-6 font-normal max-w-[426px] w-full text-center sm:text-left">
            {FOOTER_LINKS.COPY_RIGHT}
        </p>
        
        <div className="flex gap-6 items-center flex-col sm:flex-row w-full sm:w-auto">
            {/* Legal */}
            <nav aria-labelledby="footer-legal">
            <h2 id="footer-legal" className="sr-only">Legal Links</h2>
            <ul className="flex gap-5">
                {FOOTER_LINKS.LEGAL.map((legal) => (
                <li key={legal.label}>
                    <Link href={legal.href} className="text-white text-base leading-6 font-normal hover:text-white/80 transition-colors">
                    {legal.label}
                    </Link>
                </li>
                ))}
            </ul>
            </nav>
            {/* Social */}
            <nav aria-labelledby="footer-social">
            <h2 id="footer-social" className="sr-only">Social Media Links</h2>
            <ul className="flex gap-6">
                {FOOTER_LINKS.SOCIAL.map((social) => (
                <li key={social.href}>
                    <Link 
                        href={social.href} 
                        className="text-white text-base leading-6 font-normal hover:text-white/80 transition-colors"
                        aria-label={`Visit our ${social.icon} page`}
                    >
                    <Icon name={social.icon} className="w-6 h-6" aria-hidden={true} />
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
