module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pastelGreen: {
          100: '#F2F3F2',
          150: '#E0E2E0',
          200: '#CED2CE',
          250: '#BCC1BC',
          300: '#AAB0AA',
          350: '#98A098',
          400: '#868F86',
          450: '#747E74',
          500: '#646C64',
          600: '#535A53',
          700: '#424842',
          800: '#323632',
          900: '#212421',
          DEFAULT: '#323632'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
