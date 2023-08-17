<template>
  <div class="container">
    <!-- 水平、垂直 居中 -->
    <!-- <div class="flex">
      <div class="flex_item"></div>
    </div> -->

    <div class="flex">
      <div class="flex_item">1</div>
      <div class="flex_item">2</div>
      <div class="flex_item">3</div>
      <div class="flex_item">4</div>
      <div class="flex_item">5</div>
      <div class="flex_item">6</div>
      <div class="flex_item">7</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.container{
  // .flex{
  //   display: flex;
  //   justify-content: center; // 水平居中
  //   align-items: center; // 垂直居中
  //   width: 200px;
  //   height: 200px;
  //   background: #ff0000;
  //   &_item{
  //     width: 50px;
  //     height: 50px;
  //     background: #b3de1b;
  //   }
  // }
  .flex{
    display: flex;
    width: 200px;
    height: 200px;
    background: #ff0000;
    &_item{
      width: 50px;
      height: 50px;
      background: #b3de1b;
      flex-shrink: 0; // 表示Flex项目在空间不足时的缩小比例。flex-shrink的默认值为1，数值越大，缩小比例越多，设置为 0 不缩放 。
    }
  }
}
</style>
