import { Vue, Component } from 'vue-property-decorator'
@Component
export class ValidateMixin extends Vue {
  /* data 初始化数据: 数据改为属性的形式 */
  // uuid: string = '123'
  /* method 方法: 方法就不用再写在methods里了，直接以类方法形式书写 */
  // 密码
  pwdRules(rule: any, value: string, callback: any){
    const numReg = /^[0-9]+$/;
    const letterReg = /^[a-zA-Z]+$/;
    if (numReg.test(value)) {
        callback(new Error('密码不能是纯数字'))
    } else if (letterReg.test(value)) {
        callback(new Error('密码不能是纯字母'))
    }
    callback()
  }
  isPwdLong(rule: any, value: string, callback: any){
    if (value.length > 20) {
      callback(new Error('密码太长了'))
    }
    callback()
  }
  pwdConfirm(vm: any, selector: string = 'password'){ // 确认密码功能
    return (rule: any, value: string, callback: any) => {
      if (value !== vm.ruleForm[selector]) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
      
    }
  }
}
