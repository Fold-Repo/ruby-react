/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // or adjust to your file paths
    "./node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DB4444",
        danger: "#CB1A14",
        red: "#FF0000",
        success: "#28A745",
        background: "#ffffff",
        foreground: "#171717",
        'bg-white-smoke': '#F4F4F4',
        'bg-lavender': '#FFF5F7',
        'light-pink': '#F3EBEB80',
        'input-bg': '#F3F8F7',
        placeholder: '#0000009d',
      },
      fontFamily: {
        sans: ["'Nunito Sans'", "sans-serif"],
        digital: ["'Digital Numbers'", "sans-serif"],
        oleo: ["'Oleo Script Swash Caps'", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/forms"),
    require("@heroui/react"), // or correct HeroUI plugin if available
  ],
};
