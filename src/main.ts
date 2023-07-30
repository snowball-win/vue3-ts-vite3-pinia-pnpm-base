import { createApp } from 'vue'
import '@/styles/index.less'
import '@/styles/reset.less'
import '@/styles/tailwind.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue'
import router from "./routers/index";
import { api } from './api/index'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist' // pinia持久化
import 'vue-global-api';
import registerDirectives from './directives' // 自定义指令

const app = createApp(App)
registerDirectives(app)
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(ElementPlus)
app.use(Antd)
app.use(router)
app.use(pinia)
app.config.globalProperties.$api = api
app.mount('#app')
