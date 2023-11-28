<template>
    <div ref="container"></div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import * as THREE from 'three';
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  const container:any = ref(null);
  const url = "../../../public/3d/chair.glb";

    onMounted(() => {
        const loader: any = new GLTFLoader();
        
        // 创建场景
        const scene: any = new THREE.Scene();

        // glb 模型文件路径

        loader.load(
        url,
        (gltf: any) => {
            // 成功加载模型后执行的操作
            const model = gltf.scene;
            // 将模型添加到场景中
            scene.add(model);
        },
        (xhr: any) => {
            // 模型加载过程中执行的操作
            console.log(`30${(xhr.loaded / xhr.total) * 100}% 已加载`);
        },
        (error: any) => {
            // 模型加载失败执行的操作
            console.error(`34模型加载失败：${error}`);
        }
        );

    });
  
  </script>
  