import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
// import Home from './views/Home.vue'

Vue.use(Router)

/**
* hidden: true                   如果hidden为true则在左侧菜单栏展示，否则不显示
* name:'router-name'             路由名称，必须填写
* meta : {
    title: 'title'               对应路由在左侧菜单栏的标题名称
    icon: 'icon-class'           对应路由在左侧菜单栏的图标样式，样式使用fontawesome图标库
    requireAuth: false,         // 不需要登录访问,否则都需要登录才能访问
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
    component: () => import('./components/layout/Index.vue'), // 布局组件
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '仪表盘',
        },
        component: () => import('./views/Dashboard.vue'),
      },
    ]
  },
  {
    path: '/srcManager',
    hidden: true,
    component: () => import('./components/layout/Index.vue'), // 布局组件
    meta: {
      title: '源站管理',
    },
    children: [
      {
        path: 'setting',
        name: 'srcManagerSetting',
        meta: {
          title: '源站配置',
        },
        component: () => import('./views/srcManager/Setting.vue'),
      },
      {
        path: 'rulesConfig',
        name: 'srcManagerRulesConfig',
        meta: {
          title: '抓取规则配置',
        },
        component: () => import('./views/srcManager/RulesConfig.vue'),
      },
    ],
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册',
      requireAuth: false, // 不需要登录访问
    },
    component: ()=>import('./views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      requireAuth: false, // 不需要登录访问
    },
    component: ()=>import('./views/Login.vue')
  },
  {
    path: '*',
    name: '/404',
    meta: {
      title: '404',
      requireAuth: false, // 不需要登录访问
    },
    component: ()=>import('./views/404.vue')
  },
]




const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// 路由守卫
router.beforeEach((to,from,next)=>{
  const isLogin = store.state.eleToken ? true : false;
  /* 页面路由守卫：判断：是否需要登录访问 */
  if (to.meta.requireAuth === false) { // 不需要登录访问
    next()
  } 
  else { // 需要登录访问
    if (store.state.eleToken) { // 含有token
      next()
    } else {
      next()
      alert('登录状态失效，请重新登录')
      store.commit('resetAll')
      next({
        path: '/login',
        query: {redirect: to.fullPath},
      })
    }
  }
})

export default router