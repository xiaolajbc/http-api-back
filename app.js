/*
 * @Author: xiaolajiaobc 13456820+xiaolajiaobc@user.noreply.gitee.com
 * @Date: 2024-04-21 07:40:16
 * @LastEditors: xiaolajiaobc 13456820+xiaolajiaobc@user.noreply.gitee.com
 * @LastEditTime: 2024-11-09 11:19:59
 * @FilePath: \apiknight\ApiKnightBack-main\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict'
const promClient = require('prom-client')
module.exports = app => {
  app.beforeStart(async () => {
    // 收集默认的指标数据
    promClient.collectDefaultMetrics()
    if (app.config.env === 'local' || app.config.env === 'unittest') {
      // force 设置为 true 会重置数据库造成已有数据丢失，请谨慎修改
      await app.model.sync({ focus: true })
    }
  })
}
