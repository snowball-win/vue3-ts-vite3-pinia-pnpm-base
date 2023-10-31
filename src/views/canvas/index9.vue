<template>
  <div class="contmian">
    <div id="myDiv">
	<h1>Hello, World!</h1>
	<p>This is a demo for HTML to canvas conversion.</p>
  </div>

<button @click="convertToCanvas()">Convert to Canvas</button>

<canvas id="myCanvas"></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
// 获取Canvas上下文
let ctx:any = {}
let canvas:any = {}
var div = {}
onMounted(()=>{
  div = document.getElementById('myDiv');
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
})

const convertToCanvas = () => {

  // 设置canvas大小与原div大小一致
  canvas.width = div.offsetWidth;
  canvas.height = div.offsetHeight;

  // 将div内容绘制到canvas上
  ctx.drawImage(window, div.offsetLeft, div.offsetTop, div.offsetWidth, div.offsetHeight, "rgb(255,255,255)");

  // 将canvas图像转为base64编码的图片数据
  let imgData = canvas.toDataURL();

  // 创建一个新的image元素，并将图片插入到页面上
  let img = document.createElement('img');
  img.src = imgData;
  document.body.appendChild(img);
}


</script>
<style scoped lang="less">
canvas {
  border: 1px solid black;
}
</style>
