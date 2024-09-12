/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "cyan": 'hsl(180, 66%, 49%)',
        "dark-violet": 'hsl(257, 27%, 26%)',
        "red": 'hsl(0, 87%, 67%)',
        "gray": 'hsl(0, 0%, 75%)',
        "grayish-violet": 'hsl(257, 7%, 63%)',
        "very-dark-blue": 'hsl(255, 11%, 22%)',
        "very-dark-violet": 'hsl(257, 27%, 26%)',
      },
      fontSize: {
        "body": '18px',
      },
      fontWeight: {
        "medium": 500,
        "bold": 700,
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        "sm": { "max": "375px" },
        "md": {"max":"768px"}, 
        "lg": {"max":"1024px"}, 
        "xl": { "max": "1440px" },
      },
    },
  },
  plugins: [],
}
