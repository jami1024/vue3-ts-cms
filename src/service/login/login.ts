import zlRequest from '../index'
import { IAccount } from './types'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return zlRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
