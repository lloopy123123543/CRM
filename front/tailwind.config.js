/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Main': '#467599',
        'Second': '#D64045',
        'Third': '#9ED8DB',
        'Fourth': '#1D3354',
        'Five': '#ffffff'
      },
    },
  },
  plugins: [],
}
