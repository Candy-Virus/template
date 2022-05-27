/*
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-02-28 17:54:08
 */

export default [
  {
    url: '/mock/getUser',
    method: 'GET',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        result: ['jiang', 'junfeng']
      }
    }
  }
]
