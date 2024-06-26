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
        "background": "#F3F3F3",
        "content-background": "#FFFFFF",
        "accent": "#4C6B8A",
        "error": "#EF5050",
        "high": "#EF5050",
        "low": "#3678A8", 
      },
      fontFamily: {
        kanit: ["Kanit"]
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.3s ease-in-out forwards',
        zoomOut: 'zoomOut 0.3s ease-in-out forwards',
      },
    },
    variants: {
      extend: {
        animation: ['hover'],
        cursor: ['hover'],
      },
    },
  },
  plugins: [],
};
export default config;
