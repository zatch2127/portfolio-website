import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import MouseFollower from "@/components/MouseFollower"
import ScrollProgress from "@/components/ScrollProgress"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Alex Johnson - Full Stack Developer",
  description:
    "Experienced full-stack developer specializing in modern web technologies. View my portfolio of innovative projects and get in touch.",
  keywords: "full stack developer, react, next.js, portfolio, web development",
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Alex Johnson - Full Stack Developer",
    description: "Experienced full-stack developer specializing in modern web technologies.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-slate-950 text-white overflow-x-hidden`}>
        <ScrollProgress />
        <MouseFollower />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
