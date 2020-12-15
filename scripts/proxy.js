const proxySettings = {
  // 接口代理1
  "/api": {
    target: "http://localhost:3000",
    // "http://116.62.141.156:3000",
    changeOrigin: true,
  },
}

module.exports = proxySettings
