// 引入创建路由管理器 引入创建路由模式 history模式
import { createRouter, createWebHistory } from 'vue-router'
import layout_default from '@/layouts/default/index.vue'
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
    component: ()=>import('../views/indicators/like.vue')
  },
  {
    path: '/layout',
    component: layout_default,
    name: 'layout',
    children: [
      {
        path: 'default',
        component: ()=>import('../views/indicators/default.vue'),
        name: 'default'
      }
    ]
  },
  {
    path: '/auth',
    component: ()=>import('../views/wechat/auth.vue')
  },
]
// 创建路由管理器 模式和路由
const router=createRouter({
  history: createWebHistory(),
  routes
})

export default router