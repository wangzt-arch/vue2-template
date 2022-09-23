import axios from 'axios'

// 创建axios实例
const $ = axios.create({
  timeout: 1000 * 30,
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  // 添加头
  // config.headers['xxx'] = ''
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => { // 401
  if (response.data && response.data.code === 401) { // todo
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default $
