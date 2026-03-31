'use client'
export default function Footer() {
  const year = new Date().getFullYear()

  const navItems = ['About', 'Skills', 'Projects', 'Research', 'Contact']

  const socials = [
    { label: 'GitHub',   href: 'https://github.com/Nizamuddin1N'     },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nizamuddin12' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Nizamuudin' },
    { label: 'Email',    href: 'mailto:nizamuddin00128@gmail.com'     },
  ]

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)', fontSize: '0.85rem',
    color: 'rgba(232,232,240,0.38)',
    textDecoration: 'none',
    transition: 'color 0.2s',
    display: 'block', paddingBottom: '0.5rem',
  }

  return (
    <footer style={{ background: '#050508', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      {/* Main content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 3rem', }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
        }}>

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem', letterSpacing: '3px',
              color: '#00FF87', marginBottom: '0.75rem',
            }}>
              NZ
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.85rem',
              color: 'rgba(232,232,240,0.38)', lineHeight: 1.8,
              maxWidth: 220,
            }}>
              Building scalable systems and intelligent ML pipelines.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '3px', textTransform: 'uppercase',
              color: 'rgba(232,232,240,0.38)', marginBottom: '1.25rem',
            }}>
              Navigation
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
{navItems.map(item => (
  <li key={item} style={{ marginBottom: '0.75rem' }}>
    <a
      href={`#${item.toLowerCase()}`}
      style={linkStyle}
      onMouseEnter={e => (e.currentTarget.style.color = '#00FF87')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,232,240,0.38)')}
    >
      {item}
    </a>
  </li>
))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '3px', textTransform: 'uppercase',
              color: 'rgba(232,232,240,0.38)', marginBottom: '1.25rem',
            }}>
              Find Me Online
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
{socials.map(link => (
  <li key={link.label} style={{ marginBottom: '0.75rem' }}>
    <a
      href={link.href}
      target={link.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={linkStyle}
      onMouseEnter={e => (e.currentTarget.style.color = '#00FF87')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,232,240,0.38)')}
    >
      ↗ {link.label}
    </a>
  </li>
))}            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '1.25rem 3rem' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            letterSpacing: '1.5px', color: 'rgba(232,232,240,0.38)', margin: 0,
          }}>
            © {year}{' '}
            <span style={{ color: '#00FF87' }}>Nizamuddin</span>
            {' '}· All rights reserved
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            letterSpacing: '1.5px', color: 'rgba(232,232,240,0.38)', margin: 0,
          }}>
            B.Tech CSE (AI &amp; ML) · Faculty of Technology University of Delhi
          </p>
        </div>
      </div>

    </footer>
  )
}