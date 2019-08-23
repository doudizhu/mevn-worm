<template lang="pug">
.view
  el-pagination(
    @size-change='handleSizeChange',
    @current-change='handleCurrentChange', 
    :current-page.sync='prop.pagination.page_index', 
    :page-sizes='prop.pagination.page_sizes', 
    :page-size='prop.pagination.page_size', 
    :layout='prop.pagination.layout', 
    :total='prop.pagination.total'
  )
</template>

<script lang="ts">
import {Component,Vue,Prop} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /* prop */
  @Prop() prop!: any; // 父组件传值

  /* data */

  /* lifecycle hook */
  created(){}

  /* method */
  handleSizeChange(page_size:any) {
    this.executeEmit({page_size,page_index:1})
  }
  handleCurrentChange(page_index:any) {
    this.executeEmit({page_index})
  }

  /* 向父组件发射值 */
  executeEmit(conf:object={}) {
    this.$emit('update:prop',{
      pagination: {
        ...(Object.assign(this.prop.pagination, conf)),
      }
    });
  }
}
</script>