/*
 * @Description: 封装sequelize数据类型
 * @Author: 王振
 * @Date: 2021-12-09 09:55:51
 * @LastEditors: 王振
 * @LastEditTime: 2021-12-09 09:55:52
 */

const Sequelize = require('sequelize');

/**
 * 此处只封装了几个常见的，若需要其他配置，可访问官方文档，自行配置
 * 官方文档--https://sequelize.org/
 */
module.exports = {
  STRING: Sequelize.STRING,
  DECIMAL: Sequelize.DECIMAL,
  TEXT: Sequelize.TEXT,
  INTEGER: Sequelize.INTEGER,
  BOOLEAN: Sequelize.BOOLEAN,
};
