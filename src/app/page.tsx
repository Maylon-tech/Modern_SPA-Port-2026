import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";



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
        

    )
}