<template lang="pug">
.view
  //- 筛选模块
  FilterItem(
    :prop.sync='propFilterItem'
    @emit='emitFilterItem'
  )
  //- 表格模块
  Table(
    :prop='propTable'
    @emit='emitTable'
  )
  //- 分页模块
  Pagination(
    :prop.sync='propPagination'
    @emit='emitPagination'
  )
  //- 弹窗（新增&编辑）
  Dialog(
    v-if="isShowDialog" :isShow.sync='isShowDialog'
    :prop='propDialog'
    @emit='emitDialog'
  )
</template>

<script lang="ts">
import {Component,Vue,Watch} from 'vue-property-decorator'
import {Table,FilterItem,Pagination,Dialog} from '@/components/views/userManage/index.ts'
import axios from 'axios'
@Component({
  components:{Table,FilterItem,Pagination,Dialog}
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
    },
    active: false,
  }
  //- 分页模块
  propPagination = {
    pagination: {
      page_index: 1, // 当前位于哪页
      total: 0, // 总数
      page_size: 5, // 一页显示多少条
      page_sizes: [5,10,15,20], // 每页显示多少条
      layout:'total,sizes,prev,pager,next,jumper', // 翻页属性
    }
  }

  //- 弹窗
  isShowDialog = false
  propDialog = {}

  /* lifecycle hook */
  created(){
    // 初始化页面数据：
    this.requestApi() // 采用默认分页参数监听函数，立即加载一次
  }

  /* method */
  // 监听:表格模块
  emitTable(response:any){
    // 点击“删除”按钮
    if(response.method == 'delete'){
      this.requestApi(response);
    }
    // 点击“编辑”按钮
    if(response.method == 'patch'){
      if(response.mode == 'editInline'){ // 如果是行内编辑直接发送更新请求
        delete response.mode
        this.requestApi(response);
        return;
      }

      this.propDialog = response
      this.isShowDialog = true
    }
  }
  // 监听：验证筛选模块
  emitFilterItem(response:any){
    this.propPagination.pagination.page_index = 1; // 切换为第一分页
    // 点击“查询”按钮
    if(response.method === 'get'){
      const data = response.data;
      this.requestApi({
        data
      });
    }
    // 点击“新增”按钮
    // 监听：弹窗（新增&编辑）
    if(response.method === 'post'){
      this.propDialog = response
      this.isShowDialog = true
    }
  }
  // 监听：分页操作,触发分页参数监听函数
  emitPagination(response:any){
    this.requestApi()
  }
  // 监听：弹窗（新增&编辑）
  emitDialog(response:any){
    if(response.method === 'post'){ // 新增模式下
      this.propPagination.pagination.page_index = 1; // 切换为第一分页
      this.propFilterItem.active = false // 关闭筛选激活参数,使切换分页时不带筛选参数
    }
    
    this.requestApi(response)
  }

  async requestApi(conf:any={}){
    const {
      data={},
      method='get',
      index=0,
    } = conf
    const id = data._id || conf.id || ''
    Object.assign(data,this.propPagination) // 加入分页参数
    if(this.propFilterItem.active === true){
      data.filterFields = this.propFilterItem.ruleForm // 加入筛选参数
    }

    const response = await this.$request({
      // url: 'http://goodhope-spider-manage.herokuapp.com/api/extend/source-info/',
      // url: 'http://localhost:5000/api/sourceInfos/'+id,
      api: '/user/'+id,
      data,
      method,
    })

    if(response.status >= 200 && response.status < 300){
      const data = response.data
      if(data.pagination){
        this.propPagination.pagination.total = data.pagination.total
      }
      
      if(method==='post'){ // 增
        this.$message({
          message:'新增成功',
          type: 'success'
        })
        this.propTable.tableData = data.results
      }
      else if(method=='delete'){ // 删 *待定：是否也后台拉取数据更新页面
        this.propTable.tableData.splice(index,1); // 页面展示删除一条
        this.propPagination.pagination.total--; // 总条数减一
        this.$message({
          message:'删除成功',
          type: 'success'
        })
      }
      else if(method=='patch'){ // 改
        this.$message({
          message:'修改成功',
          type: 'success'
        })
      }
      else if(method=='get'){ // 查
        // 设置编辑状态
        data.results.forEach((item:any)=>{
          item.edit = false

          // 身份描述字段
          item.des = (this.getRoleObj(item.identity) as any).des
        })
        this.propTable.tableData = data.results
      }
    }
  }

  // 辅助静态展示信息
  optionIdentity = [
    {
      key: 'admin',
      role: '管理员',
      des: 'Super Administrator. Have access to view all pages.',
    },
    {
      key: "editor",
      role: "编辑",
      des: "Normal Editor. Can see all pages except permission page"
    },
    {
      key: "visitor",
      role: "游客",
      des: "Just a visitor. Can only see the home page and the document page"
    },
  ]
  getRoleObj(role:string){
    let roleObj = {}
    this.optionIdentity.some((item:any)=>{
      if(item.key == role){
        roleObj = item;
        return true;
      }
    })
    return roleObj
  }
}
</script>