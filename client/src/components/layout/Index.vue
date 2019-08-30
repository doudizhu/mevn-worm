<template lang="pug">
.view.layout
  .aside
    SidebarRecursive
  .container
    Header
    .main
      router-view
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {SidebarRecursive,Header,} from '@/components/layout/index.ts'
@Component({
  components:{
    SidebarRecursive,Header,
  }
})
export default class ViewComponent extends Vue {

}
</script>

<style lang="stylus" scoped>
// .view 此处不用view防止下层的.view被router-view合并上来也被选中
.layout
  display:flex;
  &>.container
    flex 1
    overflow hidden // 防止elemnt-ui表格宽度，侧边栏变化自动计算后撑爆视窗
    .main
      padding 20px
</style>
