/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // 🚀 REGISTRAMOS LA ANIMACIÓN DE NIVEL PREMIUM
      keyframes: {
        slideLeft: {
          '0%': {
            transform: 'translateX(200px)', // Empieza 30 píxeles a la izquierda
            opacity: '0'                     // Totalmente invisible
          },
          '100%': {
            transform: 'translateX(0)',     // Llega a su posición original
            opacity: '1'                     // Totalmente visible
          },
        }
      },
      animation: {
        // Nombre de la clase: duración (0.5s), curva de velocidad (cubic-bezier), y ejecución fija
        'slide-in-right': 'slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: []
}
