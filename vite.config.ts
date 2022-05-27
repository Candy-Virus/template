/*
 * @Description: <config>
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-02-28 17:50:29
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver, NaiveUiResolver, HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    Components({
      // 要搜索组件的目录的相对路径
      dirs: ['src/components'],
      // 组件的有效文件扩展名。
      extensions: ['vue'],
      // 搜索子目录
      deep: true,
      // 自定义组件的解析器
      resolvers: [
        AntDesignVueResolver(),
        NaiveUiResolver(),
        HeadlessUiResolver()
      ],
      // 生成 `components.d.ts` 全局声明，
      // 也接受自定义文件名的路径
      dts: 'src/components.d.ts',
      // 允许子目录作为组件的命名空间前缀。
      directoryAsNamespace: false,
      // 忽略命名空间前缀的子目录路径
      // 当`directoryAsNamespace: true` 时有效
      globalNamespaces: [],
      // 自动导入指令
      // 默认值：Vue 3 的`true`，Vue 2 的`false`
      // 需要 Babel 来为 Vue 2 进行转换，出于性能考虑，它默认处于禁用状态。
      directives: true
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: 'src/auto-import.d.ts'
    }),
    viteMockServe({
      supportTs: false
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
