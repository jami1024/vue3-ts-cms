import { Module } from 'vuex'

import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/types'
import { mapMenusToPermissions, mapMenusToRoutes } from '@/utils/map-menus'
import localCache from '@/utils/cache'
import router from '@/router'

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
      userMenus: [],
      permissions: []
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
      console.log('注册动态路由')

      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // console.log('执行accountLoginAction', commit, payload)
      // 1.实现登陆逻辑
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 发送初始化请求(完整的role/department)
      dispatch('getInitialDataAction', null, { root: true })

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
      localCache.setCache('userMenus', userMenus)

      // 4. 跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        // 发送初始化请求(完整的role/department)
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        console.log('changeUserMenus', userMenus)
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
