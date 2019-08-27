<template lang="pug">
.view
  //- 表单模块
  Form(
    @emit='emitForm'
  )  
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {Form} from '@/components/views/register/index.ts'
@Component({
  components:{Form,}
})
export default class ViewComponent extends Vue {
  /* data */
  //- 表单模块


  /* method */
  // 监听
  // 监听:表单模块
  emitForm(response:any){
    // 点击“注册”按钮
    const data = response.data
    this.request({
      api:'/user/register',
      data,
      method:'post'
    })
  }
  // 执行方法
  async request(conf:any){
    const response = await this.$request(conf)
    console.log('response',response)
    if(response.status >= 200 && response.status < 300){
      this.$message({
        message:'注册成功',
        type: 'success'
      })
      this.$router.push('/login')
    }else{
      // * 待优化：处理错误返回结果
    }
  }
}
</script>

