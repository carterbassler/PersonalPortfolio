import Head from "next/head"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Projects from "../components/Projects";
import Music from "../components/Music";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <div className="bg-[#1A1A1D] text-white h-screen md:snap-y md:snap-mandatory
    overflow-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#6F2232]/80">
      <Head>
        <title>Carter's Portfolio</title>
      </Head>

      <NavBar />
      <section id="hero" className="snap-start py-10">
        <div className="hidden md:flex">
          <HomeHero />
        </div>
        <div className="md:hidden">
          <Hero />
        </div>
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id='music' className="hidden md:flex snap-center">
        <Music />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>

      {/* Contact Me */}
    </div>
  )
}
