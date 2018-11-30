const path = require('path')

module.exports = {
  dev: {
    mode: 'development',
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    useEslint: false,
    showEslintErrorsInOverlay: false,
    poll: false,
    host: 'localhost',
    port: 8888,
    assetsSubDir: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'https://qz-uat.xinyan.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' },
      },
    },
    sourceMap: false,
    devtool: 'eval-source-map', // cheap-module-eval-source-map
  },
  build: {
    mode: 'production',
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDir: 'static',
    assetsPublicPath: '',
    productionSourceMap: false,
    sourceMap: true,
    gzip: true,
    gzipExts: ['js', 'css'],
    // Run the build command with an extra arguments to View the bundle analyzer report after build finishes: `npm run
    // build --report`. Set to `true` or `false` to always turn it on or off.
    bundleAnalyzerReport: process.env.npm_config_report,
  },
};
