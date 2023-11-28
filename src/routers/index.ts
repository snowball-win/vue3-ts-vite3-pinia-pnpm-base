// 引入创建路由管理器 引入创建路由模式 history模式
import { createRouter, createWebHistory } from 'vue-router'
import layout_default from '@/layouts/default/index.vue'
import layout_menu from '@/layouts/menu/index.vue'
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
  {
    path: '/bubbleSort', // 冒泡排序
    component: ()=>import('../views/sort/bubbleSort.vue')
  },
  {
    path: '/selectionSort', // 选择排序
    component: ()=>import('../views/sort/selectionSort.vue')
  },
  {
    path: '/insertionSort', // 插入排序
    component: ()=>import('../views/sort/insertionSort.vue')
  },
  {
    path: '/maskImage', // 弹幕不遮挡视频人物
    component: ()=>import('../views/demo/mask-image.vue')
  },
  {
    path: '/three', // three.js
    component: ()=>import('../views/three/index.vue')
  },
  {
    path: '/three2', // three.js
    component: ()=>import('../views/three/index2.vue')
  },
  {
    path: '/three3', // three.js
    component: ()=>import('../views/three/index3.vue')
  },
  {
    path: '/three4', // three.js
    component: ()=>import('../views/three/index4.vue')
  },
  {
    path: '/three5', // three.js
    component: ()=>import('../views/three/index5.vue')
  },
  {
    path: '/three6', // three.js
    component: ()=>import('../views/three/index6.vue')
  },
  {
    path: '/three7', // three.js
    component: ()=>import('../views/three/index7.vue')
  },
  {
    path: '/three8', // three.js
    component: ()=>import('../views/three/index8.vue')
  },
  {
    path: '/data-path', // data-path
    component: ()=>import('../views/dataPath/index.vue')
  },
  {
    path: '/strict', // strict
    component: ()=>import('../views/strict/index.vue')
  },
  {
    path: '/fragments', // fragments
    component: ()=>import('../views/fragments/index.vue')
  },
  {
    path: '/onErrorCaptured', // onErrorCaptured
    component: ()=>import('../views/onErrorCaptured/index.vue')
  },
  {
    path: '/bignumber', // bignumber
    component: ()=>import('../views/math/bignumber.vue')
  },
  {
    path: '/big', // big
    component: ()=>import('../views/math/big.js.vue')
  },
  {
    path: '/decimal', // big
    component: ()=>import('../views/math/decimal.js.vue')
  },
  {
    path: '/math', // math
    component: ()=>import('../views/math/mathjs.vue')
  },
  {
    path: '/pinia', // pinia
    component: ()=>import('../views/pinia/index.vue')
  },
  {
    path: '/menu', // keepalive
    component: layout_menu,
    name: 'menu',
    children: [
      {
        path: 'keepalive',
        component: ()=>import('../views/keepalive/index.vue'),
        name: 'keepalive',
        meta: {
          keepAlive: true // 该页面需要keepAlive
        }
      }
    ],
    meta: {
      keepAlive: true // 该页面需要keepAlive
    }
  },
  {
    path: '/menu', // keepalive
    component: layout_menu,
    name: 'menu2',
    children: [
      {
        path: 'keepalivesnow',
        component: ()=>import('../views/keepalive/snow.vue'),
        name: 'keepalivesnow',
        meta: {
          keepAlive: true // 该页面需要keepAlive
        }
      }
    ],
    meta: {
      keepAlive: true // 该页面需要keepAlive
    }
  },
  // {
  //   path: '/keepalive-snow', // keepalive
  //   component: ()=>import('../views/keepalive/snow.vue'),
  //   meta: {
  //     keepAlive: true // 该页面需要keepAlive
  //   }
  // },
  {
    path: '/directives', // pinia
    component: ()=>import('../views/directives/index.vue')
  },
  {
    path: '/directives2',
    component: ()=>import('../views/directives/index2.vue')
  },
  {
    path: '/directives3',
    component: ()=>import('../views/directives/index3.vue')
  },
  {
    path: '/ref',
    component: ()=>import('../views/ref-reactive/index.vue')
  },
  {
    path: '/reg',
    component: ()=>import('../views/regexp/index.vue')
  },
  {
    path: '/tailwind',
    component: ()=>import('../views/tailwind-css/index.vue')
  },
  {
    path: '/tinymce',
    component: ()=>import('../views/tinymce/index.vue')
  },
  {
    path: '/flex',
    component: ()=>import('../views/flexbox/index.vue')
  },
  {
    path: '/translate',
    component: ()=>import('../views/translate/index.vue')
  },
  {
    path: '/translate2',
    component: ()=>import('../views/translate/index2.vue')
  },
  {
    path: '/canvas',
    component: ()=>import('../views/canvas/index.vue')
  },
  {
    path: '/canvas1',
    component: ()=>import('../views/canvas/index1.vue')
  },
  {
    path: '/canvas2',
    component: ()=>import('../views/canvas/index2.vue')
  },
  {
    path: '/canvas3',
    component: ()=>import('../views/canvas/index3.vue')
  },
  {
    path: '/canvas4',
    component: ()=>import('../views/canvas/index4.vue')
  },
  {
    path: '/canvas5',
    component: ()=>import('../views/canvas/index5.vue')
  },
  {
    path: '/canvas6',
    component: ()=>import('../views/canvas/index6.vue')
  },
  {
    path: '/canvas7',
    component: ()=>import('../views/canvas/index7.vue')
  },
  {
    path: '/canvas8',
    component: ()=>import('../views/canvas/index8.vue')
  },
  {
    path: '/canvas9',
    component: ()=>import('../views/canvas/index9.vue')
  },
  {
    path: '/video',
    component: ()=>import('../views/video/index.vue')
  },
]
// 创建路由管理器 模式和路由
const router=createRouter({
  history: createWebHistory(),
  routes
})

export default router