/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0d1117', // Dark background color
        'dark-card': '#161b22', // Dark card color
        'dark-text': '#c9d1d9', // Dark text color
        'dark-border': '#30363d', // Dark border color
        'dark-primary': '#58a6ff', // Primary color for dark mode
      },
    },
  },
  plugins: [],
};
