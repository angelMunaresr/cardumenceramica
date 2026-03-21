import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Workshops } from "@/components/Workshops";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-20">
      <Navbar />
      <Hero />
      <About />
      <Workshops />
      <Contact />
      <Footer />
    </main>
  );
}
