/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}', // if you still have pages
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        plexmono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
