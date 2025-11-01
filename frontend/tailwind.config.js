export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#7c3aed",
                accent: "#06b6d4",
                bg: "#0b1020",
                card: "#0f1724"
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"]
            }
        }
    },
    plugins: []
}