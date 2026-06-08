import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Work from "@/components/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
