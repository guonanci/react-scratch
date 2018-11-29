
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

  const styleLoader = 'style-loader'
  const cssLoader = {
    loader: 'css-loader', // typings-for-css-modules-loader, css-loader
    options: {
      // modules: true,
      // namedExport: true,
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
    const loaders = options.usePostCSS ? [styleLoader, cssLoader, postcssLoader] : [styleLoader, cssLoader]
    if (loader && loader !== 'scss') {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap,
        })
      })
    }
    if (loader === 'scss') {
      // loaders.push({
      //   loader: 'typings-for-css-modules-loader',
      //   options: Object.assign({}, loaderOptions, {
      //     modules: true,
      //     namedExport: true,
      //   })
      // })
      loaders.push({
        loader: 'sass-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
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
    } else {
      return loaders
    }
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less', { javascriptEnabled: true }),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('scss'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  for (let extension in loaders) {
    const loader = loaders[extension]
    // console.log(extension, loaders, loader)
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