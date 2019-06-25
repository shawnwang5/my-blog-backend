/* eslint valid-jsdoc: "off" */
const ErrorMap = require('./error-map.js')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {}

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1557306858298_3607'
    config.errorMap = new ErrorMap()

    // add your middleware config here
    config.middleware = []

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
        workWechat: {
            corpId: ``,
            okrId: ``,
            okrSecret: ``,
            msgToken: ``,
            encodingAESKey: ``,
            contactsSecret: ``,
        },
    }

    config.mysql = {
        client: {
            host: '',
            port: '3306',
            user: 'root',
            password: '',
            database: '',
            charset: 'utf8mb4',
        },
        app: true,
        agent: false,
    }
    config.static = {
        prefix: '/',
        maxAge: 60,
        gzip: true,
        buffer: true,
        dynamic: true,
        preload: false,
    }
    config.security = {
        csrf: false,
        domainWhiteList: [ '*' ],
    }
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    }
    config.logger = {
        dir: '/node/workspace/dsp-egg/logs',
    }

    return {
        ...config,
        ...userConfig,
    }
}
