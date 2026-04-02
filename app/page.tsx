import Image from "next/image";
import ProfileHero from "@/components/ProfileHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative p-24">
      <ProfileHero />
    </main>
  );
}
