<!-- src/layouts/default/index.vue -->
<template>
    <el-container>
      <el-container>
        <el-header>
          <el-button @click="toList">列表页</el-button>
          <el-button @click="toDetail">详情页</el-button>
          <el-button @click="clearPinia">恢复KeepAlive</el-button>
        </el-header>
        <el-main>
          <!-- 子路由出口 -->
          <!-- <router-view /> -->
          <router-view v-slot="{ Component }">
            <keep-alive :include="includeArr" :exclude="excludeArr" :max="10">
              <component :is="Component" :key="$route.path" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from "vue-router"
  import { useKeepStore } from '@/views/stores/keepalive'
  const keepStoreData = useKeepStore()

  // 这里需要使用computed，否则清空excludeArr不起作用
  let includeArr = computed(()=>{
    return keepStoreData.includeArr
  })
  // 这里需要使用computed，否则清空excludeArr不起作用
  let excludeArr = computed(()=>{
    return keepStoreData.excludeArr
  })

  const router = useRouter()
  const toList = ()=>{
    keepStoreData.includeArr = []
    router.push({
      path: '/menu/keepalive'
    })
  }
  const toDetail = ()=>{
    keepStoreData.includeArr = []
    router.push({
      path: '/menu/keepalivesnow'
    })
  }
  const clearPinia = ()=>{
    keepStoreData.includeArr = ['keepalive','keepalivesnow']
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