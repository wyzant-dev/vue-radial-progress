const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vue-radial-progress.min.js',
    library: 'RadialProgressBar',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devtool: '#eval-source-map',
  mode: 'development'
}
module.exports.devtool = 'true'

const TerserPlugin = require('terser-webpack-plugin')

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false
  module.exports.optimization = { minimize: true }
  module.exports.optimization.minimizer = (module.exports.optimization.minimizer || []).concat([
    new TerserPlugin({
      cache: true,
      extractComments: /@extract/i,
      parallel: true,
      terserOptions: {
        compress: {},
        ecma: 6,
        mangle: true
      },
      sourceMap: true
    })
  ])
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ])
}
