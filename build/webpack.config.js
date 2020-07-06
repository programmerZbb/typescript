const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

let config = process.env.NODE_ENV === 'development' ? devConfig : proConfig
console.log(process.env.NODE_ENV, '-----我是环境变量')

module.exports = merge(baseConfig, config)