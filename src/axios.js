import Vue from 'vue'
import axios from 'axios'

Vue.config.productionTip = false
// axios.defaults.baseURL = 'http://join.stuhome.com/api'
axios.defaults.baseURL = 'http://localhost:8081/api'
// axios.defaults.headers = {
//   'Content-Type': 'application/x-www-form-urlencoded'
// }

axios.defaults.withCredentials = true
axios.defaults.headers = {
  'Content-Type': 'application/json'
}

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization')
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = axios
