<template lang="pug">
.view
  //- 筛选模块
  FilterItem(
    :prop='propFilterItem'
    @emit='emitFilterItem'
  )
  //- 表格模块
  Table(
    :prop='propTable'
    @emit='emitTable'
  )
  Pagination
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {Table,FilterItem,Pagination} from '@/components/views/srcManager/setting/index.ts'
@Component({
  components:{Table,FilterItem,Pagination}
})
export default class ViewComponent extends Vue {
  /* data */
  // 表格模块
  propTable = {
    tableData: [],
  }
  //- 筛选模块
  propFilterItem = {
    ruleForm: {
      name: '',
      collected__date__gte: '',
      collected__date__lte: '',
    }
  }


  /* lifecycle hook */
  created(){
    // 初始化页面数据
    this.getSourceInfo() // 获取来源数据
  }

  /* method */
  emitTable(response:any){

  }
  // 监听：验证筛选模块，点击“查询”按钮
  emitFilterItem(response:any){
    const data = response.data;
    console.log('dataddd',data)
    this.getSourceInfo(data);
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