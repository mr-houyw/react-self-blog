const axios = require('axios')

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,  // process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截
request.interceptors.request.use(
  config => {
    // console.log('config', config, process.env)
    return config
  }, error => {
    return Promise.reject(error)
  }
)

// 响应拦截
request.interceptors.response.use(
  config => {
    return config
  }, error => {
    return Promise.reject(error)
  }
)

module.exports = request
