/*
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-03-02 18:25:00
 */
import { createApp } from 'vue'
import App from './App.vue'
// svg插件
import 'virtual:svg-icons-register'
// 状态管理
import { createPinia } from 'pinia'
// 引入全局样式
import '@/styles/index.scss'
// 路由
import router from '@/router/index'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
