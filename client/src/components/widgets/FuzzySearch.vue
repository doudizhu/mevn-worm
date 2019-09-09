<template lang='pug'>
  //- 模糊搜索
  el-autocomplete(
    placeholder="模糊搜索"
    v-model.trim="propValue"
    :fetch-suggestions="querySearchAsync"
    clearable
  )
  //- @clear="submitForm('ruleForm')"
  //- @select="submitForm('ruleForm')"
</template>

<script lang="ts">
import {Component,Vue,Prop,Watch} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /**prop */
  @Prop() prop!: any; // 父组件传值
  @Prop() value: any; // 父组件传值
  /**computed */
  get propValue() {
    return this.value; // 默认isShow什么都不跟，则为控制自身
  }
  set propValue(val:any) {
    /*使用了v-model的组件会自动监听 input 事件, 
      * 并把这个input事件所携带的值 传递给v-model所绑定的属性,
      * 这样组件内部的值就给到了父组件了
      */
    this.$emit('input',val); //传值给父组件, 让父组件监听到这个变化
  }
  

  /**data */
  allName = []
  timeout:any = null

  /**life hook */
  created(){
    console.log('prop',this.prop)
    console.log('value',this.value)
  }

  /**method */
  // 模糊搜索相关
  querySearchAsync(queryString:string, cb?:any) {
    // var queryData = this.allName;
    // var results = queryString ? queryData.filter(this.createStateFilter(queryString)) : queryData;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      // cb(results);
      const response = await this.$request({
        api:this.prop.api,
        data:{
          querySearchField:this.prop.searchField,
          querySearchValue:this.value,
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