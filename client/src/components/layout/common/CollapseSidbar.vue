<template lang="pug">
//- 2.账户信息下拉菜单
el-radio-group(v-model="isCollapse")
  el-radio-button(:label="false") 展开
  el-radio-button(:label="true" ) 收起
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
</style>