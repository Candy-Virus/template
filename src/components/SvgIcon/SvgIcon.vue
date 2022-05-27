<!--
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-02-28 17:27:13
-->
<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">

interface Props {
  prefix?: string
  name?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  name: '',
  color: '#000'
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
