import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Projects() {
  const projects = [
    {
      title: "Collaborative Real-Time Code Editor",
      tech: ["React.js", "Node.js", "Socket.IO", "MongoDB", "Redis", "Docker"],
      desc: "Developed a real-time collaborative code editor supporting concurrent users using Operational Transform and Redis Pub/Sub...",
      github: "https://github.com/Nizamuddin1N/Collaborative-Real-Time-Code-Editor",
      live: "https://collaborative-real-time-code-editor-1.onrender.com",
      images: ["/projects/editor1.png", "/projects/editor2.png", "/projects/editor3.png"]
    },
    {
      title: "MEDIGENIE — Multi-Disease Predictor",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python (ML)", "TailwindCSS"],
      desc: "Built a full-stack health platform with ML-based multi-disease prediction...",
      github: "https://github.com/Nizamuddin1N/MEDIGENIE",
      images: ["/projects/medigenie1.png", "/projects/medigenie2.png", "/projects/medigenie3.png"]
    },
    {
      title: "Wanderlust — Travel Listing Web App",
      tech: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Multer", "Cloudinary", "Bootstrap", "Mapbox"],
      desc: "Developed a travel platform for creating and reviewing listings...",
      github: "https://github.com/Nizamuddin1N/Wanderlust",
      images: ["/projects/wanderlust1.png", "/projects/wanderlust2.png", "/projects/wanderlust3.png"]
    }
  ]

  return (
    <section id="projects" className="pt-16 pb-20">
      <h2 className="text-3xl font-bold mb-10 text-center text-primary">
        Projects & Case Studies
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="bg-card p-5 rounded-xl shadow-lg border border-slate-800 hover:border-primary/60 transition-all"
          >
            {/* Image Carousel */}
            <motion.div
  className="relative w-full h-48 mb-4 overflow-hidden rounded-lg"
  whileHover={{ scale: 1.02 }}
>
  <motion.div
    className="flex w-[800%] h-full"
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      duration: 25, // adjust speed here
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    }}
  >
    {[...p.images, ...p.images].map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`${p.title} ${idx + 1}`}
        className="w-1/6 h-full object-cover"
      />
    ))}
  </motion.div>
</motion.div>


            {/* Text Content */}
            <h3 className="text-lg font-semibold mb-2 text-slate-100">{p.title}</h3>
            <p className="text-sm text-slate-400 mb-3">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs bg-bg/60 border border-slate-700 rounded-md text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-sm font-medium hover:bg-primary/80 transition-all"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
              )}
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-full text-sm font-medium hover:border-primary/70 transition-all"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
