const proxySettings = {
  // 接口代理1
  "/api": {
    target: "http://121.4.83.203",
    changeOrigin: true,
  },
}

module.exports = proxySettings
