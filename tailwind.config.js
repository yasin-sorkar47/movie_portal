/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.24rem",
      },
      darkMode: "class",
      colors: {
        primary: "#00D991",
        dark: "#171923",
        light: "#fff",
        body: "#1D1E28",
      },
    },
  },
  plugins: [],
};
