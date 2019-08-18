import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

/**
* hidden: true                   如果hidden为true则在左侧菜单栏展示，否则不显示
* name:'router-name'             路由名称，必须填写
* meta : {
    title: 'title'               对应路由在左侧菜单栏的标题名称
    icon: 'icon-class'           对应路由在左侧菜单栏的图标样式，样式使用fontawesome图标库
  }
**/
export const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/',
    hidden: true,
    name: 'dashboard',
    component: ()=> import('@/views/Dashboard.vue'),
    meta: {
      title: '仪表盘',
      // icon: 'fa fa-home'
    },
  },
] 

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
