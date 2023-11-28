<template>
    <div></div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  
  export default defineComponent({
    mounted() {
      // 创建场景
      const scene = new THREE.Scene();

      const url = "../../../public/3d/chair.glb";
  
      // 创建相机
      const camera = new THREE.PerspectiveCamera(
        135,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      // 添加环境光
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
  
      // 创建渲染器
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // 加载 glb 格式的 3D 模型
      const loader = new GLTFLoader();
      loader.load(
        url,
        (gltf) => {
          // 加载成功后的回调函数
          const model = gltf.scene;
          model.scale.set(0.8, 0.8, 0.8); // 缩小模型
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center); // 将模型位置移到原点处
          scene.add(model);
        },
        (xhr) => {
          // 加载过程中的回调函数
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          // 加载失败的回调函数
          console.error("Failed to load model", error);
        }
      );
  
      // 渲染场景
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
  
      animate();
    },
  });
  </script>
    <style>
        body {
            margin: 0;
            overflow: hidden;
        }
    </style>