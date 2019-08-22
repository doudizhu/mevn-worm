<template lang="pug">
.view
  el-form(:inline='true' ref='add_data' :model="ruleForm")
    el-form-item
      //- el-input(placeholder="源站名称" v-model='ruleForm.name')
      el-autocomplete(
        placeholder="源站名称"
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
      el-button(@click="submitForm('ruleForm')" type='primary') 查询
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

  // debounceSearchName = function () {}
  allName = []
  timeout:any = null

  /* lifecycle hook */
  created(){
    // this.debounceSearchName = debounce(this.searchName,1000)
  }
  mounted() {
    this.loadAllName()
  }

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
    var restaurants = this.allName;
    console.log('restaurants',restaurants)
    var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

    console.log('results:',results)
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      cb(results);
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