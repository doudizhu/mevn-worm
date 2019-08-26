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
  // ***注意：此处不能自动同步
  handleSizeChange(page_size:any) { // 当前页码变化
    this.executeEmit({page_size,page_index:1})
  }
  // ***注意：此处可自动同步不用sync
  handleCurrentChange(page_index:any) { // 每页条目限量变化
    this.executeEmit()
  }

  /* 向父组件发射值 */
  executeEmit(conf:object={}) {
    this.$emit('update:prop',{
      pagination: {
        ...(Object.assign(this.prop.pagination, conf)),
      }
    });

    this.emit({ // 发射子组件响应参数 
      /* 请求返回的数据 */
      // data:{}
      /* 其他控制字段 */
    })
  }
  emit(response: object) {
    this.$emit(
      'emit',
      response // 发射子组件参数
    )
  }
}
</script>