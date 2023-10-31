<template>
  <div class="contmian">
    <h1>Canvas实现刮刮乐效果</h1>
	<p>刮奖面板：</p>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
// 获取Canvas上下文
let ctx:any = {}
let canvas:any = {}
let isDrawing = false;
let img:any;
onMounted(()=>{
  	canvas = document.getElementById("canvas");
  	canvas.addEventListener('mousedown', startDrawing);
	canvas.addEventListener('mousemove', draw);
	canvas.addEventListener('mouseup', stopDrawing);
	canvas.addEventListener('mouseleave', stopDrawing);
  	ctx = canvas.getContext("2d");
	init();
})

		const init = () => {
			canvas.width = 400;
			canvas.height = 200;

			ctx.fillStyle = '#ddd';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.font = 'bold 30px Arial';
			ctx.fillStyle = '#f00';
			ctx.fillText('刮一刮', 120, 100);

			img = new Image();
			img.onload = function() {
				ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
			};
			img.src = 'image.jpg';
		}

		const startDrawing = () => {
			isDrawing = true;
		}

		const stopDrawing = () => {
			isDrawing = false;
		}

		const draw = (e) => {
			if (!isDrawing) return;

			var x = e.offsetX;
			var y = e.offsetY;

			ctx.globalCompositeOperation = 'destination-out';
			ctx.beginPath();
			ctx.arc(x, y, 20, 0, Math.PI * 2, false);
			ctx.fill();
		}

</script>
<style scoped lang="less">
canvas {
  border: 1px solid black;
}
</style>
