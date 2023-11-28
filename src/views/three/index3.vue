<template>
  <div id="app"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as THREE from 'three';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('app')?.appendChild(renderer.domElement);

    const geometry = new THREE.CircleGeometry(50, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });

    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);

    camera.position.z = 100;

    const animate = function () {
      requestAnimationFrame(animate);

      circle.rotation.x += 0.01;
      circle.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return { scene, camera, renderer };
  },
});
</script>
