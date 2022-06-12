import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import messageUtil from '@/utils/message'
import router from '@/router'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    const code = response.data.code || 200;

    // if the custom code is not 20000, it is judged as an error.
    if (code == 200) {
      return res
    } else {
      messageUtil.error(res.msg || '服务器开小差了，请稍后再试')
      if(code == 401 || code == 402) {
        setTimeout(async () => {
          router.push('/login')
          await store.dispatch('reset')
        }, 100)
      }

      return Promise.reject(new Error(res.msg || 'Error'))
    }
  },
  error => {
    if (error.response.status === 401) {
      messageUtil.error('未授权，请登录')
      setTimeout(async () => {
        router.push('/login')
        await store.dispatch('reset')
      }, 100)
    } else if (error.response.status === 403) {
      messageUtil.error('没有权限访问')
    } else if (error.response.status === 404) {
      messageUtil.error('404未找到资源')
    } else if (error.response.status === 500) {
      messageUtil.error('系统繁忙，请稍后再试')
    } else {
      messageUtil.error(error.message)
    }
    return Promise.reject(error)
  }
)

export default service
