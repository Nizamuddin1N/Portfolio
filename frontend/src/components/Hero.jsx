import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-bg to-bg/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 max-w-6xl w-full px-6"
      >
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-slate-100">
            Hi, I'm <span className="text-primary">Nizamuddin</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            Software Development Engineer & Full-Stack Web Developer | AI/ML-Focused CSE Student
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-6 py-3 bg-primary rounded-full font-medium shadow-lg hover:bg-primary/80 transition-all"
            >
              See Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-6 py-3 border border-slate-700 rounded-full font-medium hover:border-primary transition-all"
            >
              Contact
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-5 text-2xl text-slate-300">
            <motion.a whileHover={{ scale: 1.2, color: "#00BFFF" }} href="https://github.com/Nizamuddin1N" target="_blank" rel="noreferrer">
              <FaGithub />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#0077B5" }} href="https://www.linkedin.com/in/nizamuddin1n/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#EA4335" }} href="mailto:nizamuddin00128@gmail.com">
              <FaEnvelope />
            </motion.a>
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="flex-1 bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl shadow-xl border border-slate-800 hover:border-primary/60 transition-all"
        >
          <p className="text-sm text-slate-400">CSE (AI/ML) — Faculty of Technology University of Delhi</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-100">
            Expected 2027
          </h3>
          <p className="mt-3 text-slate-400 leading-relaxed">
            Computer Science and Engineering student with strong problem-solving and full-stack development skills. Built real-time web applications using React, Node.js, MongoDB, and Docker, following Agile and testing practices. Seeking SDE/Full Stack roles to design scalable, cloud-based solutions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
