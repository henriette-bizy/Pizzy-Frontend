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
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'orange': '#f97316',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'lightblue':'#2563eb'
    },

    fontSize:{
    'norm':'15px'
    },
    extend: {
      width: {
        'norm': '90%',
      }
    },
  },
  plugins: [
    {
    tableLayout: false,
  }
    
  ],
}
