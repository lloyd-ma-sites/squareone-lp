import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, Jost } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SquareOne Solutions — Aged Care Advisory",
  description:
    "A boutique aged care advisory practice partnering with providers across Australia on clinical governance, compliance and operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Page-wide background image (repeats the hero background) */}
        <div
          aria-hidden
          className="fixed inset-0 -z-50 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-background.png')" }}
        />
        {children}
      </body>
    </html>
  );
}
