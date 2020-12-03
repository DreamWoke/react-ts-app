const { merge } = require("webpack-merge")
const webpack = require("webpack")
const common = require("./webpack.common")
const { SERVER_PORT } = require("../constants")
const proxySetting = require("../proxy")

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: SERVER_PORT, // 指定端口，默认是8080
    clientLogLevel: "silent", // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    proxy: { ...proxySetting },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
