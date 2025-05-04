export default {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 
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
    }
  ],
};