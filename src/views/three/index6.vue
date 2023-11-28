<template>
  <div ref="container"></div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref } from 'vue';
import * as THREE from 'three';

// export default defineComponent({
  // setup() {
    const container:any = ref(null);

    onMounted(() => {
      // 创建渲染器
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      // 将渲染器添加到DOM中
      if(container.value) {
        container.value.appendChild(renderer.domElement);
      }

      // 创建场景
      const scene = new THREE.Scene();

      // 创建相机
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // 添加环境光
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // 添加点光源
      const pointLight = new THREE.PointLight(0xffffff, 1, 100);
      pointLight.position.set(0, 0, 5);
      scene.add(pointLight);

      // 创建红色球体
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshPhongMaterial({ color: 0xff0000, shininess: 100 });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      // 渲染场景
      const render = () => {
        requestAnimationFrame(render);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      render();
    });

  //   return {
  //     container
  //   }
  // }
// });
</script>
