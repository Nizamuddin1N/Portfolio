import React from "react"
import { motion } from "framer-motion"
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaBook, FaLaptopCode } from "react-icons/fa"

export default function Skills() {
  const groups = [
    {
      title: "Languages",
      icon: <FaCode className="text-accent text-xl" />,
      skills: ["C++", "Python", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: <FaLaptopCode className="text-accent text-xl" />,
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "NestJS"]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-accent text-xl" />,
      skills: ["Node.js", "Express.js", "Microservices", "REST APIs"]
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-accent text-xl" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Tools",
      icon: <FaTools className="text-accent text-xl" />,
      skills: ["Git", "GitHub", "VS Code", "Postman"]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-accent text-xl" />,
      skills: ["Docker", "Render", "GitHub Actions", "AWS"]
    },
    {
      title: "CS Fundamentals",
      icon: <FaBook className="text-accent text-xl" />,
      skills: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks", "Software Engineering"]
    }
  ]

  return (
    <section id="skills" className="pb-16">
      <h2 className="text-3xl font-bold mb-10 text-center">
        <span className="text-primary">Skills & Expertise</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl border border-slate-800 hover:border-primary/60 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              {group.icon}
              <h3 className="text-lg font-semibold text-slate-100">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-bg/50 border border-slate-700 rounded-md text-slate-300 hover:text-primary transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
