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
      label='用户名'
      align='center'
    )
    el-table-column(
      prop='email'
      label='邮箱'
      align='center'
    )
    el-table-column(
      prop='identity'
      label='身份'
      align='center'
    )
    el-table-column(
      prop='avatar'
      label='头像'
      align='center'
    )
    el-table-column(
      prop='date'
      label='注册时间'
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