/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/src/*.{html,js}", "*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
     colors: {
      sky: '#38bdf8',
      secondary: '#94a3b8',
      dark: '#0a0a0a',
      
     },
     screens: {
      '2xl': '1320px',
     },
    },
    
  },
  plugins: [],
};
