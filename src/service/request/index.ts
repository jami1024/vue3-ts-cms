import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { ZLRequestInterceptors, ZLRequestConfig } from './type'
class ZLRequest {
  instance: AxiosInstance
  interceptors?: ZLRequestInterceptors
  constructor(config: ZLRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log('请求', res)
    })
  }
  // request() {}
  // get() {}
}
export default ZLRequest
