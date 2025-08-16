module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        '10px': '10px',
        '15px': '15px',
        '170px': '170px'
      },
      borderRadius: {
        '149px': '149px',
      },
      fontSize: {
        'md': '22px',
        'h1': '55px',
        'h2': '48px',
        'h3': '32px',
      },
      colors: {
        'a-primary': 'rgba(202, 198, 255, 0.1)',
        'a-green': '#B2D93A',
        'a-orange': '#FF7D56',
        'a-purple': '#6100C1',
        'a-blue': '#6ED2EF',
        'a-navy': '#222F5E',
        'a-gray': '#878799',
        'a-light-gray': '#FDFDFF',
        'a-yellow': '#FDCF3F',
        'a-amber': '#FDCF3F',
        'a-dark-blue': '#4F94FB',

        'a-green-10': 'rgba(178, 217, 58, 0.1)',
        'a-orange-10': 'rgba(255, 125, 86, 0.1)',
        'a-purple-10': 'rgba(97, 0, 193, 0.1)',
        'a-blue-10': 'rgba(110, 210, 239, 0.1)'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'], // class: font-lato
        catamaran: ['Catamaran', 'sans-serif'], // class: font-catamaran
        mazzard: ['MazzardH-Black', 'sans-serif'], // class: font-mazzard
      },
      maxWidth: {
        'hero-container': '1200px',
        'container': '1190px'
      },
    },
  },
  plugins: [],
}