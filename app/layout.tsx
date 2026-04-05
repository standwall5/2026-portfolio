import type { Metadata } from "next";
import { Manrope, Ubuntu, Fira_Code, Tiny5 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import "@/components/Grainy.css";
import Footer from "@/components/layout/Footer";
import FontSelector from "@/components/FontSelector";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "500",
});

const firaCode = Fira_Code({
  variable: "--font-firacode",
  subsets: ["latin"],
});

const tiny5 = Tiny5({
  variable: "--font-tiny5",
  subsets: ["latin"],
  weight: "400",
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
        className={`${manrope.variable} ${ubuntu.variable} ${firaCode.variable} ${tiny5.variable} antialiased`}
      >
        <Nav />

        {children}
        <div className="w-max m-auto mb-20">
          <FontSelector />
        </div>

        <Footer />
      </body>
    </html>
  );
}
