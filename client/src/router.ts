import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import {Message} from 'element-ui'
// import Home from './views/Home.vue'

Vue.use(Router)

/**
* hidden: true                   如果hidden为true则不在左侧菜单栏展示，否则不显示  if `hidden:true` will not show in the sidebar(default is false)
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
    meta:{
      roles:['admin','editor'] // admin&editor&visitor
    },
    component: () => import('./components/layout/Index.vue'), // 布局组件
    redirect: '/dashboard', // 第一层如果需要用到layout布局组件，需要重定向到子组件
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '仪表盘',
          icon:'el-icon-menu'
        },
        component: () => import('./views/Dashboard.vue'),
      },
    ]
  },
  {
    path: '/srcManager',
    component: () => import('./components/layout/Index.vue'), // 布局组件
    meta: {
      title: '源站管理',
    },
    redirect:'/srcManager/setting', // 第一层如果需要用到layout布局组件，需要重定向到子组件
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
    path: '/personalInfo',
    component: () => import('./components/layout/Index.vue'), // 布局组件
    redirect: '/personalInfo/index', // 第一层如果需要用到layout布局组件，需要重定向到子组件
    children: [
      {
        path: '/personalInfo/index', // ***注意：此处为单层时，不能省略写法成 path:'index'
        name: 'personalInfo',
        meta: {
          title: '个人信息',
        },
        component: () => import('./views/PersonalInfo.vue'),
      },
    ]
  },
  {
    path: '/userManage',
    meta:{
      roles:['admin'],
    },
    component: () => import('./components/layout/Index.vue'), // 布局组件
    redirect: '/userManage/index', // 第一层如果需要用到layout布局组件，需要重定向到子组件
    children: [
      {
        path: '/userManage/index', // ***注意：此处为单层时，不能省略写法成 path:'index'
        name: 'userManage',
        meta: {
          title: '账户管理',
          roles:['admin'],
        },
        component: () => import('./views/UserManage.vue'),
      },
    ]
  },
  {
    // 1级
    path: '/1', // 多级导航递归demo
    component: () => import('./components/layout/Index.vue'), // 布局组件
    meta: {
      title: '多级导航demo',
      roles:['admin'],
    },
    redirect:'/1/1', // 第一层如果需要用到layout布局组件，需要重定向到子组件
    children: [
      // 2级,2个
      {
        path: '1',
        meta: {
          title: '1-1',
        },
        component: { render (c:any) { return c('router-view') }}, // 嵌套路由值时，引用组件（等价于下式）
        // component: {
        //   render(createElement:any) {
        //       return createElement('router-view')
        //   }
        // },
        children: [
          // 3级，2个
          {
            path: '1',
            meta: {
              title: '1-1-1',
            },
            component: { render (c:any) { return c('router-view') }},
            children: [
              // 4级，4个（2号无children,3号隐藏，4号含子式，5号仅管理员和编辑权限可访问）
              {
                path: '1',
                meta: {
                  title: '1-1-1-1',
                },
                component: () => import('./views/Home.vue'),
                children: [
                  
                ],
              },
              {
                path: '2',
                meta: {
                  title: '1-1-1-2',
                },
                component: () => import('./views/Home.vue'),
              },
              {
                path: '3',
                meta: {
                  title: '1-1-1-3',
                },
                hidden: true,
                component: () => import('./views/Home.vue'),
                children: [],
              },
              {
                path: '4',
                meta: {
                  title: '1-1-1-4',
                },
                component: { render (c:any) { return c('router-view') }},
                children: [
                  {
                    path: '1',
                    meta: {
                      title: '1-1-1-4-1',
                    },
                    component: () => import('./views/Home.vue'),
                  },
                ],
              },
              {
                path: '5',
                meta: {
                  title: '1-1-1-5',
                  roles:['admin','editor'],
                },
                component: { render (c:any) { return c('router-view') }},
              },
            ],
          },
          // 3级
          {
            path: '2',
            meta: {
              title: '1-1-2',
            },
            component: () => import('./views/Home.vue'),
          },
        ],
      },
      {
        path: '2',
        meta: {
          title: '1-2',
        },
        component: () => import('./views/Home.vue'),
        children: [
          
        ],
      },
    ]
  },

  // 不需要布局顶栏&侧边导航栏的页面
  {
    path: '/register',
    name: 'register',
    hidden: true,
    meta: {
      title: '注册',
      requireAuth: false, // 不需要登录访问
    },
    component: ()=>import('./views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    meta: {
      title: '登录',
      requireAuth: false, // 不需要登录访问
    },
    component: ()=>import('./views/Login.vue')
  },
  {
    path: '*',
    name: '/404',
    hidden: true,
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
      Message.error('登录状态失效，请重新登录');
      store.commit('resetAll')
      next({
        path: '/login',
        query: {redirect: to.fullPath},
      })
    }
  }
})

export default router