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
        negro:   { DEFAULT: "#0A0A0A", soft: "#141414" },
        carbon:  { DEFAULT: "#1E1E1E", light: "#2A2A2A" },
        zinc:    { DEFAULT: "#3D3D3D", light: "#525252" },
        blanco:  { DEFAULT: "#F5F5F5", pure: "#FFFFFF" },
        acento:  { DEFAULT: "#FF3B00", hover: "#E03200" },
        acento2: { DEFAULT: "#FFB800" },
        texto:   { muted: "#9A9A9A", light: "#C8C8C8" },
      },
      fontFamily: {
        space: ["var(--font-space)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
