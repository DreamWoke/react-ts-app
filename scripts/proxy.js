const proxySettings = {
  // 接口代理1
  "/api": {
    target: "http://localhost:3000",
    changeOrigin: true,
  },
}

module.exports = proxySettings
