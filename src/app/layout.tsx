import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martlet AI | Smarter Risk Adjustment",
  description:
    "On-premise, Secure, Real-time HCC Coding & Risk Profiling. Streamline prospective, retrospective, and RADV workflows with AI-powered precision.",
  metadataBase: new URL("https://martlet.ai"),
  openGraph: {
    title: "Martlet AI | Smarter Risk Adjustment",
    description:
      "On-premise, Secure, Real-time HCC Coding & Risk Profiling. Streamline prospective, retrospective, and RADV workflows with AI-powered precision.",
    url: "https://martlet.ai",
    siteName: "Martlet AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martlet AI | Smarter Risk Adjustment",
    description:
      "On-premise, Secure, Real-time HCC Coding & Risk Profiling. Streamline prospective, retrospective, and RADV workflows with AI-powered precision.",
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
    "On-premise, Secure, Real-time HCC Coding & Risk Profiling for healthcare risk adjustment.",
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
        {/* Organization structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
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
    </html>
  );
}

