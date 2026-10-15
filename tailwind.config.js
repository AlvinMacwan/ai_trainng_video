/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          deepNavy: '#063B56',
          darkNavy: '#022D44',
          primaryGreen: '#138A63',
          brightGreen: '#1B9B70',
          lightGreen: '#E8F5F0',
          bg: '#F5F8FA',
          white: '#FFFFFF',
          textPrimary: '#092C49',
          textSecondary: '#64748B',
          border: '#DCE5EA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      aspectRatio: {
        '16/9': '16 / 9',
      }
    },
  },
  plugins: [],
}
