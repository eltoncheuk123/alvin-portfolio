import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F6F4F1",
          soft: "#EFECE7",
          rule: "#D9D4CC",
        },
        ink: {
          DEFAULT: "#141414",
          muted: "#5C5A56",
          faint: "#8A8680",
        },
        accent: {
          DEFAULT: "#1F4B45",
          hover: "#163833",
        },
      },
      fontFamily: {
        display: [
          "Fraunces",
          "Georgia",
          "Songti TC",
          "Noto Serif TC",
          "serif",
        ],
        sans: [
          "DM Sans",
          "Noto Sans TC",
          "PingFang TC",
          "Microsoft JhengHei",
          "system-ui",
          "sans-serif",
        ],
      },
      animation: {
        "fade-up": "fadeUp 0.65s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
