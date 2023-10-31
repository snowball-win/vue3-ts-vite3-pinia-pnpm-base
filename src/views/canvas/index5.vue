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
  // 设置canvas宽度和高度
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 定义流星雨粒子对象
  function Particle (x, y, vx, vy, size, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.color = color;
  }

  // 定义流星雨数组
  let particles = [];

  // 创建流星雨粒子函数
  const createParticle = () => {
    let x = Math.random() * canvas.width; // 随机横坐标
    let y = Math.random() * canvas.height; // 随机纵坐标
    let vx = -(Math.random() * 2 + 3); // x方向速度
    let vy = Math.random() * 2 + 2; // y方向速度
    let size = Math.random() * 3 + 1; // 大小
    let color = "#ff0000"; // 颜色
    particles.push(new Particle(x, y, vx, vy, size, color));
  }

  // 绘制流星雨
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空canvas
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -p.size || p.y > canvas.height + p.size) {
        // 如果粒子出了画布则删除
        particles.splice(i, 1);
        i--;
      }
    }
    requestAnimationFrame(draw);
  }

  // 创建流星雨粒子
  setInterval(createParticle, 50);

  // 开始绘制流星雨
  draw();
})

</script>
<style scoped lang="less">
</style>
