/*
 * @Author: xiaolajiaobc 13456820+xiaolajiaobc@user.noreply.gitee.com
 * @Date: 2024-04-21 07:40:16
 * @LastEditors: xiaolajiaobc 13456820+xiaolajiaobc@user.noreply.gitee.com
 * @LastEditTime: 2024-11-17 17:04:56
 * @FilePath: \ApiKnightBack-main\config\plugin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict'

/**
 * 插件配置
 */

module.exports = {
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus'
  },
  validatePlus: {
    enable: true,
    package: 'egg-validate-plus'
  },
  // 跨域配置
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  // https://github.com/Yanshijie-EL/egg-swagger-doc
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc'
  }
}
