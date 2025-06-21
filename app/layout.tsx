import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseFollower from "@/components/MouseFollower";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mohammad Zaid – Aspiring Software & Web Developer",
  description:
    "Aspiring software and web developer with hands-on experience in Python, Django, Tailwind CSS, and Bootstrap. Also familiar with core programming languages like C, C++, and Java. Explore my portfolio and projects.",
  keywords:
    "python developer, django, web development, tailwind css, bootstrap, software developer, fresher portfolio, c, c++, java, backend developer",
  authors: [{ name: "Mohammad Zaid" }],
  openGraph: {
    title: "Mohammad Zaid – Aspiring Software & Web Developer",
    description:
      "Fresher developer skilled in Python, Django, Tailwind CSS, and Bootstrap. Check out my portfolio of beginner-friendly projects and learn more about my journey.",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-slate-950 text-white overflow-x-hidden`}
      >
        <ScrollProgress />
        <MouseFollower />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
