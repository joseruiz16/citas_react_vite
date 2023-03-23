/** @type {import('tailwindcss').Config} */
module.exports = {
  //agrego el archivo index.html las rutas los componentes donde voy utilizar talwind
  content: ["index.html","./src/**/*.jsx"],// pero con src y eso busca todos los archivos con extension js y ahi aplica las clases de tailwind
  theme: {
    extend: {},
  },
  plugins: [],
}
