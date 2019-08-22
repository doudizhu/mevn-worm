<template lang="pug">
.view
  //- 弹窗
  el-dialog(:title="prop.title" :visible.sync="visible")
    el-form(
      @submit.prevent='onSubmit'
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
    )
      el-form-item( 
        label='规则名称'
        prop='name'
      )
        el-input(v-model='ruleForm.name')
      el-form-item( 
        label='官网地址'
        prop='src_url'
      )
        el-input(v-model='ruleForm.src_url')
      el-form-item( 
        label='联系方式'
        prop='contact_way'
      )
        el-input(v-model='ruleForm.contact_way')
      el-form-item( 
        label='微信公众号'
        prop='wechat'
      )
        el-input(v-model='ruleForm.wechat')
      el-form-item( 
        label='脸书'
        prop='facebook'
      )
        el-input(v-model='ruleForm.facebook')
      el-form-item
        el-button(@click="submitForm('ruleForm')" type='primary' round) 确认
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class MyComponent extends Vue {
  /* prop */
  @Prop() prop!: any; // 父组件传值
  @Prop() isShow!: boolean; // 展示参数
  /* computed 计算属性: 计算属性改为前面加get关键字 */
  get visible() { // 展示参数控制方法
    return this.isShow;
  }
  set visible(val) {
    this.$emit('update:isShow', val);
  }
  
  /* data */
  ruleForm: any = {
    id: '', // 非必传
    name: '',
    src_url: '',
    contact_way: '',
    wechat: '',
    facebook: '',
  }
  rules: {} = {
    name: {required:true,trigger:'blur',message: '请输入'},
    src_url: {required:true,trigger:'blur',message: '请输入'},
    contact_way: {required:true,trigger:'blur',message: '请输入'},
    wechat: {required:true,trigger:'blur',message: '请输入'},
    facebook: {required:true,trigger:'blur',message: '请输入'},
  }

  /* lifecycle hook */
  created(){
    if(this.prop.method === 'patch'){
      this.ruleForm = this.prop.ruleForm
    }
  }

  /* method */
  submitForm(formName: string) { // 表单提交校验
    (this.$refs[formName] as any).validate((valid: boolean) => {
      if (valid) {
        this.emit({
          /* 请求返回的数据 */
          data: this.ruleForm,
          /* 其他控制字段 */
          method: this.prop.method,
        })
        this.visible = false
      }
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

<style lang="stylus" scoped>
.view
  .debugBtn
    position fixed
    bottom 0
    right 0
</style>