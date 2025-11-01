import React from "react"
export default function Footer(){
  return (
    <footer className="py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Nizamuddin • Built with React, Tailwind, Node.js
    </footer>
  )
}
