import { createApp } from 'vue'
import { registerApp } from './global'
import App from './App.vue'

// 全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import 'element-plus/lib/theme-chalk/base.css'

import router from './router'
import store from './store'
const app = createApp(App)
registerApp(app)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
