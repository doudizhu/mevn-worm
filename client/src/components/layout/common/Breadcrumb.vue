<template lang="pug">
//- 1.面包屑导航
el-breadcrumb.breadcrumb(separator='/')
  el-breadcrumb-item(
    v-for="(item,index) in breadCrumbItems"
    :key="index"
    :to="{path:item.path}"
  ) {{item.title}}
</template>

<script lang='ts'>
import {Component,Vue,Provide,Watch} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class Content extends Vue {
  breadCrumbItems = [] // 面包屑的数组

  @Watch("$route") handleRouteChange(to: any) {
    // console.log('to',to)
    this.initBreadCrumbItems(to);
  }

  created(){
    this.initBreadCrumbItems(this.$route);
  }
  initBreadCrumbItems(router:any){
    // console.log(router);
    // 跟路由title
    let breadCrumbItems: any = [{ path: "/", title: "首页" }];

    // 遍历父级到当前子路由的页面的title和path 存储到数组里
    for(const index in router.matched){
      console.log(router.matched[index])
      if(router.matched[index].meta && router.matched[index].meta.title){
        breadCrumbItems.push({
          path: router.matched[index].path ? router.matched[index].path : '/',
          title: router.matched[index].meta.title,
        })
      }
    }
    
    console.log('breadCrumbItems:',breadCrumbItems)

    this.breadCrumbItems = breadCrumbItems;
  }
}
</script>

<style lang='stylus' scoped>
.el-breadcrumb
  display inline-block

  .el-dropdown-link
    cursor pointer
    &:hover
      color #409EFF
</style>