'use client'

import { useState, useEffect, useRef } from 'react'
import { PROJECTS, ProjectCategory } from '@/lib/data'

const FILTERS: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: 'All Projects', value: 'all'      },
  { label: 'Full Stack',   value: 'fullstack' },
  { label: 'AI & ML',      value: 'ai'        },
  { label: 'DevOps',       value: 'devops'    },
]

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all')
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

  const filtered =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.categories.includes(activeFilter))

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-[120px] px-6 md:px-12 bg-[#090910]"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Section label */}
        <p className="section-line font-mono text-[0.65rem] tracking-[4px] uppercase text-[#00FF87] mb-3">
          Work
        </p>

        {/* Title */}
        <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] tracking-[2px] text-white leading-none mb-10">
          THINGS I&apos;VE <span className="text-[#00FF87]">BUILT</span>
        </h2>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`
                font-mono text-[0.65rem] tracking-[2px] uppercase
                px-6 py-2 rounded-[2px] border
                transition-all duration-200 cursor-pointer
                ${activeFilter === f.value
                  ? 'border-[#00FF87] text-[#00FF87] bg-[rgba(0,255,135,0.06)]'
                  : 'border-white/[0.1] text-[var(--muted)] hover:border-[#00FF87] hover:text-[#00FF87] hover:bg-[rgba(0,255,135,0.03)]'
                }
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
            const delayClass =
              i % 3 === 1 ? 'reveal-delay-1' :
              i % 3 === 2 ? 'reveal-delay-2' : ''

            return (
              <div
                key={project.title}
                className={`reveal ${delayClass} group
                  relative overflow-hidden flex flex-col gap-4
                  bg-[#0c0c16] border border-white/[0.06]
                  rounded-[10px] p-8
                  transition-all duration-350
                `}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = project.accentColor + '44'
                  el.style.transform   = 'translateY(-8px)'
                  el.style.boxShadow   = `0 24px 60px ${project.accentColor}0D`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(255,255,255,0.06)'
                  el.style.transform   = 'translateY(0)'
                  el.style.boxShadow   = 'none'
                }}
              >
                {/* Top accent line — slides in on hover */}
                <div
                  className="
                    absolute top-0 left-0 right-0 h-[2px]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
                  }}
                  aria-hidden="true"
                />

                {/* Icon + links row */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="
                      w-14 h-14 rounded-[10px] flex-shrink-0
                      border border-white/[0.07]
                      bg-white/[0.03]
                      flex items-center justify-center text-[1.8rem]
                    "
                  >
                    {project.icon}
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          font-mono text-[0.58rem] tracking-[1px] uppercase
                          px-3 py-[5px] rounded-[2px]
                          border border-white/[0.08] text-[var(--muted)]
                          no-underline
                          hover:border-[#00FF87] hover:text-[#00FF87]
                          transition-all duration-200
                        "
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          font-mono text-[0.58rem] tracking-[1px] uppercase
                          px-3 py-[5px] rounded-[2px]
                          border border-white/[0.08] text-[var(--muted)]
                          no-underline
                          hover:border-[#00FF87] hover:text-[#00FF87]
                          transition-all duration-200
                        "
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-body font-bold text-[1.1rem] text-white leading-[1.3]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[0.86rem] text-[var(--muted)] leading-[1.78] flex-1">
                  {project.description}
                </p>

                {/* Highlight tags (accent colored) */}
                <div className="flex flex-wrap gap-[6px]">
                  {project.highlights.map(h => (
                    <span
                      key={h}
                      className="font-mono text-[0.58rem] tracking-[0.5px] px-[10px] py-[4px] rounded-[3px]"
                      style={{
                        background:  project.accentColor + '14',
                        border:      `1px solid ${project.accentColor}30`,
                        color:        project.accentColor,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tech stack (muted) */}
                <div className="flex flex-wrap gap-[6px]">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="
                        font-mono text-[0.58rem]
                        px-2 py-[3px] rounded-[2px]
                        bg-white/[0.04] border border-white/[0.06]
                        text-[rgba(232,232,240,0.35)]
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
          {/* ── GitHub CTA banner ── */}
<div
  style={{
    marginTop:    '3.5rem',
    padding:      '2rem 2.5rem',
    background:   '#0c0c16',
    border:       '1px solid rgba(255,255,255,0.07)',
    borderRadius:  12,
    display:      'flex',
    alignItems:   'center',
    justifyContent:'space-between',
    flexWrap:     'wrap',
    gap:           '1.5rem',
  }}
>
  <div>
    <div
      style={{
        fontFamily:   'var(--font-body)',
        fontWeight:    700,
        fontSize:     '1.05rem',
        color:        'white',
        marginBottom: '0.35rem',
      }}
    >
      Want to see more projects?
    </div>
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize:   '0.72rem',
        color:      'rgba(232,232,240,0.38)',
        letterSpacing:'0.5px',
      }}
    >
      I have more open-source work, experiments and contributions on GitHub
    </div>
  </div>

  <a
    href="https://github.com/Nizamuddin1N"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display:        'flex',
      alignItems:     'center',
      gap:             10,
      fontFamily:     'var(--font-mono)',
      fontSize:       '0.75rem',
      letterSpacing:  '2px',
      textTransform:  'uppercase',
      fontWeight:      700,
      background:     '#00FF87',
      color:          '#050508',
      padding:        '13px 28px',
      borderRadius:    4,
      textDecoration: 'none',
      transition:     'transform 0.2s, box-shadow 0.2s',
      boxShadow:      '0 0 30px rgba(0,255,135,0.2)',
      flexShrink:      0,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform  = 'translateY(-2px)'
      e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,255,135,0.35)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform  = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,135,0.2)'
    }}
  >
    {/* GitHub icon */}
    <svg
      width="18" height="18" viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
    </svg>
    View GitHub Profile
  </a>
</div>
        </div>
      </div>
    </section>
  )
}