import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import nodemailer from "nodemailer"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

let dbClient

async function connectDB() {
    try {
        const uri = process.env.MONGO_URI
        if (!uri) throw new Error("❌ MONGO_URI not found in .env")
        dbClient = new MongoClient(uri)
        await dbClient.connect()
        console.log("✅ MongoDB Atlas connected")
    } catch (err) {
        console.error("❌ MongoDB connection error:", err)
    }
}

connectDB()

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT || 587),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

app.post("/api/contact", async(req, res) => {
    const { name, email, message } = req.body
    if (!name || !email || !message)
        return res.status(400).json({ error: "Missing required fields" })

    try {
        // Send email
        await transporter.sendMail({
            from: `${name} <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_RECEIVER,
            subject: `New contact from portfolio: ${name}`,
            text: `${message}\n\nReply to: ${email}`,
            html: `<p>${message}</p><p>Reply to: <a href="mailto:${email}">${email}</a></p>`,
        })

        // Store message in MongoDB
        if (dbClient) {
            const col = dbClient
                .db(process.env.MONGODB_DB || "portfolioDB")
                .collection("messages")
            await col.insertOne({ name, email, message, createdAt: new Date() })
        }

        res.json({ ok: true })
    } catch (err) {
        console.error("❌ Error handling contact form:", err)
        res.status(500).json({ error: "failed" })
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))