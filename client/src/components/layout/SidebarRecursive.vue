<template lang="pug">
//- 固定侧边栏展开后的宽度（*可优化：响应式浮动隐藏展示）
//- .view(:style="{width:(isCollapse ? '' : '200px')}") 
.view
  el-menu(:default-active="currentRoutePath" :collapse="isCollapse" router)
    //- 不存在或者存在值为false
    template(
      v-for='item in $store.state.routes'
      v-if="!(item.hidden)" 
    )
      //- 存在一个子元素
      el-menu-item(v-if='item.children&&item.children.length==1' :index="item.children[0].path" :key='item.children[0].path')
        i(v-if='item.children[0].meta.icon' :class='item.children[0].meta.icon')
        i(v-if="(!item.children[0].meta.icon)&&isCollapse&&item.children[0].meta&&item.children[0].meta.title") {{item.children[0].meta.title.slice(0,2)}}
        span(slot='title') {{item.children[0].meta.title}}
      //- 多个子元素
      el-submenu(v-else :index="item.path")
        template(slot='title')
          i(v-if='item.meta.icon' :class='item.meta.icon')
          i(v-if="!item.meta.icon&&isCollapse&&item.meta&&item.meta.title") {{item.meta.title.slice(0,2)}}
          span(v-if='item.meta&&item.meta.title' slot='title') {{item.meta.title}}
        template(v-for="cItem in item.children")  
          el-menu-item(
            v-if='!cItem.children || cItem.children.length === 0'
            :index="item.path+ '/' + cItem.path"
            :key="item.path+ '/' + cItem.path"
          )
            span(slot='title' v-if='cItem.meta&&cItem.meta.title') {{cItem.meta.title}}
          NavMenu(
            v-else
            :navMenus="cItem" 
            :index="item.path+ '/' + cItem.path"
          )
</template>

<script lang="ts">                                                                                    
import {Component,Vue,Watch} from 'vue-property-decorator'
import {NavMenu} from '@/components/layout/common/index.ts'
@Component({
  components:{NavMenu}
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

  // created(){
  //   this.$store.dispatch('setRoutes'); // 初始化导航栏vuex数据routes
  // }
}
</script>