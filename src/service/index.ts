// service统一出口
import ZLRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const zlRequest = new ZLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default zlRequest
