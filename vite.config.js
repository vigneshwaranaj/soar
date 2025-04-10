import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: '/soar',
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        icon: true, // optional, if you want it
      },
    }),
  ],
})
