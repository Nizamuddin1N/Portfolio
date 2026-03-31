'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const [menuOpen,   setMenuOpen]   = useState(false)

  // Detect scroll to add background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is currently in view
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = ''
      sections.forEach(sec => {
        if (window.scrollY >= (sec as HTMLElement).offsetTop - 120)
          current = '#' + sec.id
      })
      setActiveHash(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        px-6 md:px-12 h-[68px]
        flex items-center justify-between
        transition-all duration-300
        ${scrolled
          ? 'bg-[rgba(5,5,8,0.92)] backdrop-blur-[24px] border-b border-white/[0.06]'
          : 'bg-transparent'
        }
      `}
    >
      {/* ── Logo ── */}
<a
  href="#hero"
  className="font-display text-[1.75rem] tracking-[3px] text-[#00FF87] no-underline"
>
  NZ
</a>

      {/* ── Desktop Links ── */}
      <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
        {NAV_LINKS.map(link => {
  const isActive = activeHash === link.href
  return (
    <li key={link.href}>
      <a
        href={link.href}
        className={`
          font-mono text-[0.68rem] tracking-[2px] uppercase
          no-underline relative pb-1
          transition-colors duration-200 group
          ${isActive
            ? 'text-[#00FF87]'
            : 'text-[rgba(232,232,240,0.45)] hover:text-[#00FF87]'
          }
        `}
      >
        {link.label}
        <span
          className={`
            absolute bottom-0 left-0 h-[1px] bg-[#00FF87]
            transition-all duration-300
            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
          `}
        />
      </a>
    </li>
  )
})}
      </ul>

      {/* ── Desktop CTA ── */}
      
<a
  href="#contact"
  className="
    hidden md:inline-block
    font-mono text-[0.68rem] tracking-[2px] uppercase
    border border-[#00FF87] text-[#00FF87]
    px-5 py-2 rounded-[2px] no-underline
    hover:bg-[#00FF87] hover:text-[#050508]
    transition-all duration-200
  "
>
  Hire Me
</a>

      {/* ── Mobile Hamburger ── */}
      <button
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle navigation menu"
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1 cursor-pointer"
      >
        <span
          className={`
            block w-6 h-[1.5px] bg-[#00FF87]
            transition-all duration-300 origin-center
            ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}
          `}
        />
        <span
          className={`
            block w-6 h-[1.5px] bg-[#00FF87]
            transition-all duration-300
            ${menuOpen ? 'opacity-0 scale-x-0' : ''}
          `}
        />
        <span
          className={`
            block w-6 h-[1.5px] bg-[#00FF87]
            transition-all duration-300 origin-center
            ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}
          `}
        />
      </button>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className={`
          md:hidden absolute top-[68px] left-0 right-0
          bg-[#090910] border-b border-white/[0.06]
          flex flex-col items-center gap-6 py-8
          transition-all duration-300 overflow-hidden
          ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 py-0'}
        `}
      >
{NAV_LINKS.map(link => (
  <a
    key={link.href}
    href={link.href}
    onClick={() => setMenuOpen(false)}
    className="
      font-mono text-[0.75rem] tracking-[2px] uppercase
      text-[rgba(232,232,240,0.6)] hover:text-[#00FF87]
      no-underline transition-colors duration-200
    "
  >
    {link.label}
  </a>
))}

<a
  href="#contact"
  onClick={() => setMenuOpen(false)}
  className="
    font-mono text-[0.72rem] tracking-[2px] uppercase
    border border-[#00FF87] text-[#00FF87]
    px-8 py-3 rounded-[2px] no-underline mt-2
    hover:bg-[#00FF87] hover:text-[#050508]
    transition-all duration-200
  "
>
  Hire Me
</a>
      </div>
    </nav>
  )
}