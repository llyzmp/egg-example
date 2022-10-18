/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'lly123456',
        database: 'test',
      },
      // 是否加载到app上，默认开启
      app: true,
      // 是否加载到agent上， 默认关闭
      agent: false,
    },
    // csrf
    security: {
      csrf: {
        enable: false,
        ignoreJSON: true,
      },
      // 配置白名单
      domainWhiteList: [ '*' ],
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1665218509131_9837';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
