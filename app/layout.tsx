import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Rafael, desenvolvedor full stack especializado em aplicações web modernas.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 text-zinc-100`}
      >
        <Header />
        <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
