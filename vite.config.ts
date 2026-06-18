import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site (omar76901.github.io) is served from the domain root,
// so the base path is '/'. For a project site it would be '/repo-name/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
