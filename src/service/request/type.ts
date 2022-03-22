import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZLRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface ZLRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZLRequestInterceptors<T>
  showLoading?: boolean
}
