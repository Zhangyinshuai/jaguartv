import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        pitch: "#06110d",
        turf: "#0f7a45",
        lime: "#a7f33d",
        gold: "#ffd34d",
        ember: "#ff5b3d",
        ink: "#101514"
      },
      boxShadow: {
        glow: "0 0 60px rgba(167, 243, 61, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
