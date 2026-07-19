import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martlet AI — Regulatory-Grade AI for Risk Adjustment",
  description:
    "Take HCC coding in-house. Martlet AI automates retrospective, RADV, and prospective workflows with healthcare-specific medical language models — run inside your environment, with audit-defensible evidence on every code.",
  metadataBase: new URL("https://martlet.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Martlet AI — Regulatory-Grade AI for Risk Adjustment",
    description:
      "Take HCC coding in-house. Martlet AI automates retrospective, RADV, and prospective workflows with healthcare-specific medical language models — run inside your environment, with audit-defensible evidence on every code.",
    url: "https://martlet.ai",
    siteName: "Martlet AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martlet AI — Regulatory-Grade AI for Risk Adjustment",
    description:
      "Take HCC coding in-house. Martlet AI automates retrospective, RADV, and prospective workflows with healthcare-specific medical language models — run inside your environment, with audit-defensible evidence on every code.",
  },
};

// Organization structured data for SEO
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Martlet AI",
  url: "https://martlet.ai",
  logo: "https://martlet.ai/assets/logo/martlet-ai.png",
  description:
    "Regulatory-grade AI for risk adjustment. Martlet AI automates HCC coding — retrospective, RADV, and prospective — inside the customer's environment with audit-defensible evidence on every code.",
  sameAs: ["https://www.linkedin.com/company/johnsnowlabs/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://martlet.ai/contact",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-KX6DGR85');`,
          }}
        />
        {/* End Google Tag Manager */}


        {/* Organization structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KX6DGR85"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}


        {/* Skip link for keyboard navigation accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-N2V2SB576N" />
    </html>
  );
}

