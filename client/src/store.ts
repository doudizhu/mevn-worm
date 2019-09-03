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

      const {role} = user
      // 返回当前用户拥有权限的路由
      // console.log('routes',routes)
      const routesPermission = filterRoutesPermission(routes,role)
      // console.log('routesPermission',routesPermission)
      commit('SET_ROUTES',routesPermission)
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

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes 所有路由表
 * @param role 当前角色
 */
function filterRoutesPermission(routes:Array<any>,role:string){
  const routesPermission = routes.filter(route=>{
    if(hasPermission(route,role)){ // 是否有权限 
      if(route.children && route.children.length ){
        route.children = filterRoutesPermission(route.children,role)
      }
      return true;
    }
    return false;
  })

  return routesPermission;
}
/**
 * 判断是否有权限
 * @param roles 当前角色
 * @param route 当前路由对象
 */
function hasPermission(route:any,role:string){
  if(route.meta && route.meta.roles) {// 是否meta.roles包含角色的key值，如果包含那么就是有权限，否则无权限
    return (route.meta.roles.indexOf(role) >= 0);
  }else{ // 默认不设置有权限
    return true;
  }
}
