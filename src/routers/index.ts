// 引入创建路由管理器 引入创建路由模式 history模式
import { createRouter, createWebHistory } from 'vue-router'
// 引入路由各页面配置
const routes=[
  {
    path: '/',
    redirect: '/like'
  },
  {
    path: '/index',
    redirect: '/like'
  },
  {
    path: '/like',
    component: ()=>import('../views/like.vue')
  }
]
// 创建路由管理器 模式和路由
const router=createRouter({
  history: createWebHistory(),
  routes
})

export default router