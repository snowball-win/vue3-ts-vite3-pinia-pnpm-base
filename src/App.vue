<template>
  <!-- <router-view></router-view> -->
  <router-view v-slot="{ Component }">
    <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.path" />
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.path" />
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts">
onErrorCaptured(err => {
  console.log('Caught error', err)
  return false
})
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
