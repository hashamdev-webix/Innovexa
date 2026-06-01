/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1C509E",
          dark: "#143A73",
          light: "#3E6FC0",
        },
        accent: {
          DEFAULT: "#C92223",
          dark: "#A41A1B",
        },
        ink: "#1A2233",
        slate: "#5B6679",
        cloud: "#F5F8FC",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 8px 30px rgba(20,58,115,0.08)",
        cardHover: "0 16px 40px rgba(20,58,115,0.14)",
      },
    },
  },
  plugins: [],
};
