/*
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-02-28 17:54:42
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'candy',
    age: '23'
  }),
  getters: {
    nameLength: (state) => state.name.length
  },
  actions: {}
})
