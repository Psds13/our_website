// app/page.tsx

import Hero from "@/app/components/Hero";
import HomeContent from "@/app/components/HomeContent";
import About from "@/app/components/About";
import Contacts from "@/app/components/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeContent />
      <About />
      <Contacts />
    </main>
  );
}
