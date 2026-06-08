import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#0d0d0d",
        border: "#1f1f1f",
        "border-subtle": "#141414",
        text: "#f2ede4",
        muted: "#666666",
        faint: "#333333",
      },
    },
  },
  plugins: [],
};

export default config;
