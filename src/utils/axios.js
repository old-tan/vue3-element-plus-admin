import axios from 'axios'
import { ElMessage } from 'element-plus'

console.log(import.meta.env)
const instance = axios.create({
  baseURL: import.meta.env.VITE_RES_URL,
  timeout: 50000,
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')
    token ? config.headers['token'] = token : null
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  res => {
    if (error && error.response) {
      const status = error.response.status
      switch (status) {
        case 400:
          ElMessage.error("请求错误");
          break;
        case 401:
          ElMessage.error("未授权，请重新登录");
          break;
        case 403:
          ElMessage.error("拒绝访问");
          break;
        case 404:
          ElMessage.error("请求错误，未找到相应的资源");
          break;
        case 408:
          ElMessage.error("请求超时");
          break;
        case 500:
          ElMessage.error("服务器内部错误");
          break;
        case 501:
          ElMessage.error("网络未实现");
          break;
        case 502:
          ElMessage.error("网络错误");
          break;
        case 503:
          ElMessage.error("服务不可用");
          break;
        case 504:
          ElMessage.error("网络超时");
          break;
        case 505:
          ElMessage.error("HTTP版本不支持该请求");
          break;
        default:
          ElMessage.error("请求失败");
      }
    } else {
      if (JSON.stringify(error).includes("timeout")) {
        ElMessage.error("服务器响应超时，请刷新页面");
      }
      ElMessage.error("连接服务器失败");
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
