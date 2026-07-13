import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import EasterEgg from "@/components/EasterEgg";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mohammad Zaid | AI Software Developer",
  description:
    "AI Software Developer building intelligent systems, scalable SaaS platforms, and production-ready applications. Specializing in Python, React, LLMs, and full-stack development.",
  keywords:
    "AI developer, software engineer, full-stack developer, Python, React, Next.js, LLM, machine learning, SaaS, automation, Flask, FastAPI",
  authors: [{ name: "Mohammad Zaid" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mohammad Zaid | AI Software Developer",
    description:
      "Building intelligent systems, scalable SaaS platforms, and production-ready applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#050505] text-white`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <EasterEgg />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
