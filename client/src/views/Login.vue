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
import jwt_decode from 'jwt-decode'
import {isEmpty} from '@/utils'
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
      api:'user/login',
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
      // token
      if(response.data.success === true){
        const {token} = response.data
        // 存储token
        this.$store.commit('setEleToken',token)

        // 解析token
        const decoded = jwt_decode(token)
        // token存储到vuex中
        this.$store.dispatch('setAuthenticated',!isEmpty(decoded))
        this.$store.dispatch('setUser',decoded)
      }
      

      const redirect = this.$route.query.redirect as string
      if (redirect) { // 重定向
        this.$router.replace(redirect) 
      } else {
        this.$router.push ('/')
      }
    }else{
      // * 待优化：处理错误返回结果
    }
  }
}
</script>

