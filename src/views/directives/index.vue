<template>
  <div class="directives">
    <input v-focus />
  </div>
</template>

<script setup lang="ts">
  const vFocus = {
    mounted: (el: any) => el.focus()
  }
</script>

<style scoped lang="less">
  input{
    border: 1px solid #000;
  }
</style>
<!-- 组合式api-自定义指令 -->