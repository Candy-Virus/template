/*
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-05-27 10:56:04
 */

/**
* @description:判断是否为String
* @param { ayn } source
* @return { Boolean }
*/
export const isString = (source: any): Boolean => {
  return typeof source === 'string'
}

/**
* @description: 判断是否为Number
* @param { ayn } source
* @return { Boolean }
*/
export const isNumber = (source: any): Boolean => {
  // 非负浮点数
  const regPos = /^\d+(\.\d+)?$/
  // 负浮点数
  const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/
  if (regPos.test(source) || regNeg.test(source)) {
    return true
  } else {
    return false
  }
}

/**
* @description: 判断元素是否为数组
* @param { any }  source
* @return { Boolean }
*/
export const isArray = (source: any): Boolean => {
  if (Array.isArray) return Array.isArray(source)
  else return source instanceof Array
}

/**
* @description: 判断元素是否为对象
* @param { any } source
* @return { Boolean }
*/
export const isObject = (source: any): Boolean => {
  return Object.prototype.toString.call(source) === '[object Object]'
}

/**
* @description: 日期格式化
* @param { string } fmt YYYY-mm-dd HH:MM:SS
* @param { Date } date
* @return { String }
*/
export const dateFormat = (fmt: string, date: Date): String => {
  if (date.getTime() === 0) {
    return ''
  }
  let ret
  const opt: any = {
    // 年
    'Y+': date.getFullYear().toString(),
    // 年只取最后两个
    'y+': date.getFullYear().toString().toString().substring(2),
    // 月
    'm+': (date.getMonth() + 1).toString(),
    // 日
    'd+': date.getDate().toString(),
    // 时
    'H+': date.getHours().toString(),
    // 分
    'M+': date.getMinutes().toString(),
    // 秒
    'S+': date.getSeconds().toString()
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (const k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
    };
  };
  // 如果转换失败则为空
  if (fmt.includes('NaN')) {
    fmt = ''
  }
  return fmt
}

/**
* @description: 生产唯一ID
* @param { type }
* @return { String }
*/
export const createGuid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return 'A' + v.toString(16)
  })
}
