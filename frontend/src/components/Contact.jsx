import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  function handle(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function submit(e) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("sent")
        setForm({ name: "", email: "", message: "" })
      } else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="pt-16 pb-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        Get In Touch
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-card p-8 rounded-xl shadow-lg border border-slate-800 hover:border-primary/50 transition-all"
        >
          <input
            required
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-lg bg-bg/60 border border-slate-700 text-slate-200 focus:outline-none focus:border-primary transition-all"
          />
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="Your Email"
            className="w-full mb-4 p-3 rounded-lg bg-bg/60 border border-slate-700 text-slate-200 focus:outline-none focus:border-primary transition-all"
          />
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handle}
            placeholder="Your Message"
            rows="6"
            className="w-full mb-4 p-3 rounded-lg bg-bg/60 border border-slate-700 text-slate-200 focus:outline-none focus:border-primary transition-all"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-primary rounded-full font-medium text-white hover:bg-primary/80 transition-all"
          >
            <FaPaperPlane className="text-sm" /> Send Message
          </button>
          <div className="mt-3 text-center text-sm text-slate-400">
            {status === "sending" && <span className="text-primary">Sending...</span>}
            {status === "sent" && <span className="text-green-500">Message sent successfully!</span>}
            {status === "error" && <span className="text-red-500">Error sending message.</span>}
          </div>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-card p-8 rounded-xl shadow-lg border border-slate-800 flex flex-col justify-center hover:border-primary/50 transition-all"
        >
          <h3 className="text-xl font-semibold text-slate-100 mb-4">
            Contact Information
          </h3>
          <div className="flex items-center gap-3 mb-3 text-slate-400">
            <FaEnvelope className="text-primary" />
            <span>nizamuddin00128@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 mb-3 text-slate-400">
            <FaMapMarkerAlt className="text-primary" />
            <span>New Delhi, India</span>
          </div>
          <p className="mt-3 text-slate-400 leading-relaxed">
            Feel free to reach out through email or this form — I’ll respond as soon as possible.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
