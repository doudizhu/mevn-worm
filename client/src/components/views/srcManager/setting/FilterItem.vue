<template lang="pug">
.view
  el-form(:inline='true' ref='add_data' :model="ruleForm")
    el-form-item
      el-input(placeholder="源站名称" v-model='ruleForm.name')
    //- 筛选
    el-form-item(label='采集时间')
      el-date-picker(
        v-model='ruleForm.collected__date__gte'
        type='datetime'
        placeholder='请选择开始时间'
      )
      | -- 
      el-date-picker(
        v-model='ruleForm.collected__date__lte'
        type='datetime'
        placeholder='请选择结束时间'
      )
    el-form-item
      el-button(@click="submitForm('ruleForm')" type='primary') 查询
      el-button(@click='handleAdd' type='primary') 新增
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
  ruleForm = {}

  /* lifecycle hook */
  created(){
    this.ruleForm = this.prop.ruleForm
  }

  /* method */
  submitForm(formName: string) { // 表单提交校验
    // (this.$refs[formName] as any).validate(
    //   (valid: boolean) => {
        // if (valid) {
          // this.executeEmit()
        // }
    //   }
    // )
    this.executeEmit()
  }
  handleAdd(){
    this.emit({ // 发射子组件参数
      /* 请求返回的数据 */
      /* 其他控制字段 */
      method:'post',
      title:'新增'
    })
  }
  executeEmit() {
    this.emit({ // 发射子组件参数
      /* 请求返回的数据 */
      data: this.ruleForm,
      /* 其他控制字段 */
      option:'filter'
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