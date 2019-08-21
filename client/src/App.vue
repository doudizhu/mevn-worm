<template lang='pug'>
div
  router-view
  DebugDialog
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {DebugDialog} from '@/components/layout/index.ts'
@Component({
  components:{
    DebugDialog
  }
})
export default class ViewComponent extends Vue {
  
}
</script>