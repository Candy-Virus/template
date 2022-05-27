<!--
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-04-19 10:01:02
-->
<template>
  <div class="app-wrapper">
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-sider width="205">
        <n-button size="tiny" type="info" @click="toDemo">demo</n-button>
      </n-layout-sider>
      <n-layout-content :has-sider="false">
        <NMessageProvider>
          <router-view></router-view>
        </NMessageProvider>
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const $router = useRouter()

const toDemo = () => {
  $router.push('demo')
}
</script>

<style lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .n-layout {
    width: 100%;
    height: 100%;

    .n-layout-scroll-container {
      position: relative;
      width: 100%;
      height: 100%;

      .n-layout-header {
        display: flex;
        position: fixed;
        width: 100%;
        height: 50px;
        max-height: 50px;
        padding: 0 10px;
        background: #0f74f0;
        z-index: 1004;
      }

      .n-layout-sider {
        position: fixed;
        top: 50px;
        left: 0;
        height: 100%;
        background-color: #304156;
        color: #bfcbd9;
        z-index: 1004;
        overflow: hidden;
      }

      .n-layout-content {
        padding: 50px 0 0 205px;
      }
    }
  }
}
</style>
