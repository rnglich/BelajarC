/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './app.js'],
  theme: {
    extend: {
      colors: {
        surface: '#FFFFFF',
        'surface-warm': '#F6F5F4',
        hairline: '#DFDCD9',
        ink: '#000000',
        body: '#615D59',
        muted: '#A39E98',
        primary: '#0075DE',
        'primary-pressed': '#005BAB',
        'primary-link': '#097FE8',
        'primary-tint': '#E6F3FE',
        success: '#1AAE39',
        'success-tint': '#D0F4D8',
        amber: '#FFB110',
        'amber-deep': '#E89D01',
        coral: '#F64932',
        red: '#E32D14',
        lavender: '#EADBFA'
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Newsreader', 'Lyon Text', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      }
    }
  },
  plugins: []
};
