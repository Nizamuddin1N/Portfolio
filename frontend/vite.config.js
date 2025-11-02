import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
<<<<<<< HEAD
    server: { proxy: { "/api": "https://portfolio-unfu.onrender.com/" } }
})
=======
    server: { proxy: { "/api": "https://portfolio-unfu.onrender.com" } }
})
>>>>>>> 42be2cfa5b3fb7415a69041837459ea6471be488
