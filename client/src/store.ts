import Vue from 'vue'
import Vuex from 'vuex'
import {routes} from './router'
import createPersistedState from 'vuex-persistedstate' // vuex数据持久化

Vue.use(Vuex)

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
  },
  actions: {
    async setRoutes({state,commit},user){
      commit('SET_ROUTES',routes)
    },
  },
  plugins: [
    createPersistedState(),
  ],
})
