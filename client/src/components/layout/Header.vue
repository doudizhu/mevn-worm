<template lang="pug">
.view
  //- 0.侧边栏展开收起模块
  CollapseSidbar
  //- 1.面包屑导航
  Breadcrumb
  //- 2.账户信息下拉菜单
  AccountInfo
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {AccountInfo,Breadcrumb,CollapseSidbar} from '@/components/layout/common/index.ts'
@Component({
  components:{AccountInfo,Breadcrumb,CollapseSidbar}
})
export default class ViewComponent extends Vue {

}
</script>

<style lang='stylus' scoped>
.view
  height 56px
  line-height 56px
  padding 0 20px 0 0
  // background-color #fafafa
  // background-color #eee
  background-color #eef1f6

  position sticky
  top 0
  z-index 999
</style>