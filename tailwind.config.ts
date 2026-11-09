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
        brand: {
          maroon: {
            DEFAULT: "#520000",
            deep: "#1E0202",
            dark: "#2F0303",
            rich: "#420000",
            primary: "#520000",
            light: "#7A1010",
            accent: "#991B1B",
            muted: "#3B0A0A",
          },
          beige: {
            DEFAULT: "#D7C3B1",
            50: "#FAF7F4",
            100: "#F5EFE9",
            200: "#E8DED3",
            300: "#D7C3B1",
            400: "#C3AC98",
            500: "#A88E77",
            muted: "rgba(215, 195, 177, 0.15)",
            border: "rgba(215, 195, 177, 0.25)",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "TAN Pearl", "Cormorant Garamond", "serif"],
      },
      animation: {
        "marquee-left": "marquee-left 35s linear infinite",
        "marquee-right": "marquee-right 35s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
