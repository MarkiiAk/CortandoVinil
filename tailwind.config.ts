import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cortando Vinil palette
        tinta: { DEFAULT: "#1118C2", dark: "#0C1399" },       // electric blue — brand primary / hero
        fuego: { DEFAULT: "#FF5A1A", dark: "#E04A0F" },        // vivid orange — CTAs / accent
        lienzo: { DEFAULT: "#F7F7F5", dark: "#EAEAE8" },       // warm white — body backgrounds
        oscuro: { DEFAULT: "#0C0E1E", light: "#2A2C3D" },      // near-black — primary text
        pizarra: { DEFAULT: "#545572", light: "#8A8BA6" },     // slate — secondary text / dividers
      },
      fontFamily: {
        archivo: ["var(--font-archivo)", "Arial Black", "sans-serif"],
        figtree: ["var(--font-figtree)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
