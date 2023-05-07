<template>
    <div class="directives">
        <input v-focus />
    </div>
  </template>
  
  <script lang="ts">
    export default{
      setup() {},
      directives: {
        // 指令名
        focus: {
          // 生命周期
          mounted(el) {
            // 处理DOM的逻辑
            el.focus()
          },
        }
      }
    }
  </script>
  
  <style scoped lang="less">
  input{
    border: 1px solid #000;
  }
  </style>
  <!-- options-api-自定义指令 -->