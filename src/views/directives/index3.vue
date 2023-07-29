<template>
  <div class="directives">
    <!-- <input v-focus /> -->
    <el-button v-debounce="debounceClick">debounce-button</el-button>
  </div>
</template>

<script setup lang="ts">
  const debounceClick = () => {
    console.log('1s触发一次')
  }
</script>

<style scoped lang="less">
  input{
    border: 1px solid #000;
  }
</style>
<!-- 全局-自定义指令 -->