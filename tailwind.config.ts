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
        cool: "#d4b622",
        hovercool: "#f5f5f5",
      },
      fontFamily: {
        amsterdam: ["New Amsterdam"],
      },
    },
  },
  plugins: [],
};
export default config;
