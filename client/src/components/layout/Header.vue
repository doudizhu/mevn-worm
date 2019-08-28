<template lang="pug">
.view
  //- 1.面包屑导航
  //- 2.账户信息
  el-dropdown(trigger="click" @command='handleCommand' style='float:right;')
    span.el-dropdown-link {{$store.state.user.name}}
      i.el-icon-setting(style="margin-left:10px")//- 设置图标
    el-dropdown-menu(slot='dropdown')
      el-dropdown-item(command='personalInfo') 个人信息
      el-dropdown-item(command='logout' divided) 退出登录
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {

  /**method */
  handleCommand(command:any){
    switch(command){
      case 'personalInfo':
        this.showPersonalInfo();
        break;
      case 'logout':
        this.logout();
        break;
    }
  }
  showPersonalInfo(){
    this.$router.push('/personalInfo')
  }
  logout(){
    this.$store.commit('resetAll')
    this.$router.push('/login')
  }
}
</script>

<style lang='stylus' scoped>
.view
  height 40px
  line-height 40px
  padding-right 20px
  background-color #fafafa

  position sticky
  top 0
  z-index 999

  // 清除浮动 clear float
  // &:after
  //   clear:both;
  //   display:block;
  //   content:'clear';
  //   line-height:0;
  //   visibility:hidden

  .el-dropdown-link
    cursor pointer
    &:hover
      color #409EFF
</style>