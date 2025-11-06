import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración definitiva para tu estructura
export default defineConfig({
  root: '.', // raíz actual
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
})
