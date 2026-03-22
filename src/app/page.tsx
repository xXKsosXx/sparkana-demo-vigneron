import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Chiffres from "@/components/Chiffres";
import Collection from "@/components/Collection";
import Terroir from "@/components/Terroir";
import Experiences from "@/components/Experiences";
import Presse from "@/components/Presse";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Chiffres />
      <Collection />
      <Terroir />
      <Experiences />
      <Presse />
      <Contact />
      <Footer />
    </main>
  );
}
