export default {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark-yellow': '#16120C',
        'dark-yellow': '#3F2700',
        'soft-yellow': '#714F19',
      },
      backgroundImage: {
        darkForest: "url('/src/assets/darkforest.png')",
        amoccidental: "url('/src/assets/amoccidental.png')",
      },
    },
  },
  plugins: [],
};
