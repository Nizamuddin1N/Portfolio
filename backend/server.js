const express    = require('express')
const cors       = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()

// ── Middleware ─────────────────────────────────────────────────────
app.use(express.json())
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  })
)

// ── Nodemailer transporter ─────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// ── Verify transporter on startup ─────────────────────────────────
transporter.verify((error) => {
  if (error) {
    console.error('❌ Mail transporter error:', error.message)
  } else {
    console.log('✅ Mail transporter is ready')
  }
})

// ── Routes ─────────────────────────────────────────────────────────

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' })
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  // ── Validation ──────────────────────────────────────────────────
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error:   'Name, email and message are required.',
    })
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error:   'Please provide a valid email address.',
    })
  }

  // ── Build email ─────────────────────────────────────────────────
  const mailOptions = {
    from:    `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to:      process.env.EMAIL_USER,
    replyTo: email,
    subject: `[Portfolio] ${subject || 'New Message'} — from ${name}`,
    text: `
Name:    ${name}
Email:   ${email}
Subject: ${subject || 'N/A'}

Message:
${message}
    `.trim(),
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Segoe UI', Arial, sans-serif;
              background: #0a0a0f;
              color: #E8E8F0;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 580px;
              margin: 40px auto;
              background: #0c0c16;
              border: 1px solid rgba(0,255,135,0.15);
              border-radius: 12px;
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #050508, #0c0c16);
              padding: 32px;
              border-bottom: 1px solid rgba(0,255,135,0.15);
            }
            .header h1 {
              margin: 0;
              font-size: 1.5rem;
              color: #00FF87;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .header p {
              margin: 6px 0 0;
              font-size: 0.82rem;
              color: rgba(232,232,240,0.4);
              letter-spacing: 1px;
            }
            .body {
              padding: 32px;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-size: 0.65rem;
              letter-spacing: 3px;
              text-transform: uppercase;
              color: rgba(232,232,240,0.4);
              margin-bottom: 6px;
            }
            .field-value {
              font-size: 0.95rem;
              color: #E8E8F0;
              background: rgba(255,255,255,0.04);
              border: 1px solid rgba(255,255,255,0.08);
              border-radius: 6px;
              padding: 10px 14px;
            }
            .message-value {
              font-size: 0.92rem;
              color: rgba(232,232,240,0.8);
              background: rgba(255,255,255,0.04);
              border: 1px solid rgba(255,255,255,0.08);
              border-radius: 6px;
              padding: 14px;
              line-height: 1.7;
              white-space: pre-wrap;
            }
            .footer {
              padding: 20px 32px;
              border-top: 1px solid rgba(255,255,255,0.06);
              font-size: 0.72rem;
              color: rgba(232,232,240,0.3);
              text-align: center;
              letter-spacing: 1px;
            }
            .reply-btn {
              display: inline-block;
              margin-top: 20px;
              padding: 12px 28px;
              background: #00FF87;
              color: #050508;
              font-weight: 700;
              font-size: 0.75rem;
              letter-spacing: 2px;
              text-transform: uppercase;
              text-decoration: none;
              border-radius: 4px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Message</h1>
              <p>Received via Portfolio Contact Form</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="field-label">From</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">${email}</div>
              </div>
              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${subject || '—'}</div>
              </div>
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-value">${message.replace(/\n/g, '<br/>')}</div>
              </div>
              <a href="mailto:${email}" class="reply-btn">Reply to ${name} →</a>
            </div>
            <div class="footer">
              nizamuddin-portfolio · Faculty of Technology University of Delhi
            </div>
          </div>
        </body>
      </html>
    `,
  }

  // ── Send email ──────────────────────────────────────────────────
  try {
    await transporter.sendMail(mailOptions)
    console.log(`✅ Email sent from ${name} <${email}>`)
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully.',
    })
  } catch (err) {
    console.error('❌ Failed to send email:', err)
    return res.status(500).json({
      success: false,
      error:   'Failed to send email. Please try again.',
    })
  }
})

// ── 404 handler ────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// ── Start server ───────────────────────────────────────────────────
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`)
  console.log(`📧 Emails will be sent to: ${process.env.EMAIL_USER}`)
})
