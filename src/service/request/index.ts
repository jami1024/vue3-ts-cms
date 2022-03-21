import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class ZLRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
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
