module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF', // Electric Blue
        secondary: '#17A2B8', // Teal
        accent: '#6F42C1', // Soft Purple
        background: '#F8F9FA', // Light Gray
        footer: '#23272B', // Dark Footer
      },
      fontFamily: {
        sans: [
          'Inter',
          'Poppins',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #007BFF 0%, #17A2B8 100%)',
        'section-gradient': 'linear-gradient(135deg, #F8F9FA 0%, #E3E6F3 100%)',
        'footer-gradient': 'linear-gradient(90deg, #23272B 0%, #343A40 100%)',
      },
    },
  },
  plugins: [],
}; 