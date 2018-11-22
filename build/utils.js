
const path = require('path')
const config = require('../config')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const pkg = require('../package.json')

exports.assetsPath = function (pathArg) {
  const assetsSubDir = process.env.NODE_ENV === 'production' ? config.build.assetsSubDir : config.dev.assetsSubDir
  return path.posix.join(assetsSubDir, pathArg)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
    if (loader && loader !== 'scss') {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap,
        })
      })
    }
    if (loader === 'scss') {
      loaders.push({
        loader: 'sass' + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
      loaders.push({
        loader: 'sass-resources' + '-loader',
        options: Object.assign({}, {
          resources: [path.resolve(__dirname, '../src/styles/mixin.scss'), path.resolve(__dirname,
            '../src/styles/common.scss')]
        }, {
          sourceMap: options.sourceMap,
        })
      })
    }

    if (options.extract) {
      return [
        {
          loader: MiniCSSExtractPlugin.loader,
          options: {}
        }
      ]
    }
  }
}

// Generate loaders for standalone style files
exports.styleLoaders = function (options) {
  const output = {}
  const loaders = exports.cssLoaders(options)
  for (let extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader,
    })
  }
  return output
}

exports.createNotifierCallback = function () {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') {
      return
    }
    const error = errors[0]

    const filename = error.file && error.file.split('!').pop()
    notifier.notify({
      title: pkg.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
    })
  }
}