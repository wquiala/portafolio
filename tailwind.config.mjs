/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        revealCar: {
          from: {
            /* opacity: 0,
            transform: "translate(0px, 0px) scale(0.5)", */
          },
          to: {
            /* opacity: 1,

            transform: "translate(0px, 100px) scale(1)", */
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        revealCar: "revealCar",
      },

      /* animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      }, */
    },
  },
  plugins: [],
  darkMode: "selector",
};
