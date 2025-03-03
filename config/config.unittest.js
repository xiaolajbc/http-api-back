/*
 * @Author: xiaolajiaobc 13456820+xiaolajiaobc@user.noreply.gitee.com
 * @Date: 2024-04-21 07:40:16
 * @LastEditors: xiaolajiaobc 13456820+xiaolajiaobc@user.noreply.gitee.com
 * @LastEditTime: 2024-11-03 17:48:31
 * @FilePath: \apiknight\ApiKnightBack-main\config\config.unittest.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable no-unused-vars */
'use strict'

/**
 * 单元测试环境
 */

module.exports = app => {
  const config = {}

  config.sequelize = {
    // 连接用户
    username: 'root',
    // 连接密码
    password: '123456',
    // 连接的数据库，可根据需要改成已有的数据库
    database: 'node_egg',
    // 连接地址
    host: '127.0.0.1:3306',
    // 数据库类型
    dialect: 'mysql'
  }

  return config
}
