'use strict'

/**
 * 默认的应用配置
 */

const { getLocalhost } = require('../app/extend/helper')

module.exports = app => {
  const config = {}

  // 配置服务器的域名
  config.domainname = 'http://127.0.0.1:7001'

  /**
   * cookie 签名 token，建议修改
   */
  const key = '123456'
  config.keys = app.name + key

  /**
   * 中间件配置
   */
  config.middleware = [ 'catchError', 'permission' ]

  /**
   * 数据库相关配置
   */
  config.sequelize = {
    define: {
      underscored: true,
      timestamps: true,
      freezeTableName: true
    },
    // 时区修正
    timezone: '+08:00',
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    }
  }
  /**
   * 自定义的应用配置，修改后全局生效
   */
  // 接口前缀名称，跟随业务系统修改
  const apiPrefixName = 'api'
  // 接口完整前缀
  const apiPrefix = `/${apiPrefixName}`
  const userConfig = {
    appName: app.name,
    apiPrefixName,
    apiPrefix,
    formatTimet: 'YYYY-MM-DD HH:mm:ss',
    tourist: 4,
    member: 3,
    manager: 2,
    creater: 1,
    // 默认的 code 码和错误提示信息配置，只需要改这一个地方即可
    resCode: {
      // 服务器异常的 code 标识和提示，一般都不需要改
      serverError: { code: 500, message: '服务器异常' },
      // 成功的 code 标识
      success: { code: 200 },
      // 出错的 code 标识和提示
      error: { code: 400, message: '参数异常' },
      // 未登录的 code 标识和提示
      notLogged: { code: 401, message: '请先登录后再操作' },
      // 没有权限
      nopermission: { code: 401, message: '令牌过期' }
    }
  }

  config.session = {
    key: `_${userConfig.appName}_${apiPrefixName}_`,
    maxAge: 24 * 3600 * 1000 * 7,
    httpOnly: true,
    encrypt: true
  }

  /**
   * 安全策略配置
   */
  config.security = {
    // 关闭 CSRF 攻击防御（伪造用户请求向网站发起恶意请求）
    // csrf: {
    //   enable: false
    // }
  }
  const port = 5173 // 前端端口，跟随实际情况修改
  const domainWhiteList = [
    ...new Set([
      `http://127.0.0.1:${port}`,
      `http://localhost:${port}`
    ])
  ]
  config.security = { domainWhiteList }
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.permission = {
    whiteUrls: [
      `${apiPrefix}/v1/user/login`,
      `${apiPrefix}/v1/user/register`,
      `${apiPrefix}/v1/user/checkExist`,
      `${apiPrefix}/v1/project/querysummary`,
      `${apiPrefix}/v1/mock/real`,
      `${apiPrefix}/v1/monitor/upload`,
      '/metrics',
      `${apiPrefix}/v1/mock/:id/:url*`,
      '/swaggerdoc'
      ]
  }


  config.validatePlus = {
     resolveError(ctx, errors) {
      if (errors.length) {
         ctx.body = {
          code: userConfig.resCode.error.code,
          message: errors[0].message
        }
      }
    }
  }

  config.swaggerdoc = {
    swagger: '2.0',
    dirScanner: './app/controller',
    basePath: apiPrefix,
    apiInfo: {
      title: '接口平台',
      description: `${userConfig.appName} 接口平台。`,
      version: '1.0.0'
    },
    schemes: [ 'http', 'https' ]
  }

  config.wechatApp = {
    appId: '',
    secret: ''
  }

   config.jwt = {
    secret: '123456'
  }

   config.mailer = {
     transport: {
      host: 'smtp.qq.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ApiKnight_EMAIL_ACCESS_KEY, // 发件人的 QQ 邮箱
        pass: process.env.ApiKnight_EMAIL_KEY// 邮箱授权码，不是登录密码
      }
    }
  }

  return {
    ...config,
    ...userConfig
  }
}
