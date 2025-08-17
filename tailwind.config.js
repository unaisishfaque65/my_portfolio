/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        primaryDark: '#2C3E50',
        primaryMedium: '#34495E',
        accentGray: '#7F8C8D',
        lightGray: '#BDC3C7',
        backgroundLight: '#ECF0F1',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-down': 'fade-down 0.6s ease-out',
        'fade-up': 'fade-up 0.8s ease-out',
        'fade-up-delay': 'fade-up 0.8s ease-out 0.2s both',
        'fade-up-delay-2': 'fade-up 0.8s ease-out 0.4s both',
        'slide-in': 'slide-in 0.4s ease-out',
      },
      keyframes: {
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
};