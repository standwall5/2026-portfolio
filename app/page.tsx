import Image from "next/image";
import ProfileHero from "@/components/ProfileHero";
import Skills from "@/components/Skills";
import "./globals.css";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main
      id="home"
      className="flex min-h-screen flex-col items-center justify-start gap-24 relative p-24"
    >
      <ProfileHero />
      <Projects />
      <Skills />
    </main>
  );
}
