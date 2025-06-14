export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2560px" 
    },
    extend: {
      'trapezium': 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
      grayscale: ['hover', 'active'],
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-trapezium': {
          'clip-path': 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
        },
      });
    },
    require('@tailwindcss/aspect-ratio')
  ],
};