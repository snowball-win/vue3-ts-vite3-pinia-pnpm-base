<template>
  <div class="contmian">
    <div>
      微信网页授权
    </div>
  </div>
</template>
<script setup lang="ts">
// 微信网页授权
// 判断是否是微信环境
const isWechat = ()=> {
    return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === "micromessenger";
}
console.log('26isWechat', isWechat())

</script>
<style scoped lang="less">
</style>
