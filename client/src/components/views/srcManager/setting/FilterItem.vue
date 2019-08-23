<template lang="pug">
.view
  el-form(ref='ruleForm' :model="ruleForm" :rules='rules' :inline='true' )
    el-form-item(label='源站名称')
      //- el-input(placeholder="源站名称" v-model='ruleForm.name')
      el-autocomplete(
        placeholder="模糊搜索"
        v-model.trim="ruleForm.name"
        :fetch-suggestions="querySearchAsync"
      )
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
import {Component,Vue,Prop,Watch} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /* prop */
  @Prop() prop!: any; // 父组件传值
  // @Watch('ruleForm.name',{immediate: false}) onNameChange(val: string, oldVal: string) { 
  //   this.debounceSearchName()
  // };

  /* data */
  ruleForm = {
    name:'',
    collected__date__gte:'',
    collected__date__lte:'',
  }
  rules = {}

  // debounceSearchName = function () {}
  allName = []
  timeout:any = null

  /* lifecycle hook */
  created(){
    // this.debounceSearchName = debounce(this.searchName,1000)
  }
  // mounted() {
  //   this.loadAllName()
  // }

  /* method */
  // async searchName(){
  //   const response = await this.$request({
  //     api:'/sourceInfos/',
  //     data:{
  //       name:this.ruleForm.name,
  //     },
  //     method:'get',
  //   })

  //   if(response.status >= 200 && response.status < 400){
  //     this.querySearchName = response.data.resuluts
  //   }
  // }
  querySearchAsync(queryString:string, cb?:any) {
    // var queryData = this.allName;
    // var results = queryString ? queryData.filter(this.createStateFilter(queryString)) : queryData;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      // cb(results);
      const response = await this.$request({
        api:'/sourceInfos/',
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
  createStateFilter(queryString:string) {
    return (state:any) => {
      return (state.value.toString().toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    };
  }
  async loadAllName(){
    const response = await this.$request({
      api:'/sourceInfos/',
      data:{
        querySearchField:'name',
      },
      method:'get',
    })

    if(response.status >= 200 && response.status < 400){
      this.allName = response.data.results
      console.log('this.allName:',this.allName)
    }
  }

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