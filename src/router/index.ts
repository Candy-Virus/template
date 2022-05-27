/*
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-04-19 10:05:29
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: 'home',
    children: [
      {
        path: '/demo',
        name: 'demo',
        component: () => import('@/views/demo/demo.vue'),
        meta: { title: 'demo' }
      },
      {
        path: '/home',
        name: 'home',
        // 注意这里要带上 文件后缀.vue
        component: () => import('@/views/home/home.vue'),
        meta: { title: '个人中心' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
