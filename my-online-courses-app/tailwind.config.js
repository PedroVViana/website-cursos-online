/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5271FF',   // Azul escuro
        secondary: '#8C52FF', // Cinza escuro
        // Adicione outras cores personalizadas aqui
      },
      fontSize: {
        'custom-lg': '14px', // Adiciona um tamanho de fonte personalizado
      },
      padding: {
        'pcustom:': '10px'
      }
    },
  },
  plugins: [],
}
