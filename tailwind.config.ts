import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0E13",
          900: "#0E141B",
          800: "#121A23",
          700: "#1A232E",
          600: "#243040",
        },
        border: {
          DEFAULT: "#1E2833",
          light: "#E2E6EB",
        },
        surface: {
          DEFAULT: "#121A23",
          light: "#FFFFFF",
        },
        paper: "#F6F7F9",
        fg: {
          DEFAULT: "#E9EEF3",
          muted: "#8A96A3",
          faint: "#5A6673",
          light: "#0E141B",
          "light-muted": "#5A6673",
        },
        signal: {
          DEFAULT: "#4F9CF9",
          50: "#EAF3FF",
          400: "#79B4FB",
          500: "#4F9CF9",
          600: "#2E7FE0",
          700: "#1D63BD",
        },
        amber: {
          DEFAULT: "#F5A623",
          400: "#F8BB52",
          500: "#F5A623",
          600: "#D48A0F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "grid-light": "linear-gradient(to right, rgba(10,14,19,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,14,19,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "draw-line": "draw-line 1.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
