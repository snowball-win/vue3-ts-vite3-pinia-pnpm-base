import { createApp } from 'vue'
import '@/styles/index.less'
import '@/styles/reset.less'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./routers/index";
import { api } from './api/index'
import 'vue-global-api';

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.config.globalProperties.$api = api
app.mount('#app')
