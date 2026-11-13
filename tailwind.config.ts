import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Premium B2B sourcing palette — deep navy, crisp white, gold accent
        navy: {
          DEFAULT: "#0F1B2D",
          deep: "#0A1421",
          light: "#1A2B45",
          softer: "#243656",
        },
        gold: {
          DEFAULT: "#D4A84B",
          strong: "#B8923A",
          soft: "#F5E6C8",
          dim: "#FAF3E3",
        },
        cream: "#FAF9F6",
        paper: "#FFFFFF",
        ink: "#0F1B2D",
        charcoal: "#141414",
        muted: "#6B6B6B",
        faint: "#9CA3AF",
        line: "#E5E7EB",
        lineDark: "#1F2D42",
        success: "#0E7A3D",
        flare: "#E0571F",
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "navy-radial": "radial-gradient(80% 60% at 50% 0%, rgba(212,168,75,0.06) 0%, transparent 60%)",
        "navy-gradient": "linear-gradient(135deg, #0A1421 0%, #0F1B2D 50%, #1A2B45 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4A84B 0%, #B8923A 100%)",
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.5s ease both",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
