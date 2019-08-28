<template lang="pug">
.view
  //- 表单模块
  Form(
    @emit='emitForm'
  )  
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {Form} from '@/components/views/login/index.ts'
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
      api:'/user/login',
      data,
      method:'post'
    })
  }
  // 执行方法
  async request(conf:any){
    const response = await this.$request(conf)
    if(response.status >= 200 && response.status < 300){
      this.$message({
        message:'登录成功',
        type: 'success'
      })
      if(response.data.success === true){
        this.$store.commit('setEleToken',response.data.token)
      }
      this.$router.push ('/')
    }else{
      // * 待优化：处理错误返回结果
    }
  }
}
</script>

