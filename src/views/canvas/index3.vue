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
  // 绘制图像
  var img = new Image();
  img.src = "../../../public/docker.png";
  img.onload = function() {
    ctx.drawImage(img, 50, 50, 200, 200); //绘制图像，x轴坐标，y轴坐标，宽度，高度
  }
})

</script>
<style scoped lang="less">
</style>
