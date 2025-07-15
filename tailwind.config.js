module.exports = {
    purge: [],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                background: 'rgb(var(--background) / <alpha-value>)',
                foreground: 'rgb(var(--foreground) / <alpha-value>)',
                primary: 'rgb(var(--mid-gray) / <alpha-value>)',
            },
        }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }