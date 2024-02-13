import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/1402', // Здесь вы указываете путь до корневой папки, например, '/my-app/'
  plugins: [react()],
  // build: {
  //   outDir: 'dist', // Здесь вы указываете имя папки для сборки, например, 'build'
  // },
})
