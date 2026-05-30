import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "var(--surface-base)",
          panel: "var(--surface-panel)",
          edge: "var(--surface-edge)"
        },
        accent: {
          cyan: "var(--accent-cyan)",
          lime: "var(--accent-lime)",
          orange: "var(--accent-orange)"
        },
        text: {
          base: "var(--text-base)",
          mute: "var(--text-mute)"
        }
      },
      boxShadow: {
        glow: "0 0 80px rgba(34, 211, 238, 0.3)"
      }
    }
  },
  plugins: []
};

export default config;
