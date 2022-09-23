import axios from 'axios'

// 创建axios实例
const serve = axios.create({
  timeout: 1000 * 30,
  baseURL: import.meta.env.VITE_APP_API_URL,
  // baseURL: '/api',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// request拦截器
serve.interceptors.request.use(config => {
  // 添加头
  // config.headers['xxx'] = ''
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
serve.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // todo
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default serve
