'use client'

import { useState, useRef, useEffect } from 'react'
import { CONTACT_LINKS } from '@/lib/data'

interface FormState {
  name:    string
  email:   string
  subject: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const [form, setForm] = useState<FormState>({
    name: '', email: '', subject: '', message: '',
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    if (!reveals) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`,
        {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(form),
        }
      )
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(data.error || 'Something went wrong')
      }
    } catch (err: unknown) {
      setStatus('error')
      setErrMsg(
        err instanceof Error ? err.message : 'Failed to send. Please email me directly.'
      )
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: '120px 0', background: '#050508' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 3rem' }}>

        {/* Label */}
        <p className="section-line" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          letterSpacing: '4px', textTransform: 'uppercase',
          color: '#00FF87', marginBottom: '0.75rem',
        }}>
          Contact
        </p>

        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          letterSpacing: '2px', color: 'white',
          lineHeight: 1, marginBottom: '4rem',
        }}>
          LET&apos;S <span style={{ color: '#00FF87' }}>CONNECT</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>

          {/* ── Left: Info + Links ── */}
          <div className="reveal">
            <h3 style={{
              fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: '1.35rem', color: 'white', marginBottom: '0.75rem',
            }}>
              Open to Opportunities
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.92rem',
              color: 'rgba(232,232,240,0.38)', lineHeight: 1.85,
              marginBottom: '2rem',
            }}>
              I&apos;m actively seeking roles in Full Stack Development,
              AI/ML Engineering, DevOps, and Software Engineering.
              Whether it&apos;s an internship, full-time position, or a
              research collaboration — I&apos;d love to hear from you.
            </p>

            {/* Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
{CONTACT_LINKS.map(link => (
  <a
    key={link.label}
    href={link.href}
    target={link.href.startsWith('mailto') ? undefined : '_blank'}
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      background: '#0c0c16',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 8,
      padding: '1rem 1.25rem',
      textDecoration: 'none',
      transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget
      el.style.borderColor = 'rgba(0,255,135,0.25)'
      el.style.background = 'rgba(0,255,135,0.03)'
      el.style.transform = 'translateX(4px)'
    }}
    onMouseLeave={e => {
      const el = e.currentTarget
      el.style.borderColor = 'rgba(255,255,255,0.06)'
      el.style.background = '#0c0c16'
      el.style.transform = 'translateX(0)'
    }}
  >
    <div style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      border: '1px solid rgba(255,255,255,0.07)',
      background: 'rgba(255,255,255,0.03)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      flexShrink: 0,
    }}>
      {link.icon}
    </div>

    <div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.58rem',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: 'rgba(232,232,240,0.38)',
        marginBottom: 2,
      }}>
        {link.label}
      </div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
        color: '#E8E8F0',
        fontWeight: 500,
      }}>
        {link.value}
      </div>
    </div>
  </a>
))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            className="reveal reveal-delay-2"
            style={{
              background: '#0c0c16',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 12, padding: '2.5rem',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: '1.1rem', color: 'white', marginBottom: '0.25rem',
            }}>
              Send Me a Message
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              letterSpacing: '1px', color: 'rgba(232,232,240,0.38)',
              marginBottom: '2rem',
            }}>
              I reply within 24 hours
            </div>

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Name + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                    letterSpacing: '2px', textTransform: 'uppercase',
                    color: 'rgba(232,232,240,0.38)',
                  }}>
                    Name <span style={{ color: '#00FF87' }}>*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="form-field"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                    letterSpacing: '2px', textTransform: 'uppercase',
                    color: 'rgba(232,232,240,0.38)',
                  }}>
                    Email <span style={{ color: '#00FF87' }}>*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="you@company.com"
                    className="form-field"
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="subject" style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  color: 'rgba(232,232,240,0.38)',
                }}>
                  Subject
                </label>
                <input
                  id="subject" name="subject" type="text"
                  value={form.subject} onChange={handleChange}
                  placeholder="Internship / Collaboration / Project"
                  className="form-field"
                />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  color: 'rgba(232,232,240,0.38)',
                }}>
                  Message <span style={{ color: '#00FF87' }}>*</span>
                </label>
                <textarea
                  id="message" name="message" required
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about the role, project or opportunity..."
                  className="form-field"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  width: '100%', padding: '14px',
                  fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                  letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700,
                  background: '#00FF87', color: '#050508',
                  border: 'none', borderRadius: 4, cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.2s',
                  boxShadow: '0 0 30px rgba(0,255,135,0.18)',
                  opacity: status === 'loading' ? 0.6 : 1,
                }}
                onMouseEnter={e => {
                  if (status !== 'loading') {
                    ;(e.currentTarget as HTMLButtonElement).style.transform  = 'translateY(-2px)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 40px rgba(0,255,135,0.3)'
                  }
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.transform  = 'translateY(0)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(0,255,135,0.18)'
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>

              {/* Success */}
              {status === 'success' && (
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  textAlign: 'center', padding: '12px 16px', borderRadius: 4,
                  background: 'rgba(0,255,135,0.08)',
                  border: '1px solid rgba(0,255,135,0.2)',
                  color: '#00FF87',
                }}>
                  ✓ Message sent! I&apos;ll reply within 24 hours.
                </div>
              )}

              {/* Error */}
              {status === 'error' && (
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  textAlign: 'center', padding: '12px 16px', borderRadius: 4,
                  background: 'rgba(255,69,69,0.08)',
                  border: '1px solid rgba(255,69,69,0.2)',
                  color: '#FF4545',
                }}>
                  ✗ {errMsg || 'Failed to send. Email me directly at nizamuddin00128@gmail.com'}
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}