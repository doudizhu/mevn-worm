<template lang="pug">
.view
  el-form(ref='ruleForm' :model="ruleForm" :rules='rules' :inline='true' )
    el-form-item(label='规则名称')
      //- el-input(v-model='ruleForm.name')
      FuzzySearch(
        v-model='ruleForm.name'
        :prop="{api:'rulesConfig',searchField:'name'}"
      )
    el-form-item(label='采集类别')
       el-select(v-model='ruleForm.category')
        el-option(v-for='(item,index) in format_type_list' :key='index' :label='item.name' :value="item.url")
    el-form-item(label='层级')
      el-select(v-model='ruleForm.is_two_layers')
        el-option(v-for='(item,index) in is_two_layers' :key='index' :label='item.name' :value="item.value")
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
      el-button(@click="submitForm('ruleForm')" :type='prop.active ? "primary" : "default"') 筛选
      el-button(@click='handleAdd' type='primary') 新增
</template>

<script lang="ts">
import {debounce} from '@/utils'
import {FuzzySearch} from '@/components/widgets';
import {Component,Vue,Prop,Watch} from 'vue-property-decorator'
@Component({
  components:{FuzzySearch,}
})
export default class ViewComponent extends Vue {
  /* prop */
  @Prop() prop!: any; // 父组件传值

  /* data */
  ruleForm = {
    name:'',
    collected__date__gte:'',
    collected__date__lte:'',
  }
  rules = {}
  // 辅助静态展示信息
  format_type_list: any = [
    {url: "http://goodhope-spider-manage.herokuapp.com/api/extend/collection-categories/1/", name: "活动", created: "2019-08-09T01:35:38+08:00"},
    {url: "http://goodhope-spider-manage.herokuapp.com/api/extend/collection-categories/1/", name: "活动", created: "2019-08-09T01:35:38+08:00"},
  ]
  is_two_layers: any = [
    {
      name: "单层",
      value: "0",
    },
    {
      name: "双层",
      value: "1",
    },
    {
      name: "全站",
      value: "2",
    }
  ]

  /* lifecycle hook */
  created(){}

  /* method */
  submitForm(formName: string) { // 表单提交校验
    (this.$refs[formName] as any).validate(
      (valid: boolean) => {
        if (valid) {
          this.$emit('update:prop',{
            ruleForm:this.ruleForm,
            active: true,
          })
          this.emit({ // 发射子组件参数
            /* 请求返回的数据 */
            data: {
              filterFields:this.ruleForm
            },
            /* 其他控制字段 */
            method:'get'
          })  
        }
      }
    )
  }
  handleAdd(){
    this.emit({ // 发射子组件参数
      /* 请求返回的数据 */
      /* 其他控制字段 */
      method:'post',
      title:'新增'
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