import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        didim: {
          cream: "#fff8ec",
          ivory: "#fbf2df",
          amber: "#c98428",
          glow: "#f2b04b",
          brown: "#4a3325",
          moss: "#53665a",
          ink: "#211a16"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(74, 51, 37, 0.12)",
        glow: "0 0 34px rgba(242, 176, 75, 0.42)"
      }
    }
  },
  plugins: []
};

export default config;
