/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#4169E1',
          200: '#5478E4',
        },

        black: '#000000',
        gray: '#121212',
        yellow: '#FFE600',
      },

      fontSize: {
        sm: '0.75rem',
        base: '0.875rem',
        xl: '1rem',
        '2xl': '1.375rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
      },

      fontFamily: {
        sans: 'var(--font-mulish)',
      },
    },
  },
  plugins: [],
}
