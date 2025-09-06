import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { Education } from "@/components/site/Education";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Index() {
  return (
    <div>
      <Navbar />
      <main id="main" role="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
