<template lang="pug">
.view
  .aside
    Sidebar
  .container
    .header header
    .main
      router-view
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {Sidebar} from '@/components/layout/index.ts'
@Component({
  components:{
    Sidebar,
  }
})
export default class ViewComponent extends Vue {

}
</script>

<style lang="stylus" scoped>
.view
  display:flex;
  &>.container
    flex 1
</style>
