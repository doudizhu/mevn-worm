<template lang="pug">
.view
  el-menu(:default-active="currentRoutePath" router)
    template(
      v-for='item in $store.state.routes'
      v-if="item.hidden&&item.children&&item.children.length>0"
    )
      //- 存在一个子元素
      el-menu-item(v-if='item.children.length==1' :index="item.children[0].path" :key='item.children[0].path')
        span(slot='title') {{item.children[0].meta.title}}
      //- 多个子元素
      el-submenu(v-else :index="item.children[0].path")
        template(slot='title')
          span(v-if='item.meta&&item.meta.title' slot='title') {{item.meta.title}}
        el-menu-item(
          v-for="child in item.children" 
          :index="item.path+ '/' + child.path"
          :key="item.path+ '/' + child.path"
        )
          span(slot='title') {{child.meta.title}}
</template>

<script lang="ts">
import {Component,Vue,Watch} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /**data */
  currentRoutePath = ''
  @Watch("$route",{immediate:true}) handleRouteChange(to: any) {
    this.currentRoutePath = this.$router.currentRoute.path
    // console.log('to123',this.$router.currentRoute.path)
  }

  created(){
    this.$store.dispatch('setRoutes'); // 初始化导航栏vuex数据routes
  }
}
</script>

<style lang='stylus' scoped>
.view
  width 200px
</style>