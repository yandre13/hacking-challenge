module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
        xl: '6rem',
        '2xl': '12rem',
      },
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      grayscale: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
