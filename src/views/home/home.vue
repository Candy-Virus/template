<!--
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-05-14 15:06:15
-->
<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <svg-icon name="tree" color="#f00" />
</template>

<script setup lang="ts">

const $EventBus: any = inject('$EventBus')

$EventBus.on('newTask', (val: string) => {
  console.log('newTask ---->', val)
})
</script>

<style scoped lang="scss">

</style>
