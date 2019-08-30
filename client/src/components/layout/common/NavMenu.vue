<template lang="pug">
.view
  el-submenu(:index="index")
    template(slot='title')
      span(v-if='navMenus.meta&&navMenus.meta.title') {{navMenus.meta.title}}
    template(v-for="item in navMenus.children")
      el-menu-item(
        v-if='!item.children || item.children.length === 0 '
        :index="index+ '/' + item.path"
        :key="index+ '/' + item.path"
      )
        span(slot='title') {{item.meta.title}}
      //- span(v-else) {{item}}
      NavMenu(
        v-else
        :navMenus="item" 
        :index="index+ '/' + item.path"
      )
</template>

<script>
  export default {
    name: 'NavMenu',
    props: ['navMenus','index'],
    data() {
      return {}
    },
    methods: {},
    created(){
      // console.log('navMenus',this.navMenus)
    }
  }
</script>