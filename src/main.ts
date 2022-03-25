import { createApp } from 'vue'
import { registerApp } from './global'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
// import './service/axios_demo'
// 全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import 'element-plus/lib/theme-chalk/base.css'

import router from './router'
import store from './store'
import { setupStore } from './store'
// import zlRequest from './service'

const app = createApp(App)
registerApp(app)
app.use(router)
app.use(store)
setupStore()
// app.use(ElementPlus)
app.mount('#app')

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// zlRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
