/*
 * @Description: eslint 配置文件
 * @Author: 王振
 * @Date: 2021-12-09 09:40:25
 * @LastEditors: 王振
 * @LastEditTime: 2021-12-09 09:42:00
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
};
