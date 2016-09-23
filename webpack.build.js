var config = require('./webpack.config.js');
var path = require('path');

config.entry = './src/index.js';


config.output = {
  path: path.resolve(__dirname, './dist'),
  filename: 'build.min.js',
  library: 'RadialStepLoader',
  libraryTarget: 'umd'
}

module.exports = config
