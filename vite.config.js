import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(), vue2Jsx(), legacy(
      {targets: ['ie >= 11'], additionalLegacyPolyfills: ['regenerator-runtime/runtime']}
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0', // 使用本机ip或者localhost启动服务
    open: true,
    proxy: {
      '/api': {
        target: import.meta.env.VITE_APP_API_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }

})
