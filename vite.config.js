import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// Configuración mínima para React moderno con JSX automático
export default defineConfig({
  plugins: [
    react(), svgr(),
  ],
})
