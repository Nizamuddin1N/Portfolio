import type { Metadata } from 'next'
import { Bebas_Neue, Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// ── Fonts ──────────────────────────────────────────────────────────
const bebasNeue = Bebas_Neue({
  subsets:  ['latin'],
  weight:   '400',
  variable: '--font-display',
  display:  'swap',
})

const outfit = Outfit({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display:  'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets:  ['latin'],
  weight:   ['400', '500', '700'],
  variable: '--font-mono',
  display:  'swap',
})

// ── Metadata ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:       'Nizamuddin — Engineer · Builder · Researcher',
  description: 'Full Stack, AI/ML, DevOps & Software Engineer. B.Tech CSE (AI & ML) at Faculty of Technolgy University of Delhi.',
  keywords: [
    'Nizamuddin',
    'Full Stack Developer',
    'AI ML Engineer',
    'DevOps Engineer',
    'Software Engineer',
    'Faculty of Technolgy University of Delhi',
    'React',
    'Node.js',
    'Python',
    'Machine Learning',
    'Docker',
    'Kubernetes',
  ],
  authors:  [{ name: 'Nizamuddin', url: 'https://portfolio-1-trha.onrender.com' }],
  creator:  'Nizamuddin',
  openGraph: {
    type:        'website',
    title:       'Nizamuddin — Engineer · Builder · Researcher',
    description: 'Full Stack, AI/ML & DevOps Engineer. B.Tech CSE (AI & ML), Faculty of Technolgy University of Delhi.',
    siteName:    'Nizamuddin Portfolio',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Nizamuddin — Engineer · Builder · Researcher',
    description: 'Full Stack, AI/ML & DevOps Engineer. Building scalable systems.',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

// ── Root Layout ────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`
        ${bebasNeue.variable}
        ${outfit.variable}
        ${jetbrainsMono.variable}
      `}
    >
      <body className="bg-[#050508] text-[#E8E8F0] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}