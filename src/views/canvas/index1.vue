<template>
  <div class="contmian">
    <canvas id="myCanvas" width="400" height="400"></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
// 获取Canvas上下文
onMounted(()=>{
  let canvas: any = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  // 绘制一个矩形
  ctx.beginPath();
  ctx.rect(50, 50, 100, 100); //x轴坐标，y轴坐标，宽度，高度
  ctx.fill(); //填充矩形
})

</script>
<style scoped lang="less">
</style>
