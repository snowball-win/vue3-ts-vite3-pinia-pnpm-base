<template>
    <div class="container">
      <div>onErrorCaptured</div>
      <a-button type="primary" @click="testErrorCaptured()">
        testErrorCaptured
      </a-button>
      <test></test>
    </div>
</template>
  
<script setup lang="ts">
import test from './test.vue'
const testErrorCaptured = ()=>{
  console.log('name')
}
</script>
<style scoped lang="less">
</style>