<template lang="pug">
.view
  .aside aside
  .container
    .header header
    .main
      router-view
</template>

<style lang="stylus" scoped>
.view
  display:flex;
  &>.container
    flex 1
</style>
