const path = require('path')
const utils = require('./utils')
const tsImportPluginFactory = require('ts-import-plugin')
const config = require("../config");

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "immutable": "Immutable"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": resolve("./src"),
      common: resolve("src/common")
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.ejs$/,
      //   loader: 'ejs-html-loader',
      //   options: {
      //     production: process.env.ENV === 'production'
      //   }
      // },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader", // awesome-typescript-loader
        options: {
          // useCache: true,
          // useBabel: false, // !impotrant
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: 'css',
            })]
          })
        },
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: "source-map-loader",
        include: [resolve("src")]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  }
}
