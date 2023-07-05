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
        'Main': '#EF7B2D',
        'Second': '#465EAB',
        'Third': '#393B3A',
        'Text': '#393B3A',
        'NoMatterText': ''
      },
    },
  },
  plugins: [],
}
