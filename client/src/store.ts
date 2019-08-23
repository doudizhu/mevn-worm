import Vue from 'vue'
import Vuex from 'vuex'
import {routes} from './router'

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
