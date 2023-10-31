<template>
  <div class="contmian">
    <h1>Canvas通过点击事件修改图片中点中区域元素内容颜色</h1>
    <p>请选择图片文件：</p>
    <input type="file" accept="image/*" @change="loadImage">
    <h2>修改颜色</h2>
    <p>
      <label for="color">颜色：</label>
      <input type="color" id="color" value="#ff0000">
    </p>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
// 获取Canvas上下文
let ctx:any = {}
let canvas:any = {}
let color:any = {}
onMounted(()=>{
  canvas = document.getElementById("canvas");
	canvas.addEventListener('click', updateColor);
  ctx = canvas.getContext("2d");
  color = document.getElementById('color').value;
})

let img:any;

    const loadImage = (e: any) => {
			var reader = new FileReader();
			reader.onload = function(event) {
				img = new Image();
				img.onload = function() {
					canvas.width = img.width;
					canvas.height = img.height;
					ctx.drawImage(img, 0, 0);
				};
				img.src = event.target.result;
			};
			reader.readAsDataURL(e.target.files[0]);
		}

		const updateColor = (e) => {
			var x = e.offsetX;
			var y = e.offsetY;

			var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			var data = imageData.data;
			var index = (x + y * imageData.width) * 4;

			data[index] = parseInt(color.substr(1, 2), 16);
			data[index + 1] = parseInt(color.substr(3, 2), 16);
			data[index + 2] = parseInt(color.substr(5, 2), 16);

			ctx.putImageData(imageData, 0, 0);
		}


</script>
<style scoped lang="less">
canvas {
  border: 1px solid black;
}
</style>
