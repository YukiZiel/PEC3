/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'logo-green': '#4bfeb6',
      'logo-gradient': '#c5f68f',
      'logo-orange': '#fbf871',
      'nav-color': '#28a745',
      'link-color': '#0d6efd',
      'hover-color': '#0a58ca',
      'transparent': 'rgba(255, 255, 255, 0.8)',
      'gray': '#dee2e6',
      'white': '#ffffff'
    },
    fontSize: {
      xs: '12px',
      lg: '1.75rem',
      'calc-h2': 'calc(1em + 0.5vw);'
    },
    extend: {
      width: {
        'calc-1/3': 'calc(33.33% - 20px)',
        'calc-1/2': 'calc(50% - 20px)',
        'calc-1': 'calc(100% - 20px)'
      },
      backgroundImage: {
        'tennis-place': "url('/src/assets/images/tennis-ball-backgrounds.png')"
      }
    },
  },
  plugins: [],
}

