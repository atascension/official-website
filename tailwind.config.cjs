/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0b234b',
          gold: '#e0b344',
          white: '#f5f5f5',
          gray: '#b8b8b8',
          surface: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Supreme', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        heading: ['Technor', 'Supreme', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 20px 40px -12px rgba(11, 35, 75, 0.06)',
        'premium-hover': '0 30px 60px -12px rgba(11, 35, 75, 0.12)',
      },
    },
  },
  plugins: [],
};
