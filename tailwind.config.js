/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.scss', './src/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        '100vw': '100vw',
      },
      colors: {
        'primary-black': 'var(--primary-black)',
        'primary-gray': 'var(--primary-gray)',
        'primary-orange': 'var(--primary-orange)',
        'primary-white': 'var(--primary-white)',
      },
      borderWidth: {
        DEFAULT: '1px',
        1: '1px',
      },
      padding: {
        default: '1rem',
      },
      margin: {
        default: '1rem',
      },
      screens: {
        xs: '280px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
