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
      label='官网地址'
      align='center'
    )
      template(slot-scope='scope')
        a(:href='scope.row.src_url') {{scope.row.src_url}}
    el-table-column(
      prop='contact_way'
      label='联系方式'
      align='center'
    )
    el-table-column(
      prop='wechat'
      label='微信公众号'
      align='center'
    )
    el-table-column(
      prop='facebook'
      label='脸书'
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
    el-table-column(label='操作' align='center' fixed='right' width='240')
      template(slot-scope='scope')
        el-button(@click='haddleSave(scope.$index, scope.row)' size='small' type='warning' icon='save') 保存
        el-button(@click='haddleEdit(scope.$index, scope.row)' size='small' type='warning' icon='edit') 编辑
        el-button(@click='haddleDelete(scope.$index, scope.row)' size='small' type='danger' icon='delete') 删除
</template>

<script lang="ts">
import {Component,Vue,Prop} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /* prop */
  @Prop() prop!: any; // 父组件传值
}
</script>