import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
console.log('4env', loadEnv(process.argv[process.argv.length-1], './env').VITE_SERVER_NAME) // 打印到了VITE_SERVER_NAME
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // 开发服务器配置
  server: {
    host: '0.0.0.0', // 允许本机
    port: 3020, // 设置端口
    open: false, // 设置服务启动时自动打开浏览器
    // cors: true, // 允许跨域
    // 请求代理
    proxy: {
      '/m-staff-center': { // 匹配请求路径，localhost:3000/m-staff-center，如果只是匹配/那么就访问到网站首页了
          target: loadEnv(process.argv[process.argv.length-1], './env').VITE_SERVER_NAME, // 代理的目标地址
          changeOrigin: true, // 开发模式，默认的origin是真实的 origin:localhost:3000 代理服务会把origin修改为目标地址
          // secure: true, // 是否https接口
          // ws: true,
          // rewrite target目标地址 + '/m-staff-center'，如果接口是这样的，那么不用重写
          // rewrite: (path) => path.replace(/^\/m-staff-center/, '') // 路径重写，本项目不需要重写
          // https://www.bilibili.com/video/BV1p3411J7CE?p=21
      }
    },
    // 生产环境打包配置
    //去除 console debugger
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
