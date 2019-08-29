<template lang="pug">
//- 固定侧边栏展开后的宽度（*可优化：响应式浮动隐藏展示）
//- .view(:style="{width:(isCollapse ? '' : '200px')}") 
.view
  el-menu(:default-active="currentRoutePath" :collapse="isCollapse" router)
    template(
      v-for='item in $store.state.routes'
      v-if="item.hidden&&item.children&&item.children.length>0"
    )
      //- 存在一个子元素
      el-menu-item(v-if='item.children.length==1' :index="item.children[0].path" :key='item.children[0].path')
        i(v-if='item.children[0].meta.icon' :class='item.children[0].meta.icon')
        i(v-if="!item.children[0].meta.icon&&isCollapse&&item.children[0].meta&&item.children[0].meta.title") {{item.children[0].meta.title.slice(0,2)}}
        span(slot='title') {{item.children[0].meta.title}}
      //- 多个子元素
      el-submenu(v-else :index="item.children[0].path")
        template(slot='title')
          i(v-if='item.meta.icon' :class='item.meta.icon')
          i(v-if="!item.meta.icon&&isCollapse&&item.meta&&item.meta.title") {{item.meta.title.slice(0,2)}}
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
  }
  isCollapse = true
  @Watch('$store.state.isCollapseSidebar',{immediate: true}) onNameChange(val: string, oldVal: string) { 
    this.isCollapse = this.$store.state.isCollapseSidebar
  };

  created(){
    this.$store.dispatch('setRoutes'); // 初始化导航栏vuex数据routes
  }
}
</script>