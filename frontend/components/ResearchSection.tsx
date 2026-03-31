'use client'

import { useEffect, useRef } from 'react'
import { RESEARCH } from '@/lib/data'

export default function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    if (!reveals) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="research"
      ref={sectionRef}
      style={{ padding: '120px 3rem', background: '#050508' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Label */}
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
          Research
        </p>

        {/* Title */}
        <h2
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2.8rem, 6vw, 5rem)',
            letterSpacing: '2px',
            color:         'white',
            lineHeight:     1,
            marginBottom:  '4rem',
          }}
        >
          ACADEMIC <span style={{ color: '#00FF87' }}>WORK</span>
        </h2>

        {/* Cards */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap:                  '1.5rem',
          }}
        >
          {RESEARCH.map((item, i) => (
            <div
              key={item.title}
              className={`reveal card-left-bar ${i === 1 ? 'reveal-delay-2' : ''}`}
              style={{
                position:     'relative',
                overflow:     'hidden',
                background:   '#0c0c16',
                border:       '1px solid rgba(255,255,255,0.07)',
                borderRadius:  10,
                padding:      '2.5rem',
                transition:   'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                display:      'flex',
                flexDirection:'column',
                gap:          '1.25rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,255,135,0.2)'
                e.currentTarget.style.transform   = 'translateX(5px)'
                e.currentTarget.style.boxShadow   = '0 20px 60px rgba(0,255,135,0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform   = 'translateX(0)'
                e.currentTarget.style.boxShadow   = 'none'
              }}
            >
              {/* Icon + Read Paper button row */}
              <div
                style={{
                  display:        'flex',
                  alignItems:     'flex-start',
                  justifyContent: 'space-between',
                  gap:             '1rem',
                }}
              >
                <div style={{ fontSize: '2.2rem' }}>{item.icon}</div>

                {/* Read Paper button */}
                <a
                  href={item.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:        'flex',
                    alignItems:     'center',
                    gap:             6,
                    fontFamily:     'var(--font-mono)',
                    fontSize:       '0.62rem',
                    letterSpacing:  '1.5px',
                    textTransform:  'uppercase',
                    color:          '#00FF87',
                    border:         '1px solid rgba(0,255,135,0.25)',
                    background:     'rgba(0,255,135,0.05)',
                    padding:        '7px 14px',
                    borderRadius:    4,
                    textDecoration: 'none',
                    flexShrink:      0,
                    transition:     'background 0.2s, border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background   = 'rgba(0,255,135,0.12)'
                    e.currentTarget.style.borderColor  = 'rgba(0,255,135,0.5)'
                    e.currentTarget.style.transform    = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background   = 'rgba(0,255,135,0.05)'
                    e.currentTarget.style.borderColor  = 'rgba(0,255,135,0.25)'
                    e.currentTarget.style.transform    = 'translateY(0)'
                  }}
                >
                  {/* PDF icon */}
                  <svg
                    width="13" height="13" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  Read Paper
                </a>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily:  'var(--font-body)',
                  fontWeight:   700,
                  fontSize:    '1.1rem',
                  color:       'white',
                  lineHeight:   1.4,
                  margin:       0,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily:  'var(--font-body)',
                  fontSize:    '0.87rem',
                  color:       'rgba(232,232,240,0.5)',
                  lineHeight:   1.8,
                  margin:       0,
                  flex:         1,
                }}
              >
                {item.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '0.6rem',
                      letterSpacing: '0.5px',
                      padding:       '4px 12px',
                      borderRadius:   3,
                      background:    'rgba(0,255,135,0.06)',
                      border:        '1px solid rgba(0,255,135,0.15)',
                      color:         '#00FF87',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}