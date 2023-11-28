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

    const geometry = new THREE.ConeGeometry(50, 100, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });

    const cone = new THREE.Mesh(geometry, material);
    scene.add(cone);

    camera.position.z = 100;

    const animate = function () {
      requestAnimationFrame(animate);

      cone.rotation.x += 0.01;
      cone.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return { scene, camera, renderer };
  },
});
</script>
