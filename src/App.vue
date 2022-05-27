<!--
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-03-02 18:25:49
-->
<template>
  <!-- naive-ui Message 特殊展示组件 -->
  <NMessageProvider>
    <router-view></router-view>
  </NMessageProvider>
</template>

<script setup lang="ts">
import EventBus from '@/plugins/eventBus'
provide('$EventBus', EventBus)
</script>

<style lang="scss">

</style>
