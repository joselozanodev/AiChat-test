/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chatBlue: {
        '50': '#effaff',
        '100': '#dbf2fe',
        '200': '#bfeafe',
        '300': '#93defd',
        '400': '#60cafa',
        '500': '#3baef6',
        '600': '#2592eb',
        '700': '#1d7ad7',
        '800': '#1e63af',
        '900': '#1e548a',
        '950': '#173454',
        }
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"]
      }
    },
  },
  plugins: [],
}

