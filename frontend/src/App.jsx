import React from "react"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
export default function App(){
  return (
    <div className="min-h-screen bg-bg text-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
