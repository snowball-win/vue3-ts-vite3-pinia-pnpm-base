<template>
  <div class="contmian">
    <canvas id="myCanvas" width="400" height="400"></canvas>
    <my-tag>哈哈哈</my-tag>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
// 获取Canvas上下文
onMounted(()=>{
  let canvas: any = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  // 绘制一条直线
  ctx.beginPath();
  ctx.moveTo(0, 0); //起点
  ctx.lineTo(200, 200); //终点
  ctx.stroke(); //绘制线条
})

</script>
<style scoped lang="less">
</style>
