var config = require('./webpack.config.js');
var path = require('path');

config.entry = './src/main.js';

config.output = {
  filename: './dist/build.min.js',
  library: 'RadialProgressBar',
  libraryTarget: 'umd',
  umdNamedDefine: true
}

module.exports = config
