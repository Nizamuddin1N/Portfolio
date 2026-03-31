'use client'

import { useState, useEffect } from 'react'
import { HERO_ROLES } from '@/lib/data'

// ── Typewriter Hook ────────────────────────────────────────────────
function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [text,     setText]     = useState('')
  const [wordIdx,  setWordIdx]  = useState(0)
  const [charIdx,  setCharIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }
    setText(word.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return text
}

// ── Terminal line component ────────────────────────────────────────
function TerminalLine({
  label,
  value,
  color = '#00FF87',
  delay = 0,
}: {
  label: string
  value: string
  color?: string
  delay?: number
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div
      style={{
        display:    'flex',
        alignItems: 'center',
        gap:        10,
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateX(0)' : 'translateX(-12px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <span
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.62rem',
          color:         'rgba(232,232,240,0.3)',
          letterSpacing: '1px',
          minWidth:      64,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
      <span
        style={{
          width:     1,
          height:    12,
          background:'rgba(255,255,255,0.15)',
          flexShrink:0,
        }}
      />
      <span
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.72rem',
          color:          color,
          letterSpacing: '0.5px',
          fontWeight:    500,
        }}
      >
        {value}
      </span>
    </div>
  )
}

// ── Role pill styles ───────────────────────────────────────────────
const PILLS = [
  { label: 'Full Stack Dev',    color: '#00FF87', bg: 'rgba(0,255,135,0.07)'  },
  { label: 'AI / ML Engineer',  color: '#4D9FFF', bg: 'rgba(77,159,255,0.07)' },
  { label: 'DevOps & Cloud',    color: '#FFB800', bg: 'rgba(255,184,0,0.07)'  },
  { label: 'Software Engineer', color: '#FF4545', bg: 'rgba(255,69,69,0.07)'  },
]

export default function HeroSection() {
  const typedRole = useTypewriter(HERO_ROLES)

  return (
    <section
      id="hero"
      style={{
        position:       'relative',
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        alignItems:     'flex-start',
        padding:        '0 3rem',
        overflow:       'hidden',
        background:     '#050508',
      }}
    >
      {/* Grid background */}
      <div
        className="grid-bg"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Orb 1 */}
      <div
        className="orb-1"
        style={{
          position:   'absolute',
          top:        '-10%',
          right:      '-5%',
          width:       700,
          height:      700,
          borderRadius:'50%',
          zIndex:      0,
          background: 'radial-gradient(circle, rgba(0,255,135,0.07) 0%, transparent 65%)',
          pointerEvents:'none',
        }}
        aria-hidden="true"
      />

      {/* Orb 2 */}
      <div
        className="orb-2"
        style={{
          position:    'absolute',
          bottom:      '-20%',
          left:        '-5%',
          width:        500,
          height:       500,
          borderRadius: '50%',
          zIndex:       0,
          background:  'radial-gradient(circle, rgba(77,159,255,0.06) 0%, transparent 65%)',
          pointerEvents:'none',
        }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: 'relative',
          zIndex:   10,
          maxWidth: 1200,
          width:    '100%',
          display:  'flex',
          gap:      '5rem',
          alignItems:'center',
        }}
      >
        {/* ── Left column ── */}
        <div style={{ flex: 1 }}>

          {/* Eyebrow */}
          <div
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.72rem',
              letterSpacing: '4px',
              color:         '#00FF87',
              textTransform: 'uppercase',
              display:       'flex',
              alignItems:    'center',
              gap:            12,
              marginBottom:  '1.75rem',
              opacity:        0,
              animation:     'fadeUp 0.6s 0.3s forwards',
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width:      8,
                height:     8,
                borderRadius:'50%',
                background: '#00FF87',
                flexShrink: 0,
              }}
            />
            B.Tech CSE (AI &amp; ML) · Faculty of Technology University of Delhi
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(4.5rem, 10vw, 10rem)',
              lineHeight:     0.9,
              letterSpacing: '4px',
              color:         'white',
              marginBottom:  '1.25rem',
              opacity:        0,
              animation:     'fadeUp 0.7s 0.5s forwards',
            }}
          >
            NIZAM
            <span style={{ color: '#00FF87', position: 'relative' }}>
              UDDIN
              <span
                style={{
                  position:   'absolute',
                  left:        0,
                  right:       0,
                  bottom:      8,
                  height:      5,
                  background: '#00FF87',
                  opacity:    0.25,
                }}
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Typewriter */}
          <div
            style={{
              fontFamily:  'var(--font-mono)',
              color:       '#00FF87',
              fontSize:    'clamp(1rem, 2.5vw, 1.45rem)',
              minHeight:   '2.2rem',
              marginBottom:'1.75rem',
              opacity:      0,
              animation:   'fadeUp 0.7s 0.7s forwards',
            }}
          >
            {typedRole}
            <span className="type-cursor" aria-hidden="true" />
          </div>

          {/* Role pills */}
          <div
            style={{
              display:      'flex',
              flexWrap:     'wrap',
              gap:           12,
              marginBottom: '2.25rem',
              opacity:       0,
              animation:    'fadeUp 0.7s 0.85s forwards',
            }}
          >
            {PILLS.map(p => (
              <span
                key={p.label}
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.68rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  padding:       '7px 16px',
                  borderRadius:   2,
                  border:        `1px solid ${p.color}`,
                  color:          p.color,
                  background:     p.bg,
                }}
              >
                {p.label}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '1rem',
              color:        'rgba(232,232,240,0.5)',
              lineHeight:    1.9,
              maxWidth:      520,
              marginBottom: '2.5rem',
              opacity:       0,
              animation:    'fadeUp 0.7s 1s forwards',
            }}
          >
            I build{' '}
            <strong style={{ color: '#E8E8F0', fontWeight: 600 }}>cloud-native systems</strong>
            , train{' '}
            <strong style={{ color: '#E8E8F0', fontWeight: 600 }}>intelligent ML models</strong>
            , and ship{' '}
            <strong style={{ color: '#E8E8F0', fontWeight: 600 }}>production-grade apps</strong>
            . From microservices on Kubernetes to 93% accurate sentiment classifiers.
          </p>

{/* CTAs */}
<div style={{ display: 'flex', gap: 16 }}>

  <a
    href="#projects"
    style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: 700,
      background: '#00FF87',
      color: '#050508',
      padding: '14px 36px',
      borderRadius: 2,
      textDecoration: 'none',
    }}
  >
    View My Work
  </a>

  <a
    href="/resume.pdf"
    download="Nizamuddin_Resume.pdf"
    style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      border: '1px solid rgba(255,255,255,0.2)',
      color: 'white',
      padding: '14px 36px',
      borderRadius: 2,
      textDecoration: 'none',
    }}
  >
    Download CV
  </a>

  <a
    href="#contact"
    style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      border: '1px solid rgba(0,255,135,0.4)',
      color: '#00FF87',
      padding: '14px 36px',
      borderRadius: 2,
      textDecoration: 'none',
    }}
  >
    Get In Touch
  </a>

</div>
</div>

        {/* ── Right column — Terminal card ── */}
        <div
          style={{
            flexShrink:  0,
            width:        360,
            opacity:      0,
            animation:   'fadeLeft 0.8s 1.3s forwards',
          }}
          className="hidden lg:block"
        >
          {/* Terminal window */}
          <div
            style={{
              background:   '#0c0c16',
              border:       '1px solid rgba(0,255,135,0.15)',
              borderRadius:  12,
              overflow:     'hidden',
              boxShadow:    '0 0 60px rgba(0,255,135,0.06), 0 32px 80px rgba(0,0,0,0.4)',
            }}
          >
            {/* Terminal title bar */}
            <div
              style={{
                padding:        '12px 16px',
                borderBottom:   '1px solid rgba(255,255,255,0.06)',
                display:        'flex',
                alignItems:     'center',
                gap:             8,
                background:     'rgba(255,255,255,0.02)',
              }}
            >
              {/* Traffic lights */}
              {['#FF5F57', '#FFBD2E', '#28C840'].map((c) => (
                <span
                  key={c}
                  style={{
                    width:        12,
                    height:       12,
                    borderRadius: '50%',
                    background:    c,
                    opacity:       0.8,
                  }}
                />
              ))}
              <span
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.62rem',
                  color:         'rgba(232,232,240,0.25)',
                  marginLeft:     8,
                  letterSpacing: '1px',
                }}
              >
                nizamuddin ~ portfolio
              </span>
            </div>

            {/* Terminal body */}
            <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* Command line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#00FF87' }}>
                  ~
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(232,232,240,0.3)' }}>
                  $
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(232,232,240,0.6)' }}>
                  cat profile.json
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

              {/* Info lines */}
<TerminalLine label="sys"      value="initializing portfolio..."          delay={1600} color="#00FF87" />
<TerminalLine label="status"   value="all systems operational ✓"          delay={1900} color="#00FF87" />
<TerminalLine label="welcome"  value="glad you made it here 👋"           delay={2200} color="#E8E8F0" />
<TerminalLine label="explore"  value="scroll down to see my work"         delay={2500} color="#4D9FFF" />
<TerminalLine label="tip"      value="check out projects & research🔍"   delay={2800} color="#FFB800" />
<TerminalLine label="msg"      value="let's build something great 🚀"     delay={3400} color="#00FF87" />

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

              {/* Bottom prompt */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#00FF87' }}>~</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(232,232,240,0.3)' }}>$</span>
                <span
                  style={{
                    display:     'inline-block',
                    width:        6,
                    height:      14,
                    background:  '#00FF87',
                    marginLeft:   2,
                    animation:   'blink 1s step-end infinite',
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Glow under terminal */}
          <div
            style={{
              height:     1,
              background: 'linear-gradient(90deg, transparent, rgba(0,255,135,0.3), transparent)',
              marginTop:  -1,
            }}
            aria-hidden="true"
          />
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position:  'absolute',
          bottom:     32,
          left:      '50%',
          transform: 'translateX(-50%)',
          display:   'flex',
          flexDirection:'column',
          alignItems:'center',
          gap:        8,
          zIndex:     10,
          opacity:    0,
          animation: 'fadeUp 0.6s 1.9s forwards',
        }}
      >
        <div className="scroll-line" style={{ height: 60 }} aria-hidden="true" />
        <span
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.55rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color:         'rgba(232,232,240,0.38)',
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}