/*
 * @Description: <base router>
 * @Author: menggt
 * @Date: 2022-03-16 18:13:50
 * @LastEditors: menggt
 * @LastEditTime: 2022-03-16 18:16:06
 */
export default [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        // 注意这里要带上 文件后缀.vue
        component: () => import('@/views/home/home.vue'),
        meta: { title: '个人中心' }
      }
    ]
  }
]
