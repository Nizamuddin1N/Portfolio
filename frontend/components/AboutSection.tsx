'use client'

import { useEffect, useRef } from 'react'

const FACTS = [
  {
    icon:  '🎓',
    title: 'Faculty of Technolgy University of Delhi',
    sub:   'B.Tech CSE (AI & ML) · 2023–2027 · CGPA 7.6',
  },
  {
    icon:  '📍',
    title: 'New Delhi, India',
    sub:   'Open to Remote & Relocation',
  },
  {
    icon:  '💼',
    title: 'Actively Seeking Roles',
    sub:   'Full Stack · AI/ML · DevOps · SWE',
  },
  {
    icon:  '🔬',
    title: '2 Research Papers',
    sub:   'Deep Learning Optimization · NLP Sentiment Analysis',
  },
  {
    icon:  '⚡',
    title: 'ICPC Competitor',
    sub:   'Sri Lanka Regional · Codeforces 1000+ · LeetCode 1500+',
  },
]

const BIO = [
  "I'm a Computer Science student at the Faculty of Technolgy University of Delhi specialising in AI & Machine Learning, with a serious obsession for building things that scale, perform, and solve real problems.",
  "My work lives at the intersection of full-stack engineering and intelligent systems — whether that's deploying microservices on Kubernetes or building NLP pipelines that analyse 60K+ tweets with 93% accuracy.",
  "I believe great software is built at the intersection of rigorous engineering, clean architecture, and relentless curiosity. I bring all three to every project I touch.",
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    if (!reveals) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function handleResumeEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.transform  = 'translateY(-2px)'
    e.currentTarget.style.boxShadow  = '0 8px 40px rgba(0,255,135,0.3)'
  }

  function handleResumeLeave(e: React.MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.transform  = 'translateY(0)'
    e.currentTarget.style.boxShadow  = 'none'
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: '120px 3rem', background: '#090910' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* ── Section Label ── */}
        <p
          className="section-line"
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.65rem',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color:         '#00FF87',
            marginBottom:  '0.75rem',
          }}
        >
          Who I Am
        </p>

        {/* ── Title ── */}
        <h2
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2.8rem, 6vw, 5rem)',
            letterSpacing: '2px',
            color:         'white',
            lineHeight:    1,
            marginBottom:  '4rem',
          }}
        >
          ENGINEER BY DAY,{' '}
          <span style={{ color: '#00FF87' }}>BUILDER</span> BY NIGHT
        </h2>

        {/* ── Two column grid ── */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap:                 '4rem',
            alignItems:          'start',
          }}
        >

          {/* ── Left: Bio ── */}
          <div
            className="reveal"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {BIO.map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '1rem',
                  color:      'rgba(232,232,240,0.5)',
                  lineHeight: 1.9,
                  margin:     0,
                }}
              >
                {text}
              </p>
            ))}

            {/* Resume button */}
            <div style={{ paddingTop: '1rem' }}>
  <a
    href="/resume.pdf"
    download="Nizamuddin_Resume.pdf"
    onMouseEnter={handleResumeEnter}
    onMouseLeave={handleResumeLeave}
    style={{
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.72rem',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: 700,
      background: '#00FF87',
      color: '#050508',
      padding: '12px 32px',
      borderRadius: 2,
      textDecoration: 'none',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
  >
    Download Resume ↗
  </a>
</div>
          </div>

          {/* ── Right: Quick Facts ── */}
          <div className="reveal reveal-delay-2">
            {FACTS.map((fact, i) => (
              <div
                key={fact.title}
                style={{
                  display:      'flex',
                  alignItems:   'flex-start',
                  gap:          '1.25rem',
                  padding:      '1.25rem 0',
                  borderTop:    i === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width:           44,
                    height:          44,
                    borderRadius:    8,
                    flexShrink:      0,
                    border:          '1px solid rgba(0,255,135,0.15)',
                    background:      'rgba(0,255,135,0.04)',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    fontSize:        '1.2rem',
                  }}
                >
                  {fact.icon}
                </div>

                {/* Text */}
                <div>
                  <div
                    style={{
                      fontFamily:   'var(--font-body)',
                      fontWeight:   600,
                      fontSize:     '0.95rem',
                      color:        '#E8E8F0',
                      marginBottom: 3,
                    }}
                  >
                    {fact.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize:   '0.68rem',
                      color:      'rgba(232,232,240,0.38)',
                      lineHeight: 1.5,
                    }}
                  >
                    {fact.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}