import Vue from 'vue'
import Vuex from 'vuex'
import {routes} from './router'

Vue.use(Vuex)

// 单独定义初始值模板
const stateTpl = {
  routes:[]
}

export default new Vuex.Store({
  state:{
    ...stateTpl,
  },
  mutations:{
    SET_ROUTES(state,routes){
      state.routes = routes;
    },
  },
  actions: {
    async setRoutes({state,commit},user){
      commit('SET_ROUTES',routes)
    },
  },
})
