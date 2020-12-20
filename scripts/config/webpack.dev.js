const { merge } = require("webpack-merge")
const webpack = require("webpack")
const common = require("./webpack.common")
const proxySetting = require("../proxy")
const { SERVER_HOST, SERVER_PORT } = require("../constants")
const notifier = require("node-notifier")
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: SERVER_PORT, // 指定端口，默认是8080
    clientLogLevel: "silent", // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: false, // 打开默认浏览器
    hot: true, // 热更新
    inline: true,
    historyApiFallback: true,
    proxy: { ...proxySetting },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${SERVER_HOST}:${SERVER_PORT}`],
      },
      // 错误信息用ForkTsCheckerWebpackPlugin，暂时注释这边
      // onErrors: (severity, errors) => {
      //   if (severity !== "error") {
      //     return
      //   }
      //   const error = errors[0]
      //   notifier.notify({
      //     title: "Webpack error",
      //     message: severity + ": " + error.name,
      //     subtitle: error.file || "",
      //     // icon: ICON --address
      //   })
      // },
      clearConsole: true,
    }),
  ],
  stats: "errors-only",
})
