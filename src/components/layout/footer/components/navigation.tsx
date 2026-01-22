import Link from "next/link";
import { FOOTER_LINKS } from "@/constants/footer-links";

export function FooterNav() {
  return (
    <>
      {/* Products */}
      <nav aria-labelledby="footer-products">
        <h2 id="footer-products" className="text-[14px] font-semibold text-white/80 leading-6 pb-4">
          {FOOTER_LINKS.PRODUCTS.title}
        </h2>
        <ul className="flex flex-col gap-3">
          {FOOTER_LINKS.PRODUCTS.links.map((product) => (
            <li key={product.label}>
              <Link href={product.href} className="leading-6 font-semibold text-base text-white hover:text-white/80 transition-colors">
                {product.label}
              </Link>
              {product.label === "RADV Audit Readiness" && (
                <span className="rounded-sm border border-white/30 bg-white/10 px-2 py-0.5 text-xs text-white ml-2">
                  New
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Resources */}
      <nav aria-labelledby="footer-resources">
        <h2 id="footer-resources" className="text-[14px] font-semibold text-white/80 leading-6 pb-4">
          {FOOTER_LINKS.RESOURCES.title}
        </h2>
        <ul className="flex flex-col gap-3">
          {FOOTER_LINKS.RESOURCES.links.map((resource) => (
            <li key={resource.label}>
              <Link href={resource.href} className="leading-6 font-semibold text-base text-white hover:text-white/80 transition-colors">
                {resource.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Get in touch */}
      <nav aria-labelledby="footer-get-in-touch">
        <h2 id="footer-get-in-touch" className="text-[14px] font-semibold text-white/80 leading-6 pb-4">
          Get in touch
        </h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link href="tel:+13027865227" className="leading-6 font-semibold text-base text-white hover:text-white/80 transition-colors">
              +1(302) 786-5227
            </Link>
          </li>
          <li>
            <Link href="mailto:info@martlet.ai" className="leading-6 font-semibold text-base text-white hover:text-white/80 transition-colors">
              info@martlet.ai
            </Link>
          </li>
          <li>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=16192+Coastal+Highway+Lewes,+DE+19958,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="leading-6 font-semibold text-base text-white hover:text-white/80 transition-colors"
            >
              16192 Coastal Highway Lewes, <br /> DE 19958, USA
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
