import type { Metadata } from "next";
import { Geist, Playfair_Display, Quicksand, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanmodel",
  description: "A showcase of professional modeling work.",
};

import { FloatingElements } from "@/components/FloatingElements";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${playfair.variable} ${caveat.variable} antialiased bg-background text-foreground`}
      >
        <FloatingElements />
        {children}
      </body>
    </html>
  );
}
