<template>
  <canvas
    ref="box"
    style="width:100%;height:100%;"
    :id="'canvas-' + uniqueId"
  ></canvas>
</template>

<script>
import { createGuid } from '@/utils/common'
export default {
  props: {
    // 唯一id
    uniqueId: {
      type: [String, Number],
      default () {
        return createGuid()
      }
    },
    // 数量
    count: {
      type: Number,
      default: 1600
    },
    // rgba()
    colors: {
      type: String,
      default: 'rgba(33, 72, 135, 1)'
    }
  },
  data () {
    return {
      timer: null
    }
  },
  methods: {
    random (min, max) {
      if (arguments.length < 2) {
        max = min
        min = 0
      }

      if (min > max) {
        const hold = max
        max = min
        min = hold
      }

      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    init1 () {
      const _this = this
      const wrapWidth = this.$refs.box.offsetWidth
      const wrapHeight = this.$refs.box.offsetHeight
      const canvas = document.getElementById('canvas-' + this.uniqueId)
      canvas.width = wrapWidth
      canvas.height = wrapHeight
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, wrapWidth, wrapHeight)
      // 点
      const points = []
      // width-父级宽度 height-父级高度 size-点大小 colors-点颜色
      const Point = function (opt) {
        const options = Object.assign({
          width: 100,
          height: 100,
          size: 10,
          colors: '#fff',
          speed: 1
        }, opt)
        this.halfX = options.width / 2
        this.halfY = options.height / 2
        this.radiusX = _this.random(0, this.halfX)
        // this.radiusY = _this.random(0, this.halfY)
        const randomPi = Math.random() * 2 * Math.PI
        const x = this.halfX + Math.floor(Math.cos(randomPi) * this.radiusX)
        const y = (this.halfX - Math.floor(Math.sin(randomPi) * this.radiusX)) * (this.halfY / this.halfX)
        this.x = Math.floor(x)
        this.y = Math.floor(y)
        // this.w = Math.floor(_this.random(0, options.size))
        // this.h = this.w
        this.size = _this.random(0, options.size)
        this.color = Array.isArray(options.colors) ? options.colors[_this.random(0, options.colors.length - 1)] : options.colors
        this.speed = Math.random() * (options.speed * this.radiusX) / 100000
        this.change = randomPi
        this.alpha = _this.random(2, 10) / 10
        return this
      }
      Point.prototype.draw = function () {
        this.change += this.speed
        const x = this.halfX + Math.floor(Math.cos(this.change) * this.radiusX)
        const y = (this.halfX - Math.floor(Math.sin(this.change) * this.radiusX)) * (this.halfY / this.halfX)

        const twinkle = _this.random(10)
        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05
        }

        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        // ctx.shadowBlur = this.size
        // ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(x, y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
      for (let i = 0; i < _this.count; i++) {
        points[i] = new Point({
          width: wrapWidth,
          height: wrapHeight,
          size: 3,
          colors: _this.colors
        })
      }

      function render () {
        ctx.globalCompositeOperation = 'source-over'
        ctx.globalAlpha = 0.8
        ctx.clearRect(0, 0, wrapWidth, wrapHeight)

        ctx.globalCompositeOperation = 'lighter'
        for (let i = 0; i < _this.count; i++) {
          points[i].draw()
        }
        window.requestAnimationFrame(render)
      }
      // setInterval(() => {
      //   render()
      // }, 1000)
      render()
    },
    init () {
      const _this = this
      const canvas = document.getElementById('canvas-' + this.uniqueId)
      const ctx = canvas.getContext('2d')
      const wrapWidth = canvas.width = this.$refs.box.offsetWidth
      const wrapHeight = canvas.height = this.$refs.box.offsetHeight
      const points = []
      const canvas2 = document.createElement('canvas')
      const ctx2 = canvas2.getContext('2d')
      canvas2.width = 100
      canvas2.height = 100
      const half = canvas2.width / 2
      const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
      gradient2.addColorStop(0.025, '#fff')
      gradient2.addColorStop(0.1, _this.colors)
      // gradient2.addColorStop(0.2, 'transparent')
      gradient2.addColorStop(0.25, 'transparent')
      gradient2.addColorStop(1, 'transparent')

      ctx2.fillStyle = gradient2
      ctx2.beginPath()
      ctx2.arc(half, half, half, 0, Math.PI * 2)
      ctx2.fill()

      const Star = function () {
        this.orbitRadius = _this.random(wrapWidth / 2 - 50)
        this.radius = _this.random(100, this.orbitRadius) / 10
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
    },
    handleDestroy () {
      window.cancelAnimationFrame(this.timer)
      this.timer = null
    }
  },
  mounted () {
    this.init()
  },
  beforeUnmount () {
    this.handleDestroy()
  }
}
</script>
