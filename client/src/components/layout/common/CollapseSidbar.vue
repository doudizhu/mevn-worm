// <template lang="pug">
// //- 2.账户信息下拉菜单
// el-radio-group(v-model="isCollapse")
//   el-radio-button(:label="false") 展开
//   el-radio-button(:label="true" ) 收起
// </template>

<template>
  <div class="hamburger-container" @click="isCollapse=!isCollapse">
    <svg t="1492500959545" class="hamburger" :class="{'is-active':isCollapse}" style="" viewBox="0 0 1024 1024"
      version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1691" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64">
      <path d="M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z"
        p-id="1692"></path>
      <path d="M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z"
        p-id="1693"></path>
      <path d="M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z"
        p-id="1694"></path>
    </svg>
  </div>
</template>

<script lang="ts">
import {Component,Vue,Watch} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /**data */
  isCollapse = true
  @Watch('isCollapse',{immediate: true}) onNameChange(val: string, oldVal: string) { 
    this.$store.commit('setIsCollapseSidebar',val)
  };
}
</script>

<style lang='stylus' scoped>
.hamburger-container{
  line-height: 56px;
  height: 100%;
  float: left;
  cursor: pointer;
  -webkit-transition: background .3s;
  transition: background .3s;
  -webkit-tap-highlight-color: transparent;
  padding 0 20px
  &:hover{
    background: rgba(0,0,0,.025);
    &>svg{
      fill #409eff
    }
  }
}
.hamburger {
	display: inline-block;
	cursor: pointer;
	width: 20px;
	height: 20px;
	transform: rotate(90deg);
	transition: .38s;
	transform-origin: 50% 50%;
  vertical-align sub
}

.hamburger.is-active {
	transform: rotate(0deg);
}
</style>