<template lang="pug">
el-form(@submit.prevent='onSubmit'
  :model="ruleForm"
  ref="ruleForm"
)
  el-table(
    :data='prop.tableData'
    border
  )
    el-table-column(
      type='index'
      label='序号'
      width='50'
      align='center'
    )
    el-table-column(
      prop='name'
      label='用户名'
      align='center'
    )
      template(slot-scope='scope')
        el-form-item(v-if='scope.row.edit'
          label=''
          :prop="'tableData.'+scope.$index+'.name'"
          :rules=`[
            {message:'不能为空',trigger:'blur',required: true,},
            {message:'长度在2到30个字符之间',min:2,max:30,trigger:'blur'}
          ]`
        )
          el-input(
            v-model='scope.row.name' placeholder='长度在2到30个字符之间'
          )
        span(v-else) {{scope.row.name}}
    el-table-column(
      prop='email'
      label='邮箱'
      align='center'
    )
      template(slot-scope='scope')
        el-form-item(v-if='scope.row.edit'
          label=''
          :prop="'tableData.'+scope.$index+'.email'"
          :rules=`[
            {message:'不能为空',trigger:'blur',required: true,},
            {message:'邮箱格式不正确',type:'email',trigger:'blur',required:true}
          ]`
        )
          el-input(
            v-model='scope.row.email' placeholder='正确格式的邮箱'
          )
        span(v-else) {{scope.row.email}}
    el-table-column(
      prop='role'
      label='身份'
      align='center'
    )
      template(slot-scope='scope')
        el-form-item(v-if='scope.row.edit'
          label=''
          :prop="'tableData.'+scope.$index+'.role'"
          :rules=`{message:'不能为空',trigger:'blur',required: true,}`
        )
          el-select(v-if='scope.row.edit'
            v-model='scope.row.role'
            @change='changeSelect(scope.row)'
          )
            el-option(
              v-for="option in optionRole" 
              :label="option.role"
              :value="option.key"
              :key="option.key"
            ) 
        span(v-else) {{getRoleObj(scope.row.role).role}}
    el-table-column(prop='des' label='描述' width='180')
    el-table-column(
      prop='avatar'
      label='头像'
      align='center'
    )
    el-table-column(
      prop='date'
      label='注册时间'
      align='center'
    )
    el-table-column(label='操作' align='center' fixed='right' width='180')
      template(slot-scope='scope')
        el-button(v-if='!scope.row.edit' @click='handleEditInline(scope.$index, scope.row)' size='small' type='warning' icon='edit') 编辑
        el-button(v-else @click='handleEditInlineSave(scope.$index,scope.row)' type='success' size='mini') 保存
        el-button(@click='handleDelete(scope.$index, scope.row)' size='small' type='danger' icon='delete') 删除
</template>

<script lang="ts">
import {Component,Vue,Prop} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /* prop */
  @Prop() prop!: any; // 父组件传值
  /**data */
  ruleForm = {}

  /**lifecycle hook */
  created(){
    this.ruleForm = this.prop
  }

  /**data */
  // 辅助静态展示信息
  optionRole = [
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

  /* method */
  handleDelete(index:number,row:any){
    this.emit({ // 发射子组件参数
      /* 请求返回的数据 */
      // data:{},
      /* 其他控制字段 */
      method:'delete',
      index,
      id:row._id,
    })
  }
  handleEdit(index:number,row:any){
    this.emit({ // 发射子组件参数
      /* 请求返回的数据 */
      /* 其他控制字段 */
      method:'patch',
      title: '编辑',
      index,
      ruleForm:row,
    })
  }
  handleEditInline(index:number,row:any){
    // 编辑
    row.edit = true
  }
  changeSelect(row:any){
    row.des = (this.getRoleObj(row.role) as any).des
  }
  getRoleObj(role:string){
    let roleObj = {}
    this.optionRole.some((item:any)=>{
      if(item.key == role){
        roleObj = item;
        return true;
      }
    })
    return roleObj
  }
  handleEditInlineSave(index:number,row:any){
    (this.$refs['ruleForm'] as any).validate((valid: boolean) => {
      if (valid) {
        row.edit = false
        this.emit({ // 发射子组件参数
          /* 请求返回的数据 */
          data: row,
          /* 其他控制字段 */
          method:'patch',
          mode:'editInline'
        })
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