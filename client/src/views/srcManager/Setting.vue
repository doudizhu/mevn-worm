<template lang="pug">
.view
  Filter
  //- 表格模块
  Table(
    :prop='propTable'
    @emit='emitTable'
  )
  Pagination
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {Table,Filter,Pagination} from '@/components/views/srcManager/setting/index.ts'
@Component({
  components:{Table,Filter,Pagination}
})
export default class ViewComponent extends Vue {
  /* data */
  // 表格模块
  propTable = {
    tableData: [],
  }


  /* lifecycle hook */
  created(){
    // 初始化页面数据
    this.getSourceInfo() // 获取来源数据
  }

  /* method */
  emitTable(response:any){

  }

  async getSourceInfo(data={}){
    const response = await this.$request({
      url: 'http://goodhope-spider-manage.herokuapp.com/api/extend/source-info/',
      data,
      method: 'get'
    })

    if(response.status >= 200 && response.status < 300){
      const data = response.data
      console.log('data', data)
      this.propTable.tableData = data.results
    }
  }

}
</script>