const webpack = require('webpack')
const merge = require('webpack-merge')
const { assetsDir, baseConfig } = require('./config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const getEnv = require('env-parse').getEnv

const config = merge.smart(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true // 开启热重载
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  'browsers': [ '> 1%', 'last 3 versions', 'ie >= 9' ]
                }),
                require('cssnano')
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  'browsers': [ '> 1%', 'last 3 versions', 'ie >= 9' ]
                }),
                require('cssnano')
              ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: assetsDir,
    publicPath: baseConfig.output.publicPath,
    port: getEnv('DEV_PORT', 9090),
    host: getEnv('DEV_HOST', 'localhost'),
    noInfo: false,
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: {
      // '/api': {
      //   target: getEnv('API_BASE', 'http://local.dev:8080/backend'),
      //   changeOrigin: true // 代理为域名时必须指定为true
      // }
    },
    progress: false,
    quiet: false,
    stats: {
      colors: true
    },
    clientLogLevel: 'none'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    },
    providedExports: true,
    usedExports: true,
    concatenateModules: true,
    sideEffects: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    })
  ]
})

module.exports = config
