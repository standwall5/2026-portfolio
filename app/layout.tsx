import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Ubuntu } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import "@/components/Grainy.css";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "John Patrick Salen",
  description: "Portfolio of John Patrick Salen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        <Nav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
