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

@Component
export class FormatMixin extends Vue {
  /* data 初始化数据: 数据改为属性的形式 */
  // uuid: string = '123'
  /* method 方法: 方法就不用再写在methods里了，直接以类方法形式书写 */
  // 密码
  getDateTime(timeStr:string){
    const self = new Date(timeStr);
    let format = "yyyy-MM-dd hh:mm:ss";

    /*
    * eg:format="yyyy-MM-dd hh:mm:ss";
    */  
   let o:any = {  
       "M+" : self.getMonth() + 1, // month  
       "d+" : self.getDate(), // day  
       "h+" : self.getHours(), // hour  
       "m+" : self.getMinutes(), // minute  
       "s+" : self.getSeconds(), // second  
       "q+" : Math.floor((self.getMonth() + 3) / 3), // quarter  
       "S" : self.getMilliseconds()  
       // millisecond  
   }  
   if (/(y+)/.test(format)) {  
       format = format.replace(RegExp.$1, (self.getFullYear() + "").substr(4  
                       - RegExp.$1.length));  
   }  
   for (var k in o) {  
       if (new RegExp("(" + k + ")").test(format)) {  
           format = format.replace(RegExp.$1, RegExp.$1.length == 1  
                           ? o[k]  
                           : ("00" + o[k]).substr(("" + o[k]).length));  
       }  
   }  
   return format; 
  }
}
