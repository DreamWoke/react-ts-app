const proxySettings = {
  // 接口代理1
  "/api": {
    target: "http://localhost",
    changeOrigin: true,
  },
}

module.exports = proxySettings
