"use client"
import Hero from "./Components/hero";
import Projects from "./Components/projects";
import Footer from "./Components/footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="divider px-5"></div>
      <Projects/>
      <div className="divider px-5"></div>
      <Footer/>
    </>
  );
}