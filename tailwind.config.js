/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          DEFAULT: '1320px'
        }
      },
      colors: {
        zinc: {
          DEFAULT: '#F3EDF7'
        },
        gray: {
          DEFAULT: '#CAC4D0',
          400: '#9D9D9D'
        },
        black: {
          DEFAULT: '#1C1B1F',
          500: '#49454F'
        },
        purple: {
          DEFAULT: '#6750A4'
        },
        red: {
          DEFAULT: '#CF1B1B'
        }
      }
    },
  },
  plugins: [],
}

