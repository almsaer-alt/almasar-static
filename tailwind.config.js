/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "Tajawal", "system-ui", "sans-serif"],
        display: ["Tajawal", "Cairo", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#9ACA3C",
          foreground: "#1E2A5E",
        },
        primary: {
          DEFAULT: "#1E2A5E",
          foreground: "#f8fafc",
        },
      },
      boxShadow: {
        elegant: "0 20px 50px -20px rgba(30,42,94,0.35)",
        glow: "0 10px 40px -10px rgba(154,202,60,0.55)",
      },
      backgroundImage: {
        hero: "linear-gradient(135deg, #1E2A5E 0%, #2a3870 60%, #9ACA3C 140%)",
        "brand-gradient": "linear-gradient(135deg, #9ACA3C, #7eb82e)",
      },
    },
  },
  plugins: [],
};
