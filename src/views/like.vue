<script setup lang="ts">
  import { getUser } from "../api/m-staff-center";
  const s = getUser({
    text: "snow",
  });
  console.log('777', s);
</script>

<template>
  <h1>title</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
