<!--
 * @Description: <echarts-box>
 * @Author: menggt
 * @Date: 2022-04-18 11:31:46
 * @LastEditors: menggt
 * @LastEditTime: 2022-04-19 10:49:03
-->
<template>
  <div class="echarts-wrap" :id="'echartsbox-' + uniqueId" :key="uniqueId"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { createGuid } from '@/utils/common'

interface Props {
  options?: any
}

const uniqueId: any = createGuid()
const props = withDefaults(defineProps<Props>(), {
  options: () => { return {} }
})
const $EventBus: any = inject('$EventBus')

let myCharts: any = null

watch(() => props.options, async (n, o) => {
  // console.log('n ---->', n)
  // console.log('o ---->', o)
  await nextTick()
  init()
}, { deep: true, immediate: true })

const init = () => {
  if (!props.options || !props.options.series || !document.getElementById('echartsbox-' + uniqueId)) {
    return
  }
  if (!myCharts) {
    myCharts = echarts.init(document.getElementById('echartsbox-' + uniqueId) as HTMLElement)
    myCharts.off('click')
    $EventBus.emit('loaded', myCharts)
    myCharts.on('click', handleClick)
  }
  myCharts.clear()
  console.log('props.options ----->', props.options)

  myCharts.setOption(props.options, true)
}

const handleClick = (params: any) => {
  $EventBus.emit('handleCharts', params)
}

const handleDestroy = () => {
  myCharts && myCharts.off && myCharts.off('click', handleClick)
  myCharts && myCharts.clear && myCharts.clear()
  myCharts && myCharts.dispose && myCharts.dispose()
  myCharts = null
}

onMounted(async () => {
  // console.log('onMounted----------------------------------------------------------------------------------------')
  await nextTick()

  init()
})

onBeforeUnmount(() => {
  // console.log('onBeforeUnmount----------------------------------------------------------------------------------------')
  handleDestroy()
})
</script>

<style scoped lang="scss">
.echarts-wrap {
  width: 100%;
  height: 100%;
}
</style>
