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
        arena: { DEFAULT: "#F5F0E8", dark: "#EAE3D2" },
        crema: { DEFAULT: "#FAF7F2", dark: "#F0EBE1" },
        cafe: { DEFAULT: "#6B4C35", dark: "#4A3224" },
        "cafe-claro": { DEFAULT: "#A07850", dark: "#7D5C38" },
        carbon: { DEFAULT: "#1C1C1A", dark: "#0F0F0E" },
        humo: { DEFAULT: "#9E9A93", dark: "#6E6B65" },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        dm: ["var(--font-dm)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
