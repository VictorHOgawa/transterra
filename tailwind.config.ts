import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#122235",
        secondary: "#FEF214",
        tertiary: "#28292F",
      },
      animation: {
        bgSweep: "bgSweep 0.5s ease",
        phoneRinging: "phoneRinging 0.5s ease infinite",
        bookNote: "bookNote 1.5s ease infinite",
        truck: "truck 0.5s ease infinite",
        clipboard: "clipboard 0.5s ease infinite",
        arrow: "arrow 0.5s ease infinite",
      },
      keyframes: {
        bgSweep: {
          "0%": { backgroundPosition: "100% 100%" },
          "50%": { backgroundPosition: "0% 0%" },
        },
        phoneRinging: {
          "0%": { transform: "scale(1)", rotate: "0deg" },
          "50%": { transform: "scale(1.1)", rotate: "10deg" },
          "100%": { transform: "scale(1)", rotate: "0deg" },
        },
        bookNote: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: " translateY(0)" },
          "75%": { transform: " translateY(-5px)" },
          "100%": { transform: " translateY(0)" },
        },
        truck: {
          "0%": { transform: "translateX(1px)" },
          "25%": { transform: " translateX(0)" },
          "75%": { transform: " translateX(-1px) rotate(-2deg)" },
          "100%": { transform: " translateX(1px)  translateY(-1px)" },
        },
        clipboard: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: " translateX(-1px) " },
          "75%": { transform: " translateX(1px)" },
          "100%": { transform: " translateX(0) translateY(1px)" },
        },
        arrow: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: " translateX(-1px) " },
          "75%": { transform: " translateX(1px)" },
          "100%": { transform: " translateX(0)" },
        },
      },
    },
    screens: {
      xxs: "320px",
      xs: "390px",
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
      "2xl": "1920px",
      "3xl": "2560px",
    },
  },

  plugins: [],
};
export default config;
