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
      'lightdark': '#0000006e',
      'gray': '#6b7280',
      'lightorange': '#ffa500',
      'orangeshadow': '#b86b3930',
      'orange': '#f97316',
      'lightgrey': '#00000010',
      'lightgray': '#807b7b',
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
      },
      boxshadow:{
         'orange':'0 1px 3px 0 rgba(184, 107, 57, 0.188)'
      }
    },
  },
  plugins: [
    {
    tableLayout: false,
  }
    
  ],
}
