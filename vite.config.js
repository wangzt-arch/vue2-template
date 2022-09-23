import {fileURLToPath, URL} from 'node:url'
import {defineConfig, loadEnv} from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'

// https://vitejs.dev/config/
export default defineConfig((({mode}) => {
  const config = loadEnv(mode, './')
  return {
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
    server: { // 使用本机ip或者localhost启动服务
      host: '0.0.0.0',
      open: true,
      // proxy: {
      // '/api': {
      //     target: config.VITE_APP_API_URL,
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/api/, '')
      // }
      // }
    }
  }
}))
