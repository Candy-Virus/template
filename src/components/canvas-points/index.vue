<!--
 * @Description: <星空canvas背景>
 * @Author: menggt
 * @Date: 2022-05-27 10:44:55
 * @LastEditors: menggt
 * @LastEditTime: 2022-05-27 14:23:47
-->
<template>
  <canvas
    ref="canvasPointsBox"
    style="width:100%; height:100%;"
    :id="`canvas-${props.uniqueId}`"
  ></canvas>
</template>

<script setup lang="ts">
import { createGuid } from '@/utils/common'
import { Ref } from 'vue'

type Props = {
  uniqueId?: string | number
  count?: number,
  colors?: string
}

const props = withDefaults(defineProps<Props>(), {
  uniqueId: createGuid(),
  count: 1600,
  colors: 'rgba(33, 72, 135, 1)'
})

const timer: unknown
const canvasPointsBox: Ref<HTMLElement | null> = ref(null)

const random = (min: number, max: number): number => {
  if (min > max) {
    const hold = max
    max = min
    min = hold
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}

const init = () => {
  // const _this = this
  const canvas: HTMLCanvasElement = document.getElementById('canvas-' + props.uniqueId) as HTMLCanvasElement
  const ctx = canvas.getContext('2d')
  const wrapWidth = canvas.width = canvasPointsBox?.value?.offsetWidth ?? 0
  const wrapHeight = canvas.height = canvasPointsBox?.value?.offsetHeight ?? 0
  const points: [] = []
  const canvas2 = document.createElement('canvas')
  const ctx2 = canvas2.getContext('2d')
  canvas2.width = 100
  canvas2.height = 100
  const half = canvas2.width / 2
  const gradient2 = ctx2?.createRadialGradient(half, half, 0, half, half, half)
  gradient2?.addColorStop(0.025, '#fff')
  gradient2?.addColorStop(0.1, props.colors)
  gradient2?.addColorStop(0.25, 'transparent')
  gradient2?.addColorStop(1, 'transparent')

  ctx2!.fillStyle = gradient2 ?? ''
  ctx2?.beginPath()
  ctx2?.arc(half, half, half, 0, Math.PI * 2)
  ctx2?.fill()

  const Star = function () {
    this.orbitRadius = random(wrapWidth / 2 - 50, 0)
    this.radius = random(100, this.orbitRadius) / 10
    this.orbitX = wrapWidth / 2
    this.orbitY = wrapHeight / 2
    this.timePassed = _this.random(0, _this.count)
    this.speed = _this.random(this.orbitRadius) / 500000
    this.alpha = _this.random(2, 10) / 10
    return this
  }

  Star.prototype.draw = function () {
    const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
    const y = Math.cos(this.timePassed) * this.orbitRadius * (wrapHeight / wrapWidth) + this.orbitY
    const twinkle = _this.random(10)

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05
    }
    // 修改透明度
    ctx.globalAlpha = this.alpha
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
    this.timePassed += this.speed
  }

  for (let i = 0; i < _this.count; i++) {
    points[i] = new Star()
  }

  function render () {
    ctx.clearRect(0, 0, wrapWidth, wrapHeight)
    for (let i = 1, l = points.length; i < l; i++) {
      points[i].draw()
    }
    _this.timer = window.requestAnimationFrame(render)
  }
  render()
}
</script>

<style scoped>

</style>
