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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        jost: ["Jost", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
