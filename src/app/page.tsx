import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Projects from "@/sections/Projects"
import Experience from "@/sections/Experience"
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
     <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
