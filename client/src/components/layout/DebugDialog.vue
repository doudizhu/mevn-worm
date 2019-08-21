<template lang="pug">
.view
  //- 调试弹窗
  el-dialog(title="域名配置" :visible.sync="visible")
    el-form(
      @submit.prevent='onSubmit'
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
    )
      //- api域名配置
      el-form-item( 
        label='api域名配置'
        prop='domainApi'
      )
        el-input(v-model='$store.state.domainApi' placeholder='domainApi')  
      el-button(@click="submitForm('ruleForm')" type='primary' round) 确认
  //- 打开调试弹窗按钮toggle
  a(@click='visible = !visible').debugBtn 调试
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class MyComponent extends Vue {
  /* data */
  visible = false
  ruleForm: any = {
    // domainApi: this.$store.state.domainApi,
  }
  rules: {} = {
    // domainApi: {
    //   required: true, 
    //   trigger: 'blur', 
    //   message: '请输入'
    // },
  }

  /* lifecycle hook */
  created(){

  }

  /* method */
  submitForm(formName: string) { // 表单提交校验
    (this.$refs[formName] as any).validate((valid: boolean) => {
      if (valid) {
        this.visible = false
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.view
  .debugBtn
    position fixed
    bottom 0
    right 0
</style>