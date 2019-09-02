<template lang="pug">
.view
  el-form(ref='ruleForm' :model="ruleForm" :rules='rules' :inline='true' )
    //- 模糊搜索
    el-form-item(label='用户名')
      el-autocomplete(
        placeholder="模糊搜索"
        v-model.trim="ruleForm.name"
        :fetch-suggestions="querySearchAsync"
        @select="submitForm('ruleForm')"
        clearable
        @clear="submitForm('ruleForm')"
      )
    //- 筛选
    el-form-item(label='注册时间')
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
    el-form-item(label='身份')
      el-select(v-model='ruleForm.role' @change='submitForm("ruleForm")' clearable)
        el-option(
          v-for="option in optionRole" 
          :label="option.role"
          :value="option.role"
          :key="option.key"
        )
    //- 操作按钮
    el-form-item
      el-button(@click="submitForm('ruleForm')" :type='prop.active ? "primary" : "default"') 筛选
      el-button(@click='handleAdd' type='primary') 新增
</template>

<script lang="ts">
import {Component,Vue,Prop,Watch} from 'vue-property-decorator'
@Component({
  components:{}
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
  // 辅助信息
  allName = []
  timeout:any = null
  // 辅助静态展示信息
  optionRole = [
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
  // 模糊搜索相关
  querySearchAsync(queryString:string, cb?:any) {
    // var queryData = this.allName;
    // var results = queryString ? queryData.filter(this.createStateFilter(queryString)) : queryData;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      // cb(results);
      const response = await this.$request({
        api:'/user/',
        data:{
          querySearchField:'name',
          querySearchValue:this.ruleForm.name,
        },
        method:'get',
      })

      if(response.status >= 200 && response.status < 400){
        this.allName = response.data.results
        const queryData = this.allName;
        const results = queryString ? queryData.filter(this.createStateFilter(queryString)) : queryData;
        cb(results);
      }
    }, 1000 * Math.random());
  }
  createStateFilter(queryString: string) {
    return (state:any) => {
      return (state.value.toString().toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    };
  }
}
</script>