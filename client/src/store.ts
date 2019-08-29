import Vue from 'vue'
import Vuex from 'vuex'
import {routes} from './router'
import createPersistedState from 'vuex-persistedstate' // vuex数据持久化

Vue.use(Vuex)

const types = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_USER: 'SET_USER'
}

// 单独定义初始值模板
const stateTpl = {
  routes:[],
  /**
   * 本地node
   * http://localhost:5000 
   * 线上python
   * http://goodhope-spider-manage.herokuapp.com/api/extend
   */
  domainApi:`${process.env.NODE_ENV==='production' ? '' : 'http://localhost:5000'}/api`,
  /**登录相关 */
  eleToken:'',
  isAuthenticated: false,
  user:{},

  isCollapseSidebar: true,
}

export default new Vuex.Store({
  state:{
    ...stateTpl,
  },
  mutations:{
    SET_ROUTES(state,routes){
      state.routes = routes;
    },
    // 重置vuex,相对于刷新跳转清空体验好
    resetAll(state) {
      Object.assign(state, stateTpl) // 要用Object.assign而不是直接给state赋值。  
    },

    setEleToken(state, eleToken){ 
      state.eleToken = eleToken
    },
    [types.SET_AUTHENTICATED](state,isAuthenticated){
      if(isAuthenticated) state.isAuthenticated = isAuthenticated;
      else state.isAuthenticated = false;
    },
    [types.SET_USER](state,user){
      if(user) state.user = user
      else state.user = {}
    },
    setIsCollapseSidebar(state, isCollapseSidebar){ 
      state.isCollapseSidebar = isCollapseSidebar
    },
  },
  actions: {
    async setRoutes({state,commit},user){
      commit('SET_ROUTES',routes)
    },
    setAuthenticated({commit},isAuthenticated){
      commit(types.SET_AUTHENTICATED,isAuthenticated)
    },
    setUser({commit},user){
      commit(types.SET_USER,user)
    },
  },
  getters:{
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user
  },
  plugins: [
    createPersistedState(),
  ],
})
