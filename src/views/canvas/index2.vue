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
  // 绘制一个圆形
  ctx.beginPath();
  ctx.arc(200, 200, 100, 0, 2*Math.PI); //中心点x轴坐标，中心点y轴坐标，半径，起始角度，终止角度
  ctx.stroke(); //绘制圆形
})

</script>
<style scoped lang="less">
</style>
