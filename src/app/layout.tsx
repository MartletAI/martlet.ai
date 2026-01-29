import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martlet AI | Smarter Risk Adjustment",
  description:
    "On-premise, Secure, Real-time HCC Coding & Risk Profiling. Streamline prospective, retrospective, and RADV workflows with AI-powered precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
