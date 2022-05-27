/*
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-02-28 17:53:52
 */
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard',
    // collections
    'vue-global-api/reactivity',
    'vue-global-api/lifecycle',
    'vue-global-api/component',
    // single apis
    'vue-global-api/ref',
    'vue-global-api/toRef'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
