import Link from "next/link";
import { FOOTER_LINKS } from "@/constants/footer-links";
import { Icon } from "@/components/icon";
import { SmartLink } from "@/components";

const HEADING_CLASS = "text-[13px] font-semibold uppercase tracking-[0.1em] text-white/50 leading-6 pb-4";
const LINK_CLASS = "leading-6 font-medium text-base text-white/90 hover:text-white transition-colors";

export function FooterNav() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
      {/* Products */}
      <nav aria-labelledby="footer-products">
        <h2 id="footer-products" className={HEADING_CLASS}>
          {FOOTER_LINKS.PRODUCTS.title}
        </h2>
        <ul className="flex flex-col gap-3">
          {FOOTER_LINKS.PRODUCTS.links.map((product) => (
            <li key={product.label}>
              <Link href={product.href} className={LINK_CLASS}>
                {product.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Resources */}
      <nav aria-labelledby="footer-resources">
        <h2 id="footer-resources" className={HEADING_CLASS}>
          {FOOTER_LINKS.RESOURCES.title}
        </h2>
        <ul className="flex flex-col gap-3">
          {FOOTER_LINKS.RESOURCES.links.map((resource) => (
            <li key={resource.label}>
              {resource.href === '/contact' ? (
                <SmartLink href={resource.href} className={LINK_CLASS}>
                  {resource.label}
                </SmartLink>
              ) : (
                <Link href={resource.href} className={LINK_CLASS}>
                  {resource.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Get in touch */}
      <nav aria-labelledby="footer-get-in-touch">
        <h2 id="footer-get-in-touch" className={HEADING_CLASS}>
          Get in touch
        </h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link href="tel:+13027865227" className={LINK_CLASS}>
              +1(302) 786-5227
            </Link>
          </li>
          <li>
            <Link href="mailto:support@martlet.ai" className={LINK_CLASS}>
              support@martlet.ai
            </Link>
          </li>
          <li>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=16192+Coastal+Highway+Lewes,+DE+19958,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              16192 Coastal Highway Lewes, <br /> DE 19958, USA
            </Link>
          </li>
          <li>
            <Link
                href="https://www.linkedin.com/company/martlet-ai/posts/?feedView=all"
                className="text-white/90 hover:text-white transition-colors"
                aria-label={`Visit our LinkedIn page`}
            >
              <Icon name="linkedin" className="w-6 h-6" aria-hidden={true} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
