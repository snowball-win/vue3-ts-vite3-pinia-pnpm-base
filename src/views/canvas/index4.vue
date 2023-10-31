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
  // 绘制动画
  var x = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //清除画布
    ctx.beginPath();
    ctx.rect(x, 50, 50, 50); //绘制矩形
    ctx.fill();
    x++;
    console.log(x)
    if(x > 400){
      clearInterval(timer)
    }
  }
  const timer = setInterval(draw, 10); //每10毫秒调用一次draw()函数
})

</script>
<style scoped lang="less">
</style>
