import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Orange — warmth, primary CTAs
        brand: {
          50: "#fff5ec",
          100: "#ffe6d1",
          200: "#ffc89c",
          300: "#ffa766",
          400: "#fb8a3c",
          500: "#f06f1a",
          600: "#d65a0e",
          700: "#a8430b",
          800: "#7a3009",
          900: "#4d1d05",
        },
        // Blue — calm, links, secondary actions
        sky: {
          50: "#eff8ff",
          100: "#dbedff",
          200: "#b6dbff",
          300: "#84c2ff",
          400: "#4ea3fa",
          500: "#2585e6",
          600: "#1769c4",
          700: "#13539b",
          800: "#0f3f74",
          900: "#0b2c52",
        },
        // Green — nature, success, outdoors
        leaf: {
          50: "#eff8ee",
          100: "#d6ecd2",
          200: "#b0d8a8",
          300: "#84c178",
          400: "#5da651",
          500: "#3f8a35",
          600: "#2f6c28",
          700: "#24521e",
          800: "#1a3b16",
          900: "#11270e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
