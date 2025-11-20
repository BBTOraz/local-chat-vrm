const { light, dark } = require("@charcoal-ui/theme");
const { createTailwindConfig } = require("@charcoal-ui/tailwind-config");
/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: true,
  content: ["./src/**/*.tsx", "./src/**/*.html"],
  presets: [
    createTailwindConfig({
      version: "v3",
      theme: {
        ":root": light,
      },
    }),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#856292",
        "primary-hover": "#8E76A1",
        "primary-press": "#988BB0",
        "primary-disabled": "#6F48694D",
        secondary: "#FF617F",
        "secondary-hover": "#FF849B",
        "secondary-press": "#FF9EB1",
        "secondary-disabled": "#FF617F4D",
        base: "#FBE2CA",
        "text-primary": "#514062",
      },
      fontFamily: {
        M_PLUS_2: ["Montserrat", "M_PLUS_2", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      // Modern border radius scale following Material Design 3 & Apple HIG
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',     // 4px - tiny elements
        'DEFAULT': '0.5rem', // 8px - default
        'md': '0.75rem',     // 12px - cards, inputs
        'lg': '1rem',        // 16px - larger cards
        'xl': '1.25rem',     // 20px - modals
        '2xl': '1.5rem',     // 24px - large containers
        '3xl': '2rem',       // 32px - hero elements
        'full': '9999px',    // pills, circles
      },
      // Add smooth shadow scale
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'soft-md': '0 4px 16px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 12px 32px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
