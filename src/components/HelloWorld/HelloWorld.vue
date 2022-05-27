<!--
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-05-27 11:47:54
-->
<template>
  <h1 ref="refH1">{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code> for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <n-space>
    <n-tag> 爱在西元前 </n-tag>
    <n-tag type="success"> 不该 </n-tag>
    <n-tag type="warning"> 超人不会飞 </n-tag>
    <n-tag type="error"> 手写的从前 </n-tag>
    <n-tag type="info"> 哪里都是你 </n-tag>
  </n-space>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <div>user: {{ userStore.name }}</div>
  <n-button size="tiny" type="info" @click="updateName">改变nameLength</n-button>
  <n-button size="tiny" type="info" @click="toLayout">n-layout</n-button>
  <div>userLength: {{ userStore.nameLength }}</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/index'
import { isString } from '@/utils/common'
// import storage from '@/utils/store'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import { Ref } from 'vue'
defineProps<{
    msg: string
}>()

const router = useRouter()
const message = useMessage()
const $EventBus: any = inject('$EventBus')
const count = ref<number>(0)
const userStore = useUserStore()
const updateName = () => {
  // $patch 修改 store 中的数据
  userStore.$patch({
    name: '名称被修改了,nameLength也随之改变了'
  })
  message.error('错误错误错误')
  $EventBus.emit('newTask', '喜喜喜喜喜喜')
}
const toLayout = () => {
  console.log('toLayout ----->', router)
  router.push('layout')
}
// console.log(process.env.NODE_ENV)
console.log($EventBus)
console.log(isString(22))

// console.log(storage.set('userID', '485600'))
const refH1: Ref<HTMLElement | null> = ref(null)

onMounted(() => {
  console.log('refH1 --------->', refH1)
  console.log('refH1 --------->', refH1.value)
  console.log('refH1 --------->', refH1.value.offsetWidth)
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
