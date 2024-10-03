const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(baseConfig({ mode: 'development' }), {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../webpack/dist'), // Thay thế contentBase bằng static
    },
    hot: true, // Kích hoạt Hot Module Replacement (HMR)
    open: true, // Tự động mở trình duyệt sau khi server khởi động
    compress: true, // Bật nén gzip cho phản hồi HTTP
    port: process.env.PORT,
    historyApiFallback: true,
  },
});