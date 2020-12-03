const glob = require("glob")
const common = require("./webpack.common")
const { resolve } = require("path")
const { merge } = require("webpack-merge")
const { PROJECT_PATH } = require("../constants")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const PurgeCSSPlugin = require("purgecss-webpack-plugin")
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${resolve(PROJECT_PATH, "./src")}/**/*.{tsx,scss,less,css}`, { nodir: true }),
      whitelist: ["html", "body"],
    }),
    //打包分析报告
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "server", // 开一个本地服务查看报告
    //   analyzerHost: "127.0.0.1", // host 设置
    //   analyzerPort: 8888, // 端口号设置
    // }),
  ],
})
