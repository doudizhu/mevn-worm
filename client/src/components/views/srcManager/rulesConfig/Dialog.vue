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
      el-form-item(prop='name' label='规则名称')
        el-input(v-model='ruleForm.name')
      el-form-item(prop='source_info' label='所属源站')
        el-input(v-model='ruleForm.source_info' placeholder="模糊搜索")
      el-form-item(label='采集类别' prop='category')
        el-input(v-model='ruleForm.category')
      el-form-item(label='层级' prop='is_two_layers')
        el-input(v-model='ruleForm.is_two_layers')

      el-form-item(label='页面类型' prop='page_type')
        el-radio(v-model='ruleForm.page_type' label='0') 静态
        el-radio(v-model='ruleForm.page_type' label='1') 动态
        el-radio(v-model='ruleForm.page_type' label='2') api
      //- 非api展示该项
      el-form-item(prop='src_url' label='采集地址(仅在非api请求下):' v-if='ruleForm.page_type !== "2"') 
        el-input(v-model='ruleForm.src_url')
      el-form-item(prop='restrict_xpath' label='限制区域:') 
        el-input(v-model='ruleForm.restrict_xpath')
      el-form-item(prop='allow' label='允许的正则链接:') 
        el-input(v-model='ruleForm.allow')
      el-form-item(prop='title_xpath' label='标题位置:') 
        el-input(v-model='ruleForm.title_xpath')
      el-form-item(prop='content_xpath' label='内容位置:') 
        el-input(v-model='ruleForm.content_xpath')

      el-form-item(prop='api_url' label='接口地址:') 
        el-input(v-model='ruleForm.api_url')
      el-form-item(prop='remarks' label='备注:')
        el-input(v-model='ruleForm.remarks' type='textarea')
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
    source_info: '',
    category: '',
    is_two_layers: '',

    page_type: '',
    src_url: '',
    restrict_xpath: '',
    allow: '',
    title_xpath: '',
    content_xpath: '',

    api_url: '',
    remarks: '',
  }
  rules: {} = {
    name: {required:true,message: '请输入',trigger:'blur'},
    source_info: {required:true,message:'不能为空',trigger:'blur'},
    category:{required:true,message:'不能为空',trigger:'blur'},
    is_two_layers:{required:true,message:'不能为空',trigger:'blur'},

    page_type:{required:true,message:'不能为空',trigger:'blur'},
    src_url: {required:true,trigger:'blur',message: '请输入'},
    restrict_xpath: {required:true,trigger:'blur',message: '请输入'},
    allow: {required:true,trigger:'blur',message: '请输入'},
    title_xpath: {required:true,trigger:'blur',message: '请输入'},
    content_xpath: {required:true,trigger:'blur',message: '请输入'},

    api_url: {required:true,trigger:'blur',message: '请输入'},
    // remarks: {required:true,trigger:'blur',message: '请输入'},
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