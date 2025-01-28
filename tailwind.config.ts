import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        dark_theme_body: "var(--dark-theme-body)",
        dark_theme_bg: "var(--dark-theme-background)",
        light_theme_body: "#FFFFFF",
      },
    },
    screens: {
      xs: "435px", // => @media (min-width: 435px) { ... }
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
      "2xl": "1440px", // => @media (min-width: 1440px) { ... }
    },
  },
  corePlugins: {
    fill: true,
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
export default config;
