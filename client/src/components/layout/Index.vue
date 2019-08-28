<template lang="pug">
.view.layout
  .aside
    Sidebar
  .container
    Header
    .main
      router-view
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {Sidebar,Header} from '@/components/layout/index.ts'
@Component({
  components:{
    Sidebar,Header
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
</style>
