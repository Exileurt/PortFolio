export default {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-d': '#181818',
        'light-white': '#F9F2E2',
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
