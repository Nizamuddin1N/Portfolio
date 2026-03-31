'use client'

import { useEffect, useRef } from 'react'
import { ACHIEVEMENTS } from '@/lib/data'

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    if (!reveals) return
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.08 }
    )
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-[120px] px-6 md:px-12 bg-[#090910]"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Section label */}
        <p className="section-line font-mono text-[0.65rem] tracking-[4px] uppercase text-[#00FF87] mb-3">
          Recognition
        </p>

        {/* Title */}
        <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] tracking-[2px] text-white leading-none mb-16">
          MILESTONES &amp; <span className="text-[#00FF87]">AWARDS</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((a, i) => {
            const delayClass =
              i % 4 === 1 ? 'reveal-delay-1' :
              i % 4 === 2 ? 'reveal-delay-2' :
              i % 4 === 3 ? 'reveal-delay-3' : ''

            return (
              <div
                key={a.title}
                className={`
                  reveal ${delayClass}
                  group relative
                  bg-[#0c0c16] border border-white/[0.06]
                  rounded-[10px] p-6 text-center
                  transition-all duration-300 cursor-default
                  hover:-translate-y-[6px]
                `}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = a.hoverColor
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow   =
                    `0 16px 48px ${a.hoverColor.replace('0.25', '0.1')}`
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow   = 'none'
                }}
              >
                {/* Emoji */}
                <div className="text-[2.2rem] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {a.emoji}
                </div>

                {/* Title */}
                <div className="font-body font-bold text-[0.88rem] text-white leading-[1.3] mb-2">
                  {a.title}
                </div>

                {/* Sub */}
                <div className="font-mono text-[0.62rem] text-[var(--muted)] leading-relaxed">
                  {a.sub}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}