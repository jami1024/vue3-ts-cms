// service统一出口
import ZLRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const zlRequest = new ZLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('请求成功的拦截')
      // token的拦截
      const token = localCache.getCache('token')
      if (token) {
        // console.log('sssss', config, token)
        // config.headers.Authorization = `Bearer ${token}`
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (config) => {
      // console.log('响应成功的拦截')
      return config
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应失败的拦截')
      return err
    }
  }
})

export default zlRequest
