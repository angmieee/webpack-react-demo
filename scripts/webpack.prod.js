// webpack.prod.js
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'production', // 生产模式
});
