<!-- src/layouts/default/index.vue -->
<template>
    <el-container>
      <el-container>
        <el-header>
          <el-button @click="tomenu1">menu1</el-button>
          <el-button @click="tomenu2">menu2</el-button>
        </el-header>
        <el-main>
          <!-- 子路由出口 -->
          <!-- <router-view /> -->
          <router-view v-slot="{ Component }">
            <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.path" />
            <keep-alive>
              <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.path" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from "vue-router"
  const router = useRouter()
  const tomenu1 = ()=>{
    router.push({
      path: '/menu/keepalive'
    })
  }
  const tomenu2 = ()=>{
    console.log('28')
    router.push({
      path: '/menu/keepalivesnow'
    })
  }

  </script>
  
  <style scoped lang="less">
  .el-container {
    height: 100vh;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #ff0000;
  }
  .el-main {
    background-color: #E9EEF3;
  }
  </style>