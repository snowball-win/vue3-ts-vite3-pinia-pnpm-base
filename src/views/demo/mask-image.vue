<template>
    <div class="container">
      <span>mask-image</span>
        <div class="video">
            <div class="bullet" style="left: 50px; top: 20px;">我的弹幕1</div>
            <div class="bullet" style="left: 200px; top: 40px;">我的弹幕2</div>
            <div class="bullet" style="left: 400px; top: 60px;">我的弹幕3</div>
            <div class="bullet" style="left: 50px; top: 80px;">我的弹幕4</div>
            <div class="bullet" style="left: 200px; top: 100px;">我的弹幕5</div>
            <div class="bullet" style="left: 400px; top: 120px;">我的弹幕6</div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped lang="less">
  .video {
      width: 668px;
      height: 376px;
      position: relative;
      -webkit-mask-image: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0) 0.0332447%, rgba(0, 0, 0, 0) 0.0332447%), linear-gradient(rgba(0, 0, 0, 0) 99.9668%, rgb(0, 0, 0) 99.9668%, rgb(0, 0, 0)), url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSI2NjhweCIgc3R5bGU9InRyYW5zZm9ybTpzY2FsZSgxLDEuMDAxKTsiIGhlaWdodD0iMzc1Ljc1cHgiIHZpZXdCb3g9IjAgMCAzMjAuMDAwMDAwIDE4MC4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTgwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTAgMTEyNSBsMCAtNjc1IDI4IDAgYzI2IDAgMzAgNSA1MSA3NyAzNSAxMTcgNTcgMTYxIDEwMSAyMDQgbDQwIDQwIDExNyAtMwpjMTA1IC0zIDEzMCAwIDIyMSAyNiAxMTcgMzMgMTE3IDMyIDgwIDEzMSAtMjEgNTUgLTIzIDc2IC0yMyAyNzUgMCAxOTggMiAyMjEKMjQgMjg4IDI3IDg0IDc1IDE3NiAxMDAgMTk0IDIzIDE2IDUxIDcxIDUxIDk4IDAgMjAgLTMgMjAgLTM5NSAyMCBsLTM5NSAwIDAKLTY3NXoiLz4KPHBhdGggZD0iTTEzNDAgMTc4MCBjMCAtMTEgMTYgLTM1IDM2IC01MiA0MiAtMzcgMTA3IC0xMzAgMTMzIC0xOTEgNDggLTExMSA2NCAtMTk3IDY1Ci0zNDIgMCAtMTM1IC0yMiAtMjkwIC01NCAtMzc1IC02IC0xNCAtMTEgLTQ3IC0xMiAtNzMgLTEgLTM4IDMgLTUxIDIwIC02MiA0NAotMzEgNTcgLTk2IDU1IC0yNzIgLTEgLTEzNiAxIC0xNjEgMTMgLTE1NiA4IDMgMTQgMCAxNCAtNyAwIC03IDggLTEwIDE5IC03CjEyIDMgMjEgLTEgMjQgLTEyIDMgLTkgOCAtMjQgMTIgLTMzIDUgLTEzIDAgLTIwIC0yMCAtMjggLTI2IC0xMCAtMjcgLTEzIC0yMQotNjMgMyAtMjggNiAtNjIgNiAtNzUgbDAgLTIyIDc4NSAwIDc4NSAwIDAgODk1IDAgODk1IC05MzAgMCBjLTkyOCAwIC05MzAgMAotOTMwIC0yMHoiLz4KPC9nPgo8L3N2Zz4K");
      -webkit-mask-size: 800px 450px;
      background-color: #ff0000;
    }
    .bullet {
      position: absolute;
      font-size: 20px;
    }
  </style>
  <!-- 哔哩哔哩观看视频，能看到弹幕不会遮挡人物，用户体验非常好 -->
  <!-- 原理：mask-image引入svg图片  -webkit-mask-image: url("mask.svg"); -->
  <!-- CSS 属性 mask 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。 -->
  <!-- 图片怎么来的，推测应该是AI生成的 -->
  <!-- 梳理：AI识别视频内容，不断的生成svg图片给到mask-image，从而实现弹幕不遮挡人物 -->
  <!-- https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-image -->

  