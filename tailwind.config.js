/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'hp':'320px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        'bg-restu':'#272727',
        'card-restu':'#363636',
        'chip-restu':'#5E5E5E'
      },
      boxShadow:{
        'neon-white':'0 0 10px #FFFFFF, 0 0 40px #FFFFFF'
      }
    },
  },
  plugins: [],
}