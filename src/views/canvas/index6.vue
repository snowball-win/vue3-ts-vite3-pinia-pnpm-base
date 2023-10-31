<template>
  <div class="contmian">
    <h1>修改图片色调、饱和度、亮度</h1>
    <p>请选择图片文件：</p>
    <input type="file" accept="image/*" @change="loadImage">
    <h2>修改颜色</h2>
    <p>
      <label for="hue">色调：</label>
      <input type="range" id="hue" min="0" max="360" value="0" @change="updateColor()">
    </p>
    <p>
      <label for="saturation">饱和度：</label>
      <input type="range" id="saturation" min="0" max="2" step="0.01" value="1" @change="updateColor()">
    </p>
    <p>
      <label for="lightness">亮度：</label>
      <input type="range" id="lightness" min="0" max="2" step="0.01" value="1" @change="updateColor()">
    </p>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
// 获取Canvas上下文
let ctx:any = {}
let canvas:any = {}
onMounted(()=>{
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
})

let img:any;

const loadImage = (e: any) => {
  console.log('35', e)
  let reader = new FileReader();
    reader.onload = function(event: any) {
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

  const updateColor = () => {
    let hue = document.getElementById('hue').value;
    let saturation = document.getElementById('saturation').value;
    let lightness = document.getElementById('lightness').value;

    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      let hsl = rgbToHsl(data[i], data[i+1], data[i+2]);

      hsl[0] = (hsl[0] + hue) % 360;
      hsl[1] = hsl[1] * saturation;
      hsl[2] = hsl[2] * lightness;

      let rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);

      data[i] = rgb[0];
      data[i+1] = rgb[1];
      data[i+2] = rgb[2];
    }

    ctx.putImageData(imageData, 0, 0);
  }

  // RGB转HSL
  const rgbToHsl = (r: any, g: any, b: any) => {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h: any, s: any, l = (max + min) / 2;
    if(max == min){
      h = s = 0;
    }else{
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [h * 360, s, l];
  }

  // HSL转RGB
  const hslToRgb = (h:any, s:any, l: any) => {
    let r:any, g:any, b:any;
    if(s == 0){
      r = g = b = l;
    }else{
      function hue2rgb(p:any, q:any, t:any){
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }
      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return [r * 255, g * 255, b * 255];
  }

</script>
<style scoped lang="less">
</style>
