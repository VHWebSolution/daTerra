/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: { 
        'dtprimary' : '#F5F2D8',
        'dtlaranja' : '#F16234',
        'dtverde' : '#1C4E32',
        'dtbtn' : '#25844F',
        'dtblack' : '#231F20',
        'dtbtnw' : '#F4F4F4',
      },
      fontFamily: {
        'PTserif': ['pt-serif', 'sans-serif'],
        'Noto': ['Noto Sans', 'sans-serif'],
      },
      spacing: {
        '50px': '7vw',
      },
      screens: {
        'usd': '545px',
      },
    },
  },
  plugins: [],
}
