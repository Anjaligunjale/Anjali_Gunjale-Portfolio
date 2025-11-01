import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGhPages = process.env.GITHUB_PAGES === 'true'
const repoName = 'anjali-portfolio' // change if your repo name differs

export default defineConfig({
  plugins: [react()],
  base: isGhPages ? `/${repoName}/` : '/',
})
