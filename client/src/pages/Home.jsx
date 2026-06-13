import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import Journey from "../components/home/Journey";
import Contact from "../components/home/Contact";
import About from "../components/home/About";

export default function Home() {
  return (
    <div className="pt-5">
      <Hero />
      <Skills />
      <About/>
      <Projects />
      <Journey />
      <Contact />
    </div>
  );
}