<template lang="pug">
.view
  el-pagination(
    @size-change='handleSizeChange',
    @current-change='handleCurrentChange', 
    :current-page.sync='paginations.page_index', 
    :page-sizes='paginations.page_sizes', 
    :page-size='paginations.page_size', 
    :layout='paginations.layout', 
    :total='paginations.total'
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
  paginations = {
    page_index: 1, // 当前位于哪页
    total: 0, // 总数
    page_size: 5, // 一页显示多少条
    page_sizes: [5,10,15,20], // 每页显示多少条
    layout:'total,sizes,prev,pager,next,jumper', // 翻页属性
  }

  /* lifecycle hook */
  created(){
    this.paginations = this.prop.paginations
  }
  /* method */


  handleSizeChange(page_size:any) {
    // 切换size
    this.paginations.page_index = 1
    this.paginations.page_size = page_size
    // 设置默认的分页数据
    // this.tableData = this.allTableData.filter((item,index) => {
    //   return index < page_size
    // })
  }
  handleCurrentChange(page:any) {
    // 获取当前页
    let index = this.paginations.page_size * (page - 1)
    // 数据的总数
    let nums = this.paginations.page_size * page
    // 容器
    let tables = []
    // for(let i = index;i<nums;i++){
    //   if(this.allTableData[i]){
    //     tables.push(this.allTableData[i])
    //   }
    //   this.tableData = tables
    // }
  }
}
</script>