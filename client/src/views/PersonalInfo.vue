<template lang="pug">
.view
  img(:src='$store.state.user.avatar')
  p {{$store.state.user.name}}
  p {{$store.state.user.identity === 'manager' ? '管理员' : '普通员工'}}
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {

}
</script>