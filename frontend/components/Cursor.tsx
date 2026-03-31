'use client'

import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor     = document.getElementById('cursor')
    const cursorRing = document.getElementById('cursor-ring')
    if (!cursor || !cursorRing) return

    let rx = 0, ry = 0, cx = 0, cy = 0

    // Move dot instantly to mouse position
    const onMouseMove = (e: MouseEvent) => {
      cx = e.clientX
      cy = e.clientY
      cursor.style.left = cx + 'px'
      cursor.style.top  = cy + 'px'
    }
    document.addEventListener('mousemove', onMouseMove)

    // Ring lags slightly behind for magnetic feel
    const animRing = () => {
      rx += (cx - rx) * 0.12
      ry += (cy - ry) * 0.12
      cursorRing.style.left = rx + 'px'
      cursorRing.style.top  = ry + 'px'
      requestAnimationFrame(animRing)
    }
    animRing()

    // Grow ring when hovering interactive elements
    const grow = () => {
      cursor.style.width       = '6px'
      cursor.style.height      = '6px'
      cursorRing.style.width   = '54px'
      cursorRing.style.height  = '54px'
      cursorRing.style.borderColor = 'rgba(0,255,135,0.9)'
    }
    const shrink = () => {
      cursor.style.width       = '12px'
      cursor.style.height      = '12px'
      cursorRing.style.width   = '36px'
      cursorRing.style.height  = '36px'
      cursorRing.style.borderColor = 'rgba(0,255,135,0.5)'
    }

    const interactives = document.querySelectorAll(
      'a, button, input, textarea, [data-cursor-grow]'
    )
    interactives.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div id="cursor"      aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
    </>
  )
}