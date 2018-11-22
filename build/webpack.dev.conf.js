const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // module: {
  //   rules: utils.styleLoaders({
  //     sourceMap: config.dev.cssSourceMap,
  //     usePostCSS: true,
  //   }),
  // },
  // // cheap-module-eval-source-map is faster for development
  // devtool: config.dev.devtool,

  // // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: process.env.HOST || config.dev.host,
    port: process.env.PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? {
          warnings: false,
          errors: true,
        }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': require('../config/dev.env'),
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
  ],
  optimization: {
    occurrenceOrder: true,
    noEmitOnErrors: true,
  },
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  // console.log('promised in', portfinder.basePort)
  portfinder.getPort((err, port) => {
    if (err) {
      // console.log('promised in err', err)
      reject(err)
    } else {
      // console.log('portfinder port', port)
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here http://${config.dev.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
      }))
      // console.log('portfinder webpackConfig', devWebpackConfig);

      resolve(devWebpackConfig)
    }
  })
})