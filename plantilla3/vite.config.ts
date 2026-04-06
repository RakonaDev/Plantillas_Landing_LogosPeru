import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const rawBasePath = env.VITE_BASE_PATH?.trim() || '/'
  const base = rawBasePath === '/' ? '/' : `/${rawBasePath.replace(/^\/+|\/+$/g, '')}/`

  return {
    plugins: [react()],
    base,
  }
})
