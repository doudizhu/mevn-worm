<template lang="pug">
.view
  el-form(@submit.prevent='onSubmit' label-width="135px"
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
    el-form-item(prop="identity" label='选择身份')
      el-select(v-model='ruleForm.identity' placeholder='请选择身份')
        el-option(label='管理员' value='manager')
        el-option(label='员工' value='employee')
    el-form-item
      el-button(@click="submitForm('ruleForm')" type='primary') 注册
</template>

<script lang="ts">
import {Component,Vue,Prop, Mixins} from 'vue-property-decorator'
import {ValidateMixin} from '@/assets/mixin'
@Component({
  components:{}
})
export default class ViewComponent extends Mixins(ValidateMixin) {
  /* prop */
  // @Prop() prop!: any; // 父组件传值

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

  /* lifecycle hook */
  // created(){}

  /* method */
  submitForm(formName: string) { // 表单提交校验
    (this.$refs[formName] as any).validate(
      (valid: boolean) => {
        if (valid) {
          this.executeEmit()
        }
      }
    )
  }
  executeEmit(conf:object={}) {
    // this.$emit('update:prop',{});
    this.emit({ // 发射子组件响应参数 
      /* 请求返回的数据 */
      data:{
        name: this.ruleForm.name,
        email: this.ruleForm.email,
        password: this.ruleForm.password,
        identity: this.ruleForm.identity,
      }
      /* 其他控制字段 */
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

<style lang='stylus' scoped>
  .el-form{
		padding:40px 135px 18px 0;
		border:1px solid #eee;
		max-width: 500px;
		margin:120px auto 0;
	}
	.el-form .el-button{
		width: 100%
	}
</style>