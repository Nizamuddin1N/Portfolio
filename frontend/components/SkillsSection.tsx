'use client'

import { useEffect, useRef } from 'react'
import { SKILLS } from '@/lib/data'

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    if (!reveals) return
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.1 }
    )
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const entries = Object.entries(SKILLS)

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-[120px] px-6 md:px-12 bg-[#050508]"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Section label */}
        <p className="section-line font-mono text-[0.65rem] tracking-[4px] uppercase text-[#00FF87] mb-3">
          Technical Skills
        </p>

        {/* Title */}
        <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] tracking-[2px] text-white leading-none mb-16">
          MY <span className="text-[#00FF87]">STACK</span>
        </h2>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map(([category, items], i) => {
            // Stagger delay based on column position
            const delayClass =
              i % 3 === 1 ? 'reveal-delay-1' :
              i % 3 === 2 ? 'reveal-delay-2' : ''

            return (
              <div
                key={category}
                className={`
                  reveal ${delayClass}
                  card-top-line group
                  bg-[#0c0c16] border border-white/[0.06]
                  rounded-[8px] p-7
                  transition-all duration-300
                  hover:border-[rgba(0,255,135,0.15)]
                  hover:-translate-y-[4px]
                  hover:shadow-[0_20px_60px_rgba(0,255,135,0.05)]
                `}
              >
                {/* Category label */}
                <div className="font-mono text-[0.62rem] tracking-[3px] uppercase text-[var(--muted)] mb-5">
                  {category}
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="
                        font-mono text-[0.66rem]
                        px-3 py-[5px] rounded-[3px]
                        border border-white/[0.07]
                        bg-white/[0.03]
                        text-[rgba(232,232,240,0.55)]
                        group-hover:border-[rgba(0,255,135,0.14)]
                        group-hover:text-[rgba(232,232,240,0.78)]
                        transition-all duration-200
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
