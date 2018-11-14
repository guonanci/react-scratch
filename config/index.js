const path = require('path')

module.exports = {
  dev: {
    mode: 'development',
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    useEslint: false,
    showEslintErrorsInOverlay: false,
    poll: false,
    host: 'localhost',
    port: 7777,
    assetsSubDir: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        'target': 'https://qz-uat.xinyan.com',
        'changeOrigin': true,
        'pathRewrite': { '^/api': '/api' }
      }
    },
    context: [
      '/api',
    ]
    proxypath: '',
    cssSourceMap: false,
  }
}
