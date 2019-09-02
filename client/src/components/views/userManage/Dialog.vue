<template lang="pug">
.view
  //- 弹窗
  el-dialog(:title="prop.title" :visible.sync="visible")
    el-form(@submit.prevent='onSubmit' label-width="120px"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      @keyup.enter.native="submitForm('ruleForm')"
    )
      el-form-item(prop="name" label='用户名')
        el-input(v-model='ruleForm.name' autofocus placeholder='长度在2到30个字符之间')
      el-form-item(prop="email" label='邮箱')
        el-input(v-model='ruleForm.email' type='email')
      el-form-item(prop="password" label='密码')
        el-input(v-model='ruleForm.password' type="password" placeholder='6~20位字母、数字或英文符号组合，区分大小写')
      el-form-item(prop="passwordConfirm" label='确认密码')
        el-input(v-model='ruleForm.passwordConfirm' type="password" placeholder='6~20位字母、数字或英文符号组合，区分大小写')
      el-form-item(prop="identity" label='身份')
        el-select(v-model='ruleForm.identity' @change='changeSelect')
          el-option(
            v-for="option in optionIdentity" 
            :label="option.role"
            :value="option.key"
            :key="option.key"
          )  
      el-form-item
        el-button(@click="submitForm('ruleForm')" type='primary') 确认
</template>

<script lang="ts">
import {Component,Vue,Prop, Mixins} from 'vue-property-decorator'
import {ValidateMixin} from '@/assets/mixin'
@Component({
  components:{}
})
export default class ViewComponent extends Mixins(ValidateMixin) {
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
  changeSelect(){
    console.log('this.ruleForm.identity:',this.ruleForm.identity)
  }

  /* data */
  ruleForm = {
    name:'',
    email:'',
    password:'',
    passwordConfirm:'',
    identity:'',
  }
  rules = {
    name:[
      {message:'不能为空',trigger:'blur',required: true,},
      {message:'长度在2到30个字符之间',min:2,max:30,trigger:'blur'}
    ],
    email:[
      {message:'不能为空',trigger:'blur',required: true,},
      {message:'邮箱格式不正确',type:'email',trigger:'blur',required:true}
    ],
    password : [
      {message: '不能为空',trigger: 'blur',required: true,},
      {validator: this.isPwdLong, trigger: 'blur'},
      {validator: this.pwdRules, trigger: 'blur'},
      {message: '请填写正确的密码',pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, trigger: 'blur'},
    ],
    passwordConfirm: [
      {message:'不能为空',trigger:'blur',required: true,},
      {validator: this.pwdConfirm(this), trigger: 'blur'},
    ],
    identity:{message:'不能为空',trigger:'blur',required: true,},
  }
  // 辅助静态展示信息
  optionIdentity = [
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
  created(){
    if(this.prop.method === 'patch'){
      console.log('this.prop.ruleForm',this.prop.ruleForm)
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