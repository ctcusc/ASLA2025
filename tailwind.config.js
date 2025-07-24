module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
              background: 'var(--background)',
              foreground: 'var(--foregound)',
              midgray: 'var(--midgray)',
              lightgray: 'var(--lightgray)',
            },
            fontFamily: {
              sans: ['Work Sans', 'sans-serif'],
              mono: ['Montserrat', 'monospace'],
            },
        }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }