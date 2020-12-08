const proxySettings = {
  // 接口代理1
  "/api": {
    target: "https://zhuanlan.zhihu.com",
    changeOrigin: true,
  },
}

module.exports = proxySettings
