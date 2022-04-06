import zlRequest from '../index'
import { IAccount, ILoginResult } from './types'
import { IDataType } from '../types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

// 登陆
export function accountLoginRequest(account: IAccount) {
  return zlRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
// 请求登陆用户信息
export function requestUserInfoById(id: number) {
  return zlRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
// 获取登陆用户菜单
export function requestUserMenusByRoleId(id: number) {
  return zlRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
