import { Module } from 'vuex'

import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/types'
import localCache from '@/utils/cache'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log('执行accountLoginAction', commit, payload)
      // 1.实现登陆逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 2. 请求登陆用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      console.log('userInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      commit('changeUserInfo', userInfo)
      // 3. 获取登陆用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      console.log('userMenu', userMenus)
      commit('changeUserMenus', userMenus)
      localCache.setCache('UserMenus', userMenus)
    }
  }
}

export default loginModule
