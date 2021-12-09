/*
 * @Description: 常量集合
 * @Author: 王振
 * @Date: 2021-12-09 09:52:10
 * @LastEditors: 王振
 * @LastEditTime: 2021-12-09 09:52:12
 */

/**
 * 此集合里的配置均为示例，可自行修改
 */
module.exports = {
  SECRET: 'Tara$0729_Queens', // jwt密匙
  DEFAULT_PICTURE: 'https://dwz.cn/rnTnftZs', // 默认头像
  CRYPTO_SECRET_KEY: 'Hyominn00$Tara', // md5加密密钥
  No_Verification: ['/api/user/isExist', '/api/user/register', '/api/user/login'], // 不用验证jwt的路由
};
