import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2a0002",
        "primary-container": "#4a0e0e",
        secondary: "#775a19",
        "secondary-accent": "#c5a059",
        "secondary-container": "#fed488",
        "on-secondary-container": "#785a1a",
        surface: "#fcf9f0",
        "surface-container-low": "#f6f3ea",
        "surface-container": "#f1eee5",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#dac1bf",
        "on-surface": "#1c1c17",
        "on-surface-variant": "#4a4540",
        tertiary: "#0e0f0f",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
    },
  },
  plugins: [],
};
export default config;
