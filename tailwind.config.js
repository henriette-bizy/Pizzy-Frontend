/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': '#16a34a',
      'gray': '#6b7280',
      'metal': '#565584',
      'red': '#dc2626',
      'lightorange':'#fed7aa',
      'orange': '#f97316',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'lightblue':'#2563eb',
    },

    fontSize:{
    'norm':'15px'
    },
    extend: {
      width: {
        'norm': '90%',
        'mid':'60%'
      },
      margin:{
       '100':'400px'
      }
    },
  },
  plugins: [
    {
    tableLayout: false,
  }
    
  ],
}
