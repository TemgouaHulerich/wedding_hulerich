/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-white': '#FFFFFF',
        'neutral-black': '#2C2C2C',
        'neutral-beige': '#F5F5DC',
        'accent-gray': '#808080',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
