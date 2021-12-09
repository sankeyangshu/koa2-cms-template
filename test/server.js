/*
 * @Description: 测试服务 jest server
 * @Author: 王振
 * @Date: 2021-12-09 10:15:21
 * @LastEditors: 王振
 * @LastEditTime: 2021-12-09 10:15:22
 */

const request = require('supertest');
const server = require('../src/app').callback();

module.exports = request(server);
