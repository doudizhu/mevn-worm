<template lang="pug">
.view
  el-table(
    :data='prop.tableData'
    border
  )
    el-table-column(
      type='index'
      label='序号'
      width='50'
      align='center'
    )
    el-table-column(
      prop='name'
      label='名称'
      align='center'
    )
      template(slot-scope='scope')
        a(:href='scope.row.url') {{scope.row.name}}
    el-table-column(
      prop='src_url'
      label='抓取地址'
      align='center'
    )
      template(slot-scope='scope')
        a(:href='scope.row.src_url') {{scope.row.src_url}}
    el-table-column(
      prop='source_info'
      label='源站名称'
      align='center'
    )
    el-table-column(
      prop='is_two_layers'
      label='层级'
      align='center'
    )
    el-table-column(
      prop='collect_total'
      label='采集总数'
      align='center'
    )
    el-table-column(
      prop='collected'
      label='最后采集时间'
      align='center'
    )
    el-table-column(label='操作' align='center' fixed='right' width='180')
      template(slot-scope='scope')
        el-button(@click='handleEdit(scope.$index, scope.row)' size='small' type='warning' icon='edit') 编辑
        el-button(@click='handleDelete(scope.$index, scope.row)' size='small' type='danger' icon='delete') 删除
</template>

<script lang="ts">
import {Component,Vue,Prop} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /* prop */
  @Prop() prop!: any; // 父组件传值

  /* method */
  handleDelete(index:number,row:any){
    this.emit({ // 发射子组件参数
      /* 请求返回的数据 */
      // data:{},
      /* 其他控制字段 */
      method:'delete',
      index,
      id:row._id,
    })
  }
  handleEdit(index:number,row:any){
    this.emit({ // 发射子组件参数
      /* 请求返回的数据 */
      /* 其他控制字段 */
      method:'patch',
      title: '编辑',
      index,
      ruleForm:row,
    })
  }
  /* 向父组件发射值 */
  emit(response: object) {
    this.$emit(
      'emit',
      response // 发射子组件参数
    )
  }
}
</script>